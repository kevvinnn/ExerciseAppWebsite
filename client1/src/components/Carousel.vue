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
                    image: 'https://www.gannett-cdn.com/presto/2018/09/05/USAT/c95a0f2e-2c7a-48ca-bd5d-6de52229674a-GettyImages-862317986.jpg'
                },
                {
                    title: 'Slide 2',
                    image: 'https://fitness-nation.net/wp-content/uploads/2020/07/The-Benefits-of-Exercising-Outdoors-Fitness-Nation-scaled.jpg'
                },
                {
                    title: 'Slide 3',
                    image: 'https://static-10.sinclairstoryline.com/resources/media/e87328a1-cca8-408f-b0bf-a56df96b2ea2-large16x9_GettyImages912603144.jpg?1546036005283'
                },
                {
                    title: 'Slide 4',
                    image: 'https://static.toiimg.com/thumb/msid-75427509,imgsize-457596,width-800,height-600,resizemode-75/75427509.jpg'
                },
                {
                    title: 'Slide 5',
                    image: 'https://static.scientificamerican.com/sciam/cache/file/FF3E19C0-9BE4-4E31-A8B161FC6F5E3088_source.jpg'
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