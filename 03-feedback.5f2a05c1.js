!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,g=Math.max,v=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,a,i,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=a;return o=a=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,l=setTimeout(w,t),s?b(e):u}function O(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function w(){var e=p();if(O(e))return T(e);l=setTimeout(w,function(e){var n=t-(e-f);return d?v(n,i-(e-c)):n}(e))}function T(e){return l=void 0,m&&o?b(e):(o=a=void 0,u)}function h(){var e=p(),n=O(e);if(o=arguments,a=this,f=e,n){if(void 0===l)return j(f);if(d)return l=setTimeout(w,t),b(f)}return void 0===l&&(l=setTimeout(w,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,i=(d="maxWait"in n)?g(S(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=a=l=void 0},h.flush=function(){return void 0===l?u:T(p())},h}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):i.test(t)?NaN:+t}t=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),b(e,t,{leading:o,maxWait:t,trailing:a})};var j=document.querySelector(".feedback-form"),O=document.querySelector(".feedback-form input"),w=document.querySelector(".feedback-form textarea"),T="feedback-form-state";j.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(h))}),500)),j.addEventListener("submit",(function(e){if(e.preventDefault(),localStorage.removeItem(T),e.currentTarget.reset(),!h.email||!h.message)return localStorage.clear(),h={},alert("email or password not entered");console.log("ELSE formData.email=",h.email),console.log("Else formData.message=",h.message),console.log(h);h={}}));var h=JSON.parse(localStorage.getItem(T))||{};!function(){localStorageValue=localStorage.getItem(T);var e=JSON.parse(localStorageValue);console.log("formData",e),e&&(O.value=e.email||"",w.value=e.message||"");console.log("formData.email",O.value),console.log("formData.message",w.value)}()}();
//# sourceMappingURL=03-feedback.5f2a05c1.js.map
