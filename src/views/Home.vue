<template>
    <div class="main-content-home">
        <SideBar :sortBy="sortBy" :ascending="ascending" @onSortChange="onSortChange" @ascChange="ascChange" />
        <Lessons @addLessonToCart="addLessonToCart" :lessons="lessons" />
    </div>
    <GoToCheckout :iscartEmpty="iscartEmpty" :cart="cart" />
</template>

<script>
import SideBar from '../components/SideBar.vue'
import Lessons from '../components/Lessons.vue'
import GoToCheckout from '../components/GoToCheckout.vue'

export default {
    name: "Home",
    components: {
        SideBar,
        Lessons,
        GoToCheckout
    },
    props: {
        sortBy: String,
        ascending: Boolean,
        lessons: Array,
        cart: Array,
        iscartEmpty: Function
    },
    emits: ['onSortChange', 'ascChange', 'addLessonToCart'],
    methods: {
        onSortChange(type) {
            console.log(type)
            this.$emit('onSortChange', type);
        },
        ascChange(isAscending) {
            this.$emit('ascChange', isAscending);
        },
        addLessonToCart(lesson) {
            this.$emit('addLessonToCart', lesson);
        }

    }
}
</script>