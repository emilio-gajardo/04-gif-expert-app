import { getGifs } from "../../src/helpers/getGifs";

describe('Test: getGifs()', () => {
    const category = 'HOLA';

    test('1) Debe retornar un arreglo de gifs', async () => {
        const gifs = await getGifs(category);
        expect(gifs.length).toBeGreaterThan(0);
    });

    test('2) Debe retornar un objeto gif', async () => {
        const gifs = await getGifs(category);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });

});