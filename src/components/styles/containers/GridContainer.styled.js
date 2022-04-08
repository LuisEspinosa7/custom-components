import styled from 'styled-components';

export const StyledGridContainer = styled.div`
    grid-area: ${props => props.gridArea ? props.gridArea : ''};
    display: grid;
    grid-template-columns: ${props => props.gridTemplateColumns ? props.gridTemplateColumns : ''};
    grid-template-rows: ${props => props.gridTemplateRows ? props.gridTemplateRows : ''};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    height: ${props => props.height ? props.height : ''};
    width: ${props => props.width ? props.width : ''};
    max-height: ${props => props.maxHeight ? props.maxHeight : ''};
    grid-gap: ${props => props.gridGap ? props.gridGap : ''};
    padding: ${props => props.verticalPadding ? props.verticalPadding : ''} ${props => props.horizontalPadding ? props.horizontalPadding : ''};
    margin: ${props => props.verticalMargin ? props.verticalMargin : ''} ${props => props.horizontalMargin ? props.horizontalMargin : ''};
    background: ${props => props.background ? props.background : ''};
    color: ${props => props.color ? props.color : ''};
    box-shadow: ${props => props.boxShadow ? props.boxShadow : ''};
    border-radius: ${props => props.borderRadius ? props.borderRadius : ''};

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

    // Desktop
    @media screen and (min-width: 1024px) and (max-width: 1320px) {
        grid-template-columns: ${props => props.bigGridTemplateColumns ? props.bigGridTemplateColumns : ''};
        grid-template-rows: ${props => props.bigGridTemplateRows ? props.bigGridTemplateRows : ''};
    }

    // Big Desktop
    @media screen and (min-width: 1321px) {
        grid-template-columns: ${props => props.gridTemplateColumns ? props.gridTemplateColumns : ''};
        grid-template-rows: ${props => props.gridTemplateRows ? props.gridTemplateRows : ''};
    }
`

StyledGridContainer.displayName = 'div';