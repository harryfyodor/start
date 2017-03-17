<template>
  <div class="main-sidebar">
		<sidebarAvatar></sidebarAvatar>
		<sidebarBegin></sidebarBegin>
	</div>
</template>

<script>
import sidebarAvatar from './sidebar-avatar'
import sidebarBegin from './sidebar-begin'

export default {
  name: 'sidebar-main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
