import * as React from "react";

import FloatingActionButton from 'material-ui/FloatingActionButton';
import SentimentVerySatisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import SentimentVeryDissatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';

interface CardButtonProps { 
    //onCommentSubmit: (data: CommentData) => any;
}

export class CardButton extends React.Component<CardButtonProps, {}> {
    constructor(props: CardButtonProps) {
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
            <form className="CardButton" onSubmit={this.handleSubmit}> 
                <FloatingActionButton secondary={true} onClick={this.onClickNope} style={{marginRight:'10px'}}>
                    <SentimentVeryDissatisfied />
                </FloatingActionButton>
                <FloatingActionButton onClick={this.onClickYep} style={{marginLeft:'10px'}}>
                    <SentimentVerySatisfied />
                </FloatingActionButton>
            </form>
        );
    }
}