<template>
  <section>
    

    <div class="row">
      <div class="col-md-8">
        <div class="form-group mg-b-10">
          <h5 for="">Select Category Items</h5>
          
        </div>
        <form action="">
          <table class="table table-hover">
            <thead class="table-head">
              <tr>
                <th>Select</th>
                <th>Card</th>
                <th>Company Name</th>
                <th>Phone No</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                      checked
                    />
                    <label
                      class="custom-control-label"
                      for="customCheck1"
                    ></label>
                  </div>
                </td>
                <td>
                  <img
                    class="card-img img-responsive"
                    src="https://www.digitalprinting.co.uk/media/images/products/slides/2/business-cards-1.jpg"
                  />
                </td>
                <td>
                  We Care Services
                </td>

                <td>555-777-3434</td>

                <td>
                  <p>
                    <span class="badge badge-info">Laptop Service</span>
                  </p>
                  <p>
                    <span class="badge badge-info">Mobile Service</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                      checked
                    />
                    <label
                      class="custom-control-label"
                      for="customCheck1"
                    ></label>
                  </div>
                </td>
                <td>
                  <img
                    class="card-img img-responsive"
                    src="https://www.digitalprinting.co.uk/media/images/products/slides/2/business-cards-1.jpg"
                  />
                </td>
                <td>
                  We Care Services
                </td>

                <td>555-777-3434</td>

                <td>
                  <p>
                    <span class="badge badge-info">Laptop Service</span>
                  </p>
                  <p>
                    <span class="badge badge-info">Mobile Service</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      class="custom-control-label"
                      for="customCheck1"
                    ></label>
                  </div>
                </td>
                <td>
                  <img
                    class="card-img img-responsive"
                    src="https://www.digitalprinting.co.uk/media/images/products/slides/2/business-cards-1.jpg"
                  />
                </td>
                <td>
                  We Care Services
                </td>

                <td>555-777-3434</td>

                <td>
                  <p>
                    <span class="badge badge-info">Laptop Service</span>
                  </p>
                  <p>
                    <span class="badge badge-info">Mobile Service</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      class="custom-control-label"
                      for="customCheck1"
                    ></label>
                  </div>
                </td>
                <td>
                  <img
                    class="card-img img-responsive"
                    src="https://www.digitalprinting.co.uk/media/images/products/slides/2/business-cards-1.jpg"
                  />
                </td>
                <td>
                  We Care Services
                </td>

                <td>555-777-3434</td>

                <td>
                  <p>
                    <span class="badge badge-info">Laptop Service</span>
                  </p>
                  <p>
                    <span class="badge badge-info">Mobile Service</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                      checked
                    />
                    <label
                      class="custom-control-label"
                      for="customCheck1"
                    ></label>
                  </div>
                </td>
                <td>
                  <img
                    class="card-img img-responsive"
                    src="https://www.digitalprinting.co.uk/media/images/products/slides/2/business-cards-1.jpg"
                  />
                </td>
                <td>
                  We Care Services
                </td>

                <td>555-777-3434</td>

                <td>
                  <p>
                    <span class="badge badge-info">Laptop Service</span>
                  </p>
                  <p>
                    <span class="badge badge-info">Mobile Service</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          
        </form>
      </div>
      <div class="col-md-4">
        <div class="form-group mg-b-10">
          <h5 for="">New Category</h5>
          <input
            type="text"
            class="form-control"
            placeholder="Category Name"
          />
        </div>

        <table class="table table-hover">
          <thead class="table-head">
            <tr>
              <th>Card</th>
              <th>Company Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  class="card-img img-responsive"
                  src="https://www.digitalprinting.co.uk/media/images/products/slides/2/business-cards-1.jpg"
                />
              </td>
              <td>
                We Care Services
              </td>
            </tr>
            <tr>
              <td>
                <img
                  class="card-img img-responsive"
                  src="https://www.digitalprinting.co.uk/media/images/products/slides/2/business-cards-1.jpg"
                />
              </td>
              <td>
                We Care Services
              </td>
            </tr>
            <tr>
              <td>
                <img
                  class="card-img img-responsive"
                  src="https://www.digitalprinting.co.uk/media/images/products/slides/2/business-cards-1.jpg"
                />
              </td>
              <td>
                We Care Services
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row">
            <div class="col-md-6">
              <button
                class="btn btn-block rounded btn-new"
                @click.prevent="handleBackToCategory"
              >
                <span>Back</span>
              </button>
            </div>
            <div class="col-md-6">
              <button class="btn btn-block rounded btn-new">
                <span>Save Category</span>
              </button>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "../../../store/index.js";
export default {
  name: "AddNewCategory",
  methods: {
    handleBackToCategory() {
      store.commit("setCategorySection", "table");
    }
  }
};
</script>

<style scoped>
input.form-control {
  font-size: 14px;
}
.card-img {
  width: 100px;
}

tbody {
  height: 250px;
}

section {
  font-size: 14px;
}
</style>
