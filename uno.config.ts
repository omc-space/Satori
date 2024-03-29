import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['flex-center', 'flex items-center justify-center'],
    ['text-x', 'text-[14px]'],
    ['primary-color', 'color-[var(--primary-color)]'],
    ['text-primary', 'color-[var(--primary-color)]'],
    ['primary', 'var(--primary-color)'],
    ['text-omit', 'text-ellipsis text-nowrap overflow-hidden'],
    ['base-min-h', 'min-h-[calc(100vh-8rem-6px)]'],
    ['base-bg', 'transition dark:bg-zinc-800/50 bg-gray-200/50'],
    ['base-container', 'mx-auto mt-14 base-min-h max-w-3xl px-4 [&_header.prose]:mb-[80px] lg:mt-[80px] 2xl:max-w-4xl lg:px-0'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography({
      cssExtend: {
        p: {
          margin: '0.4rem 0',
        },
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
