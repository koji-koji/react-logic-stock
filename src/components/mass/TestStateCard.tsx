import { useState } from "react";

export interface TestStateCardProps {
  initialNumber: number
}

const TestStateCard = (props: TestStateCardProps) => {
  const [count, setCount] = useState(props.initialNumber)

  return (
    <div>
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
