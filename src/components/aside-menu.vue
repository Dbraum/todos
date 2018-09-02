<template>
  <aside class="sidebar menu">
    <div>
      <p class="menu-label has-text-weight-bold">
      我的
    </p>
    <ul class="menu-list"
        style="margin-bottom: 2.5rem;">
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
    </div>
    <p class="menu-label has-text-weight-bold">
      Layout
    </p>
    <ul class="menu-list"
        style="margin-bottom: 2.5rem;">
      <li>
        <a href="#/documentation/layout"
           class="">
          <span class="menu-text">Layout &amp; elements</span>

        </a>
      </li>
    </ul>
    <p class="menu-label has-text-weight-bold">
      UI components
    </p>
    <ul class="menu-list"
        style="margin-bottom: 2.5rem;">
      <li>
        <a href="#/documentation/collapse"
           class="">
          <span class="menu-text">Collapse</span>

        </a>
      </li>
      <li>
        <a href="#/documentation/dialog"
           class="">
          <span class="menu-text">Dialog</span>

        </a>
      </li>
      <li>
        <a href="#/documentation/dropdown"
           class="">
          <span class="menu-text">Dropdown</span>

        </a>
      </li>
      <li>
        <a role="button">
          <span class="icon chevron-icon is-small">
            <i class="mdi mdi-chevron-right mdi-rotate-90"></i>
          </span>
          <span class="menu-text">Form controls</span>
        </a>
        <ul class="is-active">
          <li>
            <a href="#/documentation/autocomplete"
               class="">
              <span class="menu-text">Autocomplete</span>

              <span class="tag is-info">
                <span class="">Update</span>

              </span>
            </a>
          </li>
          <li>
            <a href="#/documentation/checkbox"
               class="">
              <span class="menu-text">Checkbox</span>

              <span class="tag is-info">
                <span class="">Update</span>

              </span>
            </a>
          </li>
          <li>
            <a href="#/documentation/datepicker"
               class="">
              <span class="menu-text">Datepicker</span>

            </a>
          </li>
          <li>
            <a href="#/documentation/field"
               class="">
              <span class="menu-text">Field</span>

            </a>
          </li>
          <li>
            <a href="#/documentation/input"
               class="">
              <span class="menu-text">Input</span>

            </a>
          </li>
          <li>
            <a href="#/documentation/radio"
               class="">
              <span class="menu-text">Radio</span>

              <span class="tag is-info">
                <span class="">Update</span>

              </span>
            </a>
          </li>
          <li>
            <a href="#/documentation/select"
               class="">
              <span class="menu-text">Select</span>

            </a>
          </li>
          <li>
            <a href="#/documentation/switch"
               class="">
              <span class="menu-text">Switch</span>

            </a>
          </li>
          <li>
            <a href="#/documentation/taginput"
               class="">
              <span class="menu-text">Taginput</span>

              <span class="tag is-info">
                <span class="">Update</span>

              </span>
            </a>
          </li>
          <li>
            <a href="#/documentation/timepicker"
               class="">
              <span class="menu-text">Timepicker</span>

            </a>
          </li>
          <li>
            <a href="#/documentation/upload"
               class="">
              <span class="menu-text">Upload</span>

            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#/documentation/icon"
           class="">
          <span class="menu-text">Icon</span>

        </a>
      </li>
      <li>
        <a href="#/documentation/loading"
           class="">
          <span class="menu-text">Loading</span>

        </a>
      </li>
      <li>
        <a href="#/documentation/message"
           class="">
          <span class="menu-text">Message</span>

        </a>
      </li>
      <li>
        <a href="#/documentation/modal"
           class="">
          <span class="menu-text">Modal</span>

        </a>
      </li>
      <li>
        <a href="#/documentation/notification"
           class="">
          <span class="menu-text">Notification</span>

        </a>
      </li>
      <li>
        <a href="#/documentation/pagination"
           class="">
          <span class="menu-text">Pagination</span>

        </a>
      </li>
      <li>
        <a href="#/documentation/snackbar"
           class="">
          <span class="menu-text">Snackbar</span>

        </a>
      </li>
      <li>
        <a href="#/documentation/table"
           class="">
          <span class="menu-text">Table</span>

        </a>
      </li>
      <li>
        <a href="#/documentation/tabs"
           class="">
          <span class="menu-text">Tabs</span>

        </a>
      </li>
      <li>
        <a href="#/documentation/tag"
           class="">
          <span class="menu-text">Tag</span>

          <span class="tag is-info">
            <span class="">Update</span>

          </span>
        </a>
      </li>
      <li>
        <a href="#/documentation/toast"
           class="">
          <span class="menu-text">Toast</span>

        </a>
      </li>
      <li>
        <a href="#/documentation/tooltip"
           class="">
          <span class="menu-text">Tooltip</span>

        </a>
      </li>
    </ul>
  </aside>
</template>
<script>
import MenuItem from "./menu-item";
export default {
  name: "aside-menu",
  components: {
    MenuItem
  }
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



