import axios from 'axios'
import {ip} from "../../setServer"
import { resolve } from 'q';
export function ALL_VIDEOS(){
  return {
    type:"ALL_VIDEOS",
    payload:axios.get(ip+'api/v1/videos')
  }
}

export function GET_VIDEO(id){
  return {
      type:"GET_VIDEO",
      payload:axios.get(ip+'api/v1/video/'+id)
  }
}

export function GET_VIDEOS_BY_CATEGORY(id){
  
    return {
      type:"GET_VIDEOS_BY_CATEGORY",
      payload:axios.get(ip+'api/v1/videos/category/'+id)
  }
}

export function GET_VIDEOS_POPULAR(){
  return {
      type:"GET_VIDEOS_POPULAR",
      payload:axios.get(ip+'api/v1/videos/popular')
  }
}

export function GET_VIDEOS_TRENDING(){
  return {
      type:"GET_VIDEOS_TRENDING",
      payload:axios.get(ip+'api/v1/videos/trending')
  }
}

export function GET_EPISODES(id){
  return {
      type:"GET_EPISODES",
      payload:axios.get(ip+'api/v1/video/'+id+'/series')
  }
}

export function GET_RELATED(id){
  return {
      type:"GET_RELATED",
      payload:axios.get(ip+'api/v1/video/'+id+'/related')
  }
}