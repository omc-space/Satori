import { http } from './fetch-request'
import type {
  CommentDto,
  CommentModel,
  ImageModel,
  LinkModel,
  NoteModel,
  PagerDto,
  PaginateResult,
  PostModel,
  SayModel,
} from '~/types'

export function getPosts(pager?: PagerDto) {
  return http<PaginateResult<PostModel>>('/posts', {
    query: pager,
  })
}

export function getNoteList(pager?: PagerDto) {
  return http<PaginateResult<NoteModel>>('/notes', {
    query: pager,
  })
}

export function getNoteById(nid: string) {
  return http<NoteModel>(`/notes/${nid}`)
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

export function sendComment(id: string, comment: CommentDto) {
  return http<PaginateResult<CommentModel>>(`/comment/${id}`, {
    method: 'post',
    body: comment,
  })
}

export function replayComment(id: string, comment: CommentDto) {
  return http<PaginateResult<CommentModel>>(`/comment/${id}`, {
    method: 'post',
    body: comment,
  })
}
