<template>
  <div class="navigator">
    <ul>
      <li class="li-active"><router-link :to="{ name: 'main-index' }">每日足迹</router-link></li>
      <li><router-link :to="{ name: 'main-manage' }">目标管理</router-link></li>
      <li class=""><router-link :to="{ name: 'main-data' }">数据统计</router-link></li>
      <li><router-link :to="{ name: 'main-comments' }">评论私信</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navigator',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@backgound-main-color: #F1F1F1;
@github-black: #1B1C1D;
@normal-text: #555;

.navigator {
  display: flex;
  flex-direction: row;
  ul {
    border-bottom: 2px solid @backgound-main-color;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  li {
    border-bottom: 2px solid @backgound-main-color;
    transform: translate(0px, 2px);
    padding: 16px 16px 16px 16px;
    a {
      font-size: 14px;
      line-height: 2px;
      text-decoration: none;
    }
    &:hover {
      cursor: pointer;
      a {
        color: @github-black;
      }
    }
  }
  
}
li.li-active {
  border-bottom: 2px solid @github-black;
}
</style>
