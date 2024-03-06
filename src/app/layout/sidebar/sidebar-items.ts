import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  {
    path: "./admin/dashboard/actors",
    title: "Dashboard",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "airplay",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN", "STAFF"],
    submenu: [],
  },
  {
    path: "./agrodealer/agro-dealers",
    title: "Agrodealers",
    moduleName: "",
    iconType: "feather",
    icon: "briefcase",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },
  {
    path: "./branchofficer/dashboard/actors",
    title: "Branchofficer",
    moduleName: "branchofficer",
    iconType: "feather",
    icon: "truck",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN",],
    submenu: [ ],
  },
 
  {
    path: "./customers/view",
    title: "Customers",
    moduleName: "customers",
    iconType: "feather",
    icon: "shopping-bag",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },

  {
    path: "./digitaltraining/webpage",
    title: "Digitaltraining",
    moduleName: "digitaltraining",
    iconType: "feather",
    icon: "truck",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },
    
  {
    path: "./driver/drivers",
    title: "Drivers",
    moduleName: "driver",
    iconType: "feather",
    icon: "truck",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  }, 
  {
    path: "./farmers/view",
    title: "Farmers",
    moduleName: "farmers",
    iconType: "feather",
    icon: "user",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },

  {
    path: "./manufacturer",
    title: "Manufacturers",
    moduleName: "",
    iconType: "feather",
    icon: "filter",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },
  {
    path: "./processors",
    title: "Processors",
    moduleName: "",
    iconType: "feather",
    icon: "cpu",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },
  {
    path: "./serviceprovider",
    title: "Service providers",
    moduleName: "",
    iconType: "feather",
    icon: "server",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },
  {
    path: "./staff",
    title: "Staff",
    moduleName: "",
    iconType: "faether",
    icon: "users",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },
  {
    path: "./warehouses",
    title: "Warehouses",
    moduleName: "",
    iconType: "feather",
    icon: "archive",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },
  
  {
    path: "",
    title: "Market",
    moduleName: "market",
    iconType: "feather",
    icon: "shopping-cart",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [
      {
        path: "/market/market-place",
        title: "Market place",
        moduleName: "market",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/market/product-categories",
        title: "Product categories",
        moduleName: "market",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/market/product-types",
        title: "Product types",
        moduleName: "market",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      }
    ],
  },
  {
    path: "",
    title: "Transactions",
    moduleName: "transactions",
    iconType: "feather",
    icon: "repeat",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [
      {
        path: "/transactions/grower-ecosystem",
        title: "Grower Ecosystem",
        moduleName: "transactions",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/transactions/market-ecosystem",
        title: "Market Ecosystem",
        moduleName: "transactions",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/transactions/manage-transactions",
        title: "Manage Transactions",
        moduleName: "transactions",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      }
    ],
  },
  {
    path: "./valuechains",
    title: "Value chains",
    moduleName: "",
    iconType: "",
    icon: "link",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },
]