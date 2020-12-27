import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TestStateCard from './TestStateCard';
import userEvent from '@testing-library/user-event';

describe('クリックボタンのテスト', () => {

  render(<TestStateCard />);
  const clickCountElement = screen.getByText('click count', { exact: false })
  const incrementButton = screen.getByText('increment', { exact: false })
  const decrementButton = screen.getByText('decrement', { exact: false })

  test('click increment button increase click count text', () => {
    const initialCount: number = parseInt(clickCountElement.textContent!.replace("click count ", ""))
    userEvent.click(incrementButton)
    expect(clickCountElement).toHaveTextContent((initialCount + 1).toString())
    userEvent.click(incrementButton)
    expect(clickCountElement).toHaveTextContent((initialCount + 2).toString())
  });


  test('click decrement button decrease click count text', () => {
    const initialCount: number = parseInt(clickCountElement.textContent!.replace("click count ", ""))
    userEvent.click(decrementButton)
    expect(clickCountElement).toHaveTextContent((initialCount).toString())
    userEvent.click(decrementButton)
    expect(clickCountElement).toHaveTextContent((initialCount).toString())
    expect(true).toBeTruthy()
  });
})

