import NextHead from '../components/Head'
import Footer from '../components/Footer'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRocket} from '@fortawesome/free-solid-svg-icons'

import Div from '../paterns/Div'
import GridDiv from '../paterns/GridDiv'
import FlexDiv from '../paterns/FlexDiv'

import PhotoComponent from '../data/PhotoComponent'

//feito no backup
export default function Home() {
  return (
    <>
    <NextHead title="Foto do dia"/>

    <Div>
       <GridDiv>
        <FlexDiv justify="center" direction="column" align="center" padding="20px 0" height="100%" border="2px solid black" bgColor="#fbfbfb">
          <h1>PICTURE OF DAY</h1>
          <h2>
              Using <a href="https://api.nasa.gov/#browseAPI" target="_blank" rel="noopener">API APOD</a>
          </h2>
          <FontAwesomeIcon icon={faRocket}/>
      </FlexDiv>
        <Div margin="10px" padding="10px">
            <PhotoComponent/>
        </Div>
        </GridDiv>
      <Footer/>
    </Div>
    </>
  )
}
