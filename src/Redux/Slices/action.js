

export const addInputData = (data) => {
    return {
      type: 'ADD_INPUT_DATA',
      payload: data
    };
  };
  
  export const deleteInputData = (index) => {
    return {
      type: 'DELETE_INPUT_DATA',
      payload: index
    };
  };
  