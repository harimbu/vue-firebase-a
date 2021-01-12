<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <Header :title="title" />
      <v-spacer></v-spacer>
      <v-btn icon to="/about"><v-icon>mdi-weather-night</v-icon></v-btn>
      <v-btn icon to="/"><v-icon>mdi-home</v-icon></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <Menu :items="items" />
    </v-navigation-drawer>

    <v-main>
      <v-container style="max-width: 1000px">
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer :footer='footer' />
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
      title: '안녕 Vue!',
      footer: 'vuetify',
      items: [
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
}
</script>
