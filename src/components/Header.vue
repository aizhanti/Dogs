<template>
  <div id="header">
   {{ title }}
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: "Header",
  props: {
    title: String,
  },
}
</script>

<style scoped>
#header {
	background: linear-gradient(
		45deg,
		#ae7ca2 0%,
		#b382a2 5%,
		#b584a4 6%,
		#dcadb3 28%,
		#deb4b8 30%,
		#e2bab8 35%,
		#e7c0bb 38%,
		#eac5bd 46%,
		#ebc6c0 46%,
		#ebc5c4 51%,
		#eac2c2 52%,
		#e7bfc0 54%,
		#e6bdc3 57%,
		#e2b3c3 60%,
		#dbaabf 65%,
		#d9a2c1 67%,
		#d299ba 71%,
		#d397bb 71%,
		#d092b9 72%,
		#d291bb 72%,
		#ca84b6 76%,
		#cb7eb6 78%,
		#c574af 80%,
		#c46bad 84%,
		#bc5ca4 88%,
		#bd56a5 90%,
		#b84b9e 94%,
		#ba439d 96%,
		#b8409a 100%
  );	
  text-align: center;
	color: #751c16;
	margin: 0;
	margin-bottom: 32px;
	padding: 16px 0;
	width: 100%;
}
</style>