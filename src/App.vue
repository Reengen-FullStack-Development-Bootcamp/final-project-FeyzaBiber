<template>
  <div id="app">
    <v-app>
      <header-menu />
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
export default {
  components: { HeaderMenu },
  name: "App",
  data() {
    return {};
  },
  methods: {
    addChar(e) {
      this.title = e;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  display: flex;
  flex-flow: column;
}
</style>
