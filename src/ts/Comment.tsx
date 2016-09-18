import * as React from "react";
//import Remarkable from 'remarkable';
var Remarkable = require('remarkable');

interface CommentProps { 
    author: string;
    key: number;
    position: string;
    color: string;
    fontColor: string;
    img: string;
}

export class Comment extends React.Component<CommentProps, {}> {
    constructor(props: CommentProps){
        super(props);
    }
    rawMarkup(){
        var md = new Remarkable();
        //this.props.childrenは
        //<Comment>ここの値を取得</Comment>
        var rawMarkup = md.render(this.props.children.toString());
        return {__html: rawMarkup};
    }
    render(){
        //相手のコメントの場合
        if(this.props.img !== ""){
            return(
                <div className="row" style={{display: 'flex', alignItems: 'flex-end', marginBottom: '47px'}}>
                    <img src={this.props.img} width='28px' height='28px' style={{borderRadius: '14px'}} />
                    <div className={'Comment'} style={{color: this.props.fontColor, borderRadius: '20px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#e4e8eb', backgroundColor: this.props.color, width:'45%', paddingLeft: '12px', paddingRight: '12px', marginLeft: '8px'}}>
                        <span dangerouslySetInnerHTML={this.rawMarkup()} style={{width: '100%', wordBreak: 'break-all'}}/>
                    </div>
                </div>
            );
        }
        //自分のコメントの場合
        return(
            <div className="row" style={{marginBottom: '47px'}}>
                <div className={'Comment'} style={{float: 'right', color: this.props.fontColor, borderRadius: '20px', borderWidth: '1px', borderStyle: 'solid', borderColor: this.props.color, backgroundColor: this.props.color, width:'45%', paddingLeft: '12px', paddingRight: '12px'}}>
                    <span dangerouslySetInnerHTML={this.rawMarkup()} style={{width: '100%', wordBreak: 'break-all'}} />
                </div>
            </div>
        );
    }
}