<template>
  <div class="list-body row">
    <div class="list-body__email col">207melnik@gmail.com</div>
    <div class="list-body__potatoes col">3</div>
    <div class="list-body__name col">Yauheni Melnik</div>
  </div>
</template>

<script>
export default {
  name: 'ListBody',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .list-body {
    margin: 0;

    & > div {
      padding: 5px 15px;
    }

    &__email {
      border-right: 1px solid lightgray;
    }

    &__potatoes, &__name {
      text-align: center;
    }

    &:hover {
      cursor: pointer;

      background: lightgray;
    }
  }
</style>
