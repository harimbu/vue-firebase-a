<template>
  <v-footer>
    <v-col class="text-center" cols="12">{{ new Date().getFullYear() }} - <strong>{{footer}}</strong> </v-col>
  </v-footer>
</template>
<script>
export default {
  props: ['footer']
}
</script>
