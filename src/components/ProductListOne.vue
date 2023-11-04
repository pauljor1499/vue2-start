<template>
    <div class="product-one">
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
.product-one {
    padding: 10px;
    background-color: rgb(100, 237, 219);
}
</style>
