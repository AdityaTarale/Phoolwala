import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { api } from "../services/api"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const User = types.model("User", {
  _id: types.string,
  fullName: types.string,
  merchantName: types.string,
  email: types.string,
  password: types.string,
  mobileNo: types.number,
  otp: types.null || types.number,
  role: types.string,
  status: types.number,
  is_deleted: types.number,
  createdAt: types.string,
  updatedAt: types.string,
  __v: types.number,
})

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    isLoading: types.maybe(types.boolean),
    authToken: types.maybe(types.string),
    authFullName: "",
    authEmail: "",
    authMobileNo: "",
    authPassword: "",
    user: types.maybe(User),
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken
    },
    get emailValidationError() {
      if (store.authEmail.length === 0) return "can't be blank"
      if (store.authEmail.length < 6) return "must be at least 6 characters"
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.authEmail))
        return "must be a valid email address"
      return ""
    },
    get mobileNoValidationError() {
      if (store.authMobileNo.length === 0) return "can't be blank"
      if (store.authMobileNo.length < 9) return "must be at least 10 characters"
      if (!/^[0-9]{10}$/.test(store.authMobileNo)) return "must be a valid mobile no."
      return ""
    },
  }))
  .actions(withSetPropAction)
  .actions((store) => ({
    async login() {
      store.setProp("isLoading", true)
      try {
        const response = await api.login({
          mobileNo: store.authMobileNo,
          password: store.authPassword,
        })
        if (response.kind === "ok") {
          store.setProp("user", response.userData.user)
          store.setProp("authToken", response.userData.token)
        } else {
          console.tron.error(`Error fetching user details: ${JSON.stringify(response)}`, [])
        }
        store.setProp("isLoading", false)
      } catch (error) {
        store.setProp("isLoading", false)
      }
    },
    async register() {
      store.setProp("isLoading", true)
      try {
        const response = await api.register({
          fullName: store.authFullName,
          mobileNo: store.authMobileNo,
          email: store.authEmail,
          password: store.authPassword,
        })
        if (response.kind === "ok") {
          store.setProp("user", response.userData.user)
          store.setProp("authToken", response.userData.token)
        } else {
          console.tron.error(`Error fetching user details: ${JSON.stringify(response)}`, [])
        }
        store.setProp("isLoading", false)
      } catch (error) {
        store.setProp("isLoading", false)
      }
    },
    setAuthToken(value?: string) {
      store.authToken = value
    },
    setAuthMobileNo(value: string) {
      store.authMobileNo = value.replace(/ /g, "")
    },
    setAuthEmail(value: string) {
      store.authEmail = value.replace(/ /g, "")
    },
    setAuthPassword(value: string) {
      store.authPassword = value.replace(/ /g, "")
    },
    setAuthFullName(value: string) {
      store.authFullName = value
    },
    logout() {
      store.authToken = undefined
      store.authMobileNo = ""
      store.authEmail = ""
    },
  }))

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}

// @demo remove-file
