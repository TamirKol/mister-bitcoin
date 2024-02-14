<template>
    <header class="app-header">
        <h1>Mister BitCoin</h1>
        <nav>
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink to="/contact">Contacts</RouterLink>
        </nav>
    </header>
</template>

<script>
export default {
}
</script>
<style lang = "scss">
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: lightgreen;
    padding:20px ;
    a {
        text-decoration: none;
        color:black;
    }

    .router-link-exact-active{
            color:white;
            font-weight: bold;
        }
}
</style>