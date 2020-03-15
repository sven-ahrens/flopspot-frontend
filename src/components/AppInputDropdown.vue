<template>
  <div class="train-data__inputs">
    <label :for="name">{{ $t(`${translate}.${name}`) }}</label>
    <input
      ref="dropdownInput"
      :id="name"
      type="text" v-model="data.type" />
    <AppDropdown
      v-if="showResult"
      :items="items"
      :search="data.type" />
  </div>
</template>

<script>
import AppDropdown from './AppDropdown'
export default {
  name: 'AppInputDropdown',
  components: { AppDropdown },
  mounted () {
    this.$refs.dropdownInput.addEventListener('focus', () => {
      this.showResult = true
    })
    this.$refs.dropdownInput.addEventListener('focusout', () => {
      this.showResult = false
    })
  },
  data () {
    return {
      data: {},
      showResult: false
    }
  },
  props: {
    value: {
      type: Object
    },
    items: {
      type: Array
    },
    name: {
      type: String
    },
    translate: {
      type: String
    }
  },
  watch: {
    value (val) {
      this.data = val
    }
  }
}
</script>
