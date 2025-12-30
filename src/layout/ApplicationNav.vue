<script lang="ts" setup>
import Logo from '@/assets/logo.png';
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-700 m-2 border dark:border-gray-600">
    <div class="flex items-center justify-between h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center">
        <img :src="Logo" alt="Logo" class="h-10 w-auto">
      </div>
      <div class="header-right-div flex items-center space-x-4">
        XXX管理系统
      </div>
    </div>
  </div>
</template>
