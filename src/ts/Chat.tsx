import * as React from "react";

import {CommentBox} from "./CommentBox"
import {UserList} from "./UserList"

interface ChatProps {

}

export class Chat extends React.Component<ChatProps, {}> {
    constructor(props: ChatProps){
        super(props);
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
                        <UserList/>
                    </div>
                </div>
                <div className={'col s9 m9 l9'} style={{height: '100vh', margin: 0, padding: 0}}>
                    <CommentBox url='/api/comments' pollInterval={2000} />
                </div>
           </div>
        );
    }
}
