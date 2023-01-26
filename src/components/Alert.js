import React from 'react'

export default function Alert(props) {
  return (

    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
    <h4 class="alert-heading " >{props.alert.type}</h4>
  <p >{props.alert.msg}</p>
  </div>
  )
}
