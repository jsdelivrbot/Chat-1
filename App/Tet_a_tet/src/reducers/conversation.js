let defaultStore = {
  settings: {},
  messages: ['Lol', 'Kek', 'Cheburek']
}

export default (state = defaultStore, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return Object.assign({}, state, {
        messages: [...state.messages, action.text]
      })
    default:
      return state
  }
}

