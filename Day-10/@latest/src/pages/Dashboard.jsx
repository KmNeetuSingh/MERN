import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";

export default function Dashboard() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // The API returns 20 per page, so fetch all pages (1-42) to get all 826 characters
    // For demo, let's just fetch first 5 pages (100 characters) to keep it fast
    async function fetchCharacters() {
      try {
        const allPages = [1, 2, 3, 4, 5];
        const requests = allPages.map(page =>
          fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(res =>
            res.json()
          )
        );
        const results = await Promise.all(requests);
        // Flatten the results into one array
        const allChars = results.flatMap(data => data.results);
        setCharacters(allChars);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      }
    }
    fetchCharacters();
  }, []);

  const Row = ({ index, style }) => {
    const character = characters[index];
    if (!character) return null; // While loading

    return (
      <div
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          padding: "0 15px",
          borderBottom: "1px solid #eee",
          backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          fontSize: 16,
          color: "#333",
        }}
      >
        <img
          src={character.image}
          alt={character.name}
          style={{ width: 50, height: 50, borderRadius: "50%", marginRight: 15 }}
        />
        <div>{character.name}</div>
      </div>
    );
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "2rem auto",
        border: "1px solid #ddd",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          padding: "1rem 0",
          borderBottom: "1px solid #ddd",
          margin: 0,
          backgroundColor: "#2a9d8f",
          color: "white",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        Rick & Morty Characters
      </h1>

      {characters.length > 0 ? (
        <List
          height={500}
          itemCount={characters.length}
          itemSize={70}
          width={"100%"}
        >
          {Row}
        </List>
      ) : (
        <p style={{ textAlign: "center", padding: 20 }}>Loading characters...</p>
      )}
    </div>
  );
}
