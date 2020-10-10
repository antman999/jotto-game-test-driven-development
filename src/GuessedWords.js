import React from 'react'
import PropTypes from 'prop-types'

export const GuessedWords = (props) => {
  let contents 
  if (props.guessedWords.length === 0) {
    contents = (
      <span className="guest-instructions">
        Try to guess the secret word !
      </span>
    )
  }
  return (
    <div className="component-guessed-words">
      {contents}
    </div>
  )
}


  GuessedWords.propTypes = {
		guessedWords: PropTypes.arrayOf(
			PropTypes.shape({
				guessedWords: PropTypes.string.isRequired,
				letterMatchCount: PropTypes.number.isRequired,
			})
		).isRequired,
  };