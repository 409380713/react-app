import React from 'react'
import {  Toast } from 'antd-mobile'
const defaultHeaders = {
    'Access-Control-Allow-Origin':'*',
    'Ekaidan-AppName': 'RUIJIA',
    'Ekaidan-AppType': 'IOS',
    'Ekaidan-AppVersion': '2.0',
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
}
function formatParams(data){
    var arr = [];
     for (var name in data) {
      arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    return arr.join("&");
 }
const http = {

}
http.get = function(url,params,header = defaultHeaders){
    url = url + '?'+formatParams(params)
    return new Promise ((resolve,reject) =>{
        fetch(url,{
            method:'GET',
            headers:header,
        }).then(res => {
            console.log('res',res)
            if (res.ok) {
                return res.json();
            } else {
                reject({status:res.status})
            }
        }).then(res =>{
            if(res.status === 700){
                Toast.info(res.statusMsg,1,()=>{
                   window.location.href = '/'
                })
            }else if(res.status !== 1){
                Toast.info(res.statusMsg,1)
            }else{
                resolve(res)
            }
            
        }).catch(err =>{
            console.log('error',err)
        })
    })
}
http.post = function(url,params,header = defaultHeaders){
    
    return new Promise ((resolve,reject) =>{
        fetch(url,{
            method:'POST',
            headers:header,
            body:formatParams(params)
        }).then(res => {
            console.log('res',res)
            if (res.ok) {
                return res.json();
            } else {
                reject({status:res.status})
            }
        }).then(res =>{
            if(res.status == 700){
                Toast.info(res.statusMsg,1,()=>{
                   window.location.href = '/'
                })
            }else if(res.status !== 1){
                Toast.info(res.statusMsg,1)
            }else{
                resolve(res)
            }
        }).catch(err =>{
            console.log('error',err)
        })
    })
}
export default http