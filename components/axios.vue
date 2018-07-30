<template>
    <div class="zhihu-list">
        <ul class="stories">
            <li
                class="list"
                v-for="(story, idx) in stories"
                :key="idx"
            >
                <span>title: {{story.title}}</span>
                <span>id: {{story.id}}</span>
                <span>ga_prefix: {{story.ga_prefix}}</span> 
                <img 
                    v-for="(img,imIdx) in story.images"
                    :key="imIdx"
                    :src="imgPath + img"
                >
            </li>
        </ul>
    </div>
</template>

<script>
import Util from '../Util.js';
export default {
  name: '',
  data() {
    return {
      stories: [],
      imgPath: Util.imgPath
    };
  },
  mounted() {
    Util.ajax.get('/news/before/20180627').then(res => {
        this.stories = res.stories;
    })
  }
}
</script>

<style scoped>

</style>
