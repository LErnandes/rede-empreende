<template>
    <v-app>
        <Menu/>
        <v-container>
            <v-row justify="center">
                <v-col cols="6">
                <v-card>
                    <v-card-title>Aqui ficarão as ideias</v-card-title>
                    
                    <v-card-text>Descrição</v-card-text>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import Menu from '@/components/Menu.vue'
import { mapGetters } from "vuex"

export default {
    components: {
        Menu
    },
    computed: {
        ...mapGetters(["getIsLogged"])
    },
    created: function() {
        if (!this.getIsLogged) {
        return this.$router.push("/");
        }
    },
}
</script>
