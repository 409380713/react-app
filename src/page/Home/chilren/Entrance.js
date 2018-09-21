import React, { Component } from 'react';
import './index.scss'
import { connect } from 'react-redux'
class Entrance extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div className="entra-box">
                <div className="entra-item">
                    <div className="icon-box">
                    <img style={{width:'100%',height:'100%'}} src={require('@/assets/images/home/1.png')} alt=""/>
                    </div>
                    <p>重点关注</p>
                </div>
                <div className="entra-item">
                    <div className="icon-box" style={{lineHeight:'0.7rem'}}>
                    <img style={{width:'100%'}} src={require('@/assets/images/home/more.png')} alt=""/>
                    </div>
                    <p>更多</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Entrance)
