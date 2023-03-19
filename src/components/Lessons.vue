<template>
  <div class="lessons">
    <div v-for="lesson in lessons" :key="lesson.id" class="lesson border border-primary rounded">
      <Lesson @addLessonToCart="$emit('addLessonToCart', lesson)" :lesson="lesson"/>
    </div>
  </div>
</template>

<script>
import Lesson from "./Lesson.vue";

export default {
  name: 'Lessons',
  props: {
    lessons: Array
  },
  components: {
    Lesson,
  },
  emits: ['addLessonToCart']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
</style> -->
