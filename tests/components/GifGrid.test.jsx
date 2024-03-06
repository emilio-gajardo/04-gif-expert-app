import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test: <GifGrid />', () => {
    const category = 'Evergarden';

    test('1) Debe mostrar el loading inicialmente', () => {
        const gifs= [];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
    });

    test('2) Debe mostrar retornar arreglo con items', () => {
        const gifs = [
            { id: '001', title: 'Gif 001', url: 'https://gifs.com/001.gif' },
            { id: '002', title: 'Gif 002', url: 'https://gifs.com/002.gif' },
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});