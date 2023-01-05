import { Vue, Component } from "vue-property-decorator";
import axios, { type AxiosInstance } from "axios";
import { paths } from "./apiPaths";
import env from "./env";

import { translate } from "../plugins/i18n/index";
const apiClient: AxiosInstance = axios.create({
  baseURL: `${env.protocol}${env.serviceDiscovery}`,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": `${env.protocol}${env.serviceDiscovery}`,
    "X-Forwarded-For": `${env.protocol}${env.serviceDiscovery}`,
  },
});

// apiClient.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token');

//   return config;
// });

export const setTokenHeader = (token: string) => {
  apiClient.defaults.headers.common["token"] = token;
};

@Component
export default class Request extends Vue {
  $message:any;
  $loading:any;
  paths = paths;

  private async baseRequest(
    method: "get" | "post" | "put" | "delete",
    url: string,
    entity?: any,
    params?: any
  ): Promise<any> {
    try {
      this.$loading?.startLoading();
      const httpResult = await apiClient({ method, url, data: entity, params });
      this.$loading?.endLoading();

      if (httpResult.status >= 200 && httpResult.status <= 299) {
        return httpResult.data;
      } else {
        this.$message?.errorMessage(httpResult.data);
        throw new Error(httpResult.data);
      }
    } catch (error: any) {
      this.$loading?.endLoading();

      if (error?.response?.data.error === "Unauthorized") {
        this.$message?.errorMessage(`${translate("message.unauthorized")}`);
      } else if (error?.response?.data?.errors) {
        this.$message?.errorMessage(error.response.data.errors);
      } else {
        this.$message?.errorMessage(error.response.data.error);
      }
      throw error;
    }
  }

  get(url: string, params?: any): Promise<any> {
    return this.baseRequest("get", url, null, params);
  }

  put(url: string, entity: any): Promise<any> {
    const result = this.baseRequest("put", url, entity);
    if (entity.isDeleted === true) {
      this.$message?.errorMessage(
        `${translate("message.successfullyDeleted")}`
      );
    }
    return result;
  }

  post(url: string, entity: any): Promise<any> {
    return this.baseRequest("post", url, entity);
  }
  delete(url: string, entity: any): Promise<any> {
    return this.baseRequest("delete", url, entity);
  }

  async remove(url: string, entity: any): Promise<any> {
    const result = this.baseRequest("delete", url, entity.id);
    this.$message?.successMessage(
      `${translate("message.successfullyChanged")}`
    );
    return result;
  }

  async save(url: string, entity: any): Promise<any> {
    if (entity.id) {
      const result = await this.put(url + entity.id, entity);

      this.$message?.successMessage(
        `${translate("message.successfullyChanged")}`
      );
      return result;
    } else {
      const result = await this.post(url, entity);

      if (result.message) {
        this.$message?.errorMessage(`${translate(`error.${result.message}`)}`);
        return;
      } else {
        this.$message?.successMessage(
          `${translate("message.savedSuccessfully")}`
        );
      }
      return result;
    }
  }
}
