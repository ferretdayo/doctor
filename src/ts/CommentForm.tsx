import * as React from "react";

import {CommentData} from "./CommentData";

interface CommentFormProps { 
    onCommentSubmit: (data: CommentData) => any;
}

interface CommentFormState{ 
    author?: string;
    text?: string;
}

export class CommentForm extends React.Component<CommentFormProps, CommentFormState> {
    constructor(props: CommentFormProps) {
        super(props);
        //Stateの初期化
        this.state = {author: '', text: ''};
        //関数のバインド
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //Authorが変更された際に実行される関数
    handleAuthorChange(e: any){
        this.setState({author: e.target.value});
    }
    //Textが変更された際に実行される関数
    handleTextChange(e: any){
        this.setState({text: e.target.value});
    }
    //onSubmitで呼び出される関数
    handleSubmit(e: any){
        e.preventDefault();
        //現在のauthorとtextの情報をstateから取得
        var author: string = this.state.author.trim();
        var text: string = this.state.text.trim();
        if(!text || !author){
            return;
        }
        //値が両方あればプロパティにあるonCommentSubmit関数を呼び出す
        this.props.onCommentSubmit({author: author, text: text});
        //stateを初期化
        this.setState({author: '', text: ''});
    }
    render(){
        return(
            <form className="commentForm" onSubmit={this.handleSubmit}> 
                <input                                                    
                    type="text"                                             
                    placeholder="Your name"                                 
                    value={this.state.author}                               
                    onChange={this.handleAuthorChange}                      
                />                                                        
                <input                                                    
                    type="text"                                             
                    placeholder="Say something..."                          
                    value={this.state.text}                                 
                    onChange={this.handleTextChange}                        
                />                                                        
                <button type="submit" value="Post" className={'btn waves-effect waves-light'} >
                    Submit
                    <i className="material-icons right">send</i>
                </button>
            </form>                                                     
        );
    }
}