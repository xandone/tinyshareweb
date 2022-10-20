<template>
  <div class="app-bg">
    <router-view />
  </div>
</template>

<script>
  export default {
    created() {
      console.log('验证登录')
    }
  }
</script>

<style scoped>
  .app-bg {
    height: 100%;
  }
</style>