<template>
    <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Users">
            <b-autocomplete
                rounded
                v-model="firstname"
                :data="filteredDataArray"
                placeholder="Users"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template #empty>No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
import Vue from "vue";
import { GetAllUsers } from "../models/Users";

export default Vue.extend({
  data: ()=> ({
    users: [],
    firstname: '',
    selected: null
  }),
      async mounted() {
        this.users = await GetAllUsers();
    },
        computed: {
            filteredDataArray() {
                return this.users.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.firstname.toLowerCase()) >= 0
                })
            }
        }
    })
</script>