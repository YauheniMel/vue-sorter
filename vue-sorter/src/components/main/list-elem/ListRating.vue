<template>
  <div class="list-rating row">
    <div class="list-rating__email col">person</div>
    <div class="list-rating__potatoes col">person.id</div>
    <div class="list-rating__name col">on(person.email</div>
  </div>
</template>


<script>
export default {
  name: 'ListRating',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .list-rating {
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
  }
</style>
