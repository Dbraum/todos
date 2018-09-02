<template>
  <section id="app">
    <div class="container is-fluid is-marginless app-content">
      <div class="columns"
           style="height:100%">
        <div class="column is-3 menu">
          <aside-menu></aside-menu>
        </div>
        <div class="column">
          <transition mode="out-in"
                      enter-active-class="fadeIn"
                      leave-active-class="fadeOut"
                      appear>
            <router-view class="animated"></router-view>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AsideMenu from "./components/aside-menu";
export default {
  name: "app",
  components: {
    AsideMenu
  }
};
</script>


<style >
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#app .app-content {
  height: 100%;
}
</style>
