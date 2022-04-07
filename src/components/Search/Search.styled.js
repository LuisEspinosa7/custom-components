import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi'; 

export const StyledSearchContainer = styled.form`
    width: 100%;
    max-width: ${props => props.maxWidth ? props.maxWidth : '400px'};
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 60px;
    padding: ${props => props.verticalContainerPadding ? props.verticalContainerPadding : ''} ${props => props.horizontalContainerPadding ? props.horizontalContainerPadding : ''};
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);

    &.disabled {
        background: ${props => props.colorDisabled ? props.colorDisabled : 'linear-gradient(90deg, rgba(209,209,209,1) 0%, rgba(205,205,205,1) 33%, rgba(181,181,181,1) 100%)'};
    }
`
StyledSearchContainer.displayName = 'form';

export const StyledSearchDisabledOverlay = styled.div`
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
`
StyledSearchDisabledOverlay.displayName = 'div';

export const StyledSearchInput = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    outline: none;
    padding: ${props => props.verticalPadding ? props.verticalPadding : '5px'} ${props => props.horizontalPadding ? props.horizontalPadding : '10px'};
    font-size: ${props => props.fontSize ? props.fontSize : '20px'};
    color: ${props => props.textColor ? props.textColor : 'rgb(108, 108, 108)'};

    &::placeholder {
        color: ${props => props.placeholderColor ? props.placeholderColor : 'rgb(108, 108, 108)'};
    }


`
StyledSearchInput.displayName = 'input';

export const StyledSearchIconContainer = styled.div`
    color: ${props => props.iconColor ? props.iconColor : '#000'};
`
StyledSearchIconContainer.displayName = 'div';

export const StyledSearchIcon = styled(FiSearch)`
    width: 100%;
    height: 100%;
`
StyledSearchIcon.displayName = 'svg';

export const StyledSearchButton = styled.button`
    border: 0;
    border-radius: 50%;
    width: ${props => props.iconWidth ? props.iconWidth : '15px'};
    height: ${props => props.iconHeight ? props.iconHeight : '15px'};
    margin: ${props => props.verticalMargin ? props.verticalMargin : ''} ${props => props.horizontalMargin ? props.horizontalMargin : ''};
    cursor: pointer;
    background-color: transparent;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.1);
    }
`
StyledSearchButton.displayName = 'button';
