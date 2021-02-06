import React from 'react'
import {useState,useEffect} from 'react'
import Section from '../paterns/Section'
import ErrorPage from '../pages/ErrorPage'

export default function PhotoComponent() {

    const [photoData, setPhotoData] = useState(null)

    async function getPhotoData(){

        try {
            const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DFredGM4MzYpa2GVB44FarGcfMmkoe3KgbUvgVHE")

            const data = await response.json()
            setPhotoData(data)
        } catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        getPhotoData()
    },[])

    if(!photoData) return <ErrorPage/>
    return (
        <Section>
            <h3>{photoData.title}</h3>
            <h4>Date: {photoData.date}</h4>
            <img src={photoData.url} alt={photoData.title} width="80%"height="auto" className="image"/>

            <p>{photoData.explanation}</p>
        </Section>
    )
}
