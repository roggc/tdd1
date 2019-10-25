import React from 'react'
import {Div} from './styled'
import Menu from '../menu/index'

export default
(props)=>
<Div data-testid='header'>
  <div>Wellcome to react!</div>
  <Menu {...props}/>
</Div>
