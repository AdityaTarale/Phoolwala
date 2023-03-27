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
    AdminHomeStack: "AdminHomeStack",
    AdminHome: "AdminHome",
    AdminMerchantDetails: "AdminMerchantDetails",
    AdminMerchant: "AdminMerchant",
    AdminAddMerchant: "AdminAddMerchant",
    AdminAddMerchantDetails: "AdminAddMerchantDetails",
    AdminEmployee: "AdminEmployee",
    AdminOrder: "AdminOrder",

    AdminFAQ: "AdminFAQ",
    AdminDelivery: "AdminDelivery",
  },
}

export enum ROLES {
  User = "user",
  Merchant = "merchant",
  DeliveryBoy = "deliveryBoy",
  Admin = "admin",
}
