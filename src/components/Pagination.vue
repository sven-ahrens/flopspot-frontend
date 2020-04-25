<template>
  <section class="pagination">
    <button class="button" @click="$router.go(-1)">{{ $t('pagination.previous') }}</button>
    <button class="button" @click="$router.push(next)">{{ $t('pagination.next') }}</button>
  </section>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    next: {
      type: String
    }
  }
}
</script>
