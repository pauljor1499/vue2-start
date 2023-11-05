<template>
    <div class="product-one">
        <h4>Product List One</h4>
        <div v-if="fetchUsers.length !== 0">
            <input v-model="search" type="text" placeholder="Search" />
            <div v-for="(user, index) in searchUsers" :key="index">
                <div>
                    {{ user.firstName }}
                </div>
            </div>
        </div>
        <div v-if="loadingStatus">Loading...</div>
        <button @click="getUsers()">Get Users</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: "",
        };
    },

    computed: {
        fetchUsers() {
            return this.$store.state.users;
        },

        loadingStatus() {
            return this.$store.state.loading;
        },

        searchUsers() {
            const users = this.$store.state.users.filter((user) => {
                return this.search.toLowerCase() === ""
                    ? user
                    : user.firstName.toLowerCase().includes(this.search.toLowerCase());
            });
            return users;
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
