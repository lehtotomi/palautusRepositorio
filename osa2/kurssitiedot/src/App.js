const Header = ( {name} ) => {
  return (
    <h1>{name}</h1>
  )
}

const Part = ( { part, exercise } ) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(
        value => 
          <Part key={value.id}
                part={value.name}
                exercise={value.exercises}
          />
      )}
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


const Course = ( {course} ) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      {/*
      <Total parts={course.parts} />
      */}
    </>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Fundamentals of React II',
        exercises: 15,
        id: 4
      },
      {
        name: 'Fundamentals of React III',
        exercises: 20,
        id: 5
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App