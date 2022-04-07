import styled from 'styled-components';

/* Used to declare the app's grid main design */
export const StyledMainContainer = styled.div`
    height: 100vh;
    max-width: ${({theme}) => theme.mainContainer.maxWidth};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6rem auto;
`

StyledMainContainer.displayName = 'div';