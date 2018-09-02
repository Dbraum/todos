<template>
  <ul class="menu-list"
      style="margin-bottom: 40px;">
    <li>
      <a href="#/documentation/start"
         class="">
        <span class="menu-text">Start</span>
      </a>
    </li>
    <li>
      <a href="#/documentation/customization"
         class="router-link-exact-active is-active">
        <span class="menu-text">Customization</span>
      </a>
    </li>
    <li>
      <a href="#/documentation/constructor-options"
         class="">
        <span class="menu-text">Constructor options</span>
      </a>
    </li>
  </ul>
</template>

<script>
import MenuItem from "./menu-item";
export default {
  name: "aside-menu-list",
  components:{
    MenuItem
  },
  props: {
    path: String,
    name: String
  }
};
</script>

