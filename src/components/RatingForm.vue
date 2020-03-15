<template>
    <form @submit.prevent="rate">
      <TrainData v-model="train" />
      <TrainRating v-model="rating" />
      <button
        class="button"
        type="submit">
        {{ $t('submit') }}
      </button>
    </form>
</template>

<script>
import TrainData from './TrainData'
import TrainRating from './TrainRating'
export default {
  name: 'RatingForm',
  components: { TrainRating, TrainData },
  data () {
    return {
      train: {},
      rating: ''
    }
  },
  methods: {
    rate () {
      console.log(this.train)
      console.log(this.rating)
    }
  }
}
</script>
