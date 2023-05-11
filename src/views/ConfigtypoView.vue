<template>
  <div class="container-config-typo">
    <span class="config-title-typo">Configuration de la typo</span>
    <div class="container-police-style">
      <div class="police">
        <span class="police-label">Police : </span>
        <span class="police-value"
          ><select name="" id="">
            <option value="police1">police1</option>
            <option value="police2">police2</option>
          </select></span
        >
      </div>
      <div class="style">
        <span class="style-label">Style : </span>
        <span class="style-value">
          <select name="" id="">
            <option value="style1">style1</option>
            <option value="style2">style2</option>
          </select>
        </span>
      </div>
    </div>
    <div class="titre">
      <span class="titre-label">Titre :</span>
      <span class="titre-value">
        <select name="" id="">
          <option value="h1">h1</option>
          <option value="h2">h2</option>
        </select>
      </span>
    </div>
    <div class="config-typo-btn">
      <button class="validate-typo">Valider</button>
    </div>

    <div class="config-typo-btn">
      <RouterLink to="/kitui">
        <span>Retour</span>
      </RouterLink>
    </div>
  </div>
</template>

<script></script>

<style>
.config-title-typo {
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
}
.container-config-typo {
  width: 35rem;
  height: 25rem;
  border: 1px solid #707070;
  background-color: #fff;
  border-radius: 0.5rem;
  margin: auto;
  top: 1rem;
}

.container-police-style {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
}

.titre {
  text-align: center;
  top: 3rem;
}

.config-typo-btn {
  display: flex;
  justify-content: center;
  top: 10rem;
}

.validate-typo {
  width: 9rem;
  padding: 12px 14px;
  border: none;
  border-radius: 3rem;
  background-color: #d81e5b;
  color: #fff;
  transition: all 0.6s;
}

.validate-typo:hover {
  width: 10rem;
  background-color: transparent;
  border: 1px solid #d81e5b;
  color: #000000;
  transition: all 0.6s;
}
</style>
