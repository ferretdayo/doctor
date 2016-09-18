import * as React from "react";

import {CommentBox} from "./CommentBox"
import {UserList} from "./UserList"

import {UserListData} from "./UserListData"

interface ChatProps {

}

interface ChatState {
    data: UserListData[]
    user: string;
}

export class Chat extends React.Component<ChatProps, ChatState> {
    constructor(props: ChatProps){
        super(props);
        this.state = {data: [], user: ""};
        
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    }
    //チャットの相手の変更
    changeUser(username: string){
        console.log(username);
        this.setState({data: this.state.data, user: username});
    }
    //ユーザ情報の取得
    loadCommentsFromServer() {                                           
        $.ajax({
            url: "/api/userlist",
            dataType: 'json',
            cache: false,
            success: function(data: any) {
                //現在のコメント情報をstateに記憶させる                                                  
                this.setState({data: data, user: this.state.user});                                             
            }.bind(this),                                                              
            error: function(xhr: any, status: any, err: any) {                                        
                console.error("/api/userlist", status, err.toString());                   
            }.bind(this)
        });
    }
    //1回のみ呼ばれる
    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, 2000);
    }  
    render(){
        return(
            <div className="Chat row">
                <div className={'col s3 m3 l3'} style={{height: '100vh', top:0, left:0, margin:0, padding:0}}>
                    <div>
                        <nav className="white">
                            <div className="nav-wrapper">
                                <div className="brand-logo center black-text">MediChat</div>
                            </div>
                        </nav>
                    </div>
                    <div>
                        <UserList data={this.state.data} changeUserHandler={this.changeUser.bind(this)}/>
                    </div>
                </div>
                <div className={'col s9 m9 l9'} style={{height: '100vh', margin: 0, padding: 0}}>
                    <CommentBox url='/api/comments' user={this.state.user} pollInterval={300} />
                </div>
           </div>
        );
    }
}
