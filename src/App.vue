<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: { AppHeader }
}
</script>

<template>
  <div class="header">
    <AppHeader />
  </div>
  <div class="main">
    <router-view />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

.header{
  height: $header-h;
}
</style>
