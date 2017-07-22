<template>
	<div class="contener">
		<mt-header title="仕馨月子会所">
			<router-link to='/index' slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right" @click.native="visible = true"></mt-button>
		</mt-header>
		<div class="first">
			<div class="title">
				<div class="name">{{ this.list[this.id].name }}</div>
				<div class="addre">{{ this.list[this.id].area }}</div>
				<div class="jobs">
					<p>亲子·孕产护理</p>
				</div>
			</div>
			<div class="logo">
				<img src="../assets/logoy.png">
			</div>
		</div>
		<div class="second" >
			<img src="../assets/icon_map.png" class="adlogo" >
			<p class="address">{{ this.list[this.id].address }}</p>
			<img src="../assets/icon_jt.png">
		</div>
		<div class="second">
			<img src="../assets/icon_clock.png" class="adlogo">
			<p class="address" @click="phoneCall(list[id].phon)">{{ this.list[this.id].phon }}</p>
			<img src="../assets/icon_jt.png">
		</div>
		<div class="second">
			<img src="../assets/icon_tel.png" class="adlogo">
			<p class="address">{{ this.list[this.id].time }}</p>
		</div>
		<div class="second">
			<img src="../assets/icon_ip.png" class="adlogo">
			<p class="address">门店照片</p>
		</div>
		<div class="p-b" @click="goPre(id,$event)">
			<div class="p" v-for="site in imgPath[this.id].simgPath">
				<img :src="site" @click="goPre(id,$event)">
			</div>
		</div>
		<mt-actionsheet :actions="actions" v-model="visible"></mt-actionsheet>
		<!-- 
			<mt-popup v-model="visible" popup-transition="popup-fade">
			<img src="../assets/ys_01.jpg">
			</mt-popup>
		 -->								
	</div>
</template>

<script type="es6">
	export default {
		data(){
			return{
				list:[
				  { name:"仕磬月子会所（云山店）",
				    area:"广州市白云区",
				    address:"广州市白云区永平街丛云路382号（武警一队旁）",
				    phon:"4001801833",
				    time:"8:00 - 23:00",
				    lati: 23.217180,
				    long: 113.299040
				  },
				  {
				    name: "仕磬月子会所（越秀区）",
				    area: "广州市越秀区",
				    address: "广州市越秀区人民中路408号大晟华厦（市妇婴医院旁））",
				    phon: "4001801833",
				    time: "8:00 - 23:00",  
				    lati: 23.124360,
				    long: 113.254570
				  },
				  {
				    name: "仕磬月子会所(西关店)",
				    area: "广州市荔湾区",
				    address:" 广州市荔湾区龙津西路280号龙津华府E座",
				    phon: "4001801833",
				    time: "8:00 - 23:00",
				    lati: 23.123420,
				    long: 113.241490
				  }
				  ,
				  {
				    name: "仕磬月子会所（萝岗店-子品牌优若家）",
				    area: "广州市萝岗区",
				    address: "广州市萝岗区万达广场C1座11、15、20楼",
				    phon: "4001801833",
				    time: "8:00 - 23:00", 
				    lati: 23.166600,
				    long: 113.466630
				  },
				  {
				    name: "仕磬月子会所（东莞店）",
				    area: "东莞市莞城区",
				    address: "东莞市莞城区创业新村15座（老客运站对面）",
				    phon: "4001801833",
				    time: "8:00 - 23:00",
				    lati: 23.034980,
				    long: 113.747170
				  },
				  {
				    name: "仕磬月子会所（普宁店）",
				    area: "普宁市普宁大道",
				    address: "普宁市普宁大道多年山路段新二中校区旁",
				    phon: "4001801833",
				    time: "8:00 - 23:00",
				    lati: 23.278640,
				    long: 116.131550
				  }
				],
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
			visible: false,
			ivisible:false,
			actions: []
			}
		},
		created(){
			this.id = this.$route.query.id
			console.log(this.id)
			
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
			phoneCall:function(msg) {
				console.log(msg)
				window.location.href = 'tel:' + msg
			},
			goMap(id, event) {
				this.$router.push({path: 'maps?id=' + id})
				console.log(id)
				console.log(event)
			},
			goPre(id,event) {
				this.$router.push({path: 'preview?id=' + id})
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
	    margin: 40px 30px; 
	}
	.contener .first{
		display: flex;
		border-bottom: 5px dashed lightgray;
		margin-top: 53px;
	}
	.contener .fitst .title{
		display: flex;
		flex-direction: column;
	}
	.contener .first .name{
		font-size:46px;
		margin-bottom: 10px;
	}
	.contener .first .addre{
		font-size: 40px;
		flex-wrap: nowrap;
		margin-top: 10px;
	}
	.contener .first .jobs p{
		font-size: 30px;
		margin-bottom: 80px;
		margin-top: 15px;
	}
	.contener .logo {
		width: 200px;
		height: 200px;
		margin-left: 100px;
	}
	.contener .second{  
	  display: flex;
	  justify-content: center;
	  margin-top: 60px;
	  height: 50px;
	}
	.contener .second .adlogo{
	  width: 50px;
	  height: 50px;
	}
	.contener .second .address{	  
	  font-size: 36px;
	  margin:0 0 0 20px ! important;
	  flex: auto; 
	  padding-top: 2px; 
	}
	.contener .second .arrow{
	  width: 10px;
	  height: 10px;
	  align-self: center;
	}
	.contener .p-b{
		display: flex;
		flex-wrap: wrap;
		justify-content:space-around;
		margin-top: 20px;
	}
	.contener .p-b .p img{
		width: 280px;
		height: 150px;
		margin-top: 10px;
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
		font-size: 40px;
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