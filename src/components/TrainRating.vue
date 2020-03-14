<template>
    <section class="train-rating">
      <div class="train-rating__inputs">
        <label for="ratingBad">
          <span class="text--invisible">{{ $t('rating.trainRating.bad') }}</span>
          <img
            :class="{ 'thumb--active': rating === '1' }"
            class="thumb thumb--bad"
            alt=""
            src="../assets/images/thumb.svg" />
        </label>
        <input
          id="ratingBad"
          type="radio"
          v-model="rating"
          value="1" />
      </div>
      <div class="train-rating__inputs">
        <label for="ratingAverage">
          <span class="text--invisible">{{ $t('rating.trainRating.average') }}</span>
          <img
            :class="{ 'thumb--active': rating === '2' }"
            class="thumb thumb--average"
            alt=""
            src="../assets/images/thumb.svg" />
        </label>
        <input
          id="ratingAverage"
          type="radio"
          v-model="rating"
          value="2" />
      </div>
      <div class="train-rating__inputs">
        <label for="ratingGood">
          <span class="text--invisible">{{ $t('rating.trainRating.good') }}</span>
          <img
            :class="{ 'thumb--active': rating === '3' }"
            class="thumb thumb--good"
            alt=""
            src="../assets/images/thumb.svg" />
        </label>
        <input
          id="ratingGood"
          type="radio"
          v-model="rating"
          value="3" />
      </div>
    </section>
</template>

<script>
export default {
  name: 'TrainRating',
  data () {
    return {
      rating: null
    }
  },
  props: {
    value: {
      type: String
    }
  },
  watch: {
    value (val) {
      this.rating = val
    },
    rating (val) {
      this.$emit('input', val)
    }
  }
}
</script>
