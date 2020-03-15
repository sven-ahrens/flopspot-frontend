<template>
  <section class="train-data">
    <AppInputDropdown
      name="trainType"
      translate="rating.trainData"
      :items="apiTypes"
      :value="train.type"
    />
    <AppInputDropdown
      name="trainNumber"
      translate="rating.trainData"
      :items="apiNumbers"
      :value="train.number"
    />
    <AppInputDropdown
      name="trainWagon"
      translate="rating.trainData"
      :items="apiWagons"
      :value="train.wagon"
    />
  </section>
</template>

<script>
import AppInputDropdown from './AppInputDropdown'
export default {
  name: 'TrainData',
  components: { AppInputDropdown },
  data () {
    return {
      train: {},
      // Mock result. Replace with API results later on
      apiTypes: ['ICE', 'DB', 'RE', 'RB', 'IC', 'FXT', 'FEL', 'BE', 'TO', 'NE', 'TRA'],
      // Mock result. Replace with API results later on
      apiNumbers: ['ICE123', 'ICE215', 'ICE235', 'ICE99', 'ICE12', 'RB23', 'RB24', 'RE11'],
      // Mock result. Replace with API results later on
      apiWagons: ['1', '2', '3', '4', '99', '214', '333', '124123', '325']
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
