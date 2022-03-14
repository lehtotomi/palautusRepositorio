

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

export default Course
        