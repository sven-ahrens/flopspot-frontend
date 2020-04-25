<template>
  <section class="train page">
    <h1>
      {{ $t('pages.train.headline') }}
    </h1>
    <p>{{ $t('pages.train.text') }}</p>
    <pagination next="/to" />
  </section>
</template>

<script>
import Pagination from '../components/Pagination'
export default {
  name: 'TheTrain',
  components: { Pagination }
}
</script>
