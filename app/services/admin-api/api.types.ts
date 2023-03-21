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
