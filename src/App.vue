<template>
  <div id="app">
    <nav>
      <router-link to="/">Main</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Add any global styles here */
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>