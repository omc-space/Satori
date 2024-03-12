export interface PaginateResult<T> {
  data: T[]
  pagination: Pager
}

interface Pager {
  total: number
  size: number
  currentPage: number
  totalPage: number
  hasPrevPage: boolean
  hasNextPage: boolean
}

export interface Count {
  read: number
  like: number
}

export interface Image {
  height: number
  width: number
  type: string
  accent?: string
  src: string
}

export enum CategoryType {
  Category,
  Tag,
}

export interface CategoryModel extends BaseModel{
  type: CategoryType
  count: number
  slug?: string
  name: string
  modified: string
}
export interface BaseModel {
  created: Date
  id: string
  updated?: Date
}

export interface PagerDto {
  size?: number
  page?: number
  state?: number
}

export interface ImageModel {
  id: string
  description?: string
  height?: number
  location?: string
  path?: string
  tag?: string[]
  title?: string
  url: string
  width?: number
  created: string
  updated: string
}

export interface NoteMusicRecord {
  type: string
  id: string
}

export interface Coordinate {
  latitude: number
  longitude: number
}

export interface NoteModel {
  id: string
  hide: boolean
  allowComment: boolean
  count: {
    read: number
    like: number
  }
  title: string
  text: string
  mood?: string
  weather?: string
  created: string
  modified: string
  hasMemory?: boolean
  password?: string | null
  secret: Date | null
  nid: number
  music?: NoteMusicRecord[]
  location?: string
  topicId?: string
  topic?: TopicModel
  coordinates?: Coordinate

  meta?: any
}

export interface PostModel extends BaseModel {
  commentsIndex: number
  allowComment: boolean
  copyright: boolean
  tags: string[]
  count: Count
  text: string
  title: string
  slug: string
  categoryId: string
  images: Image[]
  modified: string
  category: CategoryModel
  pin?: string
  pinOrder?: number
  related?: Pick<PostModel, 'id' | 'title'>[]
  meta?: any
}

export interface SayModel extends BaseModel {
  text: string
  author?: string
  source?: string
}

export interface TopicModel extends BaseModel {
  description?: string
  introduce: string
  name: string
  slug: string
  icon?: string
}

export enum LinkType {
  Friend,
  Collection,
}

export enum LinkState {
  Pass,
  Audit,
  Outdate,
  Banned,
  Reject,
}

export const LinkStateMap = {
  [LinkState.Pass]: '已通过',
  [LinkState.Audit]: '审核中',
  [LinkState.Outdate]: '已过期',
  [LinkState.Banned]: '已屏蔽',
  [LinkState.Reject]: '已拒绝',
}

export interface LinkModel {
  id: string
  name: string
  url: string
  avatar?: string
  type?: LinkType
  state: LinkState
  description?: string
  email?: string
  created: string
}

export interface LinkApplyDto {
  name: string
  url: string
  avatar?: string
  type?: LinkType
  description?: string
  email?: string
  author: string
}

export interface BaseUserModel {
  introduce: string
  mail: string
  url: string
  name: string
  avatar: string
  socialIds?: Record<string, string | number>
}

export interface UserModel extends BaseUserModel {
  id: string
  username: string
  created: string
  lastLoginTime: string
  lastLoginIp?: string
  apiToken?: string
}

export enum CommentState {
  Unread,
  Read,
  Junk,
}
export interface CommentStatePatchDto {
  state?: CommentState
  pin?: boolean
}

export interface CommentModel {
  ref: {
    categoryId: string
    id: string
    slug: string
    title: string
  }
  refType: string
  state: number
  children: CommentModel[]
  commentsIndex: number
  id: string
  author: string
  text: string
  mail: string
  url: string
  ip: string
  agent: string
  key: string
  pid: string
  created: string
  modified: string
  avatar: string
  isWhispers?: boolean
}

export interface CommentDto {
  author: string
  text: string
  mail: string
  url?: string
  isWhispers?: boolean
  source?: string
  avatar?: string
}

export enum CollectionRefTypes {
  Post = 'posts',
  Note = 'notes',
}

export interface NoteResponse {
  data: NoteModel
  next: NoteModel
  prev: NoteModel
}

export interface CategoryQueryDto {
  ids?: string[]
  joint?: boolean
  type?: CategoryType
}

export interface MenuModel {
  path: string
  name: string
  icon?: string
  children?: MenuModel[]
}

export interface CategoryPostResult extends CategoryModel {
  children?: PostModel[]
}

export enum TimelineType {
  Post,
  Note,
}

export interface TimelineQueryDto {
  sort?: 1 | -1
  year?: number
  type?: TimelineType
}

export interface TimelinePostResult {
  _id: string
  title: string
  slug: string
  created: string
  modified: string
  category: CategoryModel
  url: string
}

export interface TimelineNoteResult {
  _id: string
  created: string
  title: string
  modified?: any
  mood: string
  weather: string
  hasMemory: boolean
  nid: number
  id: string
}

export interface TimelineResult {
  notes: TimelinePostResult[]
  posts: TimelineNoteResult[]
}
