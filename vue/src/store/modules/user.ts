import { api } from '../../utils/axios'
import {
  getModule,
  Module,
  VuexModule,
  Mutation,
  Action,
} from 'vuex-module-decorators'
import store from '../index'

export type UsersType = {
  id: number
  name: string
  age: number
}

export type UserState = {
  apiUsers: UsersType[]
}

@Module({ store, dynamic: true, namespaced: true, name: 'User' })
class UserModule extends VuexModule implements UserState {
  apiUsers: UsersType[] = []

  @Mutation
  SET_API_USERS(payload: UsersType[]) {
    this.apiUsers = payload
  }

  @Action
  async getUsers() {
    const response = await api.get('/users')

    if (response.data.data) {
      this.SET_API_USERS(response.data.data)
    }
  }
}

export const userModule = getModule(UserModule)
