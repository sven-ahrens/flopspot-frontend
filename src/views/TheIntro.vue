<template>
  <section class="intro page">
    <h1>
      <span class="intro_hello-emoji">&#128075;</span> {{ $t('intro.headline') }}
    </h1>
    <p class="description" v-html="$t('intro.text')"></p>
    <button
      class="button"
      @click="$router.push('/from')">
      {{ $t('intro.button') }}
    </button>
  </section>
</template>

<script>
export default {
  name: 'TheIntro'
}
</script>
