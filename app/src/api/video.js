import store from 'src/vuex/store'

import { GET_VIDEOS, GET_VIDEO, UPLOAD_VIDEO } from 'src/vuex/mutation-types'
import { API } from './'

/**
 * Get current authenticated user's profile
 */
export const getVideos = () => {
  return API.get('/api/videos')
  .then(({data}) => {
    store.commit(GET_VIDEOS, data)
  })
}

/**
 * Get category videos
 */
export const getVideosForCategory = (id) => {
  return API.get(`/api/videos/category/${id}`)
}

/**
 * Get current authenticated user's profile
 */
export const getVideo = (id) => {
  return API.get(`/api/videos/${id}`)
  .then(({data}) => {
    store.commit(GET_VIDEO, data)
  })
}

/**
 * Get current authenticated user's profile
 */
export const uploadVideo = (formData, onUploadProgress) => {
  return API.post(`/api/videos`, formData, {onUploadProgress})
  .then(({data}) => {
    store.commit(UPLOAD_VIDEO, data)
    return data
  })
}
