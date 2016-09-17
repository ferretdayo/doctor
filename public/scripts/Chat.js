"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var CommentBox_1 = require("./CommentBox");
var Chat = (function (_super) {
    __extends(Chat, _super);
    function Chat(props) {
        _super.call(this, props);
    }
    Chat.prototype.render = function () {
        return (React.createElement("div", {className: "Chat"}, 
            React.createElement(UserList, null), 
            React.createElement(CommentBox_1.CommentBox, {url: '/api/comments', pollInterval: 2000})));
    };
    return Chat;
}(React.Component));
exports.Chat = Chat;
//# sourceMappingURL=Chat.js.map