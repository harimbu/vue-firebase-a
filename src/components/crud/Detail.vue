<template>
  <div>
    <Title />
    <v-card max-width="550" min-height="76" outlined class="mx-auto">
      <v-list-item three-line>
        <v-list-item-content class="text-center" >
          <div class="overline mb-4">{{data.name}}</div>
          <v-list-item-title class="headline mb-3">{{data.subject}}</v-list-item-title>
          <v-list-item-subtitle>{{data.content}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions class="d-flex align-center justify-center mx-auto">
        <v-btn-toggle tile color="primary accent-3" group >
          <v-btn @click="goHome">목록</v-btn>
          <v-btn @click="modify">수정</v-btn>
          <v-btn @click="remove">삭제</v-btn>
        </v-btn-toggle>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import data from '@/data'
import Title from './Title'

export default {
  name: 'List',
  components: { Title },
  data () {
    const index = this.$route.params.id
    return {
      index: index,
      data: data[index]
    }
  },
  methods: {
    goHome () {
      this.$router.push({
        path: '/list'
      })
    },
    modify () {
      this.$router.push({
        path: `/write/${this.index}`
      })
    },
    remove () {
      data.splice(this.index, 1)
      this.goHome()
    }
  }
}
</script>
