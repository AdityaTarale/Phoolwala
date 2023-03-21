export const ROUTES = {
  Demo: "Demo",
  Welcome: "Welcome",

  // Auth
  Auth: "Auth",
  Login: "Login",
  Register: "Register",
  DemoShowroom: "DemoShowroom",
  DemoCommunity: "DemoCommunity",
  DemoPodcastList: "DemoPodcastList",
  DemoDebug: "DemoDebug",

  // User
  User: {
    UserApp: "UserApp",
    UserHomeStack: "UserHomeStack",
    UserHome: "UserHome",
  },

  // Merchant
  Merchant: {},

  // Delivery Boy
  DeliveryBoy: {},

  // Admin
  Admin: {
    AdminApp: "AdminApp",
    AdminHome: "AdminHome",
    AdminProduct: "AdminProduct",
    AdminOutlet: "AdminOutlet",
    AdminEmployee: "AdminEmployee",
    AdminOrder: "AdminOrder",
  },
}

export enum ROLES {
  User = "user",
  Merchant = "merchant",
  DeliveryBoy = "deliveryBoy",
  Admin = "admin",
}
