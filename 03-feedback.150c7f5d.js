!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var r,o,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function h(e){return c=e,f=setTimeout(w,t),s?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function w(){var e=p();if(O(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function S(e){return f=void 0,d&&r?y(e):(r=o=void 0,u)}function T(){var e=p(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return h(l);if(m)return f=setTimeout(w,t),y(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:S(p())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var h=document.querySelector(".feedback-form"),O="feedback-form-state",w=function(){try{return JSON.parse(localStorage.getItem(O))||{}}catch(e){return console.error("Помилка отримання даних:",e),{}}}();h.elements.email.value=w.email||"",h.elements.message.value=w.message||"";var S=e(t)((function(){var e={email:h.elements.email.value.trim(),message:h.elements.message.value.trim()};localStorage.setItem(O,JSON.stringify(e))}),300);h.addEventListener("input",S),h.addEventListener("submit",(function(e){e.preventDefault();var t={email:h.elements.email.value.trim(),message:h.elements.message.value.trim()};t.email&&t.message?(console.log("📩 Відправлені дані:",t),localStorage.removeItem(O),h.reset()):alert("Будь ласка, заповніть всі поля!")}))}();
//# sourceMappingURL=03-feedback.150c7f5d.js.map
