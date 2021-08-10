<template>
  <div class="list-rating row">
    <div class="list-rating__email col">{{ person.email }}</div>
    <div class="list-rating__potatoes col">{{ person.id }}</div>
    <div class="list-rating__name col">{{ getNamePerson(person.email) }}</div>
  </div>
</template>


<script>
export default {
  name: 'ListRating',
  data() {
    return {

    }
  },
  methods: {
    getNamePerson(text) {
      let regExp = /\b^[A-Za-z_.]+\b/gim;

      const content = text.match(regExp)[0];

      return content.replace('.', ' ').replace('_', ' ');
    },
  },
  props: {
    person: Object
  }
}
</script>

<style lang="scss" scoped>
  .list-rating {
    margin: 0;

    background: rgba(87, 158, 87, 0.418);

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
