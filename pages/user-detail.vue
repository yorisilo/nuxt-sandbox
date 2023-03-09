<script lang="ts" setup>
const user = useState<{ id: string, name: string, mail: string }>('login-user')
</script>

<template>
  <div>
    <p>ユーザーID: {{ user.id }}</p>
    <p>ユーザー名: {{ user.name }}</p>
    <p>メールアドレス: {{ user.mail }}</p>
  </div>
</template>
