import { useState, useEffect, memo } from "react";
import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./counter";

function App() {
  return (
    <div>
      <RecoilRoot>
      <Buttons />
      <Counter />
      <IsEven />
      </RecoilRoot>
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 2);
  }

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>{count}</div>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  return <div>{even ? "Even" : "Odd"}</div>;
}
  /*
  const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14
  })

  const fontSizeLableState = selector({
  key: 'fontSizeLableState',
  get: ({get}) => {
    const fontSize = get(fontSizeState);
    const unit = 'px'

    return `${fontSize}${unit}`;  function return (
    <div> 
    <textInput />
    <CharacterCount />
    </div>
);
}
    
    )

    // is render to reduces and 
    }
  })
  */

export default App;
