import type { BaseGroup } from "@matrixbrasil/matrix-lib-utils-frontend/src/components/commonComponents/IBaseItem";
import { translate } from "../plugins/i18n";
const sidebarItems: BaseGroup = [
  { header: `${translate("title.dashboard")}`, type: "H" },
  // {
  //   type: "I",
  //   icon: "mdi-webpack",
  //   title: `${translate("title.systems")}`,
  //   to: "/system",
  //   permissions: ["SYS", "VI"],
  // },
  {
    type: "I",
    icon: "mdi-view-dashboard",
    title: `${translate("title.dashboard")}`,
    to: "/dashboard",
    permissions: ["DAS", "VI"],
  },
  { header: `${translate("title.manager")}`, type: "H" },
  {
    type: "I",
    icon: "mdi-office-building",
    title: `${translate("title.company")}`,
    to: "/company",
    permissions: ["EMP", "VI"],
  },

  {
    type: "I",
    icon: "mdi-cart-outline",
    title: `${translate("product")}`,
    to: "/product",
    permissions: ["PRO", "VI"],
  },
  {
    type: "I",
    icon: "mdi-wrench",
    title: `${translate("maintenance")}`,
    to: "/maintenance",
    permissions: ["MNT", "VI"],
  },
  {
    type: "I",
    icon: "mdi-hammer-screwdriver",
    title: `${translate("massiveList")}`,
    to: "/massive",
    permissions: ["MNT", "VI"],
  },

  {
    type: "I",
    icon: "mdi-text-box-multiple",//alter
    title: `${translate("audit")}`,
    to: "/audit",
    permissions: ["AUD", "VI"],
  }

  
  // { header: `${translate("title.notification")}`, type: "H" },
  // {
  //   type: "I",
  //   icon: "mdi-artstation",
  //   title: `${translate("broker")}`,
  //   to: "/broker",
  //   permissions:["BRO","VI"]
  // },
  // {
  //   type: "I",
  //   icon: "mdi-at",
  //   title: `${translate("templateList")}`,
  //   to: "/template-list",
  //   permissions: ["TEM", "VI"],
  // },
  // {
  //   type: "I",
  //   icon: "mdi-at",
  //   title: `${translate("templateTypeList")}`,
  //   to: "/template-type-list",

  //   permissions: ["TPT", "VI"],
  // },

  // {
  //   type: "I",
  //   icon: "mdi-variable",
  //   title: `${translate("variableList")}`,
  //   to: "/variable",
  //   permissions: ["VAR", "VI"],
  // },
];

export default sidebarItems;
