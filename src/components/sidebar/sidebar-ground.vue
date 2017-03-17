<template>
  <section class="side-container">
    <div class="card">
      <ul>
        <li>你所关注</li>
        <li>所有人</li>
        <li></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'sideGround',
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

</style>
