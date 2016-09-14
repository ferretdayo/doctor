import * as React from "react";

import FloatingActionButton from 'material-ui/FloatingActionButton';
import SentimentVerySatisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';

interface CardLikeButtonProps { 
    onLikeClick: () => any;
}

export class CardLikeButton extends React.Component<CardLikeButtonProps, {}> {
    constructor(props: CardLikeButtonProps) {
        super(props);
        //関数のバインド
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillEnter(callback: any) {
        console.log("component will enter");
        callback();
    }
    componentDidEnter(){
        console.log("component will Enter");
    }
    componentWillLeave(callback: any){
        console.log("component will leave"); 
        callback();       
    }
    //onSubmitで呼び出される関数
    handleSubmit(e: any){
        e.preventDefault();
    }
    render(){
        return(
            <span className="CardLikeButton" onSubmit={this.handleSubmit}> 
                <FloatingActionButton onClick={this.props.onLikeClick} style={{marginLeft:'10px'}}>
                    <SentimentVerySatisfied />
                </FloatingActionButton>
            </span>
        );
    }
}