export default function PersonItem(props){

  if(!props) return;
  
  return <li onClick={() => props.handleClick(props.id)}>
    <p>{props.first} {props.last}</p>
  </li>
}