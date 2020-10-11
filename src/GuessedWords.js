import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
  let contents 
  if (props.guessedWords.length === 0) {
    contents = (
      <span className="guest-instructions">
        Try to guess the secret word !
      </span>
    )
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr className="guessed-word" key={index}>
        <td>
          {word.guessedWords}
        </td>
        <td>
        {word.letterMatchCount}  
        </td>
      </tr>
    )
    )
    contents = (
			<div className='guessed-words'>
				<h3>Guessed words</h3>
				<table>
					<thead>
						<tr>
							<th>Guess</th>
							<th>Matching letters</th>
						</tr>
          </thead>
          <tbody>
            {guessedWordsRows}
          </tbody>
          </table>
			</div>
		);
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

  export default GuessedWords