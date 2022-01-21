interface IAction {
  type: string
  name: string
}

export interface IInitialState {
  name: string
}

const initialState: IInitialState = {
  name: 'ping',
}

const reducer = (state = initialState, action: IAction): any => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
      }
    default:
      return state
  }
}

export default reducer
