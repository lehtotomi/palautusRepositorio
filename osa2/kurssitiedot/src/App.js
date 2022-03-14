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


const Total = ( {parts} ) => {
  return (
    <>
      {parts.reduce(
        (summa, value) => summa + value.exercises, 0
      )}
    </>
  )
}


const Course = ( {course} ) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <b>
        Total number of exercises: <Total parts={course.parts} />
      </b>
    </>
  )
}


const App = () => {
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(
        course => <Course key={course.id} 
                          course={course} />
      )}
    </div>
  )
}

export default App