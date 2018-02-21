let defaultStore = {
  settings: { m_a : 18, s_a : [18, 25], m_g : null, s_g : null },
  messages: [
    {date: 795795, message: 'Hello', name: 'Stranger'},
    {date: 432345, message: 'Hello hfjf', name: 'You'}
  ]
}

const simple = (state, action, key) => {
  let cortage = {}
  cortage[key] = action.value
  
  return Object.assign({}, state, {
    settings: Object.assign(state.settings, cortage)
  })
}

export default (state = defaultStore, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return Object.assign({}, state, {
        messages: [...state.messages, 
          { 
            date: (new Date()).toString().split(' ')[4],
            name: action.name,
            message: action.text
          }
        ]
      })
      
    case 'ADD_MY_AGE':
      return simple(state, action, 'm_a')
      
    case 'ADD_MY_GENDER':
      return simple(state, action, 'm_g')
      
    case 'ADD_STRANGERS_AGE':
      return simple(state, action, 's_a')
      
    case 'ADD_STRANGERS_GENDER':
      return simple(state, action, 's_g')
    
    case 'ADD_CLASS':
      return Object.assign({}, state, {
        class: action.class
      })
      
    default:
      return state
  }
}

