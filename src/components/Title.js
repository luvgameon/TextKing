import React from 'react'


export default function Title(props) {
  return (<>
    <h1 className='App color'>{props.title}</h1>
  
    </>
    )
  
};
Title.defaultProps = {
    title: 'luv'
}
