import { MemberInfo } from '../../core/models/member-info.model';
import { ActionTypeUser } from '../action-types/action.type';

// Define a type for the slice state
interface MemberState {
  infoMember?: MemberInfo;
}

// Define the initial state using that type
const initialState: MemberState = {};

type Action = {
  type: string;
  payload?: any;
};

const memberReducer = (state: MemberState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypeUser.SET_CURRENT_MEMBER:
      state = { ...state, infoMember: { ...action.payload, isAuth: true } };
      return state;
    case ActionTypeUser.SET_CURRENT_MEMBER_EMPTY:
      return { ...state, infoMember: { ...action.payload, isAuth: false } };
    default:
      return state;
  }
};

export default memberReducer;
