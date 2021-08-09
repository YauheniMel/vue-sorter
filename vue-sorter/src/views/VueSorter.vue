<template>
  <div class="vue-sorter">
    <img class="vue-logo" alt="Vue logo" src="../assets/logo.png">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Main from '@/components/main/Main.vue'

export default {
  name: 'VueSorter',
  components: {
    Header,
    Main,
  }
}

</script>

<style lang="scss">
  .vue-sorter {
    background: lightgray;

    padding: 20px 0;

    .vue-logo {
      position: absolute;
      top: 10px;
      left: 10px;

      width: 100px;
    }
  }
</style>
