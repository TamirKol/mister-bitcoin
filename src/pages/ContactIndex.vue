<template>
    <h1>contacts</h1>
    <ContactList v-if="contacts" :contacts="contacts" />
    <img class="loader" v-else src="../assets/img/bitcoin-logo.svg" alt="loader"/>

</template>

<script>
import {contactService} from '../services/contact.service.js'
import ContactList from '../cmps/ContactList.vue'
    export default {
        data(){
            return{
                contacts:null,
                filterBy:{
                    txt:''
                }
            }
        },
        async created(){
            this.contacts= await contactService.getContacts()
        },components:{
            ContactList,
        }
    }
</script>

<style lang = "scss">
.loader{
    height:200px;
    width:200px;
}
</style>