// Define a type for the slice state
interface ProductState {}

// Define the initial state using that type
const initialState: ProductState = {};

type Action = {
  type: string;
  payload?: any;
};
const productReducer = (state: ProductState = initialState, action: Action) => {
  switch (action.type) {
    case 'getAllProduct':
      return state;
    default:
      return state;
  }
};

export default productReducer;
