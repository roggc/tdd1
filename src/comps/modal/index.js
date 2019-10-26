import React from 'react'
import {Div} from './styled'
import {Link} from 'react-router-dom'

export default
({state,dispatch})=>
{
  const toggleModal=
  e=>
  dispatch({type:'MENU_TOGGLE_MODAL'})
  const el=
  <Div data-testid='modal'>
    <div onClick={toggleModal}><Link to='/'>home</Link></div>
    <div onClick={toggleModal}><Link to='/about'>about</Link></div>
  </Div>
  return el
}
