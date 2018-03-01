export const addClass = (className) => {
  let settings = document.getElementsByTagName('body')
  settings[0].className = className
}