<template>
  <Header />
  <router-view :cart="cart" :iscartEmpty="iscartEmpty" :sortBy="sortBy" :ascending="ascending" :lessons="sortLessons"
    @addLessonToCart="addLessonToCart" @onSortChange="onSortChange" @ascChange="ascChange"
    @removeLessonFromCart="removeLessonFromCart"></router-view>
    
</template>

<script>
import Header from './components/Header.vue'
import Lesson from './components/Lesson.vue';

export default {
  name: 'App',
  components: {
    Header,
    Lesson
},
  data() {
    return {
      lessons: [],
      sortBy: localStorage.getItem("sortBy") ? JSON.parse(localStorage.getItem("sortBy")) : "price",  // this needs repair
      ascending: localStorage.getItem("ascending") ? JSON.parse(localStorage.getItem("ascending")) : true,
      cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    }
  },
  created() {
    if (!JSON.parse(localStorage.getItem("lessons"))) {
      fetch('https://course-work-3-backend-production.up.railway.app/lessons')
        .then((res) => res.json())
        .then((data) => {
          this.lessons = data;
          localStorage.setItem("lessons", JSON.stringify(this.lessons));
        })
        .catch((err) => console.log(err));
    } else {
      this.lessons = JSON.parse(localStorage.getItem("lessons"));
    }
  },
  methods: {
    addLessonToCart(lesson) {
      console.log("addLessonToCart")
      if (lesson.space > 0) {
        this.cart.push({
          id: lesson.id,
          topic: lesson.topic,
          location: lesson.location,
          space: 1,
          price: lesson.price,
          image: lesson.image
        });
        let lessonIndex = this.lessons.indexOf(lesson);
        this.lessons[lessonIndex].space = this.lessons[lessonIndex].space - 1;
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
      localStorage.setItem("lessons", JSON.stringify(this.lessons));
    },
    ascChange(ascending) {
      console.log("ascChange", ascending)
      this.ascending = ascending;
      localStorage.setItem("ascending", JSON.stringify(this.ascending));
    },
    onSortChange(sortBy) {
      console.log("onSortChange", sortBy)
      this.sortBy = sortBy;
      localStorage.setItem("sortBy", JSON.stringify(this.sortBy));
    },
    iscartEmpty() {
      if (this.cart.length === 0) return true;
    },
    removeLessonFromCart(lesson) {
      console.log("entered removeLessonFromCart")
      let cartIndex = this.cart.indexOf(lesson);
      console.log("cartIndex:",cartIndex)
      this.cart.splice(cartIndex, 1);
      console.log(JSON.stringify(this.cart))
      localStorage.setItem("cart", JSON.stringify(this.cart));
      for (let i = 0; i < this.lessons.length; i++) {
        if (this.lessons[i].id === lesson.id) {
          this.lessons[i].space += 1;
          localStorage.setItem("lessons", JSON.stringify(this.lessons));
        }
      }
    },
  },
  computed: {
    sortLessons() {
      switch (this.sortBy) {
        case "subject":
          this.lessons.sort(function compare(a, b) {
            if (a.topic > b.topic) return 1;
            if (b.topic > a.topic) return -1;
            return 0;
          });
          break;
        case "location":
          this.lessons.sort(function compare(a, b) {
            if (a.location > b.location) return 1;
            if (b.location > a.location) return -1;
            return 0;
          });
          break;
        case "price":
          this.lessons.sort(function compare(a, b) {
            if (a.price > b.price) return 1;
            if (b.price > a.price) return -1;
            return 0;
          });
          break;
        case "spaces":
          this.lessons.sort(function compare(a, b) {
            if (a.space > b.space) return 1;
            if (b.space > a.space) return -1;
            return 0;
          });
          break;
        default:
          this.lessons.sort(function compare(a, b) {
            if (a.price > b.price) return 1;
            if (b.price > a.price) return -1;
            return 0;
          });
      }

      if (!this.ascending) {
        this.lessons.reverse();
      }

      return this.lessons;
    }
  }
}
</script>

<style>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 95vw;
  margin-left: 7%
}

.main-content-home {
  display: flex;
  justify-content: space-around;
}

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: top;
  width: 15%;
  padding: 1%;
}

.lessons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 75%;
  flex-wrap: wrap;
}

.lesson {
  width: 28%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;
  border: 1px solid black;
  margin: 1%;
  padding: 1%;
  border-radius: 5%;
}

.lesson-img-div {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.lesson-img {
  max-width: 90px;
  max-height: 90px;
}
</style>
