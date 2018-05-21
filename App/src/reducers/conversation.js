let defaultStore = {
  settings: { m_a : 18, s_a : [18, 25], m_g : '2', s_g : '2'},
  messages: [],
  allow_sending: false,
  search_status: false,
  is_exited: false,
  is_used: false, 
  loop: false,
  greeting: ''
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
    
    case 'NEW_DIALOG':
      return Object.assign({}, state, {
        messages: []
      })
      
    case 'ALLOW_SENDING':
      return Object.assign({}, state, {
        allow_sending: !state.allow_sending
      })
      
    case 'UPDATE_GREETING':
      return Object.assign({}, state, {
        greeting: action.value
      })
      
    case 'SEARCH_STATUS':
      return Object.assign({}, state, {
        search_status: action.value
      })
    
    case 'IS_EXITED':
      return Object.assign({}, state, {
        is_exited: !state.is_exited
      })
      
    case 'LOOP':
      return Object.assign({}, state, {
        loop: !state.loop
      })
      
    case 'IS_USED':
      if(!state.is_used) {
        return Object.assign({}, state, {
          is_used: true
        })
      }
      
    default:
      return state
  }
}

