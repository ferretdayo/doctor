import * as React from "react";

import {UserInfoType} from "./UserInfoType";

interface CardNoneProps{
}

export class CardNone extends React.Component<CardNoneProps, {}>{
    constructor(props: CardNoneProps) {
        super(props);
    }
    render(){
        return(
            <div className={'CardNone'}>
                <div className={'row'}>
                    <div className={'col m12 l12 s12'}>
                        <div className={'card'}>
                            <div className={'card-title'}>
                                カードがありません
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};