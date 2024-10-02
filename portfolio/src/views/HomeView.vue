<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Theicons from '../components/WelcomeItem.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <Theicons/>
  </main>
</template>
<style>
main{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  flex-direction: column;
}
</style>
