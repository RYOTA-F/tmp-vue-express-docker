<template>
  <div class="counter">
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { counterModule } from '../store/modules/counter'

@Component
export default class Counter extends Vue {
  get count() {
    return counterModule.count
  }

  increment() {
    counterModule.increment()
  }

  decrement() {
    counterModule.decrement()
  }

  reset() {
    counterModule.reset()
  }
}
</script>
