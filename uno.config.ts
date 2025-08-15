import presetWind3 from '@unocss/preset-wind3'
// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetMini, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    // mini
    presetMini(),
    // 默认预设
    presetWind3(),
    // 图标
    presetIcons(),
    // 属性化
    presetAttributify(),
    // 排版
    presetTypography(),
  ],
  rules: [
    // 自定义规则
    ['wv', { 'writing-mode': 'vertical-rl' }],
  ],
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['f-b-c', 'flex justify-between items-center'],
    ['f-c-c', 'flex justify-center items-center'],
    ['flex-col', 'flex flex-col'],
    ['icon-btn', 'text-5 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none'],
  ],
})
