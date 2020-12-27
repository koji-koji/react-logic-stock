import { useState } from "react";
import { css } from '@emotion/css'

export interface TestStateCardProps {
  initialNumber: number
}

const cardClass = css`
  background-color: green;
  padding: 10px;
`

const TestStateCard = (props: TestStateCardProps) => {
  const [count, setCount] = useState(props.initialNumber)

  return (
    <div className={cardClass}>
      <p>click count {count}</p>
      <button
        onClick={() => setCount(count + 1)}
      >increment button</button>
      <button
        onClick = {() => setCount(count - 1)}
      >decrement button</button>
    </div>
  );
}

TestStateCard.defaultProps = {
  initialNumber: 20
}

export default TestStateCard;
