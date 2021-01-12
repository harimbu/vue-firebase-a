<template >
  <v-toolbar-title>
    {{ title }}
    <v-btn icon @click="openDialog"><v-icon>mdi-pencil</v-icon></v-btn>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title primary-title>사이트 제목
          <v-spacer />
          <v-btn icon @click="save"><v-icon>mdi-content-save</v-icon></v-btn>
          <v-btn icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model='text' outlined label="제목" hide-details @keyup.enter="save"></v-text-field>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-toolbar-title>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {
      dialog: null,
      text: this.title
    }
  },
  methods: {
    openDialog () {
      this.dialog = !this.dialog
    },
    async save () {
      try {
        await this.$firebase.database().ref('site').update({ title: this.text })
      } finally {
        this.dialog = null
      }
    }
  }
}
</script>
