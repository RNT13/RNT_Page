( 
import styled, { createGlobalStyle } from 'styled-components' 
 
export const Colors = { 
    Color1: '', 
    color2: '', 
    color3: '' 
} 
 
export const GlobalStyle: React.FC = createGlobalStyle` 
*{ 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
    list-style: none; 
} 
` 
 
export const GlobalContainer = styled.div` 
    max-width: 1024px; 
    width: 100; 
    margin: 0 auto; 
    padding: 0 20px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
` 
) 
