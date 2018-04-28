import React, { Component } from 'react'

class Info extends Component {
  render() {
    return (
      <div className = 'faq'> 
        <h2> About Boobix </h2>
        <h5> 
          Boobix is a simple anonymous chat with gender and age filters.<br/> That's almost all you need
        </h5> 
        
        <em> What does 'Loop the conversation' mean ? </em>
        <div> 
          If this field is active, you don't need to press 'Search' in case you're left. 
          You will join the queue automatically. Remember, that your conversation is cleared
          every time you're joining the queue. So if you're afraid of losing conversation history,
          don't use this option.
        </div> 
        
        <em> Can I send photos or videos ? </em>
        <div> 
          Right now this feature is absent. You can send any links, and in the future
          multimedia would be injected into the conversation.
        </div> 
        
        <em> What filters will be added in the future ? </em>
        <div> 
          It depends on the amount of guests. New filters and options will be added very soon. 
          For example, speech filter and possibility to save your greeting and send it 
          automatically.
        </div> 
        
        <em> Where is <strong> Admin </strong>? </em>
        <div> 
          Vkontakte: <a href='https://vk.com/id322245424'> vk.com/id322245424 </a> <br/>
          Telegram: @illidiant <br/>
          Mail: illidiant1900@gmail.com
        </div> 
      </div>
    )
  }
}

export default Info