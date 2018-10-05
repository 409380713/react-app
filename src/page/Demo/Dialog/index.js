import React from 'react'
import { connect } from 'react-redux'
import './index.scss'
import {updateBtn} from '../actions'
 class Dialog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            arr:[1,2,3],
            
        }
    }
    
    componentDidMount(){
        console.info('dialog',this.props)
    }

    handleClickBtn = (v,e) => {
        e.stopPropagation();
        this.props.updateBtn(v)
    }
    handleClose = () =>{
        console.log('props,,,',this.props.activeItem)
        this.props.handleCloseDialog()
    }
    render(){
        const {arr} = this.state
        return (
            <div style={{width:'100%',height:'100%',background:'rgba(0,0,0,0.5)'}} onClick = {this.handleClose}>
               {
                   arr.map(v => {
                       return (
                            <button key={v} onClick={e => this.handleClickBtn(v,e)} className={v === this.props.activeItem ? 'activeBtn':null} style={{width:'30px',height:'30px',marginLeft:'10px'}}>{v}</button>
                       )
                   })
               }
               <button className={['activeBtn','dd'].join(' ')}>测试一下className</button>
            </div>
        )
    }
}
const mapStateToProps = ({updateBtnReducer}) =>{
    return {
        activeItem:updateBtnReducer
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        updateBtn:(data)=>dispatch(updateBtn(data))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Dialog)
