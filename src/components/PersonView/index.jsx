import { useContext } from "react";
import getPersonService from "../../utils/getPersonService"

export default function PersonView({id, handleSelectedId}){

  const person = getPersonService(id);

  if(!person) return <h2>Cargando...</h2>;
  
  return <li onClick={() => handleSelectedId(-1)}>
    <p>Nombre: {person.first} {person.last}</p>
    <p>Mail: {person.email}</p>
    <p>IP Address: {person.ipaddress}</p>
  </li>
}