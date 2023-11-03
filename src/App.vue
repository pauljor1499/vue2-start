<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <router-view />
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    text-transform: none;
    list-style: none;
    font-family: sans-serif;
}

nav {
    display: flex;
    gap: 10px;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
