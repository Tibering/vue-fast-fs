/**
 * 暗色模式相关的组合式函数
 * 提供暗色模式的状态和切换功能
 */
import { useDark, useToggle } from '@vueuse/core';

/**
 * 暗色模式状态
 * 响应式布尔值，表示当前是否为暗色模式
 */
export const isDark = useDark();

/**
 * 切换暗色模式的函数
 * 用于切换暗色模式和亮色模式
 */
export const toggleDark = useToggle(isDark);
