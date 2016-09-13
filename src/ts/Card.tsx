import * as React from "react";

import {UserData} from "./data";

import {CardNopeButton} from "./CardNopeButton";
import {CardLikeButton} from "./CardLikeButton";
import {CardList} from "./CardList";

import {UserInfoType} from "./UserInfoType";

interface CardProps{
    url: string;
}

interface CardState{
    data : UserInfoType[];
}

export class Card extends React.Component<CardProps, CardState>{
    constructor(props: CardProps) {
        super(props);
        //Stateの初期化
        this.state = {data: []};
        //関数のバインド
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    loadUserInfo(){
        this.setState({data: [UserData[0],UserData[1]]});
        // $.ajax({
        //     url: this.props.url,
        //     dataType: 'json',
        //     type: 'GET',
        //     success: function(data: any) {
        //         //現在のコメントリストの情報を更新                                    
        //         this.setState({data: data});
        //     }.bind(this),
        //     error: function(xhr: any, status: any, err: any) {
        //         //前のコメント情報に戻す                     
        //         this.setState({data: comments});                   
        //         console.error(this.props.url, status, err.toString());   
        //     }.bind(this)                                             
        // });  
    }
    onNope(){

    }
    onLike(){
        
    }
    componentDidMount(){
        this.loadUserInfo();
    }
    render(){
        return(
            <div className="Card">
                <CardList CardData={this.state.data} />
                <div>
                    <CardNopeButton onNopeClick={this.onNope} />
                    <CardLikeButton onLikeClick={this.onLike} />
                </div>
            </div>
        );
    }
};