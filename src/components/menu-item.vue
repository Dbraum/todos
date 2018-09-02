<template>
  <router-link :to="path">
    <span class="menu-text">{{name}}</span>
  </router-link>
</template>

<script>
export default {
  name: "aside-menu-item",
  props: {
    path: String,
    name: String
  }
};
</script>

