<template>
    <nav>
        <ul class="nav">
            <li
                v-for="(item, idx) in navs"
                :key="idx"
                :value="item.value"
                :class="{'active': idx === 0}"
            >
                <a href="javascript:void(0);">{{item.text}}</a>
            </li>
        </ul>
        <p>title.vue img</p>
        <img :src="img" alt="" srcset="">
        <div style="padding: 10px 50px">
            <p>img标签绝对路径</p>
            <img src="/img/test.jpg" />
            <p>import 绝对路径</p>
            <img :src="absSrc" />
        </div>
    </nav>
</template>

<script>
//引入图片
import img from '../img/test.jpg'
import absSrc from '@/test.jpg'
export default {
  data() {
    return {
      navs: [
          {
              text: '新闻',
              vaule: 'news'
          },
          {
              text: '视频',
              vaule: 'videos'
          },
          {
              text: '生活',
              vaule: 'life'
          }
      ],
      //声明img
      img,
      absSrc
    };
  },
}
</script>

<style scoped>
    ul {
        list-style-type: none;
    }
    ul:after {
        content: "";
        display: table;
        clear: both;
    }
    ul li {
        float: left;
        padding: 10px 15px;
        font-size: 16px;
    }
    ul li a {
        text-decoration: none;
        color: #333;
    }
    ul li.active {
        border-bottom: 2px solid #299cee;
    }
    img {
        display: block;
        width: 150px;
        height: 150px;
    }
</style>
