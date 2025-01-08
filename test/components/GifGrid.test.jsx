import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid.jsx', () => { 
    
    const category = 'Demon Slayer';

    test('Debe de mostrar el loading al iniciar', () => { 
        useFetchGifs.mockReturnValue({
            images: [], 
            isLoading: true,
        });


        render( <GifGrid category={ category }/>);
        // screen.debug();
        expect( screen.getByText('...Cargando...'));
        expect( screen.getByText( category));
     });

     test('Debe de mostrar los intems cuando se cargan las img usando useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABCD',
                title: 'Imagen numero 1',
                url: 'https://localhost/imagen1.jpg',
            },
            {
                id: 'BCDE',
                title: 'Imagen numero 2',
                url: 'https://localhost/imagen2.jpg',
            },
            {
                id: 'CDEF',
                title: 'Imagen numero 3',
                url: 'https://localhost/imagen3.jpg',
            },
        ];
        
        useFetchGifs.mockReturnValue({
            images: gifs, 
            isLoading: false,
        });

        render( <GifGrid category={ category }/>);
        screen.debug();
        expect(screen.getAllByRole('img').length).toBe(3);
      });

 });