export const API_URL = {
  // Auth
  login: () => "/users/login",
  register: () => "/users/register",

  // User
  getDashboardData: () => "/dashboard/getalldashboardforuser",

  // Admin
  getProducts: () => "/products/getProduct",
  getMerchants: () => "/merchants/getMerchant",
  getMerchantById: () => "/merchants/getMerchantById",
  getProductByMerchantId: () => "/products/getProductByMerchant",
  registerMerchant: () => "/merchants/merchantRegister",
  getUsers: () => "/users/getUser",
  getCategories: () => "/categorys/getCategory",
  addProduct: () => "/products/addProduct",
  // Merchant

  // Delivery boy
}
