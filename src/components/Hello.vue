<template>
  <div id="container">
    <tophead></tophead>
    <div class="main-container">
      <div class="main-sidebar">
        <sidebarAvatar></sidebarAvatar>
      </div>
      <div class="main-content card">
        <navigator></navigator>
        <div class="main-everyday">
          <h4 class="main-title">足迹</h4>
          <div class="calendar-container">
            <calendar></calendar>
          </div>
        </div>
        <div>
          <h4 class="main-title">每天记录</h4>
          <div>
            <input type="text">
          </div>
          <div>
            <div class="main-item">
              <div>
                <p>目前数据可视化有很多前端库，需要会用Js。如果想理解透彻，对前端知识的要求并不低。比较常用的数据可视化库有：D3.js: D3.js - Data-Driven Documentshighcharts： Interactive JavaScript charts for your webpagepiktochart: Create Easy Infographics, Reports, Presentations | Piktochart百度的Echarts: ECharts 更多可参考 有哪些值得推荐的数据可视化工具？ - 数据分析 - 知乎跟传统的数据可视化相比，利用前端知识进行可视化要丰富多彩的多，各种图都有，可以看看官网给出的案例。 补充：</p>
              </div>
              <div>
                <ul>
                  <li>
                    <span>学习HTTP</span>
                    <span>02:30</span>
                  </li>
                  <li>
                    <span>学习Jquery</span>
                    <span>02:30</span>
                  </li>
                  <li>
                    <span>学习ES6</span>
                    <span>02:30</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>footer</footer>
  </div>
</template>

<script>
import tophead from './tophead'
import sidebarAvatar from './sidebar/sidebar-avatar'
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
    navigator,
    calendar
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
