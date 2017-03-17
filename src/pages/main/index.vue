<template>
  <contentContainer>
		<h1>每日足迹</h1>
	</contentContainer>
</template>

<script>
import contentContainer from './content-container'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    contentContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
