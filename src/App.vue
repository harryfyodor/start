<template>
  <div id="app">
    <div id="container">
      <tophead></tophead>
      <div class="main-container">
        <router-view></router-view>
      </div>
      <footer>footer</footer>
    </div>
  </div>
</template>

<script>
import tophead from './components/tophead'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    tophead
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@border-zhihu: #e7eaf1;

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
  h4 {
    margin-top: 10px 12px;
  }
}

.calendar-container {
  margin-top: 10px;
  border: 1px solid #e7eaf1;  
  padding: 12px 10px;
  font-size: 8px;
}

.main-title {
  margin: 10px 12px;
}

.main-everyday {
  padding-bottom: 24px;
}

.main-item {
  padding: 10px;
}

</style>
