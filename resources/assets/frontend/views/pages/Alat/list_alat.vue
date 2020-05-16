<template>

</template>
<script>
import moduleAlat from "./../../../store/alat/moduleAlat.js"
export default {
	data() {
		return{
			isMounted: false
		}
	},
	computed:{
		alat(){
			// console.log(this.$store.state.dataAlat.alat)
			return this.$store.state.alat
		}
	},
	created(){
		if(!moduleAlat.isRegistered){
			this.$store.registerModule('dataAlat', moduleAlat)
			moduleAlat.isRegistered = true
		}
		this.$store.dispatch("dataAlat/fetchDataAlat").catch(err => {console.error(err)})
	},
	mounted(){
		this.isMounted = true;
	}
}
</script>