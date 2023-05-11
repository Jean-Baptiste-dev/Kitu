<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary custom-nav">
    <div class="container-fluid">
      <RouterLink to="/">
        <span class="navbar-brand">LOGO KITUI</span>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/connexion">
              <a class="nav-link active" aria-current="page" href="#"
                >Connexion</a
              >
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/inscription">
              <a class="nav-link" href="#">Inscription</a>
            </RouterLink>
          </li>
        </ul>
        <RouterLink to="/kitui">
          <button class="discover-btn" type="submit">Découvrir</button>
        </RouterLink>
      </div>
    </div>
  </nav>

  <RouterView />

  <footer>KITUI, tous droit réservé, 2023</footer>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {};
</script>

<style>
@media screen and (min-width: 1024px) {
  .custom-nav {
    border-radius: 2rem;
    width: 95%;
    margin: 2rem auto;
  }

  .discover-btn {
    width: 10rem;
    background-color: #d81e5b;
    color: #fff;
    padding: 12px 14px;
    border-radius: 2rem;
    border: none;
    transition: all 0.5s;
  }
  .discover-btn:hover {
    background-color: #223444;
    width: 11rem;
    transition: all 0.5s;
  }

  footer {
    text-align: center;
    color: #fff;
    top: 30rem;
  }
  body {
    background-color: #223444;
  }
}
</style>
