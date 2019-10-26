import React from 'react'
import {Div} from './styled'
import Modal from '../modal/index'

export default
({state,dispatch})=>
{
  const toggleModal=
  e=>
  dispatch({type:'MENU_TOGGLE_MODAL'})
  const el=
  <Div data-testid='menu'>
    <button onClick={toggleModal}>click</button>
    {
      state.menu.showModal?
      <Modal state={state} dispatch={dispatch}/>:
      ''
    }
  </Div>
  return el
}
