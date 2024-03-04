import { http } from './fetch-request'
import type {
  CategoryModel,
  CategoryPostResult,
  CategoryQueryDto,
  CollectionRefTypes,
  CommentDto,
  CommentModel,
  ImageModel,
  LinkModel,
  MenuModel,
  NavigationItem,
  NoteModel,
  NoteResponse,
  PagerDto,
  PaginateResult,
  PostModel,
  SayModel,
  TimelineQueryDto,
  TimelineResult,
  UserModel,
} from '~/types'

export function getMasterInfo() {
  return http<PaginateResult<UserModel>>('/master')
}

export function getPosts(pager?: PagerDto) {
  return http<PaginateResult<PostModel>>('/posts', {
    query: pager,
  })
}
export function getPostById(id: string) {
  return http<PostModel>(`/posts/${id}`)
}

export function getNoteList(pager?: PagerDto) {
  return http<PaginateResult<NoteModel>>('/notes', {
    query: pager,
  })
}

export function getLastNote() {
  return http<NoteResponse>(`/notes/latest`)
}

export function getNoteByNid(nid: string) {
  let path = '/notes'
  if (nid !== 'latest')
    path += '/nid'
  return http<NoteResponse>(`${path}/${nid}`)
}

export function getSayList(pager?: PagerDto) {
  return http<PaginateResult<SayModel>>('/says', {
    query: pager,
  })
}

export function getSayById(id: string) {
  return http<PaginateResult<SayModel>>(`/says/${id}`)
}

export function getImageList(pager?: PagerDto) {
  return http<PaginateResult<ImageModel>>('/images', {
    query: pager,
  })
}

export function getLinkList(pager?: PagerDto) {
  return http<PaginateResult<LinkModel>>('/links', {
    query: pager,
  })
}

export function getCommentList(ref: string, pager?: PagerDto) {
  return http<PaginateResult<CommentModel>>(`/comment/ref/${ref}`, {
    query: pager,
  })
}

export function sendComment(id: string, comment: CommentDto, ref: CollectionRefTypes) {
  return http<PaginateResult<CommentModel>>(`/comment/${id}`, {
    method: 'post',
    body: comment,
    query: { ref },
  })
}

export function replyComment(id: string, comment: CommentDto) {
  return http<PaginateResult<CommentModel>>(`/comment/reply/${id}`, {
    method: 'post',
    body: comment,
  })
}

export function getCategories(query?: CategoryQueryDto) {
  return http<Record<string, CategoryModel & { children: PostModel[] }>>('/categories', {
    method: 'get',
    query,
  })
}

export function getPostsByCategoryId(ids: string[]) {
  return http<Array<CategoryModel>>('/categories', {
    method: 'get',
    query: {
      ids,
    },
  })
}

export function getPostsByCategorySlug(slug: string) {
  return http<Array<PostModel>>('/categories', {
    method: 'get',
    query: {
      slug,
    },
  })
}

export function getMenus() {
  return http<{ data: Array<NavigationItem> }>('/system/keys/header', {
    method: 'get',
  })
}

export function getConfig(key: string) {
  return http<{ data: Array<NavigationItem> }>(`/config/${key}`, {
    method: 'get',
  })
}

export function getPostByCategory(category: string) {
  return http<{ data: CategoryPostResult }>(`/categories/${category}`, {
    method: 'get',
  })
}

export function getTimeline(timelineQueryDto?: TimelineQueryDto) {
  return http<{ data: TimelineResult }>(`/aggregate/timeline`, {
    method: 'get',
    query: timelineQueryDto,
  })
}

export function getAggregate() {
  return http<{ url: { title: string, description: string, keywords: string[] } }>(`/aggregate`, {
    method: 'get',
  })
}
