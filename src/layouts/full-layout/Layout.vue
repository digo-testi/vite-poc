<script lang="ts">
import {
  Customizer,
  Header,
  Sidebar,
  Footer,
} from "@matrixbrasil/matrix-lib-utils-frontend/src/components";
import SideBarItems from "../../utils/SidebarItems";
import { Component } from "vue-property-decorator";
import { mapGetters } from "vuex";
import Request from "../../services/request";

@Component({
  components: {
    Header,
     Sidebar,
    Footer,
    Customizer,
  },
  methods: {
    ...mapGetters({
      getUser: "auth/getUser",
    }),
  },
})
export default class Layout extends Request {
  pathSaveAccount: string = "";
  pathChangePassword: string = "";
  SideBarItems = SideBarItems;
  expandOnHover = false;
  logoutPah = "/auth/login";
  logo = import("../../assets/logoImg.png");
  logoIcon = import("../../assets/iconImg.png");
  getUser: any;
  entity: any = [];
  mounted() {
    this.pathSaveAccount = this.paths.userPath;
    this.pathChangePassword = this.paths.pathChangePassword;
  }
  created() {
    const user = this.getUser();

    this.entity = user;
  }
}
</script>
<template>
  <v-app id="inspire">
     <Header
      v-model="expandOnHover"
      :sideBarVertical="true"
      widthLogoIcon="30px"
      widthLogo="200px"
      :logoIcon="logoIcon"
      :pathLogout="logoutPah"
      :logo="logo"
      :entity="entity"
      :pathSaveAccount="pathSaveAccount"
      :pathChangePassword="pathChangePassword"
    ></Header> 

    <v-main>
      <router-view />
    </v-main>
    <Sidebar :expand-on-hover="expandOnHover" :items="SideBarItems" /> 
    <Customizer v-model="expandOnHover" />

    <Footer></Footer>
  </v-app>
</template>
