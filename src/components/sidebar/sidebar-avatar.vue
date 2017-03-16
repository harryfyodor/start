<template>
  <section class="side-container">
    <div class="side-avatar card">
      <div class="avatar-wrap">
        <img src="../../assets/ycy.jpg" alt="avatar" class="avatar">
      </div>
      <div class="avatar-contact">
        <ul>
          <li>
            <span class="indicator-text">关注了</span>
            <span>12</span>
          </li>
          <li>
            <span class="indicator-text">关注者</span>
            <span>28</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="side-begin card">
      <button class="normal-btn">记录今日</button>
      <span class="indicator-text">当前目标：成为前端工程师</span>
      <a href="#">切换目标</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'sidebarAvatar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@vscode-blue: #0270BC;

.side-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-center: center;
}

.side-avatar {
  background-color: white;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 14px 20px 14px;
}

.avatar-contact {
  ul {
    padding-top: 10px;
    border-top: 1px solid #e7eaf1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 50%;
  }
  li:first-child {
    border-right: 1px solid #e7eaf1;
  }
  li:hover {
    cursor: pointer;
    span {
      color: @vscode-blue;
      font-weight: 500;
    }
  }
}

.avatar-wrap {
  margin: 20px auto;
  display:inline-block;
  position:relative;
  width:140px;
  height:140px;
  overflow:hidden;
  border-radius:50%;
  img {
    width:auto;
    height:100%;
    margin-left:-50%;
  }
}

.side-begin {
  background-color: white;
  padding: 14px;
  display: flex;
  flex-direction: column;
  span {
    line-height: 2
  }
}
</style>
