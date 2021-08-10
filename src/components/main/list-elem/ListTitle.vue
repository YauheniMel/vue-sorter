<template>
  <div class="list-title row">
    <div class="list-title__mail col">Email</div>
    <div class="list-title__potatoes col">Potatoes</div>
    <div class="list-title__name col">Full name</div>
  </div>
</template>

<script>
export default {
  name: 'ListTitle',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .list-title {
    border-bottom: 2px solid lightgray;

    margin: 0;

    & > div {
      padding: 5px 15px;

      font-size: 18px;
    }

    &__email {
      border-right: 1px solid lightgray;
    }

    &__potatoes, &__name {
      text-align: center;
    }
  }
</style>
