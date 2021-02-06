import React from 'react'
import styled from 'styled-components'

const GridDiv = styled.div`
    display:grid;
    grid-template-columns:50% 50%;
    grid-template-rows:auto;
    margin:${props => props.margin || "0px"};
    padding:${props => props.padding || "0px"};
    overflow:hidden;

    @media(max-width:576px){
        display:flex;
        flex-direction:column;
    }
`


export default function gridDiv(props) {
    return (
        <GridDiv
        margin={props.margin}
        padding={props.padding}>
            {props.children}
        </GridDiv>
    )
}
