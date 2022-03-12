import { useState } from 'react'


const Header = (props) => {
    return (
      <h1>
        {props.text}
      </h1>
    )
}

const Button = (props) => (
  <>
    <button onClick={props.handleClick}>
      {props.text}
    </button>
    &nbsp;
  </>
)

const Stat = (props) => {
  return (
    <p>
      {props.name} {props.stat}
    </p>
  )
}

const Display = (props) => {
  return (
    <>
    <Stat name='good' stat={props.stat1}/>
    <Stat name='neutral' stat={props.stat2}/>
    <Stat name='bad' stat={props.stat3}/>
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback'/>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <Header text='statistics'/>
      <Display stat1={good} stat2={neutral} stat3={bad}/>
    </div>
  )
}

export default App