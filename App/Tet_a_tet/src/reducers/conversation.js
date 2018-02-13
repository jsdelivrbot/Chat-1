let defaultStore = {
  settings: { m_a : null, s_a : null, m_g : null, s_g : null },
  messages: ['Lol', 'Kek', 'Cheburek']
}

const simple = (state, action, key) => {
  let cortage = {}
  cortage[key] = action.value
  
  return Object.assign({}, state, {
    settings: Object.assign(state.settings, cortage)
  })
}

export default (state = defaultStore, action) => {
  console.log(state)
  switch (action.type) {
    case 'ADD_MESSAGE':
      return Object.assign({}, state, {
        messages: [...state.messages, action.text]
      })
      
    case 'ADD_MY_AGE':
      return simple(state, action, 'm_a')
      
    case 'ADD_MY_GENDER':
      return simple(state, action, 'm_g')
      
    case 'ADD_STRANGERS_AGE':
      return simple(state, action, 's_a')
      
    case 'ADD_STRANGERS_GENDER':
      return simple(state, action, 's_g')
      
    default:
      return state
  }
}

