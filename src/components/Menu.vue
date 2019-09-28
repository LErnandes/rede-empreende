<template>
    <div>
        <v-navigation-drawer
          fixed="true"
          permanent
          left
        >
          <template v-slot:prepend>
            <v-list-item two-line>
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/women/81.jpg">
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Jane Smith</v-list-item-title>
                <v-list-item-subtitle>Logged In</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.to"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        {title: 'Home', icon: 'mdi-home-city', to: 'feed'},
        {title: 'Empreendedores', icon: 'mdi-account-group-outline', to: 'friends'},
        {title: 'Ideias', icon: 'mdi-lightbulb-outline', to: 'ideias'},
        {title: 'Perfil', icon: 'mdi-account', to: 'my'}
      ]
    }
  }
}
</script>

<style scoped>
  #link {
    text-decoration: none;
    color: black;
  }
</style>
