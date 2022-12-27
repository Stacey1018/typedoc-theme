"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const typedoc_1 = require("typedoc");
function load(app) {
    app.renderer.hooks.on("head.end", () => (typedoc_1.JSX.createElement("script", null,
        typedoc_1.JSX.createElement(typedoc_1.JSX.Raw, { html: "alert('hi!');" }))));
}
exports.load = load;
