<template>
  <div class="config-container-bouton-vue">
    <div class="bouton-vue">
      <div class="config-container-bouton">
        <div class="config-border-radius">
          <span class="bd-label">Arrondi</span>
          <input
            type="range"
            class="form-range custom-range"
            id="customRange1"
          />
        </div>

        <div class="config-btn-text">
          <span class="bd-label">Taille du text</span>
          <input
            type="range"
            class="form-range custom-range"
            id="customRange1"
          />
        </div>

        <div class="config-padding">
          <div class="vertical-horizontale">
            <div class="vertical">
              <span class="bd-label">Vertical</span>
              <input type="text" class="bd-input" />
            </div>

            <div class="horizontal">
              <span class="bd-label">Horizontal</span>
              <input type="text" class="bd-input" />
            </div>
          </div>
        </div>
      </div>

      <div class="config-container-vue"></div>
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
.config-container-bouton-vue {
  width: 40rem;
  height: 25rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 0.5rem;
  margin: auto;
  top: 1rem;
}
.config-container-bouton,
.config-container-vue {
  width: 17rem;
  height: 14rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 0.5rem;
  margin: auto;
  top: 1rem;
}
.bouton-vue {
  display: flex;
  justify-content: space-evenly;
  margin-top: 4rem;
}

.config-border-radius,
.config-btn-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1rem;
  padding: 4px 4px;
}

.vertical-horizontale {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
}

.bd-input {
  width: 7rem;
  height: 1.4rem;
  background-color: #223444;
}
</style>
