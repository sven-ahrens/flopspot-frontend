<template>
    <section class="about">
      <h1 class="header--small">{{ $t('page.about.title') }}</h1>
      <h2 class="header--average">{{ $t('page.about.subtitle') }}</h2>
      <p
        v-for="(description, key) in $t('page.about.description')"
        :key="key">
        {{ description }}
      </p>
    </section>
</template>

<script>
export default {
  name: 'AppAbout'
}
</script>
