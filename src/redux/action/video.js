import axios from 'axios'

export function ALL_VIDEOS(){
  return {
    type:"ALL_VIDEOS",
    payload:axios.get('http://192.168.43.208:3333/api/v1/videos')
  }
}

export function GET_VIDEO(id){
  return {
      type:"GET_VIDEO",
      payload:axios.get(`http://192.168.43.208:3333/api/v1/video/${id}`)
  }
}

export function GET_VIDEOS_BY_CATEGORY(id){
  return {
      type:"GET_VIDEOS_BY_CATEGORY",
      payload:axios.get(`http://192.168.43.208:3333/api/v1/video/category/${id}`)
  }
}

export function GET_VIDEOS_POPULAR(){
  return {
      type:"GET_VIDEOS_POPULAR",
      payload:axios.get(`http://192.168.43.208:3333/api/v1/videos/popular`)
  }
}

export function GET_VIDEOS_TRENDING(){
  return {
      type:"GET_VIDEOS_TRENDING",
      payload:axios.get(`http://192.168.43.208:3333/api/v1/videos/trending`)
  }
}