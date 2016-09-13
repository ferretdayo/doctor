import * as React from "react";

/**
 * コンポーネントのimport
 */
import {CardDetails} from "./CardDetails";

/**
 * 型のimport
 */
import {UserInfoType} from "./UserInfoType";
import {UserImgType} from "./UserImgType";
import {UserDetailsType} from "./UserDetailsType";

interface CardListProps{
    CardData: UserInfoType[];
}

interface CardListState{
    data: any;
}

export class CardList extends React.Component<CardListProps, CardListState>{
    constructor(props: CardListProps) {
        super(props);
        //Stateの初期化
        this.state = {data: []};
        //関数のバインド
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    devideData(data: any){
        let devideData: any = [];
        for(let i = 0; i < data.length; i++){
            let forImg = {
                img: data.img,
                nickname: data.nickname,
                age: data.age,
                live: data.live
            };
            let forDetails = {
                work: data.work,
                height: data.height
            };
            devideData.push({
                img: forImg,
                details: forDetails
            });
        }
        this.setState({data: devideData});
    }
    componentDidMount(){
        this.devideData(this.props.CardData);
    }
    render(){
        var nodes = this.props.CardData.reverse().map((userInfo) => {
            return (
                <CardDetails key={userInfo.id} userData={userInfo} />
            );
        });
        return(
            <div className="CardList">
                {nodes}
            </div>
        );
    }
};