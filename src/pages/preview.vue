<template>
	<div>
		<mt-header title="仕馨月子会所">
			<router-link :to="'/news?id=' + this.id" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right" @click.native="visible = true"></mt-button>
		</mt-header>
		<mt-swipe :auto="0" style="height:500px;background:#ccc">
			<mt-swipe-item v-for="site in imgPath[this.$route.query.id].prevview">
				<img :src="site" ></img>
			</mt-swipe-item>		    	
		</mt-swipe>
	</div>
</template>

<script type="es6">
	export default {
		data() {
			return{
				imgPath:[
					{
				      prevview: [ //预览图 云山店 big图
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_01.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_02.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_03.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_04.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_05.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_06.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_07.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_08.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_09.jpg"
				      ],
				      simgPath: [ //samll图
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_01.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_02.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_03.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_04.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_05.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_06.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_07.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_08.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_09.jpg",
				      ]
				    },
				    {
				      prevview: [ //预览图 越秀店 big图
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_01.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_02.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_03.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_04.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_05.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_06.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_07.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_08.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_09.jpg"

				      ],
				      simgPath: [ //samll图
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_01.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_02.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_03.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_04.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_05.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_06.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_07.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_08.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_09.jpg"
				      ]
				    },
				    {
				      prevview: [ //预览图 西关 big图
				        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_01.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_02.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_03.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_04.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_05.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_06.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_07.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_08.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_09.jpg"


				      ],
				      simgPath: [ //samll图
				        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_01.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_02.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_03.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_04.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_05.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_06.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_07.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_08.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_09.jpg"

				      ]
				    },
				    {
				      prevview: [ //预览图 萝岗店 big图
				        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_01.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_02.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_03.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_04.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_05.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_06.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_07.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_08.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_09.jpg"



				      ],
				      simgPath: [ //samll图
				        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_01.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_02.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_03.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_04.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_05.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_06.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_07.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_08.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_09.jpg",

				      ]
				    },
				    {
				      prevview: [ //预览图 东莞店 big图
				        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_01.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_02.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_03.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_04.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_05.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_06.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_07.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_08.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_09.jpg",



				      ],
				      simgPath: [ //samll图
				        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_01.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_02.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_03.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_04.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_05.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_06.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_07.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_08.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_09.jpg"
				      ]
				    },
				    {
				      prevview: [ //预览图 普宁店 big图
				        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_01.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_02.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_03.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_04.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_05.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_06.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_07.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_08.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_09.jpg"

				      ],
				      simgPath: [ //samll图
				        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_01.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_02.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_03.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_04.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_05.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_06.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_07.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_08.jpg",
				        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_09.jpg",
				      ]    
				    }
				 ],
			}
		},
		created(){
			var k = this.$route.query.id;
			this.id = k;
			console.log(this.imgPath[this.id].prevview)
			
		},
	}
</script>
<style>
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
</style>