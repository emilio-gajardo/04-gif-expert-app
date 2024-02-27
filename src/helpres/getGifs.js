// eslint-disable-next-line no-unused-vars
export const getGifs = async (category) => {
    const urlBase = import.meta.env.VITE_URL_BASE;
    const endpointSearch = import.meta.env.VITE_ENDPOINT_SEARCH;
    const apikey = import.meta.env.VITE_APIKEY;
    const q = category;
    const limit = 4;
    const url = `${urlBase}${endpointSearch}?api_key=${apikey}&q=${q}&limit=${limit}`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}