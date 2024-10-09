"use client"
import axios from "axios";
import Card from "../../components/card";
import { useEffect, useState } from "react"; 

interface IData {
  id: string;
  name: string;
  image: string;
}

export default function HomeAxios() {
  const [characters, setCharacters] = useState<IData[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      setCharacters(res.data.results);
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
