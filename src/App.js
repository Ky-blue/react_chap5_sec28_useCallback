import React, { useState, useCallback } from "react";
import "./styles.css";

//親からコンポーネントを受け取る子コンポーネントbutton
//counterStateとbuttonValueをpropsとして受け取る
//React.memoでメモ化
const Button = React.memo(({ counterState, buttonValue }) => {
  //ボタンがクリックされた時、親コンポーネントで定義した関数が走る
  //状態変数が更新する関数がonClickイベントハンドラ配下にある
  //またボタンと状態変数はそれぞれ対応している
  //ついでに押されたボタンをコンソールに通知
  console.log(`${buttonValue}がクリックされました！`);
  return <button onClick={counterState}>{buttonValue}</button>;
});

//親であるCounterコンポーネント
const Counter = () => {
  //状態変数をボタン2個分それぞれ用意
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);

  const countIncrementA = useCallback(() => setCountStateA(countStateA + 1), [
    countStateA
  ]);

  const countIncrementB = useCallback(() => setCountStateB(countStateB + 1), [
    countStateB
  ]);

  return (
    <>
      {/* 現在のcountStateA */}
      <p>A ボタン{countStateA}</p>

      {/* 現在のcountStateB */}
      <p>B ボタン{countStateB}</p>

      {/* Aボタンの状態変数を更新する関数を引き渡されたButton */}
      <Button counterState={countIncrementA} buttonValue="A ボタン" />

      {/* Bボタンの状態変数を更新する関数を引き渡されたButton */}
      <Button counterState={countIncrementB} buttonValue="B ボタン" />
    </>
  );
};

export default function App() {
  return <Counter />;
}
