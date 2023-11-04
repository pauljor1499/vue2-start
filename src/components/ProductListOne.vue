<template>
    <div class="product-one">
        <h4>Product List One</h4>
        <div v-if="loadingStatus === false">
            <div v-for="(user, index) in fetchUsers" :key="index">
                <div>
                    {{ user.firstName }}
                </div>
            </div>
        </div>
        <div v-else>Loading...</div>
        <button @click="getUsers()">Get Users</button>
    </div>
</template>

<script>
export default {
    computed: {
        fetchUsers() {
            return this.$store.getters.getUsers;
        },

        loadingStatus() {
            return this.$store.state.loading;
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
