import * as React from "react";

import {CommentData} from "./CommentData"
import {CommentForm} from "./CommentForm"
import {CommentList} from "./CommentList"

interface CommentBoxProps{
    data: CommentData[]
    url: string;
    pollInterval: number;
    user: string;
    handleCommentSubmit: (comment: CommentData) => any;
}

export interface CommentBoxState{
}

export class CommentBox extends React.Component<CommentBoxProps, {}> {
    constructor(props: CommentBoxProps){
        super(props);
        this._handleCommentSubmit = this._handleCommentSubmit.bind(this);
    }
    //コメントがsubmitされたときの処理
    _handleCommentSubmit(comment: CommentData){
        this.props.handleCommentSubmit(comment);
    }
    render() {
        //ユーザが選択されている場合
        if(this.props.user !== ""){  
            return (
                <div className="commentBox">
                    <nav className="white">
                        <div className="nav-wrapper">
                            <span className="center black-text" style={{margin:0, padding:0, fontSize: '25px', display: 'block'}}>{this.props.user}</span>
                        </div>
                    </nav>
                    <CommentList data={this.props.data} />
                    <CommentForm onCommentSubmit={this._handleCommentSubmit} />
                </div>
            );
        } else {
            return (
                <div className="commentBox">
                    <nav className="white">
                        <div className="nav-wrapper">
                            <h1 className="center black-text" style={{margin:0, padding:0}}>{this.props.user}</h1>
                        </div>
                    </nav>
                    <div>
                    </div>
                </div>
            );
        }
    }                                                                              
}