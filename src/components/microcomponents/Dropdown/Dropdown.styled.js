import styled from 'styled-components';

export const StyledDropdownOuterContainer = styled.div`
    width: ${props => props.width ? props.width : '40px'};
    user-select: none;
    margin: ${props => props.verticalMargin ? props.verticalMargin : '0'} ${props => props.horizontalMargin ? props.horizontalMargin : 'auto'};
    font-size: ${props => props.fontSize ? props.fontSize : '1.3rem'};
    font-weight: 300;
    position: relative;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.02);
    }
`
StyledDropdownOuterContainer.displayName = 'div';


export const StyledDropdownButton = styled.div`
    padding: ${props => props.verticalPadding ? props.verticalPadding : '15px'} ${props => props.horizontalPadding ? props.horizontalPadding : '20px'};
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    font-weight: bold;
    color: ${props => props.color ? props.color : '#333'};
    background: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.disabled {
        background: ${props => props.colorDisabled ? props.colorDisabled : 'linear-gradient(90deg, rgba(209,209,209,1) 0%, rgba(205,205,205,1) 33%, rgba(181,181,181,1) 100%)'};
        pointer-events: none;
    }

`
StyledDropdownButton.displayName = 'div';

export const StyledDropdownContent = styled.div`
    position: absolute;
    top: 102%;
    left: 0;
    padding: ${props => props.padding ? props.padding : '10px'};
    background: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    font-weight: 500;
    color: ${props => props.color ? props.color : '#333'};
    width: 100%;
`
StyledDropdownContent.displayName = 'div';

export const StyledDropdownItem = styled.div`
    padding: ${props => props.padding ? props.padding : '10px'};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: ${props => props.hoverColor ? props.hoverColor : '#f4f4f4'};
    }
`
StyledDropdownItem.displayName = 'div';