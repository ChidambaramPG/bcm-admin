<template>
  <div
    class="dropdown-menu dropdown-menu-right"
    aria-labelledby="navbarDropdown"
  >
    <a
      class="dropdown-item"
      href="#"
      @click.prevent="() => setContentLayout('profile')"
      ><i class="fas fa-pencil-alt"></i> Profile</a
    >
    <a class="dropdown-item" href="#"
    @click.prevent="() => setContentLayout('settings')"
      ><i
        class="fas fa-cogs"
        
      ></i>
      Settings</a
    >
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#"
      ><i class="fas fa-sign-out-alt"></i> Signout</a
    >
  </div>
</template>

<script>
import store from "../../store/index.js";
export default {
  name: "ProfileDropdown",
  methods: {
    setContentLayout: page => {
      store.commit("setActivePage", page);
    }
  }
};
</script>

<style scoped>

</style>
