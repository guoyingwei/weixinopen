"use strict";

function init() {
    var e = require("../../lib/react.js"),
        t = require("../../cssStr/cssStr.js"),
        r = require("../../stores/windowStores.js"),
        n = e.createClass({
            displayName: "WebviewBackwardMask",
            getInitialState: function() {
                return { show: !1 }
            },
            _appEnterBackground: function() { this.setState({ show: !0 }) },
            _appEnterForeground: function() { this.setState({ show: !1 }) },
            componentDidMount: function() { r.on("APP_ENTER_BACKGROUND", this._appEnterBackground), r.on("APP_ENTER_FOREGROUND", this._appEnterForeground) },
            componentWillUnmount: function() { r.removeListener("APP_ENTER_BACKGROUND", this._appEnterBackground), r.removeListener("APP_ENTER_FOREGROUND", this._appEnterForeground) },
            render: function() {
                var r = this.state.show ? t.displayBlock : t.displayNone;
                return e.createElement("div", { style: r, className: "simulator-backward-mask" }, e.createElement("p", null, e.createElement("i", null), "后台运行中"))
            }
        });
    _exports = n
}
var _exports;
init(), module.exports = _exports;
