<template>
  <div class="dropdown">
    <div
      class="dropdown--item"
      v-for="(item, key) in items"
      :key="key">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDropdown',
  props: {
    items: {
      type: Array
    }
  }
}
</script>
