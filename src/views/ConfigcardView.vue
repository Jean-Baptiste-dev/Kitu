<template>
  <div class="config-card-vue-card">
    <form action="" method="post">
      <div class="card-vue-card">
        <div class="config-card">
          <div class="config-width-height">
            <div class="config-width">
              <span class="width-label">La largeur</span>
              <input type="text" class="input-width" />
            </div>

            <div class="config-height">
              <span class="height-label">La hauteur</span>
              <input type="text" class="input-height" />
            </div>
          </div>

          <div class="border-radius-card">
            <span class="br-label">Arrondi</span>
            <input
              type="range"
              class="form-range custom-range"
              id="customRange1"
            />
          </div>
        </div>
        <div class="config-vue-card">
          <div class="config-card-title-desc">
            <span>Titre</span>
            <span>Description</span>
          </div>
        </div>
      </div>
      <div class="config-card-btn">
        <button class="validate-card" @click="valider">Valider</button>
      </div>

      <div class="config-card-btn">
        <RouterLink to="/kitui">
          <span>Retour</span>
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<script></script>

<style>
.config-card-vue-card {
  width: 44rem;
  height: 30rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 0.5rem;
  margin: auto;
  top: 1rem;
}
.card-vue-card {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 4rem;
}

.config-card,
.config-vue-card {
  width: 19rem;
  height: 18rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 0.5rem;
  margin: auto;
  top: 1rem;
}

.config-width-height {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
}

.config-height {
  margin-top: 2rem;
}
.width-label,
.height-label {
  margin-right: 1rem;
}
.input-width,
.input-height {
  background-color: #223444;
  color: #fff;
}

.border-radius-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
}

.config-card-title-desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12rem;
}

.config-card-btn {
  display: flex;
  justify-content: center;
  top: 3rem;
}

.validate-card {
  width: 9rem;
  padding: 12px 14px;
  border: none;
  border-radius: 3rem;
  background-color: #d81e5b;
  color: #fff;
  transition: all 0.6s;
}

.validate-card:hover {
  width: 10rem;
  background-color: transparent;
  border: 1px solid #d81e5b;
  color: #000000;
  transition: all 0.6s;
}
</style>
