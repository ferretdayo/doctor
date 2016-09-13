import * as React from "react";

import {CardButton} from "./CardButton";
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
        this.setState({data: [{
                "id": 1,
                "nickname": "ねこ",
                "age": 23,
                "live": "東京",
                "comment": "ねこ大好きです",
                "work": "猫カフェ経営",
                "height": 169.0,
                "img": "./img/1.jpg"
            }, {
                "id": 2,
                "nickname": "いぬ",
                "age": 20,
                "live": "神奈川",
                "comment": "いぬ大好きです",
                "work": "在宅ワーク",
                "height": 159.0,
                "img": "./img/2.jpg"
            }, {
                "id": 3,
                "nickname": "とり",
                "age": 28,
                "live": "京都",
                "comment": "鳥肉大好きです",
                "work": "野鳥の撮影",
                "height": 160.0,
                "img": "./img/3.jpg"
            }, {
                "id": 4,
                "nickname": "A",
                "age": 30,
                "live": "熊本",
                "comment": "おはよう",
                "work": "エンジニア",
                "height": 145.0,
                "img": "./img/4.jpg"
            }, {
                "id": 5,
                "nickname": "B",
                "age": 31,
                "live": "北海道",
                "comment": "寒い",
                "work": "除雪車の運転",
                "height": 150.0,
                "img": "./img/5.jpg"
            }, {
                "id": 6,
                "nickname": "C",
                "age": 32,
                "live": "青森",
                "comment": "リンゴおいしい",
                "work": "リンゴ園",
                "height": 185.0,
                "img": "./img/6.jpg"
            }, {
                "id": 7,
                "nickname": "D",
                "age": 33,
                "live": "秋田",
                "comment": "秋田県飽きた",
                "work": "農業",
                "height": 167.0,
                "img": "./img/7.jpg"
            }, {
                "id": 8,
                "nickname": "E",
                "age": 34,
                "live": "和歌山",
                "comment": "白浜きれいだった",
                "work": "水泳コーチ",
                "height": 166.0,
                "img": "./img/8.jpg"
            }, {
                "id": 9,
                "nickname": "F",
                "age": 35,
                "live": "広島",
                "comment": "お好み焼き食べたい",
                "work": "お好み焼き屋",
                "height": 175.0,
                "img": "./img/9.jpg"
            }, {
                "id": 10,
                "nickname": "G",
                "age": 36,
                "live": "山口",
                "comment": "角島よかった～",
                "work": "漁師",
                "height": 162.0,
                "img": "./img/10.jpg"
            }]
        });
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
    componentDidMount(){
        this.loadUserInfo();
    }
    render(){
        return(
            <div className="Card">
                <CardList CardData={this.state.data} />
                <CardButton />
            </div>
        );
    }
};