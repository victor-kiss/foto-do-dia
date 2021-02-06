import React from 'react'
import styled from 'styled-components'



const DFlexRow = styled.div`
    width:${props => props.width || "auto"};
    height:${props => props.height || "auto"};
    display:flex;
    flex-wrap:no-wrap;
    flex-direction:${props => props.direction || "row"};
    justify-content:${props => props.justify || "baseline"};
    align-items:${props => props.align || "baseline"};
    margin:${props => props.margin || "0px"};
    padding:${props => props.padding || "0px"};
    background-color:${props => props.bgColor || "none"};
    border-right:${props => props.border || "none"};
    
    @media(max-width:576px){
        flex-direction:column;
        align-items:center;
        border:none;
    }

`
export default function FlexDivRow(props) {
    return (
        <DFlexRow 
        width={props.width}
        height={props.height}
        direction={props.direction} 
        justify={props.justify}  
        align={props.align}  
        margin={props.margin}
        padding={props.padding}
        bgColor={props.bgColor}
        border={props.border}>
            {props.children}
        </DFlexRow>
    )
}
