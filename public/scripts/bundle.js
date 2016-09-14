/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var CardUi_1 = __webpack_require__(187);
	ReactDOM.render(React.createElement(CardUi_1.CardUi, null), document.getElementById('content'));


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = React;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Cards_1 = __webpack_require__(188);
	var CardUi = (function (_super) {
	    __extends(CardUi, _super);
	    function CardUi(props) {
	        _super.call(this, props);
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
	    CardUi.prototype.render = function () {
	        return (React.createElement("div", {className: "CardUi"}, React.createElement(Cards_1.Cards, {url: "/users"})));
	    };
	    return CardUi;
	}(React.Component));
	exports.CardUi = CardUi;


/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var data_1 = __webpack_require__(189);
	var CardNopeButton_1 = __webpack_require__(190);
	var CardLikeButton_1 = __webpack_require__(262);
	var CardList_1 = __webpack_require__(264);
	var Cards = (function (_super) {
	    __extends(Cards, _super);
	    function Cards(props) {
	        _super.call(this, props);
	        //Stateの初期化
	        this.state = { data: [] };
	        //関数のバインド
	        //this.handleSubmit = this.handleSubmit.bind(this);
	    }
	    Cards.prototype.loadUserInfo = function () {
	        // $.ajax({
	        //     url: this.props.url,
	        //     dataType: 'json',
	        //     type: 'GET',
	        //     success: function(data: any) {
	        //         //現在のコメントリストの情報を更新                                    
	        //         this.setState({data: data});
	        //     }.bind(this),
	        //     error: function(xhr: any, status: any, err: any) {
	        //         //前のコメント情報に戻す                     
	        //         this.setState({data: comments});                   
	        //         console.error(this.props.url, status, err.toString());   
	        //     }.bind(this)                                             
	        // });
	        // shift()でデータなければ'undefined'が配列に入る
	        this.currentData = data_1.UserData.shift();
	        this.setState({ data: [this.currentData, data_1.UserData[0]] });
	    };
	    Cards.prototype.onNope = function (e) {
	        var _this = this;
	        e.preventDefault();
	        //左に移動するアニメーション
	        $('#1').addClass('rotateOutUpLeft animated');
	        $('button').attr('disabled', 'disabled');
	        //アニメーション終了後にStateを更新
	        setTimeout(function () {
	            _this.currentData = data_1.UserData.shift();
	            _this.setState({ data: [_this.currentData, data_1.UserData[0]] });
	            $('button').removeAttr('disabled');
	        }, 1000);
	        // Nopeのユーザをサーバに送信して情報を取得する
	        // $.ajax({
	        //     url: '/nope/'+UserData[0].id,
	        //     dataType: 'json',
	        //     type: 'POST',
	        //     success: function(data: any) {
	        //         //現在のコメントリストの情報を更新
	        //         this.setState({data: [data.shift(), data.shift()]});
	        //     }.bind(this),
	        //     error: function(xhr: any, status: any, err: any) {
	        //         //前のコメント情報に戻す                     
	        //         this.setState({data: comments});                   
	        //         console.error(this.props.url, status, err.toString());   
	        //     }.bind(this)                                             
	        // });
	    };
	    Cards.prototype.onLike = function (e) {
	        var _this = this;
	        e.preventDefault();
	        //右に移動するアニメーション
	        $('#1').addClass('rotateOutUpRight animated');
	        $('button').attr('disabled', 'disabled');
	        //アニメーション終了時にStateを更新
	        setTimeout(function () {
	            _this.currentData = data_1.UserData.shift();
	            _this.setState({ data: [_this.currentData, data_1.UserData[0]] });
	            $('button').removeAttr('disabled');
	        }, 1000);
	        // Likeのユーザをサーバに送信して情報を取得する
	        // $.ajax({
	        //     url: '/like/'+UserData[0].id,
	        //     dataType: 'json',
	        //     type: 'POST',
	        //     success: function(data: any) {
	        //         //現在のコメントリストの情報を更新
	        //         this.setState({data: [data.shift(), data.shift()]});
	        //     }.bind(this),
	        //     error: function(xhr: any, status: any, err: any) {
	        //         //前のコメント情報に戻す                     
	        //         this.setState({data: comments});                   
	        //         console.error(this.props.url, status, err.toString());   
	        //     }.bind(this)                                             
	        // });        
	    };
	    Cards.prototype.componentDidMount = function () {
	        this.loadUserInfo();
	    };
	    Cards.prototype.render = function () {
	        return (React.createElement("div", {className: "Cards"}, React.createElement("div", {className: 'row'}, React.createElement(CardList_1.CardList, {CardData: this.state.data}), React.createElement("div", {style: { textAlign: 'center' }}, React.createElement(CardNopeButton_1.CardNopeButton, {onNopeClick: this.onNope.bind(this)}), React.createElement(CardLikeButton_1.CardLikeButton, {onLikeClick: this.onLike.bind(this)})))));
	    };
	    return Cards;
	}(React.Component));
	exports.Cards = Cards;
	;


/***/ },

/***/ 189:
/***/ function(module, exports) {

	"use strict";
	exports.UserData = [{
	        "id": 1,
	        "nickname": "ねこ",
	        "age": 23,
	        "live": "東京",
	        "comment": "ねこ大好きです",
	        "work": "猫カフェ経営",
	        "height": 169.0,
	        "img": "./img/1.jpg"
	    }, {
	        "id": 2,
	        "nickname": "いぬ",
	        "age": 20,
	        "live": "神奈川",
	        "comment": "いぬ大好きです",
	        "work": "在宅ワーク",
	        "height": 159.0,
	        "img": "./img/2.jpg"
	    }, {
	        "id": 3,
	        "nickname": "とり",
	        "age": 28,
	        "live": "京都",
	        "comment": "鳥肉大好きです",
	        "work": "野鳥の撮影",
	        "height": 160.0,
	        "img": "./img/3.jpg"
	    }, {
	        "id": 4,
	        "nickname": "A",
	        "age": 30,
	        "live": "熊本",
	        "comment": "おはよう",
	        "work": "エンジニア",
	        "height": 145.0,
	        "img": "./img/4.jpg"
	    }, {
	        "id": 5,
	        "nickname": "B",
	        "age": 31,
	        "live": "北海道",
	        "comment": "寒い",
	        "work": "除雪車の運転",
	        "height": 150.0,
	        "img": "./img/5.jpg"
	    }, {
	        "id": 6,
	        "nickname": "C",
	        "age": 32,
	        "live": "青森",
	        "comment": "リンゴおいしい",
	        "work": "リンゴ園",
	        "height": 185.0,
	        "img": "./img/6.jpg"
	    }, {
	        "id": 7,
	        "nickname": "D",
	        "age": 33,
	        "live": "秋田",
	        "comment": "秋田県飽きた",
	        "work": "農業",
	        "height": 167.0,
	        "img": "./img/7.jpg"
	    }, {
	        "id": 8,
	        "nickname": "E",
	        "age": 34,
	        "live": "和歌山",
	        "comment": "白浜きれいだった",
	        "work": "水泳コーチ",
	        "height": 166.0,
	        "img": "./img/8.jpg"
	    }, {
	        "id": 9,
	        "nickname": "F",
	        "age": 35,
	        "live": "広島",
	        "comment": "お好み焼き食べたい",
	        "work": "お好み焼き屋",
	        "height": 175.0,
	        "img": "./img/9.jpg"
	    }, {
	        "id": 10,
	        "nickname": "G",
	        "age": 36,
	        "live": "山口",
	        "comment": "角島よかった～",
	        "work": "漁師",
	        "height": 162.0,
	        "img": "./img/10.jpg"
	    }];


/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var CardNopeButton = (function (_super) {
	    __extends(CardNopeButton, _super);
	    function CardNopeButton(props) {
	        _super.call(this, props);
	        //関数のバインド
	        //this.handleSubmit = this.handleSubmit.bind(this);
	    }
	    // componentWillEnter(callback: any) {
	    //     console.log("component will enter");
	    //     callback();
	    // }
	    // componentDidEnter(){
	    //     console.log("component will Enter");
	    // }
	    // componentWillLeave(callback: any){
	    //     console.log("component will leave"); 
	    //     callback();       
	    // 
	    //onSubmitで呼び出される関数
	    CardNopeButton.prototype.handleSubmit = function (e) {
	        e.preventDefault();
	    };
	    CardNopeButton.prototype.render = function () {
	        return (React.createElement("span", {className: "CardNopeButton"}, React.createElement("button", {className: 'btn-floating btn-large waves-effect waves-light red', onClick: this.props.onNopeClick, style: { marginRight: '10px' }}, React.createElement("i", {className: "material-icons"}, "sentiment_very_dissatisfied"))));
	    };
	    return CardNopeButton;
	}(React.Component));
	exports.CardNopeButton = CardNopeButton;


/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var CardLikeButton = (function (_super) {
	    __extends(CardLikeButton, _super);
	    function CardLikeButton(props) {
	        _super.call(this, props);
	        //関数のバインド
	        //this.handleSubmit = this.handleSubmit.bind(this);
	    }
	    // componentWillEnter(callback: any) {
	    //     console.log("component will enter");
	    //     callback();
	    // }
	    // componentDidEnter(){
	    //     console.log("component will Enter");
	    // }
	    // componentWillLeave(callback: any){
	    //     console.log("component will leave"); 
	    //     callback();       
	    // }
	    //onSubmitで呼び出される関数
	    CardLikeButton.prototype.handleSubmit = function (e) {
	        e.preventDefault();
	    };
	    CardLikeButton.prototype.render = function () {
	        return (React.createElement("span", {className: "CardLikeButton"}, React.createElement("button", {className: 'btn-floating btn-large waves-effect waves-light blue', onClick: this.props.onLikeClick, style: { marginLeft: '10px' }}, React.createElement("i", {className: "material-icons"}, "sentiment_very_satisfied"))));
	    };
	    return CardLikeButton;
	}(React.Component));
	exports.CardLikeButton = CardLikeButton;


/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	/**
	 * コンポーネントのimport
	 */
	var CardDetails_1 = __webpack_require__(265);
	var CardNone_1 = __webpack_require__(266);
	var CardList = (function (_super) {
	    __extends(CardList, _super);
	    function CardList(props) {
	        _super.call(this, props);
	        //Stateの初期化
	        this.state = { data: [] };
	        //関数のバインド
	        //this.handleSubmit = this.handleSubmit.bind(this);
	    }
	    CardList.prototype.devideData = function (data) {
	        var devideData = [];
	        for (var i = 0; i < data.length; i++) {
	            var forImg = {
	                img: data.img,
	                nickname: data.nickname,
	                age: data.age,
	                live: data.live
	            };
	            var forDetails = {
	                work: data.work,
	                height: data.height
	            };
	            devideData.push({
	                img: forImg,
	                details: forDetails
	            });
	        }
	        this.setState({ data: devideData });
	    };
	    CardList.prototype.componentDidMount = function () {
	        this.devideData(this.props.CardData);
	    };
	    CardList.prototype.render = function () {
	        var nodes = this.props.CardData.reverse().map(function (userInfo, index) {
	            console.log(index);
	            // 2枚目がundefinedならば何も返さない
	            if (userInfo === undefined && index === 0) {
	                return (React.createElement(CardNone_1.CardNone, null));
	            }
	            else if (userInfo === undefined && index === 1) {
	                return (React.createElement(CardNone_1.CardNone, null));
	            }
	            if (index === 0) {
	                return (React.createElement(CardDetails_1.CardDetails, {Index: index, key: userInfo.id, userData: userInfo}));
	            }
	            else {
	                return (React.createElement(CardDetails_1.CardDetails, {Index: index, key: userInfo.id, userData: userInfo}));
	            }
	        });
	        return (React.createElement("div", {className: "CardList"}, nodes));
	    };
	    return CardList;
	}(React.Component));
	exports.CardList = CardList;
	;


/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var CardDetails = (function (_super) {
	    __extends(CardDetails, _super);
	    function CardDetails(props) {
	        _super.call(this, props);
	        /*
	         <div className={'carousel carousel-slider'} data-indicators="true">
	                                    <img className={'carousel-item'} src={this.props.userData.img} />
	                                    <img className={'carousel-item'} src={this.props.userData.img} />
	                                    <img className={'carousel-item'} src={this.props.userData.img} />
	        */
	    }
	    CardDetails.prototype.render = function () {
	        return (React.createElement("div", {className: 'CardDetails', id: this.props.Index}, React.createElement("div", {className: 'row'}, React.createElement("div", {className: 'col m12 l12 s12'}, React.createElement("div", {className: 'card'}, React.createElement("div", {className: 'card-image'}, React.createElement("img", {src: this.props.userData.img}), React.createElement("span", {className: 'card-title', style: { width: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}, React.createElement("span", {style: { fontSize: '20px' }}, this.props.userData.nickname + " " + this.props.userData.age + "歳 " + this.props.userData.live), React.createElement("br", null), React.createElement("span", {style: { fontSize: '16px' }}, this.props.userData.comment))), React.createElement("div", {className: 'card-content', style: { textAlign: 'center' }}, this.props.userData.work + " " + this.props.userData.height + "cm"))))));
	    };
	    return CardDetails;
	}(React.Component));
	exports.CardDetails = CardDetails;
	;


/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var CardNone = (function (_super) {
	    __extends(CardNone, _super);
	    function CardNone(props) {
	        _super.call(this, props);
	    }
	    CardNone.prototype.render = function () {
	        return (React.createElement("div", {className: 'CardNone'}, React.createElement("div", {className: 'row'}, React.createElement("div", {className: 'col m12 l12 s12'}, React.createElement("div", {className: 'card'}, React.createElement("div", {className: 'card-title'}, React.createElement("p", {className: 'nothing'}, "カードがありません")))))));
	    };
	    return CardNone;
	}(React.Component));
	exports.CardNone = CardNone;
	;


/***/ }

/******/ });
//# sourceMappingURL=bundle.js.map