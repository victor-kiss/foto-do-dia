import React from 'react'
import NextHead from 'next/head'
export default function head({title}) {
    return (
        <>
            <NextHead>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
                <meta charSet="UTF-8"/>
                <meta name="author" content="Victor Kiss"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="keywords" content="nasa, apod, nasa api"/>
                <meta name="description" content="A website created using API APOD"/>
                <title>{title}</title>
            </NextHead>
        </>
    )
}
