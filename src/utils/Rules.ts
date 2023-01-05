import {i18n} from "../plugins/i18n/index"

export default {
  obrigatorio: (v: any) => !!v || i18n.t("message.requiredField"),
  obrigatorioArray: (v: any) =>
    (!!v && v.length > 0) || i18n.t("message.requiredField"),
  email: (v: any) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(v) || ("message.invalidMail");
  },
  fieldsRequired: (v: any) => !!v || i18n.t("message.requiredField"),
  isPhoneNumberValid: (v: any) =>(v && v.length >= 14) || i18n.t("message.invalidPhoneNumber"),
  isErpTypeValid: (v: any) =>(v && v.length == 4) || i18n.t("message.invalidErpType"),
  isErpVersionValid: (v: any) =>(v && v.length == 2) || i18n.t("message.invalidErpVersion"),
  maxLengthFive: (v: any) =>
    (v && v.length == 5) || i18n.t("mensage.numberCharacters5"),
  maxLengthTwelve: (v: any) =>
    (v && v.length == 12) || i18n.t("mensage.numberCharacters12"),
  CNPJ(val: any) {

    if (val && val.length == 14) {
      let cpf = val.trim();

      cpf = cpf.replace(/\./g, "");
      cpf = cpf.replace("-", "");
      cpf = cpf.split("");

      let v1 = 0;
      let v2 = 0;
      let aux = false;

      for (let i = 1; cpf.length > i; i++) {
        if (cpf[i - 1] != cpf[i]) {
          aux = true;
        }
      }

      if (aux == false) {
        return false || i18n.t("message.invalidcpfcnpj");
      }

      for (let i = 0, p = 10; cpf.length - 2 > i; i++, p--) {
        v1 += cpf[i] * p;
      }

      v1 = (v1 * 10) % 11;

      if (v1 == 10) {
        v1 = 0;
      }

      if (v1 != cpf[9]) {
        return false || i18n.t("message.invalidcpfcnpj");
      }

      for (let i = 0, p = 11; cpf.length - 1 > i; i++, p--) {
        v2 += cpf[i] * p;
      }

      v2 = (v2 * 10) % 11;

      if (v2 == 10) {
        v2 = 0;
      }

      if (v2 != cpf[10]) {
        return false || i18n.t("message.invalidcpfcnpj");
      } else {
        return true;
      }
    } else if (val && val.length != 18) {
    
      let cnpj = val.trim();

      cnpj = cnpj.replace(/\./g, "");
      cnpj = cnpj.replace("-", "");
      cnpj = cnpj.replace("/", "");
      cnpj = cnpj.split("");

      let v1 = 0;
      let v2 = 0;
      let aux = false;
   
      for (let i = 1; cnpj.length > i; i++) {
        if (cnpj[i - 1] != cnpj[i]) {
          aux = true;
        }
      }

      if (aux == false) {
        return false || i18n.t("message.invalidcpfcnpj");
      }

      for (let i = 0, p1 = 5, p2 = 13; cnpj.length - 2 > i; i++, p1--, p2--) {
        if (p1 >= 2) {
          v1 += cnpj[i] * p1;
        } else {
          v1 += cnpj[i] * p2;
        }
      }

      v1 = v1 % 11;

      if (v1 < 2) {
        v1 = 0;
      } else {
        v1 = 11 - v1;
      }

      if (v1 != cnpj[12]) {
        return false || i18n.t("message.invalidcpfcnpj");
      }

      for (let i = 0, p1 = 6, p2 = 14; cnpj.length - 1 > i; i++, p1--, p2--) {
        if (p1 >= 2) {
          v2 += cnpj[i] * p1;
        } else {
          v2 += cnpj[i] * p2;
        }
        
      }

      v2 = v2 % 11;

      if (v2 < 2) {
        v2 = 0;
      } else {
        v2 = 11 - v2;
      }

      if (v2 != cnpj[13]) {
        return false || i18n.t("message.invalidcpfcnpj");
      } else {
        return true;
      }
    } else {
      return false || i18n.t("message.invalidcpfcnpj");
    }
  },
};