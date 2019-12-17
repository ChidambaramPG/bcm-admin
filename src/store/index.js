import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    brochureCount:150,
    businessCardsCount:100,
    categoriesCount:40,
    usersCount:20,
    brochures:[],
    businessCards:[],
    categories:[],
    users:[],

    sidebarVisible:true,

    // page views
    activePage:'dashboard',
    categorySubTag:'all',
    cardsSecton:'table',
    usersSection:'table',
    categorySection:'table',

    // modal views
    newBrochureModalVisible:false,
    editBrochureModalVisible:false,
    deleteBrochureModalVisible:false,
    newCardsModalVisible:false,
    editCardsModalVisible:false,
    deleteCardsModalVisible:false,
    newCategoryModalVisible:false,
    
    // pagnation
    cardsListPage:1


  },
  mutations: {
    toggleSidebar: state=>{
      state.sidebarVisible = !state.sidebarVisible
    },
    setActivePage: (state,payload) => {
      state.activePage = payload;
    },
    toggleNewBrochureModal: state=>{
      state.newBrochureModalVisible = !state.newBrochureModalVisible;
    },
    toggleNewCardModal: state => {
      state.newCardsModalVisible = !state.newCardsModalVisible;
    },
    toggleEditBrochureModal: state => {
      state.editBrochureModalVisible = !state.editBrochureModalVisible;
    },
    toggleDeleteBrochureModal: state => {
      state.deleteBrochureModalVisible = !state.deleteBrochureModalVisible;
    },
    toggleEditCardModal: state => {
      state.editCardsModalVisible = !state.editCardsModalVisible;
    },
    toggleDeleteCardModal: state => {
      state.deleteCardsModalVisible = !state.deleteCardsModalVisible;
    },
    toggleNewCategoryModal: state => {
      state.newCategoryModalVisible = !state.newCategoryModalVisible;
    },
    toggleNewCardSection: state => {
      state.cardsSecton = 'add'
    },
    toggleEditCard: state => {
      state.cardsSecton = 'edit'
    },
    setCardsSection: (state,payload) => {
      state.cardsSecton = payload;
    },
    setUsersSection:(state,payload) => {
      state.usersSection = payload;
    },
    setCategorySection: (state,payload) => {
      state.categorySection = payload;
    },
    setBusinessCards:(state,payload) => {
      state.businessCards;
      state.businessCards = payload;
    }
  },
  actions: {
    fetchAllBusinessCards:({state}) => {
      
      firebase.firestore().collection("Cards").onSnapshot(resp => {
        console.log(resp)
        let cards = [];
        resp.forEach(item => {
          cards.push(item.data())
        });
        state.businessCards = cards;
      })
    }
  },
  modules: {},
  getters:{
    
  }
});
