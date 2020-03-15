<template>
  <section class="train-data">
    <div class="train-data__inputs">
      <label for="trainType">{{ $t('rating.trainData.type') }}</label>
      <input id="trainType" type="text" v-model="train.type" />
      <AppDropdown
        :items="getType"
        v-if="train.type" />
    </div>
    <div class="train-data__inputs">
      <label for="trainNumber">{{ $t('rating.trainData.number') }}</label>
      <input id="trainNumber" type="text" v-model="train.number" />
    </div>
    <div class="train-data__inputs">
      <label for="trainWagon">{{ $t('rating.trainData.wagon') }}</label>
      <input id="trainWagon" type="text" v-model="train.wagon" />
    </div>
  </section>
</template>

<script>
import AppDropdown from './AppDropdown'
export default {
  name: 'TrainData',
  components: { AppDropdown },
  data () {
    return {
      train: {},
      apiTypes: ['ICE', 'DB', 'RE', 'RB']
    }
  },
  computed: {
    getType () {
      const filteredTypes = this.apiTypes.filter(type => type.indexOf(this.train.type) >= 0)

      return filteredTypes.length ? filteredTypes : this.apiTypes
    }
  },
  props: {
    value: {
      type: Object
    }
  },
  watch: {
    value (val) {
      this.train = val
    }
  }
}
</script>
