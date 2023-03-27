/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://github.com/infinitered/ignite/blob/master/docs/Backend-API-Integration.md)
 * documentation for more details.
 */
import {
  ApiResponse, // @demo remove-current-line
  ApisauceInstance,
  create,
} from "apisauce"
import Config from "../../config"
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem" // @demo remove-current-line
import type {
  ApiConfig,
  Category,
  GetCategoriesResponse,
  GetMerchantsResponse,
  GetProductsResponse,
  GetUsersResponse,
  Merchant,
  Product,
  RegisteredMerchant,
  RegisterMerchantsResponse,
  User, // @demo remove-current-line
} from "./api.types"
import { API_URL } from "../../utils/apiConfig"

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class AdminApi {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  async getProducts(): Promise<{ kind: "ok"; products: Array<Product> } | GeneralApiProblem> {
    // make the api call
    const response: ApiResponse<GetProductsResponse> = await this.apisauce.get(
      API_URL.getProducts(),
    )

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data.data
      return { kind: "ok", products: rawData }
    } catch (e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }

  async getUsers(): Promise<{ kind: "ok"; users: Array<User> } | GeneralApiProblem> {
    // make the api call
    const response: ApiResponse<GetUsersResponse> = await this.apisauce.post(API_URL.getUsers())

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data.user
      return { kind: "ok", users: rawData }
    } catch (e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }

  async getCategories(): Promise<{ kind: "ok"; categories: Array<Category> } | GeneralApiProblem> {
    // make the api call
    const response: ApiResponse<GetCategoriesResponse> = await this.apisauce.post(
      API_URL.getCategories(),
    )

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data.data
      return { kind: "ok", categories: rawData }
    } catch (e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }

  async getMerchants(): Promise<{ kind: "ok"; merchants: Array<Merchant> } | GeneralApiProblem> {
    // make the api call
    const response: ApiResponse<GetMerchantsResponse> = await this.apisauce.post(
      API_URL.getMerchants(),
    )

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data.data
      return { kind: "ok", merchants: rawData }
    } catch (e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }

  async registerMerchant(values: {
    merchantName: string
    email: string
    mobileNo: string
    password: string
    city: string
    state: string
    address: string
  }): Promise<{ kind: "ok"; merchantData: RegisteredMerchant } | GeneralApiProblem> {
    // make the api call
    const response: ApiResponse<RegisterMerchantsResponse> = await this.apisauce.post(
      API_URL.registerMerchant(),
      values,
    )

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data.data
      return { kind: "ok", merchantData: rawData }
    } catch (e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }
}

// Singleton instance of the API for convenience
export const apiAdmin = new AdminApi()
