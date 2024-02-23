import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言
dayjs.extend(relativeTime)

export const dateFns = dayjs

export function formateDate(date: Date | string | null) {
  return dayjs(date).format('YYYY-MM-DD HH:mm')
}

export function formateRelativeTime(date: Date | string | null | undefined) {
  return dayjs(date).fromNow()
}
