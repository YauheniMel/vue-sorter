<template>
  <div class="list"
       v-if="time"
       >
    <list-title v-if="people"/>
    <list-rating v-show="rating"
                 v-for="person in rating"
                 v-bind:key="person.newId"
                 v-bind:person="person"
                 />
    <list-random v-for="person in people"
                 v-bind:key="person.id"
                 v-bind:person="person"
                 v-on:click.native="checkSorting"
                 />
  </div>
</template>

<script>
import ListTitle from './list-elem/ListTitle.vue'
import ListRandom from './list-elem/ListRandom.vue'
import ListRating from './list-elem/ListRating.vue'

export default {
  name: 'List',
  data() {
    return {
      clickCounter: 0,
      targetPerson: '',
    }
  },
  components: {
    ListTitle,
    ListRandom,
    ListRating
  },
  computed: {
    people() {
      return this.$store.state.people;
    },
    time() {
      return this.$store.state.time;
    },
    rating() {
      return this.$store.state.ratingPeopleList;
    }
  },
  methods: {
    checkSorting(event) {
      const targetListEl = event.target.closest('.row');

      const potatoesCounter = Number(targetListEl.querySelector('.list-random__potatoes').innerHTML);

      this.buildRatingPotatoesList();

      if(potatoesCounter === this.ratingPotatoesList[this.clickCounter]) {
        this.handleClickOk(targetListEl);
      } else {
        this.handleClickError(targetListEl);
      }
    },
    buildRatingPotatoesList() {
      let randomPotatoesList = [];

      this.people.forEach((item) => {
        randomPotatoesList.push(item.id);
      })

      const maxIteration = randomPotatoesList.length;

      let ratingPotatoesList = [];

      for(let i = 0; i < maxIteration; i++) {
        const maxEl = Math.max(...randomPotatoesList);

        ratingPotatoesList.push(maxEl);
        randomPotatoesList = randomPotatoesList.filter(item => item != maxEl);
      }

      this.ratingPotatoesList = ratingPotatoesList;
    },
    handleClickOk(elem) {
        elem.classList.add('ok');

        setTimeout(() => {
          elem.style.display = 'none'
        }, 200)

        const data = this.people.filter(item => item.id == this.ratingPotatoesList[this.clickCounter]);

        this.targetPerson = data[0];

        this.$store.dispatch('buildRatingPeopleList', this.targetPerson);

        setTimeout(() => {
          if(this.clickCounter === this.ratingPotatoesList.length) {
            this.$store.dispatch('getResult');

            this.$store.dispatch('buildRatingPeopleList', this.targetPerson);

            this.clear();
          }
        }, 200);

        this.clickCounter++;
    },
    handleClickError(elem) {
      elem.classList.add('error');

      setInterval(() => {
        elem.classList.remove('error');
      }, 2000);
    },
    clear() {
      this.$store.dispatch('deleteRatingPeopleList');

      this.$store.dispatch('timer', 'stop');

      this.clickCounter = 0;

      this.$store.state.people = '';
    }
  }
}
</script>

<style lang="scss" scoped>
  .ok {
    background: rgb(103, 175, 103) !important;
    color: white;
  }

  .error {
    background: rgb(226, 103, 103);
    color: white;
  }
</style>
