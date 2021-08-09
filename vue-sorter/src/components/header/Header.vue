<template>
  <div class="header">
    <div class="container">
      <div class="row nav justify-content-between">
        <div class="col-4 nav-item"><h3 class="m-3">Sorting Training System!</h3></div>
        <div class="col-3 nav-item"><h1 class="m-3">0</h1></div>
        <div class="col-2 nav-item">
          <button class="btn btn-warning w-100 text-white"
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
  .nav {
    height: 80px;

    align-items: center;
  }
</style>
