import React, { useState, useCallback, memo } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(`Button ${children} rendered.`);
  return <button onClick={onClick}>{children}</button>;
});

function Callback() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]); // Only re-create when 'count1' changes

  const handleClick2 = () => {
    setCount2(count2 + 1);
  }; // Not memoized

  return (
    <div>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1}>Increment Count 1</Button>
      <Button onClick={handleClick2}>Increment Count 2</Button>
    </div>
  );
}

export default Callback;
