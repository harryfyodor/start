<template>
  <div id="container">
    <tophead></tophead>
    <div class="main-container">
      <div class="main-sidebar">
        <sidebarAvatar></sidebarAvatar>
        <sidebarBegin></sidebarBegin>
      </div>
      <div class="main-content card">
        <navigator></navigator>
        <div class="calendar-container">
          <calendar></calendar>
        </div>
      </div>
    </div>
    <footer>footer</footer>
  </div>
</template>

<script>
import tophead from './tophead'
import sidebarAvatar from './sidebar/sidebar-avatar'
import sidebarBegin from './sidebar/sidebar-begin'
import navigator from './navigator'
import calendar from './content/calendar'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    tophead,
    sidebarAvatar,
    sidebarBegin,
    navigator,
    calendar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

.main-container {
  display: flex;
  width: 980px;
  margin: 25px auto;
  justify-content: space-between;
}

.main-sidebar {
  height: 1000px;
  width: 240px;
  display: flex;
  justify-content: center;
}

.main-content {
  height: 1000px;
  width: 720px;
  background-color: white;
  padding: 14px;
}

.calendar-container {
  margin-top: 20px;
  border: 1px solid #e7eaf1;  
  padding: 12px 10px;
  font-size: 8px;
}

</style>
