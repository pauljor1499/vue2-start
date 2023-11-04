<template>
    <div>
        <div v-for="(product, index) in products" :key="index">
            <div>
                {{ product }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: Array,
    },
};
</script>
