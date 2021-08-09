<template>
  <div class="vue-sorter">
    <Modal v-bind:isModal="isModal"
           v-on:hideModal="hideModal"
           />
    <img class="vue-logo" alt="Vue logo" src="../assets/logo.png">
    <Header v-bind:isModal="isModal"
            v-on:showModal="showModal"
            />
    <Main />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Main from '@/components/main/Main.vue'
import Modal from '@/components/modal/Modal.vue'

export default {
  name: 'VueSorter',
  data() {
    return {
      isModal: false,
    };
  },
  components: {
    Header,
    Main,
    Modal
  },
  methods: {
    hideModal(data) {
      this.isModal = data.isModal;
    },
    showModal(data) {
      this.isModal = data.isModal;
    }
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
