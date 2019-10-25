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
      'renders ok',
      ()=>
      {
        const {container}=render(<C/>)
        expect(container).toBeInTheDocument()
      }
    )
    it
    (
      'contains text',
      ()=>
      {
        const {container}=render(<C/>)
        expect(container).toHaveTextContent('2019 roger gomez')
      }
    )
  }
)
