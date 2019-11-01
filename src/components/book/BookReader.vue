<template>
    <div class="book-reader">
        <div id="read">
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Epub from 'epubjs'
global.epub = Epub
export default {
    computed:{
        ...mapGetters(['bookName'])
    },
    methods:{
        initEpub(){
            const baseUrl = 'http://47.100.139.128:8888/epub'
            const suffix = '.epub'
            const url = baseUrl + '/' + this.bookName + suffix

            this.book = new Epub(url)
            this.rendition = this.book.renderTo('read',{
                width:innerWidth,
                height:innerHeight,
                method:'default' //微信兼容
            })
            this.rendition.display()
        }
    },
    mounted(){

        
        
        this.$store.dispatch('setBookName',this.$route.params.bookName).then(() => {
            this.initEpub()
        })
        

    }
}
</script>

<style lang="scss" scoped>
</style>
