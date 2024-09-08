import { useContext } from 'react'
import ViewContext from '../../hooks/ViewContext';
import PersonList from '../PersonList'
import PersonView from '../PersonView'

export default function Main(){

  const { id, handleSelectedId } = useContext(ViewContext);

  return <main>{
    id === -1 ? <PersonList handleSelectedId={handleSelectedId}/>
    : <PersonView id={id} handleSelectedId={handleSelectedId}/>
  }</main>
}
