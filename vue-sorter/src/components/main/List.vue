<template>
  <div class="list">
    <list-title />
    <list-body />
    <list-body />
    <list-body />
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
}
</script>

<style lang="scss" scoped>

</style>
