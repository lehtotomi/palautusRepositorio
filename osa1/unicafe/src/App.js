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

const StatisticLine = (props) => {
  return (
    <p>
      {props.name} {props.stat} {props.after}
    </p>
  )
}



const Statistics = (props) => {
  const all = props.stat1 + props.stat2 + props.stat3
  const average = (props.stat1 - props.stat3) / all
  const positive = (props.stat1) / all 
  if (all !== 0){
    return (
      <>
      <StatisticLine name='good' stat={props.stat1}/>
      <StatisticLine name='neutral' stat={props.stat2}/>
      <StatisticLine name='bad' stat={props.stat3}/>
      <StatisticLine name='all' stat={all}/>
      <StatisticLine name='average' stat={average}/>
      <StatisticLine name='positive' stat={positive} after="%"/> 
      </>
    )
  } else {
    return (
      <p>
        No feedback given.
      </p>
    )
  }
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
      <Statistics stat1={good} stat2={neutral} stat3={bad}/>
    </div>
  )
}

export default App