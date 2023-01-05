<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheWelcome from "../components/TheWelcome.vue";

@Component({
  components: {
    TheWelcome,
  },
})
export default class HomeView extends Vue {}
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
