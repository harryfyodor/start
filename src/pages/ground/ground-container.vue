<template>
  <div class="main-container">
    <div class="main-sidebar">
      <sidebarGround></sidebarGround>
    </div>
    <div class="main-content card">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import sidebarGround from '../../components/sidebar/sidebar-ground'

export default {
  name: 'groundContainer',
  components: {
    sidebarGround
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
