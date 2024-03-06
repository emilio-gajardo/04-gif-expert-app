import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Test: custom hook useFetchGifs', () => {

    test('1) Debe regresar el estado inicial', () => {
        const category = 'Evergarden';
        const { result } = renderHook(() => useFetchGifs(category));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('2) Debe retornar [arreglo de gif] y [isLoading en false]', async () => {
        const category = 'Evergarden';
        const { result } = renderHook(() => useFetchGifs(category));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});