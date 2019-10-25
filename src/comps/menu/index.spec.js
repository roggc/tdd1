import React from 'react'
import {render,fireEvent} from '@testing-library/react'
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
      'has a modal not visible',
      ()=>
      {
        const {container,getByTestId}=render(<C/>)
        const modal=getByTestId('modal')
        expect(container).toContainElement(modal)
        expect(modal).not.toBeVisible()
      }
    )
    it
    (
      'has a button when clicked shows modal',
      ()=>
      {
        const {getByRole,getByTestId}=render(<C/>)
        fireEvent.click(getByRole('button'))
        expect(getByTestId('modal')).toBeVisible()
      }
    )
  }
)
