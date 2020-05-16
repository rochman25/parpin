<template>
	<h4>You are in home.</h4>
</template>
<script>
export default {
	created(){
		console.log(localStorage.getItem("accessToken"))
	}
}
</script>