import React from 'react'
import Loadable from 'react-loadable';
function MyLoadingComponent({error,pastDelay}) {
    console.log(error)
    if(error){
        return (
            <div>Error!</div>
        )
    }else if(pastDelay){
        return (
            <div>loading...</div>
        )
    }else{
       return null
    }
}
export function LoadableCompoent(componentPath) {
    return Loadable(
       {
        loader:() => import('@page/Home/index.js'),
        loading:MyLoadingComponent
       }
    )
}