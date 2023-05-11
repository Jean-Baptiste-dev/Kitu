<template>
  <div class="container-color {{ bgColor == true ? 'custom-layout' : ''}}">
    <div class="config-kit">
      <RouterLink to="/config-color">
        <i class="fa-duotone fa-gear">Configurer couleur</i>
      </RouterLink>
    </div>
    <p class="title-ui-color">Les couleurs</p>
    <div class="container-sombre-claire-acent">
      <div class="container-sombre-label">
        <div class="container-sombre">
          <div class="container-colors-sombre">
            <div class="color-sombre"></div>
            <div class="color-sombre2"></div>
            <div class="color-sombre3"></div>
          </div>
        </div>
        <span class="label-sombre">Sombre</span>
      </div>

      <div class="container-claire-label">
        <div class="container-claire">
          <div class="container-colors-claire">
            <div class="color-claire"></div>
            <div class="color-claire2"></div>
            <div class="color-claire3"></div>
          </div>
        </div>
        <span class="label-claire">Claire</span>
      </div>

      <div class="acent-label">
        <div class="acent"></div>
        <span class="label-acent">Acent</span>
      </div>
    </div>
  </div>

  <div class="container-typo">
    <div class="config-kit">
      <RouterLink to="/config-typo">
        <i class="fa-duotone fa-gear">Configurer typo</i>
      </RouterLink>
    </div>
    <p class="title-ui-color">La typographie</p>
    <div class="police-style">
      <div class="police-label-value">
        <span class="police-label">Police :</span>
        <span class="police-value">Value</span>
      </div>
      <div class="style-label-value">
        <span class="style-label">Style :</span>
        <span class="style-value">regular</span>
      </div>
    </div>

    <div class="titre-h1-h6">
      <div class="titre-label">Titre</div>
      <div class="titre-value">h1</div>
    </div>

    <span class="description-typo"
      >Loremmmmmmm LoremmmmmmLoremmmmmmm Loremmmmmmm Loremmmmmmm m</span
    >
  </div>

  <div class="container-components">
    <p class="title-ui-color">Les composants</p>
    <div class="btns-label-cards">
      <span>Boutons</span>
      <span>Card ou tuile</span>
    </div>
    <div class="container-components-details">
      <div class="container-buttons">
        <div class="buttons">
          <div class="btn1">
            <button type="submit" class="kitui-btn">Bouton 1</button>
          </div>
          <div class="btn2">
            <button type="submit" class="kitui-btn">Bouton 2</button>
          </div>
        </div>
      </div>

      <div class="container-cards">
        <div class="card-title-description">
          <span class="card-title">Titre</span>

          <span class="card-description">Description</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    bgColor: Boolean,
  },
};
</script>

<style>
.title-ui-color {
  text-align: center;
  margin-top: 1rem;
  font-size: 20px;
  font-weight: bold;
}
.custom-layout {
  background-color: #000;
}
.container-color,
.container-typo {
  width: 45rem;
  height: 15rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 2rem;
  top: 1rem;
  margin: auto;
}
.container-typo {
  margin-top: 2rem;
}
.container-colors-sombre,
.container-colors-claire {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  bottom: 1rem;
}

.container-sombre {
  width: 16rem;
  height: 5rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 1rem;
  top: 2rem;
}
.container-claire {
  width: 16rem;
  height: 5rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 1rem;
  top: 2rem;
}
.acent,
.color-sombre,
.color-sombre2,
.color-sombre3,
.color-claire,
.color-claire2,
.color-claire3 {
  width: 4rem;
  height: 3rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 1rem;
  top: 2rem;
}

.container-sombre-claire-acent {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.container-sombre-label,
.container-claire-label,
.acent-label {
  display: flex;
  flex-direction: column;
}
.label-sombre,
.label-acent,
.label-claire {
  text-align: center;
  top: 2rem;
  font-weight: bold;
  font-size: 0.8rem;
}

.police-style {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
}

.titre-h1-h6,
.description-typo {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.police-value,
.style-value,
.titre-value {
  margin-left: 1rem;
}

.container-components {
  width: 45rem;
  height: 30rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 2rem;
  top: 3rem;
  margin: auto;
}
.container-components-details {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
}

.container-buttons {
  width: 18rem;
  height: 18rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 4rem;
  top: 1rem;
}
.container-cards {
  width: 18rem;
  height: 18rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 0.5rem;
  top: 1rem;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7rem auto;
}

.btn2 {
  margin-top: 1rem;
}

.card-title-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12rem auto;
}

.btns-label-cards {
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 2rem;
}

.config-kit {
  display: flex;
  justify-content: center;
}
</style>
