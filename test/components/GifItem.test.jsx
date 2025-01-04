import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => { 
    test(' Debe de hacer match con el snapshot', () => {
        const title = 'Dragon ball';
        const url = 'https://i.pinimg.com/originals/c4/17/62/c41762a3049ef0fc129651997389e389.png';
        
        const { container } = render( <GifItem title={ title } url={ url }/>);
        expect(container).toMatchSnapshot();
    });
 })