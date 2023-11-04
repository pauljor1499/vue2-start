<template>
    <div class="product-two">
        <div v-for="(product, index) in products" :key="index">
            <div>
                {{ product }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
};
</script>

<style scoped>
.product-two {
    padding: 10px;
    background-color: cornflowerblue;
}
</style>
