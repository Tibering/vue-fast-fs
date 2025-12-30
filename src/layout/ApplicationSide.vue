<script lang="ts" setup>
import { Switch } from '@element-plus/icons-vue';
import { ref } from 'vue';

const isCollapsed = ref(true);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log('open:', key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log('close:', key, keyPath);
};
</script>

<template>
  <el-menu default-active="2" @open="handleOpen" @close="handleClose" :router="true">
    <!-- /index -->
    <el-menu-item index="/index">
      <el-icon>
        <Menu />
      </el-icon>
      <span>文件管理</span>
    </el-menu-item>
    <!-- /transTemplate -->
    <el-menu-item index="/transTemplate">
      <el-icon>
        <Switch />
      </el-icon>
      <span>转码配置</span>
    </el-menu-item>
    <!-- /transProgress -->
    <el-menu-item index="/transProgress">
      <el-icon>
        <Finished />
      </el-icon>
      <span>转码进度</span>
    </el-menu-item>
    <!-- /trash -->
    <el-menu-item index="/trash">
      <el-icon>
        <Delete />
      </el-icon>
      <span>回收站</span>
    </el-menu-item>
  </el-menu>
</template>
