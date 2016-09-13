import * as React from "react";

import {Card} from "./Card";

interface CardUiProps{
}

export class CardUi extends React.Component<CardUiProps, {}> {
    constructor(props: CardUiProps){
        super(props);
    }
    //コメントをサーバから取得する関数
    // loadCommentsFromServer() {                                 
    //     $.ajax({                                                                     
    //         url: this.props.url,                                                       
    //         dataType: 'json',                                                          
    //         cache: false,                                                              
    //         success: function(data: any) {
    //             //現在のコメント情報をstateに記憶させる                                                  
    //             this.setState({data: data});                                             
    //         }.bind(this),                                                              
    //         error: function(xhr: any, status: any, err: any) {                                        
    //             console.error(this.props.url, status, err.toString());                   
    //         }.bind(this)                                                     
    //     });                                                                              
    // }
    //Submitされたときに呼び出される関数                                                                      
    // handleCommentSubmit(comment: CommentData) {                                 
    //     $.ajax({                                                                     
    //         url: this.props.url,                                                       
    //         dataType: 'json',                                                          
    //         type: 'POST',                                                              
    //         data: comment,                                                             
    //         success: function(data: any) {
    //             //現在のコメントリストの情報を更新                                              
    //             this.setState({data: data});                                             
    //         }.bind(this),                                                              
    //         error: function(xhr: any, status: any, err: any) {
    //             //前のコメント情報に戻す                                        
    //             this.setState({data: comments});                                         
    //             console.error(this.props.url, status, err.toString());                   
    //         }.bind(this)                                                               
    //     });                                                                          
    // }
    //1回のみ呼ばれる                                                  
    // componentDidMount() {                                      
    //     this.loadCommentsFromServer();                                               
    //     setInterval(this.loadCommentsFromServer, this.props.pollInterval);           
    // }                                                                            
    render() {
        return (
        <div className="CardUi">
            <Card url="/users" />
        </div>
        );
    }
}