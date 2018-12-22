const initialState={
  results_categories:[],
  results_category:[],
  data:{},
  isLoading:false,
  isError:false
}

export default function categoryReducer(state=initialState, action){
  switch (action.type){
      case "ALL_CATEGORIES_PENDING":
          return {...state, isLoading:true}
      case "ALL_CATEGORIES_FULFILLED":
          return {...state, isLoading:true, results_categories: action.payload.data}
      case "ALL_CATEGORIES_REJECTED":
          return {...state, isLoading:false, isError:true}

      case "ALL_CATEGORY_PENDING":
          return {...state, isLoading:true}
      case "ALL_CATEGORY_FULFILLED":
          return {...state, isLoading:true,results_category: action.payload.data}
      case "ALL_CATEGORY_REJECTED":
          return {...state, isLoading:false, isError:true}

      default:
          return state
  }
}