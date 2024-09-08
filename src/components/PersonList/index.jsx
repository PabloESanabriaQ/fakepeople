import { useState } from "react";
import getPeopleService from "../../utils/getPeopleService"
import PersonItem from "../PersonItem";

export default function PersonList({handleSelectedId}){

  const people = getPeopleService();

  if(!people) return <h2>Cargando...</h2>

  return people.map(
    (person) => {
      return <PersonItem key={person.id} {...person} handleClick={() => handleSelectedId(person.id)}/>;
    }
  )
}
