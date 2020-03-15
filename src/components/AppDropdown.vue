<template>
  <ul class="dropdown">
    <li
      v-for="(item, key) in matches"
      :key="key"
      class="dropdown--item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppDropdown',
  computed: {
    matches () {
      if (!this.search && this.items) {
        // Reduce number of output for preview to prevent lagging
        return this.items.slice(0, 10)
      }

      const match = this.items.filter(item => item.indexOf(this.search.toUpperCase()) >= 0)

      return match.length ? match : [this.$t('response.filter.notFound')]
    }
  },
  props: {
    items: {
      type: Array
    },
    search: {
      type: String
    }
  }
}
</script>
