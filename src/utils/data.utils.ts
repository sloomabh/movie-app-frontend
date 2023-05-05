export const getMovies = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const data = await response.json();
  return await data.Search;
};

export const getMovie = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};
