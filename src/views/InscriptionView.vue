<template>
    <div>
        <input type = "email" 
        name = "email" 
        v-model = "email"
        placeholder = "email ici"
        />
        <br>
        <br>

        <input type = "password" 
        name = "password" 
        v-model = "password"
        placeholder = "mot de passe  ici"
        />
        <br>
        <br>
        <button @click = "register">
            Inscription
        </button>
    </div>




</template>
<script></script>
<style></style>
