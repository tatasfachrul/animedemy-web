import axios from 'axios'

export function ALL_CATEGORIES(){
  return {
    type:"ALL_CATEGORIES",
    payload:axios.get('http://192.168.1.116:3333/')
  }
}

export function GET_CATEGORY(id){
  return {
      type:"GET_CATEGORY",
      payload:axios.get(`http://192.168.1.116:3333/api/v1/category/${id}`)
  }
}