<template>
    <div>
        <p>app.vue img</p>
        <img src="./img/test.jpg" class="img" />
        <vTitle></vTitle>
        <vCount v-model="count"></vCount>
        <p>app.vue count {{count}}</p>
        <br/>
        <vAxios></vAxios>
    </div>
</template>

<script>
import vTitle from './components/title.vue';
import vCount from './components/count.vue';
import vAxios from './components/axios.vue';
export default {
  name: 'app',
  components: {
      vTitle,
      vCount,
      vAxios
  },
  data() {
    return {
      count: 10
    };
  }
}
</script>

<style scoped>
    div {
        color: goldenrod;
        font-size: 18px;
    }
    img {
        display: block;
        width: 150px;
        height: 150px;
    }
</style>
