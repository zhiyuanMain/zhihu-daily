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
    </nav>
</template>

<script>
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
      ]
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
</style>
