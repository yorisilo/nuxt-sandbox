<script setup lang="ts">
const route = useRoute();
const { id } = route.query;
const { article, fetchArticle } = useArticles();
fetchArticle(Number(id));
</script>

<template>
  <div>
    <article v-if="article">
      <p>タイトル：{{ article.title }}</p>
      <p> {{ $route.query["id"] }}</p>
      <p> {{ id }}</p>
      <hr />
      {{ article.content }}
      <div style="width: 500px"></div>
    </article>
    <NuxtLink to="/blog">戻る</NuxtLink>
  </div>
</template>

<!-- <script setup lang="ts">
const route = useRoute();
const { id } = route.query;
const articles = [{
  id: 1,
  title: "Nuxt3入門",
  content: "Nuxt3が公式リリースされました。Nuxt3ではVue3対応だけでなく、NitroやVite等様々な改善が施されています。"
}, {
  id: 2,
  title: "Jest再入門",
  content: "今回はJestのモックについて整理していきます。Jestはビルトインでマッチャーが提供され、これ単体で多くのユースケースをサポートします。"
}];
const article = ref<{ id: number, title: string, content: string }>();
article.value = articles.find(article => Number(id) === article.id)
</script>

<template>
  <div>
    <header>Nuxt3サンプルアプリケーション</header>
    <div class="container">
      <article v-if="article">
        <p>タイトル：{{ article.title }}</p>
        <p> {{ $route.query["id"] }}</p>
        <hr />
        {{ article.content }}
        <div style="width: 500px"></div>
      </article>
      <NuxtLink to="/blog">戻る</NuxtLink>
    </div>
    <footer>
      © 2022 mamezou-tech
    </footer>
  </div>
</template>

<style scoped>
header {
  border-bottom-style: solid;
  padding: 1rem;
}

footer {
  margin-top: 2rem;
  background-color: #8080ee;
  padding: 1rem;
}

.container {
  margin: 2rem;
}
</style> -->
