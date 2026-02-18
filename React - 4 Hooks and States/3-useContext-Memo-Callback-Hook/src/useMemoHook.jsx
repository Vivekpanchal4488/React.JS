import React, { useState } from "react";
import { useMemo } from "react";

const nums = new Array(10_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 8_000_000,
  };
});
const useMemoHook = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  const magical = useMemo(
    () => numbers.find((item) => item.isMagical === true),
    [numbers],
  );

  return (
    <>
      <div>
        <span>Magical nums is {magical.index}</span>
        <button
          onClick={() => {
            setCount(count + 1);
            if (count == 10) {
              setNumbers(
                new Array(5_000_000).fill(0).map((_, i) => {
                  return {
                    index: i,
                    isMagical: i === 3_000_000,
                  };
                }),
              );
            }
          }}
        >
          This is {count}
        </button>
      </div>
    </>
  );
};

export default useMemoHook;
