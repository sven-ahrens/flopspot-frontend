<template>
  <section class="journey-date page">
    <h1>
      {{ $t('pages.journeyDate.headline') }}
    </h1>
    <p>{{ $t('pages.journeyDate.text') }}</p>
    <label for="datetime"></label>
    <input
      class="app-input"
      id="datetime"
      type="text"
      :placeholder="$t('pages.journeyDate.placeholder')" />
    <pagination next="/train" />
  </section>
</template>

<script>
import Pagination from '../components/Pagination'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/themes/light.css'
export default {
  name: 'TheJourneyDate',
  components: { Pagination },
  mounted () {
    // Initialize datepicker
    flatpickr(document.getElementById('datetime'), {
      enableTime: true,
      dateFormat: 'Y-m-d H:i'
    })
  }
}
</script>
