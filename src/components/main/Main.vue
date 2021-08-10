<template>
  <div class="container">
    <div class="main">
      <div class="main__header">
        <p v-if="peopleNumber"
           >{{ peopleNumber }} people in the list
        </p>
        <p v-else
           >Push 'Start sorting!'
        </p>
      </div>
      <div class="main__list-wrap">
        <list />
      </div>
    </div>
  </div>
</template>

<script>
import List from '@/components/main/List.vue'

export default {
  name: 'Main',
  data() {
    return {
    }
  },
  components: {
    List,
  },
  computed: {
    peopleNumber() {
      return this.$store.state.people.length;
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    border-radius: 3px;

    font-weight: bold;

    background: white;
    box-shadow: 0 2px 3px 2px rgb(77, 77, 77);

    &__header {
      height: 50px;

      padding-right: 10px;
      line-height: 50px;

      text-align: right;
      font-size: 20px;

      border-bottom: 1px solid lightgray;
    }
  }
</style>
