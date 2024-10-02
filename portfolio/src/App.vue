<script setup>
import { RouterLink, RouterView } from 'vue-router'
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="wrapper">
    <header>
      <div id="headertext">
        <span id="header_text">André Röygaard</span>
      </div>
      <nav>
        <RouterLink to="/">Hem</RouterLink>
        <!-- <RouterLink to="/about">Projekt</RouterLink> -->
        <RouterLink>Kontakt(WIP)</RouterLink>
      </nav>
      <div id="darkmode">
        <span><FontAwesomeIcon icon="sun" size="xl" /> </span>

      </div>
    </header>


   <RouterView /> 
  </div>
</template>

<style scoped>
.Wrapper{
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
  
}
#header_text{
  font-size: 30px;
  font-family: "Roboto Condensed", sans-serif;
}
header{
  justify-content: center;
  width: 100wv;
  min-height: 6rem;
  margin: 0 auto;
  display: flex;
    align-items: center;
    color: whitesmoke;
    font-family: "Roboto Condensed", sans-serif;
    padding: 0;
}

#headertext{
  width: 50%;
}

nav{
  width: 20%;
    display: flex;
    justify-content: center;
}
#darkmode{
  width: 10%;
  justify-content: center;
  display: flex;
}
nav a{
  text-decoration: none;
  color: whitesmoke;
  margin: 1.5rem;
  font-size: 20px;
}
nav a:hover{
  color: green;
}
</style>
