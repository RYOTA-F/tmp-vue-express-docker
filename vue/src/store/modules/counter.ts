import {
  getModule,
  Module,
  VuexModule,
  Mutation,
  Action,
} from 'vuex-module-decorators'
import store from '../index'

export type TestState = {
  count: number
}

@Module({ store, dynamic: true, namespaced: true, name: 'Test' })
class CounterModule extends VuexModule implements TestState {
  count = 0

  @Mutation
  SET_COUNT(payload: number) {
    this.count = payload
  }

  @Action
  async increment() {
    this.SET_COUNT(this.count + 1)
  }

  @Action
  async decrement() {
    this.SET_COUNT(this.count - 1)
  }

  @Action
  async reset() {
    this.SET_COUNT(0)
  }
}

export const counterModule = getModule(CounterModule)
