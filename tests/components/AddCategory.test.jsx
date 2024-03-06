import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Test: <AddCategory />', () => {
    const inputValue = 'Evergarden';

    test('1) Debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => inputValue} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } });
        expect(input.value).toBe(inputValue);
    });

    test('2) Debe llamar al argumento onNewCategory si el input tiene un valor', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled(); // evalúa que la función sea llamada >= 1
        expect(onNewCategory).toHaveBeenCalledTimes(1); // evalúa que la función sea llamada == 1
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); // evalúa que la función haya sido llamada entregando un valor especifico
    });

    test('2) No se debe llamar el onNewCategory si el input está vacío', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0); // fue llamada 0 veces
        expect(onNewCategory).not.toHaveBeenCalled(); // no fue llamda
    });
});