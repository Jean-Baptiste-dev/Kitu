<template>
  <div class="config-container-bouton-vue">
    <form method="post">
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
          <span class="mg-interne">Les marges internes</span>
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

        <div class="config-container-vue">
          <div class="vue-boutons">
            <div class="vue-btn1">
              <button type="submit" class="bouton1">Bouton 1</button>
            </div>
            <div class="vue-btn1">
              <button type="submit" class="bouton2">Bouton 2</button>
            </div>
          </div>
        </div>
      </div>
      <div class="config-bouton-btn">
        <button class="validate-bouton" @click="valider">Valider</button>
      </div>
    </form>
    <div class="config-bouton-btn">
      <RouterLink to="/kitui">
        <span>Retour</span>
      </RouterLink>
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
  width: 44rem;
  height: 30rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 0.5rem;
  margin: auto;
  top: 1rem;
}
.config-container-bouton,
.config-container-vue {
  width: 19rem;
  height: 18rem;
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
  top: 10px;
}

.bd-input {
  width: 7rem;
  height: 1.4rem;
  background-color: #223444;
  color: #fff;
}

.mg-interne {
  margin-left: 10px;
  font-size: 15px;
  font-weight: normal;
}

.vue-boutons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
}

.bouton2 {
  margin-top: 2rem;
}

.config-bouton-btn {
  display: flex;
  justify-content: center;
  top: 2rem;
}

.validate-bouton {
  width: 9rem;
  padding: 12px 14px;
  border: none;
  border-radius: 3rem;
  background-color: #d81e5b;
  color: #fff;
  transition: all 0.6s;
}

.validate-bouton:hover {
  width: 10rem;
  background-color: transparent;
  border: 1px solid #d81e5b;
  color: #000000;
  transition: all 0.6s;
}
</style>
