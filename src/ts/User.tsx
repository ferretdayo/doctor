import * as React from "react";

import {UserListData} from "./UserListData"

interface UserProps {
    UserInfo: UserListData;
    changeUserHandler: (username: string) => any;
}

export class User extends React.Component<UserProps, {}>{
    constructor(props: UserProps) {
        super(props);
    }
    handleUser(){
        this.props.changeUserHandler(this.props.UserInfo.author);
    }
    render(){
        return(
            <li className={'User collection-item avatar'} style={{cursor: 'pointer'}} onClick={this.handleUser.bind(this)}>
                <img src={this.props.UserInfo.img} alt="" className="circle" />
                <span>{this.props.UserInfo.author}</span>
                <p className="hide-on-med-and-down">{this.props.UserInfo.text}</p>
            </li>
        );
    }
}
