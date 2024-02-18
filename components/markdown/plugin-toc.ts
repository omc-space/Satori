import type { BytemdPlugin } from 'bytemd'
import toc from '@jsdevtools/rehype-toc'

export default function rehypeTocPlugin(): BytemdPlugin {
  return {
    remark: process => process.use(toc, {
      headings: ['h1', 'h2'],
      cssClasses: {
        toc: 'page-outline',
        link: 'page-link',
      },
    }),
  }
}
