import React from 'react'
import {Div} from './styled'
import Modal from '../modal/index'

export default
({state,dispatch})=>
{
  const showModal=
  e=>
  dispatch({type:'MENU_TOGGLE_MODAL'})
  const el=
  <Div data-testid='menu'>
    <button onClick={showModal}>click</button>
    {
      state.menu.showModal?
      <Modal/>:
      ''
    }
  </Div>
  return el
}
