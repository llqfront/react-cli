import React, { Component } from 'react';
import Axios from 'axios';
import Header from '@/components/Header';
class View extends Component {
    componentDidMount(){
    }
    test(e:any,test:string){
        console.log(e)
        console.log(test)
    }
    tst = (e:any)=>{
        let {dataset:{cfg,item},} = e.target;
        let eleCfg = cfg.split('|');
        console.log(eleCfg[0])
        console.log(eleCfg[2])
    }
    render(){
        const obj = {
            a:'1'
        }
        let index = 1;
        return(
            <div className="test">
            <Header/>
            <ul>
                <li>adfasdf</li>
            </ul>
            <input type='button' value="点击"
                onClick={(e)=>{this.test(e,'test')}}
            />
            <input type='button' value="点击" data-cfg={`test|222|${index}`}
                onClick={this.tst}
            />
            111
            </div>
        )
    }
}
export default View;
