<template>
  <aside class="sidebar menu">
    <p class="menu-label has-text-weight-bold">
      我的清单
    </p>
    <ul class="menu-list"
        style="margin-bottom: 40px;">
      <li>
        <a href="#/documentation/start"
           class="">
          <span class="menu-text">今日</span>
        </a>
      </li>
      <li>
        <a href="#/documentation/customization"
           class="router-link-exact-active is-active">
          <span class="menu-text">日志薄</span>
        </a>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  name: "aside-menu",
};
</script>
<style>
.sidebar {
  text-align: left;
  padding-top: 48px;
  padding-bottom: 48px;
  padding-right: 8px;
  padding-left: 8px;
  position: -webkit-sticky;
  position: sticky;
  top: 16px;
  overflow: auto;
  max-height: calc(100vh - 32px);
}

.sidebar .menu-list a {
  display: -ms-flexbox;
  display: flex;
  position: relative;
  padding-left: 16px;
}

.sidebar .menu-list a .chevron-icon {
  position: absolute;
  top: 12px;
  left: 0;
}

.sidebar .menu-list a .menu-text {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.sidebar .menu-list ul {
  display: none;
}

.sidebar .menu-list ul.is-active {
  display: block;
}
.menu {
  background-color: #f5f5f5;
  font-size: 16px;
}

.menu.is-small {
  font-size: 12px;
}

.menu.is-medium {
  font-size: 20px;
}

.menu.is-large {
  font-size: 24px;
}

.menu-list {
  line-height: 20px;
}

.menu-list a {
  border-radius: 2px;
  color: #4a4a4a;
  display: block;
  padding: 0.5em 0.75em;
}

.menu-list a:hover {
  background-color: #f5f5f5;
  color: #363636;
}

.menu-list a.is-active {
  background-color: #7957d5;
  color: #fff;
}

.menu-list li ul {
  border-left: 1px solid #dbdbdb;
  margin: 0.75em;
  padding-left: 0.75em;
}

.menu-label {
  color: #7a7a7a;
  font-size: 0.75em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.menu-label:not(:first-child) {
  margin-top: 1em;
}

.menu-label:not(:last-child) {
  margin-bottom: 1em;
}
</style>



