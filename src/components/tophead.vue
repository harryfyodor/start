<template>
  <header class="card">
    <div class="header-wrap">
      <section>
        <ul class="header-btn">
          <li><a>LOGO</a></li>
          <li><a>动态</a></li>
          <li><a>广场</a></li>
        </ul>
      </section>
      <section>
        <div class="avatar"></div>
				<div class="sm-avatar-wrap">
					<img src="../assets/ycy.jpg" alt="avatar">
				</div>
      </section>
    </div>
  </header>
</template>

<script>
export default {
  name: 'tophead',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @dark-btn-text: #B7B8B8;
	@github-black: #1B1C1D;

  header {
    background-color: @github-black;
    height: 64px;
    display: flex;
    justify-content: center;
  }

  .header-wrap {
    width: 980px;
    display: flex;
    margin-top: 16px;
    justify-content: space-between;
  }

  .header-btn {
    display: flex;
    justify-content: flex-start;
    align-center: flex-start;

    a {
      color: @dark-btn-text
    }

    li {
      line-height: 2;
      padding-right: 18px;
      padding-left: 18px;
    }

    li:hover {
      border-bottom: 2px solid white;
      cursor: pointer;
      a {
        color: white;
      }
    }
  }

	.sm-avatar-wrap {
		display:inline-block;
		position:relative;
		width:36px;
		height:36px;
		overflow:hidden;
		border-radius:50%;
		border: 2px solid @dark-btn-text;
		img {
			width:auto;
			height:100%;
			margin-left:-50%;
		}
		&:hover {
			cursor: pointer;
		}
	}

</style>
