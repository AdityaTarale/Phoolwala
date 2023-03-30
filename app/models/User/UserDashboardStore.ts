import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { apiUser } from "../../services/user-api"
import { withSetPropAction } from "../helpers/withSetPropAction"

export const ProductImage = types.model("ProductImage", {
  fieldname: types.string,
  originalname: types.string,
  encoding: types.string,
  mimetype: types.string,
  destination: types.string,
  filename: types.string,
  path: types.string,
  size: types.number,
})

export const Product = types.model("Product", {
  _id: types.string,
  merchantId: types.string,
  productName: types.string,
  price: types.number,
  categoryId: types.string,
  productDescription: types.string,
  productQuantity: types.number,
  productImage: types.array(ProductImage),
  status: types.number,
  is_deleted: types.string,
  createdAt: types.string,
  updatedAt: types.string,
  __v: types.number,
})

/**
 * Model description here for TypeScript hints.
 */
export const UserDashboardStoreModel = types
  .model("UserDashboardStore")
  .props({
    isLoading: types.maybe(types.boolean),
    bannerImage: types.maybe(types.array(ProductImage)),
    todayDeal: types.maybe(types.array(Product)),
    weekDeal: types.maybe(types.array(Product)),
  })
  .views((store) => ({}))
  .actions(withSetPropAction)
  .actions((store) => ({
    async getDashboard() {
      store.setProp("isLoading", true)
      try {
        const response = await apiUser.getDashboardData()
        if (response.kind === "ok") {
          store.setProp("bannerImage", response.dashboard.bannerImage)
        } else {
          console.tron.error(`Error fetching user details: ${JSON.stringify(response)}`, [])
        }
        store.setProp("isLoading", false)
      } catch (error) {
        store.setProp("isLoading", false)
      }
    },
  }))

export interface UserDashboardStore extends Instance<typeof UserDashboardStoreModel> {}
export interface UserDashboardStoreSnapshotOut
  extends SnapshotOut<typeof UserDashboardStoreModel> {}
export interface UserDashboardStoreSnapshotIn extends SnapshotIn<typeof UserDashboardStoreModel> {}
export const createUserDashboardStoreDefaultModel = () =>
  types.optional(UserDashboardStoreModel, {})
