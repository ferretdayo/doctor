import * as React from "react";

interface CardNopeButtonProps { 
    onNopeClick: () => any;
}

export class CardNopeButton extends React.Component<CardNopeButtonProps, {}> {
    constructor(props: CardNopeButtonProps) {
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
    // 
    //onSubmitで呼び出される関数
    handleSubmit(e: any){
        e.preventDefault();
    }
    render(){
        return(
            <span className="CardNopeButton"> 
                <button className={'btn-floating btn-large waves-effect waves-light red'} onClick={this.props.onNopeClick} style={{marginRight:'10px'}}>
                    <i className="material-icons">sentiment_very_dissatisfied</i>
                </button>
            </span>
        );
    }
}