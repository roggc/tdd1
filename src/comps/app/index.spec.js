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
      'contains header',
      ()=>
      {
        const {container,getByTestId}=render(<C/>)
        expect(container).toContainElement(getByTestId('header'))
      }
    )
    it
    (
      'contains footer',
      ()=>
      {
        const {container,getByTestId}=render(<C/>)
        expect(container).toContainElement(getByTestId('footer'))
      }
    )
    it
    (
      'contains content',
      ()=>
      {
        const {container,getByTestId}=render(<C/>)
        expect(container).toContainElement(getByTestId('content'))
      }
    )
  }
)
