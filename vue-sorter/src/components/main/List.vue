<template>
  <div class="list"
       v-if="isList"
       >
    <list-title v-if="people"/>
    <list-rating />
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
      isList: true,
    }
  },
  components: {
    ListTitle,
    ListRandom,
    ListRating
  },
  updated() {
    this.clickCounter = 0;

    this.isList = true;
  },
  computed: {
    people() {
      return this.$store.state.people;
    },
    time() {
      return this.$store.state.time;
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

        this.targetPerson = data;

        setTimeout(() => {
          if(this.clickCounter === this.ratingPotatoesList.length) {
            alert(`Ваше время ${this.time} секунды`);

            this.isList = false;
          }
        }, 200);

        this.clickCounter++;
    },
    handleClickError(elem) {
      elem.classList.add('error');

      setInterval(() => {
        elem.classList.remove('error');
      }, 2000);
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
