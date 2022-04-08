import styled from 'styled-components';

/* Used to declare the app's grid main design */
export const StyledMainContainer = styled.div`
    height: 100vh;
    max-width: ${({theme}) => theme.mainContainer.maxWidth};
    display: grid;
    grid-template-columns: ${props => props.gridTemplateColumns ? props.gridTemplateColumns : '1fr'};
    grid-template-rows: ${props => props.gridTemplateRows ? props.gridTemplateRows : '1fr'};

    // Mobile
    @media screen and (max-width: 767px) {
        grid-template-columns: ${props => props.smallGridTemplateColumns ? props.smallGridTemplateColumns : ''};
        grid-template-rows: ${props => props.smallGridTemplateRows ? props.smallGridTemplateRows : ''};
    }

    // Tablets
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        grid-template-columns: ${props => props.mediumGridTemplateColumns ? props.mediumGridTemplateColumns : ''};
        grid-template-rows: ${props => props.mediumGridTemplateRows ? props.mediumGridTemplateRows : ''};
    }

    // Tablets
    @media screen and (min-width: 1024px) {
        grid-template-columns: ${props => props.bigGridTemplateColumns ? props.bigGridTemplateColumns : ''};
        grid-template-rows: ${props => props.bigGridTemplateRows ? props.bigGridTemplateRows : ''};
    }
`

StyledMainContainer.displayName = 'div';