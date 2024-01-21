
const MyHOC = (Component,props) => {
  
  return (<div className="wrapper">{Component({...props})}</div>)
  
}

export default MyHOC;

