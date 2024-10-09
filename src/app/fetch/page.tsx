"use client"
import Card from "../../components/card";
import { useEffect, useState } from "react"; 

interface IData {
  id: string;
  name: string;
  image: string;
}

export default function Home() {
  const [characters, setCharacters] = useState<IData[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results);
    }
    load();
  }, [])

  return (
    <>
      <div className="p-4 flex flex-wrap gap-6 justify-center align-center">
      {characters.map((character: IData) => (
        <Card 
          key={character.id} 
          image={character.image} 
          name={character.name} 
          id={character.id} 
        />
      ))}
      </div>
    </>
  );
}
