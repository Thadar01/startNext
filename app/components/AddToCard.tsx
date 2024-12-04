'use client'; //let the compiler know this is the client component

import React from 'react'

const AddToCard = () => {
  return (
    <div>        <button onClick={()=>console.log('click')}>Add to Cart</button>
</div>
  )
}

export default AddToCard