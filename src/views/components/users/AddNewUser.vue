<template>
  <section class="add-user-section">
    <div class="row">
      <div class="col-md-6">
        <h5>Add New User</h5>
      </div>
    </div>
    <div class="row add-new-user">
      <div class="col-md-4 media-section border-right">
        <div class="row">
          <img
            class="card-img img-responsive"
            src="../../../assets/img/user-img.jpg"
          />
        </div>

        <div class="row media-buttons">
          <!-- <div class="col-md-6">
            <button
              class="btn btn-block rounded btn-new"
              @click="showAddNewCardModal"
            >
              <i class="fas fa-camera"></i>
            </button>
          </div> -->
          <div class="col-md-6">
            <!-- <button
              class="btn btn-block rounded btn-new"
              @click="showAddNewCardModal"
            >
              <i class="fas fa-image"></i>
            </button> -->
            <input type="file" accept="image/*"/>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <form action="">
          <div class="row form-group">
            <div class="col-md-4">
              <label for="">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Riken Keiki Safety"
              />
            </div>
            <div class="col-md-4">
              <label for="">Phone</label>
              <input
                type="text"
                class="form-control"
                placeholder="555-444-3434"
              />
            </div>
            <div class="col-md-4">
              <label for="">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="ikenkeiki@gmail.com"
              />
            </div>
          </div>
          <div class="row form-group">
            <div class="col-md-4">
              <label for="exampleFormControlSelect1">User type</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Management</option>
                <option>Backend Data Entry</option>
                <option>Data Collection</option>
              </select>
            </div>
            <div class="col-md-8">
              <label for="">Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="12B Bake Street"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <label for="">District</label>
              <input type="text" class="form-control" placeholder="Thrissur" />
            </div>
            <div class="col-md-4">
              <label for="">State</label>
              <input type="text" class="form-control" placeholder="kerala" />
            </div>
            <div class="col-md-4">
              <label for="">Country</label>
              <input type="text" class="form-control" placeholder="India" />
            </div>
          </div>
          <div class="row button-sec">
            <div class="col-md-3">
              <button
                class="btn btn-block rounded btn-new"
                @click="handleBackToUser"
              >
                <span>Back</span>
              </button>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3">
              <button
                class="btn btn-block rounded btn-new"
                @click="handleBackToCards"
              >
                <span>Add User</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  </section>
</template>

<script>
import store from "../../../store/index.js";
export default {
  name: "AddNewUser",
  methods: {
    handleBackToUser() {
      store.commit("setUsersSection", "table");
    }
  }
};
</script>

<style scoped>
.add-user-section {
  margin-top: 20px;
}
.btn-new {
  background-color: #f95473;
  color: white;
}
.button-sec {
  margin-top: 50px;
}
.add-new-user {
  border: 2px solid #f3f3f3;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  /* margin-top: 100px; */
  margin-bottom: 20px;
  background-color: #ffffff;
  padding-bottom: 20px;
}
.card-img {
  border-radius: 50%;
  margin-bottom: 20px;
}
form {
  padding-top: 20px;
}
.media-section {
  padding: 20px;
}
</style>
