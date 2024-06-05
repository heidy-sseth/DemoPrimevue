<template>
    <v-container class="image ">
        <h1>Soy el inicio</h1>
    </v-container>
</template>

<script setup>
</script>

<style scoped>
.image {
    height: 100vh;
    width: 100%;
    background-image: url("@/assets/background-left.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    /* align-items: flex-end; */
    align-content: center;
    flex-direction: column;
    /* justify-content: center; */
    /* padding-right: 10em; */
}
</style>