<template>
  <section class="rating">
    <div class="container">
      <div class="headings">
        <h1 class="font--small">{{ $t('rating.title') }}</h1>
        <h2 class="font--small">{{ $t('rating.titleDescription') }}</h2>
      </div>
      <RatingForm />
    </div>
  </section>
</template>

<script>
import RatingForm from '../components/RatingForm'
export default {
  name: 'TheRating',
  components: { RatingForm }
}
</script>
