<template>
  <div id="app">
    <header>
      <img class="logo" src="./assets/images/logo.svg" />
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import 'assets/styles/app.scss';
</style>
