<template>
  <div class="list-body row">
    <div class="list-body__email col">{{ person.email }}</div>
    <div class="list-body__potatoes col">{{ person.id }}</div>
    <div class="list-body__name col">{{ getNamePerson(person.email) }}</div>
  </div>
</template>

<script>
export default {
  name: 'ListBody',
  data() {
    return {

    }
  },
  props: {
    person: Object,
  },
  methods: {
    getNamePerson(text) {
      let regExp = /\b^[A-Za-z_.]+\b/gim;

      const content = text.match(regExp)[0];

      return content.replace('.', ' ').replace('_', ' ');
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
