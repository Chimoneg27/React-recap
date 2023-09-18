import React, { useState } from 'react'

const Addinput = ( {input, handleInput, handleSubmit, message}) => {

  return (
    <>
     <form className="form-container">
      <input type="text" value={input} onChange={handleInput} className='input-text' placeholder='Add todo...' />
      <button type='button' onClick={handleSubmit} className='input-submit'>Add List </button>
    </form>
    <span className='submit-warning'>{message} </span>
    </>
   
  )
}

export default Addinput
