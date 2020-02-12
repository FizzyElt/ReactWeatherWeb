import {createContext} from 'react'

export const defaultWidth=document.body.clientWidth


export const DeviceWidthContext=createContext({
    isMobile:false
})