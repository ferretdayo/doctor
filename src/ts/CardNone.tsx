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
            <div className={'CardNone'} style={{width: '100%', textAlign: 'center'}}>
                <div className={'row'}>
                    <div className={'col m12 l12 s12'}>
                        <div className={'card'}>
                            <div className={'card-title'}>
                                <p className={'nothing'}>
                                    カードがありません
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};