<template>
  <section class="train-data">
    <div class="train-data__inputs">
      <label for="trainType">{{ $t('rating.trainData.type') }}</label>
      <input id="trainType" type="text" v-model="train.type" />
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
export default {
  name: 'TrainData',
  data () {
    return {
      train: {}
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
    },
    train (val) {
      this.$emit('input', val)
    }
  }
}
</script>
