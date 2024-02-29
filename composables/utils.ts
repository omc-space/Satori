const reg = /w_(.*?)x(.*?)_/
export function getImageSizeFromUrl(url: string) {
  try {
    const m = reg.exec(url)
    if (m && m[1] && m[2]) {
      return {
        width: Number(m[1]),
        height: Number(m[2]),
      }
    }
    else { return null }
  }
  catch {
    return null
  }
}
