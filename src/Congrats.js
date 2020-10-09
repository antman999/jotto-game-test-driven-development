import React from 'react'

export default function Congrats(props) {
 
  if (props.success) {
    return (
      <div className="component-congrats">
        <span className="congrats-message">
          CONGRATS You guessed the word!
          </span>
      </div>
    )
  } else {
    return (
      <div className="component-congrats">

      </div>
    )
  }
}
