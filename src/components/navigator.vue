<template>
  <div class="navigator">
    <ul>
      <li class="li-active"><a>每日足迹</a></li>
      <li><a>目标管理</a></li>
      <li><a>评论私信</a></li>
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
