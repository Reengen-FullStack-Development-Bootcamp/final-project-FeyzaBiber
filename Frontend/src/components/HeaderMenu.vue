<template>
  <div>
    <b-navbar dark toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/" style="margin-left: 30px">
        <img
          src="../assets/factory-icon.png"
          width="30px"
          height="30px"
          class="rounded-circle"
        />
        Factory Dashboard</b-navbar-brand
      >

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/usersettings">User Settings</b-nav-item>
          <b-nav-item href="/dashboard">Dashboard</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mr-50">
          <b-nav-item-dropdown text="Login" right>
            <b-dropdown-item href="#">Register</b-dropdown-item>
            <b-dropdown-item href="#">Log out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  watch: {},
  methods: {},
};
</script>

<style scoped>
.mr-50 {
  margin-right: 50px;
}
</style>
