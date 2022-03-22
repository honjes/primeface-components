<template>
  <nav>
    <div class="link" v-for="route in routes" :key="route.name">
      <Button label="Primary" :class="{ 'p-button-text': $route.name !== route.name, 'p-button-raised': $route.name === route.name}" @click.prevent="sendTo(route.path)">
        <router-link :to="route.path">{{route.name}}</router-link>
      </Button>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  computed: {
    routes() {
      return this.$router.getRoutes()
    },
    currentRoute() {
      return this.$route
    }
  },
  methods: {
    sendTo(path: string) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss">
nav {
  background-color: var(--surface-300);
  padding: 5px;
  display: flex;
  button.p-button {
    margin-right: 10px;
  }
  a {
    margin-right: 5px;
    text-decoration: none;
    text-transform: capitalize;
  }
}
</style>