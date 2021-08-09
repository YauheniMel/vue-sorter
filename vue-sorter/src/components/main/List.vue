<template>
  <div class="list">
    <list-title v-if="people"/>
    <list-body v-for="person in people"
               v-bind:key="person.id"
               v-bind:person="person"
               />
  </div>
</template>

<script>
import ListTitle from './list/ListTitle.vue'
import ListBody from './list/ListBody.vue'

export default {
  name: 'List',
  data() {
    return {

    }
  },
  components: {
    ListTitle,
    ListBody,
  },
  computed: {
    people() {
      return this.$store.state.people;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
