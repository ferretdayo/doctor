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
    cardState: boolean;
}

export class Card extends React.Component<CardProps, CardState>{
    classData: string;
    constructor(props: CardProps) {
        super(props);
        //Stateの初期化
        this.state = {data: [], cardState: undefined};
        //関数のバインド
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    loadUserInfo(){
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
        // shift()でデータなければ'undefined'が配列に入る
        this.setState({data: [UserData.shift(), UserData[0]], cardState: undefined});
    }
    onNope(){

        this.setState({data: [UserData.shift(), UserData[0]], cardState: false});
        // Nopeのユーザをサーバに送信して情報を取得する
        // $.ajax({
        //     url: '/nope/'+UserData[0].id,
        //     dataType: 'json',
        //     type: 'POST',
        //     success: function(data: any) {
        //         //現在のコメントリストの情報を更新
        //         this.setState({data: [data.shift(), data.shift()]});
        //     }.bind(this),
        //     error: function(xhr: any, status: any, err: any) {
        //         //前のコメント情報に戻す                     
        //         this.setState({data: comments});                   
        //         console.error(this.props.url, status, err.toString());   
        //     }.bind(this)                                             
        // });
    }
    onLike(){
        // Likeのユーザをサーバに送信して情報を取得する
        // $.ajax({
        //     url: '/like/'+UserData[0].id,
        //     dataType: 'json',
        //     type: 'POST',
        //     success: function(data: any) {
        //         //現在のコメントリストの情報を更新
        //         this.setState({data: [data.shift(), data.shift()]});
        //     }.bind(this),
        //     error: function(xhr: any, status: any, err: any) {
        //         //前のコメント情報に戻す                     
        //         this.setState({data: comments});                   
        //         console.error(this.props.url, status, err.toString());   
        //     }.bind(this)                                             
        // });        
    }
    componentDidMount(){
        this.loadUserInfo();
    }
    render(){
        
        if(this.state.cardState === undefined) {
            this.classData = 'CardList';
        } else if(this.state.cardState === true) {
            this.classData = 'CardList ' + 'rotateOutUpLeft ' + 'animated';
        } else if(this.state.cardState === true) {
            this.classData = 'CardList ' + 'rotateOutUpRight ' + 'animated';
        }
        return(
            <div className="Card">
                <CardList CardClass={this.classData} CardData={this.state.data} />
                <div>
                    <CardNopeButton onNopeClick={this.onNope.bind(this)} />
                    <CardLikeButton onLikeClick={this.onLike} />
                </div>
            </div>
        );
    }
};