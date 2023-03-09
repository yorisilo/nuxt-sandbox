<script lang="ts" setup>
const user = useState<{ id: string, name: string, mail: string }>('login-user', () => {
  console.log('retrieving user info...')
  return {
    id: '012345',
    name: 'hogehoge',
    mail: 'hoge@fuga.com'
  };
})
</script>

<template>
  <div>
    <h1>useState実装例</h1>
    <NuxtLink to="/user-detail"> {{ user.name }}さんの詳細ページへ</NuxtLink>
  </div>
</template>
