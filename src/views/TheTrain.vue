<template>
  <section class="train page">
    <h1>
      {{ $t('pages.train.headline') }}
    </h1>
    <p>{{ $t('pages.train.text') }}</p>
   <div class="trains">
     <div
       :class="{ 'trains__train--selected': train === pickedTrain }"
       class="trains__train"
       v-for="(train, key) in trains"
       :key="key">
       <input
         :id="train"
         type="radio"
         :value="train"
         v-model="pickedTrain">
       <label :for="train">{{ train }}</label>
     </div>
   </div>
    <pagination next="/to" />
  </section>
</template>

<script>
import Pagination from '../components/Pagination'
export default {
  name: 'TheTrain',
  components: { Pagination },
  data () {
    return {
      trains: ['ICE 200', 'ICE 300', 'ICE 400'],
      pickedTrain: ''
    }
  }
}
</script>
