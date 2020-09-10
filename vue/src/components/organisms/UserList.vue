<template>
  <div>
    {{ users }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { userModule } from '../../store/modules/user'

@Component
export default class UserList extends Vue {
  get users() {
    return userModule.apiUsers
  }
}
</script>

<style lang="scss" scoped></style>
