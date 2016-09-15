import * as React from "react";

import {UserData} from "./data";

import {CardNopeButton} from "./CardNopeButton";
import {CardLikeButton} from "./CardLikeButton";
import {CardList} from "./CardList";

import {UserInfoType} from "./UserInfoType";

interface CardsProps{
    url: string;
}

interface CardsState{
    data : UserInfoType[];
    animation: string;
    disabled: boolean;
    hidden: boolean;
}

export class Cards extends React.Component<CardsProps, CardsState>{
    currentData: UserInfoType[];
    constructor(props: CardsProps) {
        super(props);
        //Stateの初期化
        this.state = {data: [], animation: '', disabled: false, hidden: false};
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
        this.currentData = [UserData.shift(), UserData[0]];
        this.checkData(this.currentData);
        this.setState({data: this.currentData, animation: '', disabled: false, hidden: false});
    }
    checkData(data: any){
        if(data[0] === undefined && data[1] === undefined){
            this.setState({data: this.state.data, animation:'', disabled: this.state.disabled, hidden: true});
        }
    }
    onNope(e: any){
        e.preventDefault();
        //左に移動するアニメーション
        // $('#1').addClass('rotateOutUpLeft animated');
        // $('button').attr('disabled', 'disabled');
        this.setState({data: this.state.data, animation: 'rotateOutUpLeft animated', disabled: true, hidden: this.state.hidden});

        //アニメーション終了後にStateを更新
        setTimeout(() => {
            this.currentData = [UserData.shift(), UserData[0]];
            this.checkData(this.currentData);
            this.setState({data: this.currentData, animation: '', disabled: false, hidden: this.state.hidden});
            //$('button').removeAttr('disabled');
        }, 1000);
        
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
    onLike(e: any){
        e.preventDefault();
        //右に移動するアニメーション
        // $('#1').addClass('rotateOutUpRight animated');
        // $('button').attr('disabled', 'disabled');
        this.setState({data: this.state.data, animation: 'rotateOutUpRight animated', disabled: true, hidden: this.state.hidden});   

        //アニメーション終了時にStateを更新
        setTimeout(() => {
            this.currentData = [UserData.shift(), UserData[0]];
            this.checkData(this.currentData);
            this.setState({data: this.currentData, animation: '', disabled: false, hidden: this.state.hidden});
            //$('button').removeAttr('disabled');
        }, 1000);

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
        return(
            <div className="Cards">
                <CardList CardData={this.state.data} Animation={this.state.animation} />
                <div style={{textAlign: 'center'}}>
                    <CardNopeButton onNopeClick={this.onNope.bind(this)} Disabled={this.state.disabled} Hidden={this.state.hidden} />
                    <CardLikeButton onLikeClick={this.onLike.bind(this)} Disabled={this.state.disabled} Hidden={this.state.hidden} />
                </div>
            </div>
        );
    }
};