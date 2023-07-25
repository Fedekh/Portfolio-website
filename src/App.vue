<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: { AppHeader }
}
</script>

<template>
  <AppHeader />

</template>

<style lang="scss">
@use "./styles/general.scss" as *;

#app{
  background-color: blue;
}
</style>
