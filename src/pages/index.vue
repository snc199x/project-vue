<template>
	<div class="contener" id="app2">
		<mt-header title="仕馨月子会所">
			<router-link to='/' slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right" @click.native="visible = true"></mt-button>
		</mt-header>
			<div class="item" v-for="(site, index) in list" :id="index"  @click="goFun(index,$event)">		
					<div class="title">{{ site.title }}</div>
					<div class="addre">{{ site.message }}</div>
					<div class="showimg" v-if="site.flag">
						<img src="../assets/ys_01.jpg">
						<img src="../assets/ys_01.jpg">
						<img src="../assets/ys_01.jpg">
					</div>

			</div>	
		<mt-actionsheet :actions="actions" v-model="visible"></mt-actionsheet>		
	</div>
</template>
<script type="es6">
	export default {
		data(){
			return{
				list: [
				{
					title: "仕磬月子会所（云山店）",
					message: "广州市白云区永平街丛云路382号（武警一队旁）",
					flag: true
				}, 
				{
				    title: "仕磬月子会所（越秀区）",
				    message: " 广州市越秀区人民中路408号大晟华厦（市妇婴医院旁）",
				    flag: false
				 }, 
				 {
				    title: "仕磬月子会所（西关店）",
				    message: " 广州市荔湾区龙津西路280号龙津华府E座",
				    flag: false
				  }, 
				  {
				    title: "仕磬月子会所（萝岗店-子品牌优若家）",
				    message: " 广州市萝岗区万达广场C1座11、15、20楼",
				    flag: false
				  }, 
				  {
				    title: "仕磬月子会所（东莞店）",
				    message: " 东莞市莞城区创业新村15座（老客运站对面）",
				    flag: false
				  }, 
				  {
				    title: "仕磬月子会所（普宁店）",
				    message: "普宁市普宁大道多年山路段新二中校区旁",
				    flag: false
				  }
				  ],
				  visible: false,
				  actions: []
			}
		},
		methods: {
			showTop() {
				console.log('show top')
			},
			addDesk() {
				console.log('add to desktop')
			},
			follow() {
				console.log('follow')
			},
			goFun(id, event) {
				this.$router.push({path: 'news?id=' + id});
			}
		},
		mounted() {
			this.actions = [{
				name: '显示在聊天顶部',
				methond: this.showTop
			},{
				name: '添加到桌面',
				methond: this.addDesk
			},{
				name: '关于仕馨月子会所',
				methond: this.follow
			}]
		}

	}
</script>
<style>
	.contener{
		font-family: "微软雅黑";
		display: flex;
  		flex-direction: column;
	}
	.contener a{
		text-decoration: none;
	}
	.contener a:visited{
		color: black;
	}
	.contener .item{
		text-align: left;
		margin:30px 20px;
		border-bottom: 2px solid gray;
	}
	.contener .item .title{
		font-size: 30px;
	}
	.contener .item .addre{
		font-size: 13px;
    	margin: 27px 0;
    	color:#A9A9A9;
	}
	.contener .item .showimg{
		margin-bottom: 32px;
		display: flex;

	}
	.contener .item .showimg img{
		width: 300px;
		height: 300px;
		margin-right: 20px;
	}
	.mint-header {
		height: 100px;
		background-color: white;
		color:black;
		font-size: 40px;
		padding: 10px 10px;
		display: flex;
	}
	.mint-header-button {
		height: 50px;
	}
	.mint-header .mint-button{
		height: 50px;
	}
	.mintui{
		font-size: 40px;
	}
	.contener .mint-actionsheet {
		width: 100%;
		position: static ! important;
		transform: translateY(-129%);
		background: #fff;
		padding-bottom: 20px;
	}
	.contener .mint-actionsheet-list{
		border-bottom: 10px solid #e0e0e0;
	}
	.contener .mint-actionsheet-list li{
		list-style: none ! important;
		margin-bottom: 26px;
	}
	.contener .mint-actionsheet .mint-actionsheet-button{
		margin-left: 40px;
		margin-top: 20px;
	}
</style>