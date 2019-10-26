import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import C from './index'

describe
(
  'testing C',
  ()=>
  {
    it
    (
      'nothing',
      ()=>
      {
        
      }
    )
    // it
    // (
    //   'renders ok',
    //   ()=>
    //   {
    //     const {container}=render(<C/>)
    //     expect(container).toBeInTheDocument()
    //   }
    // )
    // it
    // (
    //   'contains route links',
    //   ()=>
    //   {
    //     const{container,getByText}=render(<C/>)
    //     expect(container).toContainElement(getByText('home'))
    //     expect(container).toContainElement(getByText('about'))
    //   }
    // )
  }
)
