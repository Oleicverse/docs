(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(7),r=(n(0),n(139)),o={id:"markdown-guidelines",title:"Markdown Guidelines"},s={unversionedId:"markdown-guidelines",id:"markdown-guidelines",isDocsHomePage:!1,title:"Markdown Guidelines",description:"Hashnode's Editor supports simple markdown and some unique tags for embeds.",source:"@site/docs/markdown-guidelines.md",slug:"/markdown-guidelines",permalink:"/docs/markdown-guidelines",editUrl:"https://github.com/oleicverse/docs/docs/markdown-guidelines.md",version:"current"},l=[{value:"Headers",id:"headers",children:[]},{value:"This is Heading 2",id:"this-is-heading-2",children:[{value:"This is Heading 3",id:"this-is-heading-3",children:[]}]},{value:"Embeds",id:"embeds",children:[]},{value:"Code Snippets",id:"code-snippets",children:[{value:"Inline code",id:"inline-code",children:[]},{value:"Block code",id:"block-code",children:[]}]},{value:"Text Formatting",id:"text-formatting",children:[]},{value:"Quotes",id:"quotes",children:[]},{value:"Links",id:"links",children:[]},{value:"Inline Images",id:"inline-images",children:[]},{value:"Tables",id:"tables",children:[]},{value:"Math Equations",id:"math-equations",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Hashnode's Editor supports simple markdown and some unique tags for embeds."),Object(r.b)("p",null,"This guide will help you create rich posts on Hashnode using markdown."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"headers"},"Headers"),Object(r.b)("p",null,"Hashnode supports Atx-style headers. Use the 1-6 hash characters at the start of a line, corresponding to header levels H1 to H6. For example:"),Object(r.b)("h1",{id:"this-is-heading-1"},"This is Heading 1"),Object(r.b)("h2",{id:"this-is-heading-2"},"This is Heading 2"),Object(r.b)("h3",{id:"this-is-heading-3"},"This is Heading 3"),Object(r.b)("h4",{id:"this-is-heading-4"},"This is Heading 4"),Object(r.b)("h5",{id:"this-is-heading-5"},"This is Heading 5"),Object(r.b)("h6",{id:"this-is-heading-6"},"This is Heading 6"),Object(r.b)("h2",{id:"embeds"},"Embeds"),Object(r.b)("p",null,"Hashnode uses Embed.ly to support all kinds of embed on the platform. You DON'T have to paste the platform-specific embed code. Just follow the following syntax, and the magic will happen."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"%[Paste link to embed]\n\n//Embed Tweets\n%[https://twitter.com/hashnode/status/1080795453115920384?s=20]\n\n//Embed YouTube Videos\n%[https://www.youtube.com/watch?v=vAKtNV8KcWg]\n\n//Embed Github Repo\n%[https://github.com/hashnode/hashnode-cli]\n\n//Embed Codepen\n%[https://codepen.io/zephyo/pen/MZbLwV]\n\n//Embed Glitch\n%[https://glitch.com/edit/#!/lithium-battery-recycling]\n\n//Embed Soundcloud\n%[https://soundcloud.com/androidauthority/024-prime-day-shmimeday]\n\n//Embed any article on the web or website\n%[https://hashnode.com]\n")),Object(r.b)("h2",{id:"code-snippets"},"Code Snippets"),Object(r.b)("h3",{id:"inline-code"},"Inline code"),Object(r.b)("p",null,"Use the Grave accent keys ",Object(r.b)("strong",{parentName:"p"},"`")," for the inline code snippets. In QWERTY keypads, this key can be written using Ctrl + 1."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'This is a standard sentence with `console.log("yeah!")` in it.\n')),Object(r.b)("p",null,"The above will output the following:"),Object(r.b)("p",null,"This is a standard sentence with ",Object(r.b)("inlineCode",{parentName:"p"},'console.log("yeah!")')," in it."),Object(r.b)("h3",{id:"block-code"},"Block code"),Object(r.b)("p",null,"Wrap the code blocks with tripple Grave accent keys. ",Object(r.b)("strong",{parentName:"p"},"```")," for showing big blocks of code in your content. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"if (isServer && user) {\n    store.userStore.currentUser = user;\n}\n")),Object(r.b)("p",null,"The above will look like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"if (isServer && user) {\n    store.userStore.currentUser = user;\n}\n")),Object(r.b)("p",null,"Hashnode supports generic code highlighting. This will be applied to the code blocks after you publish the content."),Object(r.b)("p",null,"You can select which highlighting to use manually by appending the code language after the beginning Tripple Grave accent keys like so ",Object(r.b)("strong",{parentName:"p"},"```javascript"),"."),Object(r.b)("h2",{id:"text-formatting"},"Text Formatting"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Bold:")," Wrap the text with double asterisks ",Object(r.b)("inlineCode",{parentName:"p"},"**")," to make it a ",Object(r.b)("strong",{parentName:"p"},"bold text"),". We will wrap the text with the ",Object(r.b)("inlineCode",{parentName:"p"},"<strong>")," tag while parsing."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Italics:")," Wrap the text with single asterisks character ",Object(r.b)("inlineCode",{parentName:"p"},"*")," to make the text ",Object(r.b)("em",{parentName:"p"},"italics"),". We will wrap the text with the ",Object(r.b)("inlineCode",{parentName:"p"},"<em>")," tag while parsing."),Object(r.b)("p",null,"The bold and italics markdown syntax works inside almost any block-level element, like Quotes, Lists, Inline code, etc."),Object(r.b)("h2",{id:"quotes"},"Quotes"),Object(r.b)("p",null,"Use the greater than sign to format a text as a quote. For example:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Where there is a will, there is a way!\nWhere there is a will, there is a way!")),Object(r.b)("h2",{id:"links"},"Links"),Object(r.b)("p",null,"I'm an inline hyperlink: ",Object(r.b)("inlineCode",{parentName:"p"},"[Click here to signup](put-link-here).")),Object(r.b)("h2",{id:"inline-images"},"Inline Images"),Object(r.b)("p",null,"Use Hashnode's image uploader to upload your image to Hashnode CDN or fetch the URL of the image uploaded elsewhere."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1547978025630/SkGNSabX4.png",alt:"Hashnode Uploader"})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Alt text of image](put-link-to-image-here)")),Object(r.b)("h2",{id:"tables"},"Tables"),Object(r.b)("p",null,"Use the markdown format below to add a table into your article on Hashnode."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"| I |HI |Hey|\n|---|---|---|\n| 1 | 2 | 3 |\n| 4 | 5 | 6 |\n| 7 | 8 | 9 |\n")),Object(r.b)("h2",{id:"math-equations"},"Math Equations"),Object(r.b)("p",null,"With Latext support on Hashnode, you can now add mathematical equations to your articles. Here are some examples:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$$\n\\lim\\limits_{x \\to \\infty} \\exp(-x) = 0\n$$\n\n---\n\n$$\n\\cos (2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta\n$$\n\n---\n\n$$ \\left[\n\\begin{array}{cc|c}\n  1&2&3\\\\\\\\\n  4&5&6\n\\end{array}\n\\right] $$\n\n")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1609225790772/bwECSA7u4.png",alt:"Latex examples"})))}d.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),h=i,u=b["".concat(o,".").concat(h)]||b[h]||p[h]||r;return n?a.a.createElement(u,s(s({ref:t},c),{},{components:n})):a.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);