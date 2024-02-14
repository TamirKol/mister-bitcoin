<template>
    <article class="contact-preview">
        <h2>{{ contact.name }}</h2>
        <h3>{{ contact.email }}</h3>
        <h3>{{ contact.phone }}</h3>
    </article>
</template>

<script>
    export default {
        props:{
            contact:{
                type:Object,
                required:true
            }
        }
    }
</script>

<style lang = "scss">
.contact-preview{
    border:1px solid black;
}
</style>