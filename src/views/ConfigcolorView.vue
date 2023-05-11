<template>
  <div class="container-config-color">
    <form action="" method="post">
      <span class="config-tilte-color">Configuration de la couleur</span>
      <div class="sombre-claire-acent">
        <div class="conf-sombre-label">
          <div class="sombre">
            <input
              type="color"
              class="custom-type-color"
              v-model="colorData.sombre"
            />
          </div>
          <span class="config-label-sombre">Sombre</span>
        </div>

        <div class="conf-claire-label">
          <div class="claire">
            <input
              type="color"
              class="custom-type-color"
              v-model="colorData.claire"
            />
          </div>
          <span class="config-label-sombre">Claire</span>
        </div>
        <div class="conf-acent-label">
          <div class="config-acent">
            <input
              type="color"
              class="custom-type-color"
              v-model="colorData.acent"
            />
          </div>
          <span>Acent</span>
        </div>
      </div>
      <div class="config-color-btn">
        <button class="validate-color" @click="valider">Valider</button>
      </div>
    </form>
    <div class="config-color-btn">
      <RouterLink to="/kitui">
        <span>Retour</span>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorData: {
        sombre: "",
        claire: "",
        acent: "",
      },
    };
  },

  methods: {},

  computed: {},
};
</script>

<style>
.config-tilte-color {
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
}
.container-config-color {
  width: 35rem;
  height: 25rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 0.5rem;
  margin: auto;
  top: 1rem;
}

.sombre-claire-acent {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  top: 4rem;
}

.conf-sombre-label,
.conf-claire-label,
.conf-acent-label {
  flex-direction: column;
}

.config-color-btn {
  display: flex;
  justify-content: center;
  top: 10rem;
}

.validate-color {
  width: 9rem;
  padding: 12px 14px;
  border: none;
  border-radius: 3rem;
  background-color: #d81e5b;
  color: #fff;
  transition: all 0.6s;
}

.validate-color:hover {
  width: 10rem;
  background-color: transparent;
  border: 1px solid #d81e5b;
  color: #000000;
  transition: all 0.6s;
}

.custom-type-color {
  width: 5rem;
  height: 3rem;
  border: none;
  border-radius: 1rem;
}
</style>
