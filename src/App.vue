<template>
  <v-app>
    <v-content>
      <Menu/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  components: {
    Menu
  }  
}
</script>
