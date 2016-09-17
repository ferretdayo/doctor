import * as React from "react";

import {CommentData} from "./CommentData";
import {Comment} from "./Comment";

interface CommentListProps{
    data: CommentData[];
}

export class CommentList extends React.Component<CommentListProps, {}>{
    render(){
        var commentNodes = this.props.data.map((comment) => {
            return(
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        //{配列}は展開される
        return(
            <div className="commentList" style={{overflowY: 'scroll', height: '55vh'}}>
                {commentNodes}
            </div>
        );
    }
};