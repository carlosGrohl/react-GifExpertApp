import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp />', () => { 

    test('Validamos el estatus inicial', () => { 
        render( <GifExpertApp />);
        // screen.debug();
        //H1 con titulo y 2 botones (limpiar y ordenar), 1 imput 

        expect (screen.getByText('GifExpertApp'));
        expect (screen.getByText('Ordenar'));
        expect (screen.getByText('Limpiar'));
        expect (screen.getByRole('textbox'));
        
     });

     test('Debe de mostrar la categoria agregada', () => { 

        render( <GifExpertApp />);

        const input = screen.getByRole('textbox');
        const value = 'Demon Slayer';

        fireEvent.change( input, { target: {value} });
        fireEvent.submit(screen.getByRole('form'));
        
        screen.debug();
        
      });

 });