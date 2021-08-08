export const initialState = {
  loading: true,
  data: [],
  error: false,
  page: 1
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
    case 'update-page' :
      return {
        ...state,
        page: action.value,
        loading: true
      };
    default: 
      return state;
  }
}