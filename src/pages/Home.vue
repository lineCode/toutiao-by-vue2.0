<template>
	<div>
		<div class="header home_header">
			<span class="logo">Today头条</span>
			<router-link to="/search" tag="div" class="search">
					<Icon type="ios-search" class="search_icon"></Icon>
					<div class="search_input">搜索...</div>
			</router-link>
			<div ref="refresh" class="refresh_icon">
				<Icon type="android-refresh" color="green"></Icon>
			</div>
		</div>
		<c-footer></c-footer>
		<c-home-nav></c-home-nav>
	</div>
</template>

<script>
	import CFooter from '../components/Footer.vue';
	import CHomeNav from '../components/HomeNav.vue';

	export default {
		components: {
			CFooter,
			CHomeNav
		}
	}
</script>

<style lang="scss">
	@import '../assets/style/common.scss';

	.home_header {
		background: red;
		.refresh_icon {
			font-size: px2rem(50px);
			position: absolute;
			top: px2rem(80px);
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.logo { 
		font-size: px2rem(40px);
		color: #fff;
		line-height: px2rem(80px);
		padding: 0 px2rem(40px);
		font-weight: bold;
	}
	.search {
		position: absolute;
		right: px2rem(30px);
		top: px2rem(15px);
		font-size: px2rem(26px);
		.search_icon {
			position: absolute;
			top: px2rem(12px);
			left: px2rem(12px);
		}
		.search_input {
			width: px2rem(300px);
			height: px2rem(50px);
			text-indent: px2rem(50px);
			border: 1px solid #aaa;
			border-radius: px2rem(10px);
			background: #fff;
			line-height: px2rem(50px);
		}
  }
  .home_content {
    padding-top: px2rem(140px);
  }
</style>