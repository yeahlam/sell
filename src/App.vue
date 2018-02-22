<template>
  <div id="app">
    <myHeader/>
    <myNav/>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from './components/Header/Header'
import myNav from './components/Nav/Nav'

export default {
  name: 'App',
  components: {myHeader,myNav }
}
</script>

<style>

</style>
