
const MyHOC = (Component) => {
  const NewComponent = (props) => {
    return (
      <Component name={props.name}/>
    )
  }
  return NewComponent
  
}

export default MyHOC;

