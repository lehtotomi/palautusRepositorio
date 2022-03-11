/*
Header, Content ja Total. Kaikki data pidetään edelleen komponentissa App,
joka välittää tarpeelliset tiedot kullekin komponentille props:ien avulla.
Header huolehtii kurssin nimen renderöimisestä, 
Content osista ja niiden tehtävämääristä ja Total tehtävien yhteismäärästä.
*/

const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
    {props.parts.map(value => <Part part={value.name} exercise={value.exercises}/>)}
    </>
  )
}

const Total = (props) => {
  let summa = 0
  props.parts.forEach(value => summa += value.exercises)
  return (
    <p>
      {summa}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App