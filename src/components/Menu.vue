<template>
    <div>
        <v-app-bar app>
        <v-toolbar-title class="text-uppercase">
            <router-link id="link" to='/feed'>Rede Empreende</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to='/feed' text>Publicações</v-btn>
        <v-btn to='/net' text>Colegas</v-btn>
        <v-btn text>*notificações*</v-btn>
        <v-btn text>*foto perfil*</v-btn>
        </v-app-bar>
    </div>
</template>

<style scoped>
  #link {
    text-decoration: none;
    color: black;
  }
</style>
