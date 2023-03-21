/**
 * The options used to configure apisauce.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}

export interface Product {
  _id: string
  merchantId: string
  productName: string
  price: number
  categoryId: string
  productDescription: string
  productQuantity: number
  productImage: [
    {
      fieldname: string
      originalname: string
      encoding: string
      mimetype: string
      destination: string
      filename: string
      path: string
      size: number
    },
  ]
  status: number
  is_deleted: string
  createdAt: Date
  updatedAt: Date
  __v: number
}

export interface GetProductsResponse {
  code: number
  status: number
  message: string
  data: Array<Product>
}

export interface Merchant {
  _id: string
  merchantName: string
  email: string
  mobileNo: number
  city: string
  state: string
  address: string
  role: string
  status: number
}

export interface GetMerchantsResponse {
  code: number
  status: number
  message: string
  data: Array<Merchant>
}

export interface RegisteredMerchant {
  merchant: {
    city: string
    state: string
    address: string
    //
    _id: string
    fullName: string
    merchantName: string
    email: string
    password: string
    mobileNo: number
    otp: null | number
    role: string
    status: number
    is_deleted: number
    createdAt: string
    updatedAt: string
    __v: number
  }
  token: string
}

export interface RegisterMerchantsResponse {
  code: number
  status: number
  message: string
  data: RegisteredMerchant
}
