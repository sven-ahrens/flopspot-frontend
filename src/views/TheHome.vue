<template>
    <section class="home">
      <TheRating />
      <article class="app-info">
        <AppAbout />
        <section class="statistics-preview">
          <router-link to="/statistics">
            <img class="statistics-link" alt="" src="../assets/images/bar.svg" />
            <span>Zu den Statistiken</span>
          </router-link>
        </section>
      </article>
    </section>
</template>

<script>
import TheRating from './TheRating'
import AppAbout from '../components/AppAbout'
export default {
  name: 'TheHome',
  components: { AppAbout, TheRating }
}
</script>
