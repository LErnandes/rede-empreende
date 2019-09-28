<template>
    <v-container>
    <v-row>
        <v-row class="mt-6" justify="center">
            <h1>Rede Empreende</h1>
        </v-row>

        <v-col cols="12">
            <v-row
            align="end"
            justify="center"
            style="height: 70vh;"
            >
            <v-form ref="form" lazy-validation @submit.prevent="handleSubmit">
                <v-row justify="center">
                <v-col cols="12">
                    <v-text-field
                        label="E-mail"
                        v-model="email"
                        outlined
                        required
                        rounded
                        autofocus
                    ></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field
                        label="Senha"
                        v-model="password"
                        type="password"
                        outlined
                        required
                        rounded
                    ></v-text-field>
                </v-col>
                </v-row>

                <v-row justify="center">
                    <v-btn outlined type="submit" class="mb-5">Entrar</v-btn>
                </v-row>

                <v-row>
                    <v-col>
                        <v-btn color="primary" text>Criar Conta</v-btn>
                    </v-col>
                </v-row>
        </v-form>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"
import api from "@/services/api"

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
        const that = this
        await api.post("signin", { email, password }).then(function(response) {
            that.SAVE_LOGIN(response.data);
            that.$router.push("/feed");
        })
    }
  }
};
</script>