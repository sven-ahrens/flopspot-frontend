<template>
    <section class="home">
      <TheRating />
      <section class="container info">
        <RatingAbout />
        <section class="statistics">
          <router-link to="/statistics">
            <img class="statistics-link" alt="" src="../assets/images/bar.svg" />
            <span>Zu den Statistiken</span>
          </router-link>
        </section>
      </section>
    </section>
</template>

<script>
import TheRating from './TheRating'
import RatingAbout from '../components/RatingAbout'
export default {
  name: 'TheHome',
  components: { RatingAbout, TheRating }
}
</script>
