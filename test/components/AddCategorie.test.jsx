import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategorie } from '../../src/components/AddCategorie';

describe('Pruebas en AddCategorie', () => { 
    
    test('Debe de cabiar el valor en la caja de texto', () => { 
        
        render(<AddCategorie onNewCategory = {() =>{} } />)
        
        const input = screen.getByRole('textbox');
        const value = 'Demon Slayer';

        fireEvent.change( input, { target: {value} });
        expect( input.value).toBe(value);
        // screen.debug();
     });


     test('Debe de llamar onNewCategory si el imput tiene un valor', () => { 
        const onNewCategory = jest.fn();
        const value = 'Demon Slayer';
        
        //Renderizamos el objeto de prueba o componente
        render(<AddCategorie onNewCategory = { onNewCategory } />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Simulamos que escribimos en el input
        fireEvent.input( input, { target: {value} });
        // screen.debug();
        fireEvent.submit(form);
        // screen.debug();

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenLastCalledWith(value);
      });


      test('No debe llamar el OnNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn();
        render(<AddCategorie onNewCategory = { onNewCategory } />)

        const form = screen.getByRole('form');
        
        //Simulamos el submit con el input sin modificar (vacio)
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);

       });

 });