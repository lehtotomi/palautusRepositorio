import { useState } from 'react'


const randomInt = (minimun, maxinum) => {
  return Math.floor(Math.random() * (maxinum - minimun + 1)) + minimun
}


const Button = (props) => (
  <>
    <button onClick={props.handleClick}>
      {props.text}
    </button>
    &nbsp;
  </>
)


const Header = (props) => {
  return (
    <h1> 
      {props.text}
    </h1>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)  
  const [points, updatePoints] = useState(Array(anecdotes.length).fill(0));

  const increasePoints = (key,value) => {
    const points2 = [
      ...points
    ]
    points2[key] = points2[key] + 1 
    updatePoints(points2)
  }

  const mostPoints = () => {
    return (
      Math.max(...points)
    )
  }

  const mostVotedAnecdote = () => {
    return (
      anecdotes[points.indexOf(mostPoints())]
    )
  }

  return (
    <div>
      <Header text="Anecdote of the day:" />
      {anecdotes[selected]} <br/>
      This anecdote has {points[selected]} votes! <br /> 
      <Button handleClick = {() => setSelected(randomInt(0,anecdotes.length-1))}
       text="get random anecdote" />
      <Button handleClick = {() => increasePoints(selected)} text="Vote"/>
      <Header text="Most voted anecdote:" />
      {mostVotedAnecdote()} <br/>
      has {mostPoints()} votes
    </div>
  )
}

export default App
