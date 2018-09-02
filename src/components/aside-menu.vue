<template>
  <aside class="sidebar menu">
    <p class="menu-label has-text-weight-bold">
      我的清单
    </p>
    <ul class="menu-list"
        style="margin-bottom: 40px;">
      <li>
        <router-link to="/todos">
          <span class="menu-text">今日</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <span class="menu-text">日志薄</span>
        </router-link>
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
.sidebar{
  text-align: left;
  background-color: #f5f5f5;
  height: 100%;
  overflow: auto;
  padding: 48px 8px;
}
</style>



