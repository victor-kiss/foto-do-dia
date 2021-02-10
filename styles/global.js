import {createGlobalStyle} from 'styled-components' 

const global = createGlobalStyle`
   
     *{
          padding:0;
          margin:0;
          box-sizing:border-box;
          font-family: 'Roboto', sans-serif;
     }
     
     h1{
          font-weight:bolder;
     }

     h2{
          font-weight:500;
          font-size:1.6em;
     }
     p{
          font-size:1.2em;
     }
     a{
          margin:0px 2px;
     }
     .fa-rocket{
          font-size:3.6em;
     }
     .image{
          position:relative;
          margin:10px 0px;
        @media(max-width:576px){
             width:100%;
        }
     }

     iframe{
          border:none;
          display:block;
          width:100%;
          height:300px;

          @media(max-width:576px){
               width:100%;
               height:100%;
          }
     }
`

export default global