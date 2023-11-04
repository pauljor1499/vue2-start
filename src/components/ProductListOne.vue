<template>
    <div class="product-one">
        <h4>Product List One</h4>
        <div v-for="(user, index) in fetchUsers" :key="index">
            <div>
                {{ user.firstName }}
            </div>
        </div>
        <button @click="getUsers()">Get Users</button>
    </div>
</template>

<script>
export default {
    computed: {
        fetchUsers() {
            return this.$store.getters.getUsers;
        },
    },

    methods: {
        getUsers() {
            this.$store.dispatch("getUsers");
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
