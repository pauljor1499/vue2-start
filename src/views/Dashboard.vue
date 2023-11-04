<template>
    <div>
        <h4>Dashboard</h4>
        <br />
        <br />
        <span>{{ $route.params.user_id }}</span>
        <mt-search v-model="search"></mt-search>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: "",
        };
    },
};
</script>
