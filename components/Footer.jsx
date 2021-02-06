import React from 'react'
import styled from 'styled-components'
import FlexDiv from '../paterns/FlexDiv'
import Section from '../paterns/Section'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const Footer = styled.footer`
    width:100%;
    position:relative;
    bottom:0;
    display:block;
    background-color:#000;
    color:#fff;

    @media(max-width:576px){
        position:relative;
    }
`
const HeartStyle = styled.i`
    color:#FFF;
    font-size:1.0em;
    vertical-align:middle;
    margin:0px 4px;
`

export default function footer() {
    return (
        <Footer className="fixed-bottom">
            <FlexDiv direction="row" justify="baseline" align="baseline">
              <Section hoverColor="#0E1013" width="50%"
              margin="5px 5px">
                  <h2>About</h2>
                  <p>A simple website created using Next js, styled components and APOD API, the site was made to learn the framework Next js.</p>
              </Section>
              <Section hoverColor="#0E1013" width="50%" margin="5px 5px">
                  <h2>My Github</h2>
                  <p>See my <a href="https://github.com/victor-kiss" target="_blank" rel="noopener">github</a> for more projects, you'll like =)</p>
                 
              </Section>
            </FlexDiv>
                <FlexDiv  padding="10px" aling="center" justify="center" bgColor="#0E1013">
                    <span>
                   Created with 
                     <HeartStyle>
                        <FontAwesomeIcon icon={faHeart}/>
                     </HeartStyle>
                      by Victor Kiss 
                    </span>
                </FlexDiv>
        </Footer>
    )
}
