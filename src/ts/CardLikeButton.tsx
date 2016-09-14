import * as React from "react";

interface CardLikeButtonProps { 
    onLikeClick: () => any;
}

export class CardLikeButton extends React.Component<CardLikeButtonProps, {}> {
    constructor(props: CardLikeButtonProps) {
        super(props);
        //関数のバインド
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    // componentWillEnter(callback: any) {
    //     console.log("component will enter");
    //     callback();
    // }
    // componentDidEnter(){
    //     console.log("component will Enter");
    // }
    // componentWillLeave(callback: any){
    //     console.log("component will leave"); 
    //     callback();       
    // }
    //onSubmitで呼び出される関数
    handleSubmit(e: any){
        e.preventDefault();
    }
    render(){
        return(
            <span className="CardLikeButton"> 
                <button className={'btn-floating btn-large waves-effect waves-light blue'} onClick={this.props.onLikeClick} style={{marginLeft:'10px'}}>
                    <i className="material-icons">sentiment_very_satisfied</i>
                </button>
            </span>
        );
    }
}