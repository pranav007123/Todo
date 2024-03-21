

const initialState = {
    inputDataList: [] 
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_INPUT_DATA':
        return {
          ...state,
          inputDataList: [...state.inputDataList, action.payload]
        };
      case 'DELETE_INPUT_DATA':
        return {
          ...state,
          inputDataList: state.inputDataList.filter((_, index) => index !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  