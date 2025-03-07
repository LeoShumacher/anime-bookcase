"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Input from "../Input";

interface AnimeImage {
  image_url: string;
}

interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  score: number;
  images: {
    jpg: AnimeImage;
  };
}

const AnimeComponent = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (search.trim() === "") {
        setAnimes([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?q=${search}&limit=5`
        );
        setAnimes(response.data.data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Erro ao buscar os animes.");
      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(fetchData, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <div>
      <h1>Animes Populares</h1>
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar anime..."
      />
      {loading && <div>Carregando...</div>}
      {error && <div>{error}</div>}
      <ul className="w-full flex flex-wrap gap-4">
        {animes.length > 0 ? (
          animes.map((anime) => (
            <li key={anime.mal_id} className="flex flex-col items-center">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-32 h-32 object-cover mb-2"
              />
              <h3 className="w-32 text-center truncate">{anime.title}</h3>
            </li>
          ))
        ) : (
          <div>Nenhum anime encontrado.</div>
        )}
      </ul>
    </div>
  );
};

export default AnimeComponent;
