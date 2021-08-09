<template>
  <div class="header">
    <div class="container">
      <div class="row header__nav justify-content-between">
        <div class="col-4 header__item"><h3 class="m-3">Sorting Training System!</h3></div>
        <div class="col-3 header__item"><h1 class="m-3">0</h1></div>
        <div class="col-2 header__item">
          <button class="header__btn btn btn-warning"
                  >Start sorting!
          </button>
          <!-- <modal v-show="showModal"
                 v-on:hide="hideModal"
                 v-on:list="setList"
                 /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .header {

    &__nav {
      height: 80px;

      align-items: center;
    }

    &__btn {
      color: white;

      font-weight: bold;

      width: 170px;
    }
  }
</style>
