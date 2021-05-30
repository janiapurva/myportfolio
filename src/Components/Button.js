import React from 'react'

function Button({filter, button}) {
  return (
    <div>
      {
button.map((but, i) => {
return <button key={i} onClick={() => filter(but)}>
  {button}
</button>
})
      }
    </div>
  )
}

export default Button
