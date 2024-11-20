<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

</script>
<template>
  <div class="ProjectContainer">
    <div id="projecthead">
        <h2>Aktiva projekt</h2>
    </div>
    <div id="projectwrapper">
        <div class="project">

        </div>

    </div>
    
  </div>
</template>

<style scoped>
.ProjectContainer{
    width: 100%;
    height: 12rem;
    display: flex;
    margin: 0 auto;
    margin-top: 1rem;
    flex-direction: column;
}
#projecthead{
    width: 100%;
    font-weight: bold;
    color: whitesmoke;
    text-align: center;
}
#projectwrapper{
    padding-top: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}
.project{
width: 16rem;
height: 7rem;
border-radius: 0.5rem;
background-color: black;
}

</style>
