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