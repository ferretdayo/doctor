import * as React from "react";

import {UserListData} from "./UserListData"

interface UserProps {
    UserInfo: UserListData;
}

export class User extends React.Component<UserProps, {}>{
    constructor(props: UserProps) {
        super(props);
    }
    render(){
        return(
            <li className={'User collection-item avatar'}>
                <img src={this.props.UserInfo.img} alt="" className="circle" />
                <span>{this.props.UserInfo.author}</span>
                <p className="hide-on-med-and-down">{this.props.UserInfo.text}</p>
            </li>
        );
    }
}
