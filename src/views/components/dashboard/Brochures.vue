<template>
  <div class="card-box">
    <div class="table-responsive">
      <div class="row table-row">
        <div class="col-md-12">
          <h5 class="table-title">Latest additions</h5>
          <table class="table table-hover">
            <thead class="table-head">
              <tr>
                <th>Card Added</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone No</th>
                <th>Added By</th>
                <th>Action</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="badge badge-success">
                    BC
                  </span>
                </td>
                <td>Heaven Caterers</td>
                <td>22 Baker Street</td>
                <td>555-777-3434</td>
                <td>Administrator</td>
                <td>
                  <a href="" @click.prevent="()=>showEditBrochureModal()"><i class="fas fa-edit text-success" ></i></a>
                  <a href=" " @click.prevent="()=>showDeleteBrochureModal()"><i class="fas fa-times text-danger" ></i></a>
                </td>
                <td>test_user</td>
              </tr>
              <tr>
                <td>
                  <span class="badge badge-success">
                    BC
                  </span>
                </td>
                <td>Heaven Caterers</td>
                <td>22 Baker Street</td>
                <td>555-777-3434</td>
                <td>Administrator</td>
                <td>
                  <a href="" @click.prevent="()=>showEditBrochureModal()"><i class="fas fa-edit text-success" ></i></a>
                  <a href=" " @click.prevent="()=>showDeleteBrochureModal()"><i class="fas fa-times text-danger" ></i></a>
                </td>
                <td>test_user</td>
              </tr>
              <tr>
                <td>
                  <span class="badge badge-success">
                    BC
                  </span>
                </td>
                <td>Heaven Caterers</td>
                <td>22 Baker Street</td>
                <td>555-777-3434</td>
                <td>Administrator</td>
                <td>
                  <a href="" @click.prevent="()=>showEditBrochureModal()"><i class="fas fa-edit text-success" ></i></a>
                  <a href=" " @click.prevent="()=>showDeleteBrochureModal()"><i class="fas fa-times text-danger" ></i></a>
                </td>
                <td>test_user</td>
              </tr>
              <tr>
                <td>
                  <span class="badge badge-success">
                    BC
                  </span>
                </td>
                <td>Heaven Caterers</td>
                <td>22 Baker Street</td>
                <td>555-777-3434</td>
                <td>Administrator</td>
                <td>
                  <a href="" @click.prevent="()=>showEditBrochureModal()"><i class="fas fa-edit text-success" ></i></a>
                  <a href=" " @click.prevent="()=>showDeleteBrochureModal()"><i class="fas fa-times text-danger" ></i></a>
                </td>
                <td>test_user</td>
              </tr>
              <tr>
                <td>
                  <span class="badge badge-success">
                    BC
                  </span>
                </td>
                <td>Heaven Caterers</td>
                <td>22 Baker Street</td>
                <td>555-777-3434</td>
                <td>Administrator</td>
                <td>
                  <a href="" @click.prevent="()=>showEditBrochureModal()"><i class="fas fa-edit text-success" ></i></a>
                  <a href=" " @click.prevent="()=>showDeleteBrochureModal()"><i class="fas fa-times text-danger" ></i></a>
                </td>
                <td>test_user</td>
              </tr>
              <tr>
                <td>
                  <span class="badge badge-success">
                    BC
                  </span>
                </td>
                <td>Heaven Caterers</td>
                <td>22 Baker Street</td>
                <td>555-777-3434</td>
                <td>Administrator</td>
                <td>
                  <a href="" @click.prevent="()=>showEditBrochureModal()"><i class="fas fa-edit text-success" ></i></a>
                  <a href=" " @click.prevent="()=>showDeleteBrochureModal()"><i class="fas fa-times text-danger" ></i></a>
                </td>
                <td>test_user</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row pagination-row">
      <nav aria-label="Page navigation page-nav">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import store from '../../../store/index.js';
export default {
  name: "Brochures",
  computed:{
    showEditBrochureModal(){
      return store.commit('toggleEditBrochureModal');
    },
    showDeleteBrochureModal(){
      return store.commit('toggleDeleteBrochureModal');
    },
  }
};
</script>
<style scoped>
table {
  border-top: none;
  font-size: 14px;
}

th {
  font-weight: 400;
}
.table-title {
  padding: 10px;
}
.card-box {
  /* padding: 20px; */
  border: 2px solid #f3f3f3;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  /* margin-top: 100px; */
  margin-bottom: 20px;
  background-color: #ffffff;
}
.table-head {
  background-color: #f95473;
  color: white;
}
.pagination-row{
  padding-top:10px;
  
}
nav{
  width:100%;
}

li.page-item>a{
  color:#f95473;
  background-color:white;
}
li.page-item.active>a{
  color:#f95473;
  background-color: #212b5e;
  border-color: transparent;
}
</style>
