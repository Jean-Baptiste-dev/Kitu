<template>
  <div class="title-desc-btn">
    <div class="title">Bienvenue sur KITUI</div>
    <div class="description">
      KITUI est un outil qui vous permet de concevoir rapidement vos Kit Ui de
      <br />
      vos maquettes web en manipulant des composants réactifs comme les <br />
      <span class="bg-bouton">boutons</span>, les
      <span class="bg-color">couleurs</span>, les
      <span class="bg-typo">typographies</span> etc...
    </div>

    <div class="btn">
      <RouterLink to="/kitui">
        <button class="home-btn">Je découvre</button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "HomeView",

  methods: {},

  computed: {},
};
</script>

<style>
.title-desc-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12rem;
}
.title {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
}
.description {
  color: #fff;
  font-weight: normal;
  font-size: 15px;
}
.btn {
  margin-top: 1rem;
}
.home-btn {
  width: 10rem;
  background-color: transparent;
  color: #fff;
  padding: 12px 14px;
  border-radius: 2rem;
  border: 1px solid #d81e5b;
  transition: all 0.6s;
}
.home-btn:hover {
  width: 11rem;
  background-color: #d81e5b;
  border: #d81e5b;
  transition: all 0.6s;
}
.bg-bouton {
  color: #d81e5b;
}
.bg-color {
  color: #17a2b8;
}
.bg-typo {
  color: #28a745;
}
</style>
