const initialState={
  results_videos:[],
  results_video:[],
  results_videos_category:[],
  results_videos_popular:[],
  results_videos_trending:[],
  data:{},
  isLoading:false,
  isError:false
}

export default function videoReducer(state=initialState, action){
  switch (action.type){
      case "ALL_VIDEOS_PENDING":
          return {...state, isLoading:true}
      case "ALL_VIDEOS_FULFILLED":
          return {...state, isLoading:false, results_videos: action.payload.data}
      case "ALL_VIDEOS_REJECTED":
          return {...state, isLoading:false, isError:true}

      case "GET_VIDEO_PENDING":
          return {...state, isLoading:true}
      case "GET_VIDEO_FULFILLED":
          return {...state, isLoading:false,results_video: action.payload.data}
      case "GET_VIDEO_REJECTED":
          return {...state, isLoading:false, isError:true}


      case "GET_VIDEOS_BY_CATEGORY_PENDING":
          return {...state, isLoading:true}
      case "GET_VIDEOS_BY_CATEGORY_FULFILLED":
          return {...state, isLoading:false, results_videos_category: action.payload.data}
      case "GET_VIDEOS_BY_CATEGORY_REJECTED":
          return {...state, isLoading:false, isError:true}

        case "GET_VIDEOS_POPULAR_PENDING":
          return {...state, isLoading:true}
      case "GET_VIDEOS_POPULAR_FULFILLED":
          return {...state, isLoading:false,results_videos_popular: action.payload.data}
      case "GET_VIDEOS_POPULAR_REJECTED":
          return {...state, isLoading:false, isError:true}

        case "GET_VIDEOS_TRENDING_PENDING":
          return {...state, isLoading:true}
      case "GET_VIDEOS_TRENDING_FULFILLED":
          return {...state, isLoading:false,results_videos_trending: action.payload.data}
      case "GET_VIDEOS_TRENDING_REJECTED":
          return {...state, isLoading:false, isError:true}
      default:
          return state
  }
}