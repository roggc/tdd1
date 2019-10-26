import React,{useReducer} from 'react'
import {Div} from './styled'
import Header from '../header/index'
import Footer from '../footer/index'
import Content from '../content/index'
import initialState from './state'
import reducer from './reducer'
import {BrowserRouter as Router} from 'react-router-dom'

export default
()=>
{
  const [state1,dispatch1]=useReducer(reducer,initialState)
  const el=
  <Div data-testid='app'>
    <Router>
      <Header state={state1} dispatch={dispatch1}/>
      <Content/>
      <Footer/>
    </Router>
  </Div>
  return el
}
