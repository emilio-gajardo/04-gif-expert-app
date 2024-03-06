import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Test: <GifExpertApp />', () => {

    test('1) ', () => {

        render(<GifExpertApp />);
        screen.debug();

        // todo: probar [ onAddCategory ]
        // avaluar al asignar en el input value
        // evaluar al enviar form
        // evaluar snapshot
        // evaluar enviar la misma category
        // evaluar enviar category distinta
    });
});