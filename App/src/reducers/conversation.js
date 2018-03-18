let defaultStore = {
  settings: { m_a : 18, s_a : [18, 25], m_g : '2', s_g : '2', loop: null },
  messages: [],
  allow_sending: true
}

const simple = (state, action, key) => {
  let cortage = {}
  cortage[key] = action.value
  
  return Object.assign({}, state, {
    settings: Object.assign(state.settings, cortage)
  })
}

export default (state = defaultStore, action) => {
  console.log(state);
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
      
    case 'LOOP':
      return simple(state, action, 'loop')
      
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
    
    case 'NEW_DIALOG':
      return Object.assign({}, state, {
        messages: []
      })
      
    case 'ALLOW_SENDING':
      return Object.assign({}, state, {
        allow_sending: !state.allow_sending
      })
      
    default:
      return state
  }
}

