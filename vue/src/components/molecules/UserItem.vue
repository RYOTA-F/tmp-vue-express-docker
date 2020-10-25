<template>
  <div>
    <div class="user-name">
      {{ name }}
    </div>

    <div class="user-id">
      {{ id }}
    </div>
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
