<template>
  <div>
    <UserList />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserList from '../components/templates/UsersLayout.vue'
import { userModule } from '../store/modules/user'

@Component({
  components: {
    UserList,
  },
})
export default class Users extends Vue {
  async created() {
    await userModule.getUsers()
  }
}
</script>
