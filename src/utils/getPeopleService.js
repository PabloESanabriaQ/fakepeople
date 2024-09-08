import { useEffect, useState } from "react";

export default function getPeopleService(){
  const [people, setPeople] = useState(null);

  useEffect(() => {
		fetch("https://retoolapi.dev/5tTIpR/fakepeople") //https://retoolapi.dev/5tTIpR/fakepeople
      .then((response) => response.json()) //parseamos el resultado a JSON
      .then((data) => {
        setPeople(data); // almacenamos el estado
      });
	}, []);

	return people;
};
