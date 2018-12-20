import axios from 'axios'
import {ip} from "../../setServer"
export function ALL_CATEGORIES(){
  return {
    type:"ALL_CATEGORIES",
    payload:axios.get(ip+"api/v1/categories")
  }
}

export function GET_CATEGORY(id){
  return {
      type:"GET_CATEGORY",
      payload:axios.get(ip+"api/v1/"+id)
  }
}