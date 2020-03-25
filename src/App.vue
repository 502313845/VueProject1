<<template>
    <!--header-->
    <div class="app-container">
    <mt-header fixed title="Vue Project"></mt-header>


    <!--router-view middle-->
	<!--add animation-->
        
		<transition mode="out-in">
		<router-view></router-view>
		</transition>
        
   
    <!--tab bar botton-->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">Home</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">Members</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopping">
				<span class=" mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">Shopping Cart</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">Search</span>
			</router-link>
		</nav>
        
</div>
</template>

<script>

</script>






<style  scoped>
   .app-container{

	   padding-top:40px;
	   overflow-x: hidden;
   } 

	.v-enter{

		opacity: 0;
		transform: translateX(100%);
	}

	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);

	}
	.v-enter-active,.v-leave-active{
		transition: all 0.6s ease;

	}
</style>