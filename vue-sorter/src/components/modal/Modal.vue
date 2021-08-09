<template>
  <div class="modal-back"
       v-if="isModal"
       v-on:click="hideModal"
       >
    <div class="modal-island"
         v-on:click.stop
         >
      <div class="modal-island__header">
        <h4>How many people?</h4>
        <button class="modal-island__btn-close btn-close"
                v-on:click="hideModal"
                ></button>
      </div>
      <div class="modal-island__main">
        <form action="" class="modal-island__form"
              v-on:submit.prevent
              >
          <label for="peopleNumber">
            Enter a number of how many people you want to add to the list
          </label>
          <input class="modal-island__input" id="peopleNumber" type="number" min="20" max="100">
          <div class="modal-island__btn-section">
            <button class="modal-island__btn-reset btn btn-light" type="reset">Reset</button>
            <button class="modal-island__btn-confirm btn btn-warning" type="submit">Start</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isModal: Boolean
  },
  data() {
    return {

    }
  },
  methods: {
    hideModal() {
      this.$emit('hideModal', {
          isModal: false
      })
    }
  },
}
</script>

<style lang="scss" scoped>
  .modal-back {
    z-index: 1;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;

    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.3);
  }

  .modal-island {
    z-index: 2;

    position: relative;

    margin: auto;
    align-self: center;

    width: 500px;
    height: 250px;

    background: white;

    border-radius: 4px;

    box-shadow: 0 2px 3px 2px lightgray;

    &__header {
      display: flex;
      justify-content: space-between;

      padding: 5px;
    }

    &__main {
      border-top: 2px solid lightgray;

      padding: 20px;
    }

    label {
      font-weight: 500;

      margin-top: 20px;
    }

    &__input {
      margin-top: 15px;
      text-align: center;

      width: 455px;

      border: 1px solid lightgray;
      border-radius: 3px;
    }

    &__btn-section {
      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      text-align: right;

      border-top: 2px solid lightgray;

      & > button {
        margin: 10px;

        width: 100px;
      }
    }
  }
</style>
