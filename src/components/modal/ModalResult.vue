<template>
  <div class="modal-result__back"
       v-if="getResult()"
       v-on:click="hideModalResult"
       >
    <div class="modal-result"
         v-on:click.stop
         >
      <div class="modal-result__header">
        <h4>Result</h4>
        <button class="modal-result__btn-close btn-close"
                v-on:click="hideModalResult"
                ></button>
      </div>
      <div class="modal-result__main">
        <h2>{{ getResult() }} seconds!</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalResult',
  data() {
    return {
      peopleNumber: '',
    }
  },
  methods: {
    hideModalResult() {
      this.$store.dispatch('clearResult');
    },
    getResult() {
      return this.$store.state.isResult;
    }
  },
}
</script>

<style lang="scss" scoped>
  .modal-result {
    z-index: 2;

    position: relative;

    margin: auto;
    align-self: center;

    width: 400px;
    height: 170px;

    background: white;

    border-radius: 4px;

    box-shadow: 0 2px 3px 2px lightgray;

    &__back {
      z-index: 1;

      position: absolute;
      top: 0;
      left: 0;

      display: flex;

      width: 100%;
      height: 100%;

      background: rgba(255, 255, 255, 0.6);
    }

    &__header {
      display: flex;
      justify-content: space-between;

      padding: 5px;
    }

    &__main {
      border-top: 2px solid lightgray;

      text-align: center;

      padding: 20px;
    }
  }
</style>
