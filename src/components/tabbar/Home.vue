<template>
    <!--swipe-->
    <div><mt-swipe :auto="2000">
  <mt-swipe-item v-for="item in list" :key="item.id">
      <img :src="item.url">
  </mt-swipe-item>
   
</mt-swipe>


<!--grid layout-->
<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">News</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-image"></span>
		                    <div class="mui-media-body">Images</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
		                    <div class="mui-media-body">Shopping</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatboxes"></span>
		                    <div class="mui-media-body">Comments</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-videocam"></span>
		                    <div class="mui-media-body">Videos</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Contact</div></a></li>
		          
		        </ul> 



   </div>
    


</template>



<script>
export default {
    data(){
        return {
            list:[
               {url:'./images/dr.jpg'},
               {url:'./images/zong.jpg'},
               {url:'./images/op.gif'}

            ]

        }

    },
    methods:{
        

       
    },
    
}
</script>

<style scoped>


.mint-swipe{
    height:200px;
    
   
}
.img{
    width:100%;
    height:100%;
  
}
.mui-grid-view.mui-grid-9{

    background-color: white;
    border: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
 border: 0;

}



.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{

   height:18px;
   
}
li{

   width:137px;
}

</style>