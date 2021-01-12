<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <Header :title="site.title" />
      <v-spacer></v-spacer>
      <v-btn icon to="/"><v-icon>mdi-home</v-icon></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary width="400">
      <Menu :items="site.menus" />
    </v-navigation-drawer>

    <v-main>
      <v-container style="max-width: 1000px">
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer :footer='site.footer' />
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'

export default {
  name: 'App',
  components: { Header, Footer, Menu },
  data () {
    return {
      drawer: null,
      site: {
        title: '안녕 Vue!',
        footer: 'vuetify',
        menus: [
          {
            title: '소개',
            icon: 'mdi-seat',
            subItems: [
              { title: '인사말', to: '/greet' }
            ]
          },
          {
            title: '프레임워크',
            icon: 'mdi-sail-boat',
            subItems: [
              { title: 'vue.js', to: '/vue' },
              { title: 'react.js', to: '/react' },
              { title: 'angular.js', to: '/angular' }
            ]
          },
          {
            title: '게시판',
            icon: 'mdi-message-text',
            subItems: [
              { title: 'CRUD Basic', to: '/list' },
              { title: 'Firebase CRUD', to: '/firebase' }
            ],
            active: true
          }
        ]
      }
    }
  },
  created () {
    this.subscribe()
  },
  methods: {
    subscribe () {
      this.$firebase.database().ref().child('site').on('value', snap => {
        const data = snap.val()
        if (!data) {
          this.$firebase.database().ref().child('site').set(this.site)
          return
        }
        this.site = data
      }, e => {
        console.log(e.message)
      })
    }
  }
}
</script>
