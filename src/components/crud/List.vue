<template>
  <div>
    <Title />
    <v-data-table
      :headers="headers"
      :items="data"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    ></v-data-table>

    <div class="pt-2 text-center">
      <v-pagination v-model="page" :length="pageCount" :total-visible="7"></v-pagination>
    </div>

    <div class="ma-3 text-center">
      <v-btn color="primary" depressed @click='write' class="ma-2">글쓰기</v-btn>
    </div>
  </div>
</template>
<script>
import data from '@/data'
import Title from './Title'
export default {
  name: 'List',
  components: { Title },
  data () {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 4,
      data: data,
      headers: [
        { text: '이름', value: 'name', sortable: false },
        { text: '제목', value: 'subject' },
        { text: '내용', value: 'content' }
      ]
    }
  },
  methods: {
    write () {
      this.$router.push({
        path: '/write'
      })
    },
    detail (index) {
      this.$router.push({
        path: `/detail/${index}`
      })
      //
    }
  }
}
</script>
