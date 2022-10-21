<template>
  <div class="app-bg">
    <router-view />
  </div>
</template>

<script>
  import {
    store
  } from './store.js'

  import {
    getStore
  } from './utils/utils.js'

  import {
    USER_INFO_KEY
  } from './config/env'

  export default {
    created() {
      store.isLogin = getStore(USER_INFO_KEY) !== null

      console.log('isLogin=' + store.isLogin);
    }
  }
</script>

<style scoped>
  .app-bg {
    height: 100%;
  }
</style>