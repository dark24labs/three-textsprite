!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("three"),require("three-texttexture")):"function"==typeof define&&define.amd?define(["three","@seregpie/three.text-texture"],e):((t=t||self).THREE=t.THREE||{},t.THREE.TextSprite=e(t.THREE,t.THREE.TextTexture))}(this,(function(t,e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var i=function(i){function r(r){void 0===r&&(r={});var n=r.fontSize;void 0===n&&(n=1);var o=function(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(i[r]=t[r]);return i}(r,["fontSize"]),a=new e(Object.assign({},o,{fontSize:0})),s=new t.SpriteMaterial({depthWrite:!1,map:a});i.call(this,s),Object.assign(this,{fontSize:n})}i&&(r.__proto__=i),r.prototype=Object.create(i&&i.prototype),r.prototype.constructor=r;var n={width:{configurable:!0},height:{configurable:!0}};return n.width.get=function(){var t=this.fontSize,e=this.material.map.width;return e*=t},n.height.get=function(){var t=this.fontSize,e=this.material.map.height;return e*=t},Object.defineProperties(r.prototype,n),r}(t.Sprite);var r={dispose:function(){var t=this.material;t.map.dispose(),t.dispose()},isTextSprite:!0,onBeforeRender:function(t,e,i){var r=this.height,n=this.material,o=this.scale,a=this.width,s=n.map;a&&r?o.setX(a).setY(r):o.setX(1).setY(1),s.computeAndSetOptimalFontSize(this,t,i,!0),s.redraw()}},n=i.prototype;return["align","fillStyle","fontFamily","fontStyle","fontVariant","fontWeight","lineGap","padding","strokeStyle","strokeWidth","text"].forEach((function(t){Object.defineProperty(n,t,{get:function(){return this.material.map[t]},set:function(e){this.material.map[t]=e}})})),Object.assign(n,r),i}));
