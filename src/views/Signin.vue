<template>
    <v-app>
        
    </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import api from "@/services/api";

export default {
  computed: {
    ...mapGetters(["tokenUser"])
  },
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    ...mapMutations(["SAVE_LOGIN"]),
    handleSubmit: async function() {
      const { email, password } = this;
      if (!email || !password) {
        return alert("Preencha todos os campos");
      }
      const that = this;
      const session = await api
        .post("signin", { email, password })
        .then(function(response) {
          that.SAVE_LOGIN(response.data);
          that.$router.push("/feed");
        })
    }
  }
};
</script>