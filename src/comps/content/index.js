import React from 'react'
import {Div} from './styled'
import {Switch,Route} from 'react-router-dom'
import Home from '../home/index'
import About from '../about/index'

export default
()=>
<Div data-testid='content'>
  <Switch>
    <Route path='/' exact render={()=><Home/>}/>
    <Route path='/about' exact render={()=><About/>}/>
  </Switch>
</Div>
