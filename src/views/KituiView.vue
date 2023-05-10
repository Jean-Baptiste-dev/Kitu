<template>
  <div class="container">
    <div class="mode-affichage-layout">
      <div class="row">
        <div class="col-lg-3">
          <p class="mode">Mode d'apparence</p>
          <div class="form-check form-switch">
            <input
              class="form-check-input bg-check"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              class="form-check-label"
              for="flexSwitchCheckDefault"
            ></label>
          </div>
        </div>

        <div class="col-lg-9">
          <div class="layout">
            <Layout />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {},
  computed: {},
};
</script>
<style>
.mode {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}

.layout {
  width: 55rem;
  height: 70rem;
  background-color: #fff;
  border-radius: 2rem;
  border: none;
}

.bg-check {
  background-color: #d81e5b;
}
</style>
