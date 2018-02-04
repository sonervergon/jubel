<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          >
          </v-layout>

          <v-list-tile
          v-else
          @click.stop="drawer=false"
          :key="item.text"
          router
          :to="item.link"
          >
            <v-list-tile-action style="color:#2c3e50;">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title style="color:#2c3e50;" class="body-2">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Välkommen</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <main class="hero">
      <router-view class=""></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        {icon: 'home', text: 'Hem', link: '/start'},
        {icon: 'event', text: 'Events', link: '/start/event'},
        {icon: 'favorite_border', text: 'Mottagning', link: '/start/mottagning'},
        {icon: 'star_border', text: 'Jubileum 2019', link: '/start/jubel'},
        {icon: 'help', text: 'Kontakt', link: '/start/kontakt'}
      ]
    }),
    props: {
      source: String
    }
  }
</script>
<style scoped>

.hero {
  margin-top: 50px;
}

</style>
