<template>
    <div class="login-page-content">
        <div class="content-left">
            <h4>Login Page</h4>
        </div>
        <div class="content-right">
            <mt-field
                v-model="email"
                class="button-style-1"
                label="Email"
                placeholder="Email"
                type="email"
            />
            <mt-field
                v-model="password"
                class="button-style-1"
                label="Password"
                placeholder="Password"
                type="password"
            />
            <mt-button type="default" @click="clickLogin()">Login</mt-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },

    methods: {
        clickLogin() {
            this.$store.dispatch("createUser", {
                id: this.$store.state.users.length,
                email: this.email,
                password: this.password,
            });

            this.$router.push({
                name: "Dashboard",
                params: { user_id: this.email },
            });
        },
    },
};
</script>

<style scoped>
.login-page-content {
    display: flex;
}

.content-right,
.content-left {
    flex: 1;
    border: 1px solid red;
}

.content-right {
    padding: 5%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.button-style-1 {
    border: 1px solid black;
}
</style>
