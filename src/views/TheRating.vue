<template>
  <section class="rating">
    <h1 class="font--small">{{ $t('rating.title') }}</h1>
    <h2 class="font--small">{{ $t('rating.titleDescription') }}</h2>
    <RatingForm />
  </section>
</template>

<script>
import RatingForm from '../components/RatingForm'
export default {
  name: 'TheRating',
  components: { RatingForm }
}
</script>
