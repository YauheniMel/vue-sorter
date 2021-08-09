<template>
  <div class="vue-sorter">
    <Modal />
    <img class="vue-logo" alt="Vue logo" src="../assets/logo.png">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Main from '@/components/main/Main.vue'
import Modal from '@/components/modal/Modal.vue'

export default {
  name: 'VueSorter',
  components: {
    Header,
    Main,
    Modal
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
