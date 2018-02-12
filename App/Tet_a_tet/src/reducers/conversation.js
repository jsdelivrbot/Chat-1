export default (state = ['frfc', 'cfrcrfc'], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.text]
    default:
      return state
  }
}

