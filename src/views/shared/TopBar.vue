<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="row">
      <div class="col-md-2" v-if="toggleStat" @click="toggleSidebar"><i class="fas fa-bars fa-rotate-90" ></i></div>
      <div class="col-md-2" style='padding-left:20px;' v-else @click="toggleSidebar"><i class="fas fa-bars" ></i></div>
      <div class="col-md-2" ><h5>{{convertName(actvePage)}}</h5> </div>
      
    </div>
     
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">        
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            
             <i class="fas fa-user"></i> Mahesh
          </a>
          <profile-dropdown/>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import store from "../../store/index.js";
import ProfileDropdown from '../shared/ProfileDropdown.vue';
export default {
  name: "TopBar",
  components:{
    ProfileDropdown
  },
  methods:{
    toggleSidebar(){
      store.commit("toggleSidebar");
    },
    convertName(name){
      return name.charAt(0).toUpperCase()+name.slice(1)
    }
  },
  computed:{
    actvePage(){
      return store.state.activePage;
    },
    toggleStat(){
      return store.state.sidebarVisible;
    }
  }
};
</script>

<style scoped>
.navbar{
  width:100% !important;
  height:80px;
  /* background-color: #212b5e !important; */
  /* background-color: #f95473 !important; */
  /* color:white; */
}

.svg-inline--fa{
  color:#f95473;
}


</style>
