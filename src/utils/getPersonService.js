import { useEffect, useState } from "react";

export default function getPersonService(personId){
  const [person, setPerson] = useState(null);

  useEffect(() => {
		fetch(`https://retoolapi.dev/5tTIpR/fakepeople/${personId}`) //https://retoolapi.dev/5tTIpR/fakepeople/2
      .then((response) => response.json()) //parseamos el resultado a JSON
      .then((data) => {
        setPerson(data); // almacenamos el estado
      });
	}, []);

	return person;
};
