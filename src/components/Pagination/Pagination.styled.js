import styled from 'styled-components';

export const StyledPaginationContainer = styled.nav`
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent' };
    border: 0.1px solid rgba(0, 0, 0, .3);

    &.disabled {
        background: ${props => props.colorDisabled ? props.colorDisabled : 'linear-gradient(90deg, rgba(209,209,209,1) 0%, rgba(205,205,205,1) 33%, rgba(181,181,181,1) 100%)'};
        pointer-events: none;
    }
`

StyledPaginationContainer.displayName = 'nav';


export const StyledPaginationList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
`
StyledPaginationList.displayName = 'ul';


export const StyledPaginationListItem = styled.li`
    padding: ${props => props.verticalPadding ? props.verticalPadding : '1rem' } ${props => props.horizontalPadding ? props.horizontalPadding : '1.5rem' };
    font-size: ${props => props.fontSize ? props.fontSize : '1rem' };
    transition: font-size 0.2s;
    cursor: pointer;

    &:hover {
        transform: scale(${props => props.scaleNumber ? props.scaleNumber : 1.4});
    }

    &.active {
        border-bottom: 3px solid ${props => props.activeColor ? props.activeColor : '#fff' };
    }
`
StyledPaginationListItem.displayName = 'li';

export const StyledPaginationLink = styled.a`
    text-decoration: none;
    color: ${props => props.color ? props.color : '#fff' };
    font-weight: bold;
`
StyledPaginationLink.displayName = 'a';