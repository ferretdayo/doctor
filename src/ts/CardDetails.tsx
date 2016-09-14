import * as React from "react";

import {UserInfoType} from "./UserInfoType";

interface CardDetailsProps{
    userData: UserInfoType;
    Index: number;
}

export class CardDetails extends React.Component<CardDetailsProps, {}>{
    constructor(props: CardDetailsProps) {
        super(props);
        /*
         <div className={'carousel carousel-slider'} data-indicators="true">
                                    <img className={'carousel-item'} src={this.props.userData.img} />
                                    <img className={'carousel-item'} src={this.props.userData.img} />
                                    <img className={'carousel-item'} src={this.props.userData.img} />
        */
    }
    render(){
        return(
            <div className={'CardDetails'} id={this.props.Index}>
                <div className={'row'}>
                    <div className={'col m12 l12 s12'}>
                        <div className={'card'}>
                            <div className={'card-image'}>
                                <img src={this.props.userData.img} />
                                <span className={'card-title'} style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                    <span style={{fontSize: '20px'}}>
                                        {this.props.userData.nickname + " " + this.props.userData.age + "歳 " + this.props.userData.live}
                                    </span>
                                    <br />
                                    <span style={{fontSize: '16px'}}>
                                        {this.props.userData.comment}
                                    </span>
                                </span>
                            </div>
                            <div className={'card-content'} style={{textAlign: 'center'}}>
                                {this.props.userData.work + " " + this.props.userData.height + "cm"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};