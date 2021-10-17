<template>
  <div id="cookie">
    <button type="button" @click="getCookie()">get {{ result }}</button>
    <button type="button" @click="addCookie()">add</button>
    <button type="button" @click="removeCookie()">remove</button>
  </div>
</template>

<script>
import Cookie from './cookie'

export default {
    name: 'teste',
    methods: Cookie,
    data() {
        return {
            result: null
        }
    },
    methods: {
        getCookie() {
            this.result = Cache.get("MY_KEY");
        },
        addCookie() {
            Cache.add("MY_KEY", { token: "xpto-1234", 3600 });
        },
        removeCookie() {
            Cache.remove("MY_KEY");
        },
    },
    mounted() {
    
    }
}
</script>

<style>
</style>