<template>
  <v-app>
    <Login/>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex"
import Login from '@/components/Login'

export default {
  components: {
    Login
  },
  computed: {
    ...mapGetters(["getIsLogged"])
  },
  mounted: function() {
    if (this.getIsLogged == true) {
      return this.$router.push("/feed");
    }
  },
}
</script>
