import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Test: <GiItem />', () => {

    const altTitle = 'Title testing';
    const srcUrl = 'https://media4.giphy.com/media/cXblnKXr2BQOaYnTni/giphy.gif';

    test('1) <img/> debe contener el title', () => {
        render(<GifItem title={altTitle} url={srcUrl} />);
        const { alt } = screen.getByRole('img');
        expect(alt).toBe(altTitle);
    });

    test('2) <img/> debe contener el src', () => {
        render(<GifItem title={altTitle} url={srcUrl} />);
        const { src } = screen.getByRole('img');
        expect(src).toBe(srcUrl);
    });

    test('3) <img/> debe coincidir el snapshot', () => {
        const { container } = render(<GifItem title={altTitle} url={srcUrl} />);
        // screen.debug();
        expect(container).toMatchSnapshot();
    });

    test('4) Debe renderizar el componente con el title', () => {
        render(<GifItem title={altTitle} url={srcUrl} />);
        expect(screen.getByText(altTitle)).toBeTruthy();
    });
});