const initialState={
  results:[],
  data:{},
  isLoading:false,
  isError:false
}

export default function videoReducer(state=initialState, action){
  switch (action.type){
      case "ALL_VIDEOS_PENDING":
          return {...state, isLoading:true}
      case "ALL_VIDEOS_FULFILLED":
          return {...state, isLoading:true, results: action.payload.data}
      case "ALL_VIDEOS_REJECTED":
          return {...state, isLoading:false, isError:true}

      case "ALL_VIDEO_PENDING":
          return {...state, isLoading:true}
      case "ALL_VIDEO_FULFILLED":
          return {...state, isLoading:true,results: action.payload.data}
      case "ALL_VIDEO_REJECTED":
          return {...state, isLoading:false, isError:true}

      default:
          return state
  }
}