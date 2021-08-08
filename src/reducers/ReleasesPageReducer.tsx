export const initialState = {
  loading: true,
  data: [],
  error: false,
}
  
export const reducer = (state:any, action:any) => {
  switch(action.type){
    case 'add-repo' :
      return {
        ...state,
        data: action.value,
        loading: false
      }
    case 'error' :
      return {
        ...state,
        error: action.value,
        loading: false,
        data: []
      }
    case 'reset' :
      return {
        loading: true,
        data: [],
        error: false,
        redirect: true
    }
    default: 
      return state;
  }
}