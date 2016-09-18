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
        this.state = {author: 'You', text: ''};
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
        console.log(e.type);
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
        this.setState({author: 'You', text: ''});
    }
    submit(e: any){
        e.preventDefault();
        return;
    }
    render(){
        return(
            <div className="row">
                <form className="commentForm" onSubmit={this.submit.bind(this)} style={{backgroundColor: 'white',bottom: 0, width: '100%', position: 'fixed'}}>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={this.state.author}
                        onChange={this.handleAuthorChange}
                        style={{marginBottom:0}}
                        hidden
                    />
                    <div style={{width: '65%', display: 'block', float: 'left'}}>
                        <input
                            type="text"                                             
                            placeholder="メッセージを入力..."
                            value={this.state.text} 
                            onChange={this.handleTextChange} 
                            style={{width: '100%', marginBottom:0}}
                        />
                        <button type="submit" onClick={this.handleSubmit} className={'btn waves-effect waves-light'} style={{display: 'none'}}>
                            Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                    
                    <div style={{width: '35%', display: 'block', float: 'left'}}>
                        <ul style={{margin: 0}}>
                            <li st>
                                <img src="./img/pin.png" style={{marginTop:'8px'}}/>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        );
    }
}