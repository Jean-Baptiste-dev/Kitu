<template>
  <div class="color">
    <Couleur />
  </div>
  <div class="typo">
    <Typo />
  </div>

  <div class="bouton">
    <Bouton />
  </div>

  <div class="card">
    <Card />
  </div>
</template>
<script>
import Couleur from "./Couleur.vue";
import Typo from "./Typo.vue";
import Bouton from "./Bouton.vue";
import Card from "./Card.vue";

export default {
  components: {
    Couleur,
    Typo,
    Bouton,
    Card,
  },
};
</script>
<style></style>
