"use client"
import Card from "../../components/card";
import { Suspense, useEffect, useState } from "react"; 
import { api } from "../../constant/api";

interface IData {
  id: string;
  name: string;
  image: string;
}

export default function HomeAxios() {
  const [characters, setCharacters] = useState<IData[]>([]);

  useEffect(() => {
    const load = async () => {
      api.get("/character").then((res) => {
        setCharacters(res.data.results);
      }).catch((err) => {
        console.log(err);
      })
    }
    load();
  }, [])

  return (
    <>
      <div className="p-4 flex flex-wrap gap-6 justify-center align-center">
      <Suspense fallback={<div>Loading...</div>}>
        {characters.map((character: IData) => (
          <Card 
            key={character.id} 
            image={character.image} 
            name={character.name} 
            id={character.id} 
          />
        ))}
      </Suspense>
      </div>
    </>
  );
}
