import React,{useReducer} from 'react'
import {Div} from './styled'
import Header from '../header/index'
import Footer from '../footer/index'
import Content from '../content/index'
import initialState from './state'
import reducer from './reducer'

export default
()=>
{
  const [state1,dispatch1]=useReducer(reducer,initialState)
  const el=
  <Div>
    <Header state={state1} dispatch={dispatch1}/>
    <Content/>
    <Footer/>
  </Div>
  return el
}
