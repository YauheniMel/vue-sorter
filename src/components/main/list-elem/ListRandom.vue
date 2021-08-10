<template>
  <div class="list-random row">
    <div class="list-random__email col">{{ person.email }}</div>
    <div class="list-random__potatoes col">{{ person.id }}</div>
    <div class="list-random__name col">{{ getNamePerson(person.email) }}</div>
  </div>
</template>

<script>
export default {
  name: 'ListRandom',
  data() {
    return {
      ratingPotatoesList: '',
    }
  },
  props: {
    person: Object,
  },
  computed: {
    people() {
      return this.$store.state.people;
    }
  },
  created() {
    this.clickCounter = 0;

    document.querySelectorAll('.row').forEach((item) => {
      item.classList.remove('error');
      item.classList.remove('ok');
    })
  },
  methods: {
    getNamePerson(text) {
      let regExp = /\b^[A-Za-z_.]+\b/gim;

      const content = text.match(regExp)[0];

      return content.replace('.', ' ').replace('_', ' ');
    },
  }
}
</script>

<style lang="scss" scoped>
  .list-random {
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

      box-shadow: 1px 3px 3px 1px rgb(77, 77, 77);

      font-size: 20px;
    }
  }
</style>
