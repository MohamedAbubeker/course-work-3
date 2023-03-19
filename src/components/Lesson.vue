<template>
    <div class="lesson-content">
        <h4>Subject: {{ lesson.topic }}</h4>
        <h4>Loacation: {{ lesson.location }}</h4>
        <h4>Price: <i class="fas fa-pound-sign"></i> {{ lesson.price }}</h4>
        <h4>Spaces: {{ lesson.space }}</h4>
        <button v-if="isLessonFull(lesson)" type="button" @click="$emit('addLessonToCart', lesson)" disabled>Add to cart</button>
        <button v-else type="button" @click="$emit('addLessonToCart', lesson)">Add to cart</button>
    </div>
    <div class="lesson-img-div">
        <img class="lesson-img" :src="lesson.image" :alt="lesson.topic">
    </div>
</template>

<script>
export default {
    name: 'Lesson',
    props: {
        lesson: Object,
        cart: Array
    },
    methods: {
        isLessonFull(lesson) {
            if (lesson.space === 0) return true;
        }
    },
    emits: ['addLessonToCart']
}
</script>