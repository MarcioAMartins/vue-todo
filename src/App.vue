<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-img
        src="https://picsum.photos/1920/1080?random"
        gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
        dark
        class="pt-5 text-center"
      >
        <v-avatar size="100">
          <img
            src="https://avatars.githubusercontent.com/u/41830609?v=4"
            alt="John"
          />
        </v-avatar>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Vue.js </v-list-item-title>
            <v-list-item-subtitle> Lista de tarefas </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      
      app
      prominent
      height="185"
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      
      <center>
        <v-app-bar-title
        class="mt-16"
        >
          <InputTarefa
          
          />
        </v-app-bar-title>
      </center>
    </v-app-bar>
    
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import InputTarefa from "./components/inputTarefa.vue";
export default {
  components: { InputTarefa },
  data: () => ({
    drawer: null,
    items: [
      { title: "Tarefas", icon: "mdi-view-dashboard", to: "/" },
      { title: "Sobre", icon: "mdi-help-box", to: "/sobre" },
    ],
  }),
};
</script>