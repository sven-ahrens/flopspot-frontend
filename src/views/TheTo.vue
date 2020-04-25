<template>
  <section class="to page">
    <h1>
      {{ $t('pages.to.headline') }}
    </h1>
    <p>{{ $t('pages.to.headline') }}</p>
    <label for="to"></label>
    <input
      class="app-input"
      id="to"
      type="text"
      :placeholder="$t('pages.to.placeholder')" />
    <pagination next="/rating"/>
  </section>
</template>

<script>
import Pagination from '../components/Pagination'

export default {
  name: 'TheTo',
  components: { Pagination }
}
</script>
