<template>
  <section class="from page">
    <h1>
      {{ $t('pages.from.headline') }}
    </h1>
    <p>{{ $t('pages.from.text') }}</p>
    <label for="from"></label>
    <input
      class="app-input"
      id="from"
      type="text"
      :placeholder="$t('pages.from.placeholder')" />
    <pagination next="journey-date"/>
  </section>
</template>

<script>
import Pagination from '../components/Pagination'

export default {
  name: 'TheFrom',
  components: { Pagination }
}
</script>
