"use server";
export async function fetchAnime(page: number = 1) {
  const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);
  const data = await response.json();
  return data;
}
