import styled from 'styled-components';

/* Useful for simple paragraphs */
export const StyledParagraph = styled.p`
    text-align: ${props => props.textAlign};
    line-height: ${props => props.lineHeight};
    padding: ${props => props.verticalPadding} ${props => props.horizontalPadding};
    text-align: ${props => props.textAlign};
    color: ${props => props.color};
    font-size: ${props => props.fontSize ? props.fontSize : ''};
    font-weight: ${props => props.fontWeight ? props.fontWeight : ''};
`

StyledParagraph.displayName = 'p';