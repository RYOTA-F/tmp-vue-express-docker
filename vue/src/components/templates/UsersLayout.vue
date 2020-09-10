<template>
  <div>
    <UserList />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserList from '../organisms/UserList.vue'

@Component({
  components: {
    UserList,
  },
})
export default class UserLauout extends Vue {}
</script>
