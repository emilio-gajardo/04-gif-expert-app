export const getGifs = async (category) => {
    try {
        const urlBase = process.env.VITE_URL_BASE;
        const endpointSearch = process.env.VITE_ENDPOINT_SEARCH;
        const apikey = process.env.VITE_APIKEY;
        const q = category;
        const limit = 4;
        const url = `${urlBase}${endpointSearch}?api_key=${apikey}&q=${q}&limit=${limit}`;
        let res = await fetch(url);
        const { data } = await res.json();
        const gifs = data.map((img) => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }));

        return gifs;
    } catch (error) {
        console.log(`>> Error al obtener los gifs: ${error}`);
    }
}