import * as React from "react";

import {User} from "./User";
import {UserListData} from "./UserListData";

interface UserListProps {
    //users: string[];
}
interface UserListState {
    data: UserListData[]
}

export class UserList extends React.Component<UserListProps, UserListState>{
    constructor(props: UserListProps){
        super(props);
        this.state = {data: []};
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    }
    //コメントをサーバから取得する関数
    loadCommentsFromServer() {                                           
        $.ajax({                                                                     
            url: "/api/userlist",                                                       
            dataType: 'json',                                                          
            cache: false,                                                              
            success: function(data: any) {
                //現在のコメント情報をstateに記憶させる                                                  
                this.setState({data: data});                                             
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
        var list = this.state.data.concat();
        var userNodes = list.map((user) => {
            return(
                <User UserInfo={user} key={user.id}/>
            );
        });
        //{配列}は展開される
        return(
            <ul className={'UserList collection'} onClick={()=>{console.log("AAA");}}>
                {userNodes}
            </ul>
        );
    }
}
