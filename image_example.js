import React, { Component } from 'react'
import { Image } from 'react-native'

function ImagesPippa() {
    return (
        <Image source = {require('./assets/Pipkin_Pippa_-_Portrait.webp')} />  
    )
}
   

function ImagesFillian() {
    return (
        <Image source={require('./assets/Oozora_Subaru_Portrait.png')} />
    )
}
export { ImagesPippa , ImagesFillian }
