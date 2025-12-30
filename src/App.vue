<script lang="ts" setup>
import ApplicationNav from '@/layout/ApplicationNav.vue';
import ApplicationSide from '@/layout/ApplicationSide.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <el-container class="flex-1">
      <el-header class="p-0 bg-white">
        <ApplicationNav />
      </el-header>
      <el-container class="flex-1">
        <el-aside width="200px" class="p-0 bg-white border-r">
          <ApplicationSide />
        </el-aside>
        <el-main class="flex-1 p-0 bg-white"><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
