import * as React from "react";

import FloatingActionButton from 'material-ui/FloatingActionButton';
import SentimentVeryDissatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';

interface CardNopeButtonProps { 
    onNopeClick: () => any;
}

export class CardNopeButton extends React.Component<CardNopeButtonProps, {}> {
    constructor(props: CardNopeButtonProps) {
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
    onClickNope(){

    }
    onClickYep(){
    }
    render(){
        return(
            <span className="CardNopeButton" onSubmit={this.handleSubmit}> 
                <FloatingActionButton secondary={true} onClick={this.onClickNope} style={{marginRight:'10px'}}>
                    <SentimentVeryDissatisfied />
                </FloatingActionButton>
            </span>
        );
    }
}