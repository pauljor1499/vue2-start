<template>
    <div class="product-one">
        <div v-for="(product, index) in saleProducts" :key="index">
            <div>
                {{ product }}
            </div>
        </div>
        <button v-on:click="reducePrice()">Reduce Price</button>
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

    methods: {
        reducePrice: function () {
            this.$store.commit("reducePrice");
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
