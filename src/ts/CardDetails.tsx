import * as React from "react";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import {UserInfoType} from "./UserInfoType";

interface CardDetailsProps{
    userData: UserInfoType;
    CardClass: string;
}

export class CardDetails extends React.Component<CardDetailsProps, {}>{
    constructor(props: CardDetailsProps) {
        super(props);
    }
    render(){
        return(
            <div className={'CardDetails ' + this.props.CardClass}>
                <Card style={{boxShadow: 'none'}}>
                    <CardMedia
                        overlay={<CardTitle title={this.props.userData.nickname + " " + this.props.userData.age + "歳 " + this.props.userData.live} subtitle={this.props.userData.comment} />}
                    >
                    <img src={this.props.userData.img} />
                    </CardMedia>
                    <CardText style={{textAlign:'center'}}>
                    {this.props.userData.work + " " + this.props.userData.height + "cm"}
                    </CardText>
                </Card>
            </div>
        );
    }
};