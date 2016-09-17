import * as React from "react";

import {CommentData} from "./CommentData";
import {Comment} from "./Comment";

interface CommentListProps{
    data: CommentData[];
}

export class CommentList extends React.Component<CommentListProps, {}>{
    render(){
        var commentNodes = this.props.data.map((comment) => {
            var css = comment.author === 'You' ? 'right' : 'left';
            var color = comment.author == 'You' ? '#4cd3d4' : '#ffffff';
            var font_color = comment.author == 'You' ? 'white' : 'black';
            return(
                <Comment author={comment.author} key={comment.id} position={css} color={color} fontColor={font_color} img={comment.img}>
                    {comment.text}
                </Comment>
            );
        });
        //{配列}は展開される
        return(
            <div className="commentList" style={{overflowY: 'scroll', height: '80vh', paddingTop: '40px', paddingRight: '30px', paddingLeft: '13px'}}>
                {commentNodes}
            </div>
        );
    }
};