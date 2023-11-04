<template>
    <div class="product-two">
        <h4>Product List Two</h4>
        <div v-for="(product, index) in saleProducts" :key="index">
            <div>
                {{ product }}
            </div>
        </div>
        <button v-on:click="reducePrice(4)">Reduce Price</button>
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
        reducePrice(amount) {
            // this.$store.commit("reducePrice", amount);
            this.$store.dispatch("reducePrice", amount);
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
