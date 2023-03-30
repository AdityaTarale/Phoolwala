import { UserDashboardStoreModel } from "./UserDashboardStore"

test("can be created", () => {
  const instance = UserDashboardStoreModel.create({})

  expect(instance).toBeTruthy()
})
