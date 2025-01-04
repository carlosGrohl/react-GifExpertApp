import { getGifts } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => { 

    test('Debe de retornar un array de Gifs', async() => { 
        
        const gifs = await getGifts('Demon Slayer');
        //Evaluamos que recibimos un arreglo de mas de 1 elemento
        expect(gifs.length).toBeGreaterThan(0);
        //Evaluamos que los elementos que recibimos cumplan con la estructura
        expect(gifs[0]).toHaveProperty('id');
        expect(gifs[0]).toHaveProperty('title');
        expect(gifs[0]).toHaveProperty('url');
        
     });

 });