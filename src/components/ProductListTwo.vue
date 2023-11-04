<template>
    <div class="product-two">
        <div v-for="(product, index) in saleProducts" :key="index">
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

        saleProducts() {
            return this.$store.getters.saleProducts;
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
