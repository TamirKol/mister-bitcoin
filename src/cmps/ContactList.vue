<template>
    <section class="contact-list">
        <ul>
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" />
                <section class="contact-actions">
                </section>
            </li>
        </ul>
    </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue';

    export default {
        props:{
            contacts:{
                type:Array,
                requiered:true
            }
        },methods:{

        },
        components:{
    ContactPreview,
}
    }
</script>

<style lang = "scss">
.contact-list ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 0;
    gap: 10px;
    list-style: none;
    padding:10px;

}
.car-list li {
    padding:5px;
    background-color: lightgrey;
    border: 1px solid black;
    width:max-content;
}
</style>