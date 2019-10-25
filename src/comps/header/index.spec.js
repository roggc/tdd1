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
      'contains menu',
      ()=>
      {
        const {container,getByTestId}=render(<C/>)
        expect(container).toContainElement(getByTestId('menu'))
      }
    )
    it
    (
      'has a wellcome',
      ()=>
      {
        const {container,getByText}=render(<C/>)
        expect(container).toContainElement(getByText('Wellcome to react!'))
      }
    )
  }
)
