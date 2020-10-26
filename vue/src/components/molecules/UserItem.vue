<template>
  <div class="user-item-container">
    <div class="user-name">
      {{ name }}
    </div>

    <div class="user-id">ID:{{ id }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UserItem extends Vue {
  @Prop({ type: Number, default: 0 })
  id: number

  @Prop({ type: String, default: 'null' })
  name: string
}
</script>

<style>
.user-item-container {
  width: 80%;
  border: 1px solid;
  margin: 8px auto 0;
  display: flex;
}

.user-name {
  color: red;
}

.user-id {
  font-weight: bold;
}
</style>
