<template>
  <div>
    <Title />
    <v-form ref="form" v-model="valid" lazy-validation >
      <v-text-field v-model="name" label="이름" required></v-text-field>
      <v-text-field v-model="subject" label="제목" required></v-text-field>
      <v-textarea v-model="content" label="내용" required></v-textarea>
      <div class="ma-3 text-center">
        <v-btn color="grey lighten-2" class="ma-2" depressed @click='goHome'>취소</v-btn>
        <v-btn color="primary" class="ma-2" depressed @click="index !== undefined ? modifyData() : writeData()">
          {{ index !== undefined ? '수정' : '입력' }}
        </v-btn>
      </div>
    </v-form>

    <v-snackbar v-model="snackbar">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>

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
      name: index !== undefined ? data[index].name : '',
      subject: index !== undefined ? data[index].subject : '',
      content: index !== undefined ? data[index].content : '',
      snackbar: false,
      text: '이름, 제목, 내용은 필수사항입니다.'
    }
  },
  methods: {
    goHome () {
      this.$router.push({
        path: '/list'
      })
    },
    writeData () {
      if (this.name === '' || this.subject === '' || this.content === '') {
        this.snackbar = !this.snackbar
        return
      }
      data.push({
        name: this.name,
        subject: this.subject,
        content: this.content
      })
      this.goHome()
    },
    modifyData () {
      data[this.index].name = this.name
      data[this.index].subject = this.subject
      data[this.index].content = this.content
      this.goHome()
    }
  }
}
</script>
