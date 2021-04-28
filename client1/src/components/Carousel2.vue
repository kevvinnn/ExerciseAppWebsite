<template>
    <b-carousel
        :autoplay="false"
        with-carousel-list
        :indicator="false"
        :overlay="gallery"
        @click="switchGallery(true)">
        <b-carousel-item v-for="(item, i) in items" :key="i">
            <figure class="image">
                <img :src="item.image">
            </figure>
        </b-carousel-item>
        <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
        <template #list="props">
            <b-carousel-list
                v-model="props.active"
                :data="items"
                v-bind="al"
                @switch="props.switch($event, false)"
                as-indicator />
        </template>
        <template #overlay>
            <div class="has-text-centered has-text-white">
                Hello i'am overlay!
            </div>
        </template>
    </b-carousel>
</template>

<script>
export default {
    data() {
        return {
            gallery: false,
            al: {
                hasGrayscale: true,
                itemsToShow: 2,
                breakpoints: {
                    768: {
                        hasGrayscale: false,
                        itemsToShow: 4
                    },
                    960: {
                        hasGrayscale: true,
                        itemsToShow: 6
                    }
                }
            },
            items: [
                {
                    title: 'Slide 1',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkP7PnYoRRpcZU_RecQmD3HXzGCIXMbqPzg&usqp=CAU'
                },
                {
                    title: 'Slide 2',
                    image: 'https://www.alliancehhcare.com/wp-content/uploads/2017/10/senior-man-outside-exercising.jpg'
                },
                {
                    title: 'Slide 3',
                    image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/running_at_sunset-1296x728-header.jpg?w=1155&h=1528'
                },
                {
                    title: 'Slide 4',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ydk1RZDu8kDKoeZKRr2Gnr4SDoeNBwUs5g&usqp=CAU'
                },
                {
                    title: 'Slide 5',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOUTZJ6_-cmhlVT6tJfbcOystNu6_IG5zbg&usqp=CAU'
                },
            ]
        }
    },
    methods: {
        switchGallery(value) {
            this.gallery = value
            if (value) {
                document.documentElement.classList.add('is-clipped')
            } else {
                document.documentElement.classList.remove('is-clipped')
            }
        }
    }
}
</script>


<style>

</style>