import React from 'react'
import {useState,useEffect} from 'react'
import Section from '../patterns/Section'


export default function PhotoComponent() {

    const [photoData, setPhotoData] = useState(null)

    useEffect(()=>{
        getPhotoData()
        async function getPhotoData(){

            try {
                const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DFredGM4MzYpa2GVB44FarGcfMmkoe3KgbUvgVHE")
    
                const data = await response.json()
                setPhotoData(data)
            }
            catch(error){
                console.error(error)
            }
        }
    },[])

    if(!photoData) return <div><h2>Loading...</h2></div>
    return (
        <Section>
            <h3>{photoData.title}</h3>
            <h4>Date: {photoData.date}</h4>
            {
               photoData.url.includes('www.youtube.com')
               ? <iframe src={photoData.url} title={photoData.title}></iframe> : 
               <img src={photoData.url} alt={photoData.title}  className="image" width="80%"/>
            }

            <p>{photoData.explanation}</p>
        </Section>
    )
}
