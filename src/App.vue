<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer color="primary" dark app>
      <h3>旅＋</h3>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './Views/Header.vue'

export default {
  components: {
    Header
  }

}
</script>
