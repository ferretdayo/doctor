import * as React from "react";
//import Remarkable from 'remarkable';
var Remarkable = require('remarkable');

interface CommentProps { 
    author: string;
    key: number;
}

export class Comment extends React.Component<CommentProps, {}> {
    constructor(props: CommentProps){
        super(props);
    }
    rawMarkup(){
        var md = new Remarkable();
        //this.props.childrenは
        //<Comment>ここの値を取得</Comment>
        var rawMarkup = md.render(this.props.children.toString());
        return {__html: rawMarkup};
    }
    render(){
        return(
            <div className="comment">
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
}