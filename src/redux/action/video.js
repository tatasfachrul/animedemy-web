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