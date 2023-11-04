<template>
    <div class="product-one">
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
.product-one {
    padding: 10px;
    background-color: rgb(100, 237, 219);
}
</style>
