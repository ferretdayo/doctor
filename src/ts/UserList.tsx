import * as React from "react";

import {User} from "./User";
import {UserListData} from "./UserListData";

interface UserListProps {
    data: UserListData[];
    changeUserHandler: (user: string) => any;
}
interface UserListState {
    data: UserListData[];
}

export class UserList extends React.Component<UserListProps, {}>{
    constructor(props: UserListProps){
        super(props);
        // this.state = {data: []};
    }
    // //コメントをサーバから取得する関数
    // loadCommentsFromServer() {                                           
    //     $.ajax({                                                                     
    //         url: "/api/userlist",
    //         dataType: 'json',
    //         cache: false,
    //         success: function(data: any) {
    //             //現在のコメント情報をstateに記憶させる                                                  
    //             this.setState({data: data});                                             
    //         }.bind(this),                                                              
    //         error: function(xhr: any, status: any, err: any) {                                        
    //             console.error("/api/userlist", status, err.toString());                   
    //         }.bind(this)                                                     
    //     });
    // }
    // //1回のみ呼ばれる                                                  
    // componentDidMount() {                                      
    //     this.loadCommentsFromServer();                                               
    //     setInterval(this.loadCommentsFromServer, 2000);           
    // }  
    _handler(username: string){
        this.props.changeUserHandler(username);
    }
    render(){
        var list = this.props.data.concat();
        var userNodes = list.map((user) => {
            return(
                <User UserInfo={user} key={user.id} changeUserHandler={this._handler.bind(this)}/>
            );
        });
        //{配列}は展開される
        return(
            <div className={'UserList'}>
                <ul className={'collection'} style={{margin: 0}}>
                    <li className={'collection-item'}>
                        <div style={{textAlign: 'center'}}>患者一覧</div>
                    </li>
                </ul>
                <ul className={'collection'} style={{margin: 0, overflowY: 'scroll', height: 'calc(100vh - 108px)'}} >
                    {userNodes}
                </ul>
            </div>
        );
    }
}
