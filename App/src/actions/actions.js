export const add = (text, name) => (
  {
    type : 'ADD_MESSAGE',
    text : text,
    name : name
  }
)

export const addMyAge = (text) => (
  {
    type : 'ADD_MY_AGE',
    value : text
  }
)

export const addMyGender = (text) => (
  {
    type : 'ADD_MY_GENDER',
    value : text
  }
)

export const addStrangersAge = (text) => (
  {
    type : 'ADD_STRANGERS_AGE',
    value : text
  }
)

export const addStrangersGender = (text) => (
  {
    type : 'ADD_STRANGERS_GENDER',
    value : text
  }
)

export const loop = (text) => (
  {
    type : 'LOOP',
    value : text
  }
)

export const newDialog = () => (
  {
    type : 'NEW_DIALOG'
  }
)

export const allowSending = () => (
  {
    type : 'ALLOW_SENDING'
  }
)