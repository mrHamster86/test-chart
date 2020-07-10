<template>
  <div id="app" class="container">
    <Selectors/>
  </div>
</template>

<script>
import Selectors from "@/components/Selectors";

export default {
  name: 'App',
  components: {Selectors}
}
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";
</style>
