<template></template>

<!--<template>
    <div>
        <h4>Dashboard</h4>
        <mt-search v-model="search"></mt-search>
        <div v-for="(item, index) in getAllUsers" :key="index">
            <div>
                {{ item }}
            </div>
        </div>
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
        getAllUsers() {
            return this.$store.getters.fetchUsers;
        },

        filterSearch() {
            const results = ["a", "b", "c", "d", "e", "f"];
            return results;
        },
    },

    created() {
        this.$store.dispatch("fetchUsers");
    },
};
</script>
-->
