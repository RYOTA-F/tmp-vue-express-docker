<template>
  <div>
    <div v-for="user in users" :key="user.id">
      <UserItem :id="user.id" :name="user.name" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { userModule } from '../../store/modules/user'
import UserItem from '../molecules/UserItem.vue'

@Component({ components: { UserItem } })
export default class UserList extends Vue {
  get users() {
    return userModule.apiUsers
  }
}
</script>

<style lang="scss" scoped></style>
