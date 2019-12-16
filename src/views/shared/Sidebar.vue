<template>
  <div class="sidebar">
    <a href="/" class="sidebar-heading">
      BC Manager
    </a>
    <ul class="list-group list-group-flush sidebar-list">
      <sidebar-menu-item name="dashboard"/>
      <!-- <sidebar-menu-item name="brochures"/> -->
      <sidebar-menu-item name="cards"/>
      <sidebar-menu-item name="users"/>
      <sidebar-menu-item name="categories"/>
    </ul>
  </div>
</template>

<script>
import store from "../../store/index.js";
import SidebarMenuItem from '../components/sidebar/SidebarMenuItem.vue';
export default {
  name: "Sidebar",
  computed: {
    brochureCount() {
      return store.state.brochureCount;
    },
    businessCardCount() {
      return store.state.businessCardsCount;
    },
    categoriesCount() {
      return store.state.categoriesCount;
    },
    usersCount() {
      return store.state.usersCount;
    }
  },
  methods: {
    setContentLayout: page => {
      // console.log("setting page", page);
      store.commit("setActivePage", page);
    }
  },
  components:{
    SidebarMenuItem
  }
};
</script>

<style scoped>
a.sidebar-heading {
  display: block;
  height: 80px;
  text-align: center;
  font-size: 25px;
  background-color: #212b5e;
  color: #f95473;
  padding: 20px;
}

.sidebar {
  min-height: calc(100vh - 50px);
  font-size: 14px;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1)
}


@media (max-width:320px)  {
  .sidebar-content{
    height:262px;
  }
}
</style>
