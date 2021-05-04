(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,s=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.a.createElement(s,b(b({ref:t},p),{},{components:n})):r.a.createElement(s,b({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),o=(n(0),n(139)),l={id:"mapping-domain",title:"Setup Custom Domain"},b={unversionedId:"mapping-domain",id:"mapping-domain",isDocsHomePage:!1,title:"Setup Custom Domain",description:"When you create your Hashnode blog, we provide a free yourdomain.hashnode.dev subdomain for you. However, you can set up your own yourdomain.tld domain or blog.yourdomain.tld subdomain to your Hashnode blog.",source:"@site/docs/mapping-domain.md",slug:"/mapping-domain",permalink:"/docs/mapping-domain",editUrl:"https://github.com/oleicverse/docs/docs/mapping-domain.md",version:"current"},c=[],p={toc:c};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When you create your Hashnode blog, we provide a free ",Object(o.b)("strong",{parentName:"p"},"yourdomain.hashnode.dev")," subdomain for you. However, you can set up your own ",Object(o.b)("strong",{parentName:"p"},"yourdomain.tld")," domain or ",Object(o.b)("strong",{parentName:"p"},"blog.yourdomain.tld")," subdomain to your Hashnode blog."),Object(o.b)("p",null,"In this guide, you will learn how to accomplish this alongside some additional specific guides for different domain DNS providers."),Object(o.b)("hr",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log in to your Hashnode account.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on your ",Object(o.b)("strong",{parentName:"p"},"profile picture")," at the bottom-left corner of the page on ",Object(o.b)("em",{parentName:"p"},"desktop")," screen or top-right corner on ",Object(o.b)("em",{parentName:"p"},"mobile")," screen."))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1600711465204/4Mb1R5qj8.png?auto=compress",alt:"Hashnode's Feed"})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Blog Dashboard")," option from the popup modal to access your blog's dashboard.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1600777454265/bQ7rPPNO2.png?auto=compress",alt:"Hashnode's Feed"})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Navigate to the ",Object(o.b)("strong",{parentName:"li"},"DOMAIN")," tab and enter your domain without the ",Object(o.b)("strong",{parentName:"li"},"www")," or ",Object(o.b)("strong",{parentName:"li"},"https://")," prefix in the text field provided. Then click on the ",Object(o.b)("strong",{parentName:"li"},"Update")," button to proceed.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1611128651213/fzVTxERYc.png?auto=compress",alt:"Hashnode's Blog Domain Tab"})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"If your DNS provider supports CNAME record, head over to your DNS provider and add a ",Object(o.b)("strong",{parentName:"li"},"CNAME record")," where the hostname is ",Object(o.b)("strong",{parentName:"li"},"@"),", and the corresponding value is ",Object(o.b)("strong",{parentName:"li"},"hashnode.network"),". This CNAME record will point your domain or subdomain to Hashnode's IP address.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1611129787591/FS5aU9ZC5.png?auto=compress",alt:"Hashnode CNAME"})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"It's not recommended to use the CNAME record at the root level (e.g., ",Object(o.b)("strong",{parentName:"p"},"yourdomain.tld"),") unless your DNS provider supports ",Object(o.b)("a",{parentName:"p",href:"https://blog.cloudflare.com/introducing-cname-flattening-rfc-compliant-cnames-at-a-domains-root"},"CNAME flattening")," as this will affect your domain's MX records and email service.")),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"If your DNS provider does not support CNAME flattening, add an ",Object(o.b)("strong",{parentName:"li"},"A record")," at the root whose value is ",Object(o.b)("strong",{parentName:"li"},"192.241.200.144"),". However, you will lose the benefits of our global CDN and edge caching with this approach.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1611129845211/FqAlp-zMZ.png?auto=compress",alt:"Hashnode A record"})),Object(o.b)("hr",null),Object(o.b)("p",null,"Here is how to setup custom domain for your Hashnode blog using the most popular DNS providers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"mapping-namecheap"},"NameCheap guide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"mapping-cloudflare"},"Cloudflare guide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"mapping-godaddyx"},"GoDaddy guide"))),Object(o.b)("hr",null),Object(o.b)("p",null,"Still not sure if your DNS provider supports CNAME flattering or when to use CNAME or A record? Here is a quick summary to guide you:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you are setting up a domain at the root level (e.g., yourdomain.tld",Object(o.b)("strong",{parentName:"li"},"), and your DNS provider supports CNAME flattening, "),"use a CNAME record**."),Object(o.b)("li",{parentName:"ul"},"If you are setting up a root domain and your DNS provider does not support CNAME flattening, ",Object(o.b)("strong",{parentName:"li"},"use an A record"),"."),Object(o.b)("li",{parentName:"ul"},"If you set up a sub-domain (e.g., ",Object(o.b)("strong",{parentName:"li"},"blog.yourdomain.tld"),"), ",Object(o.b)("strong",{parentName:"li"},"use a CNAME record")," without any worries.")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"DNS Provider"),Object(o.b)("th",{parentName:"tr",align:null},"Supports CNAME Flattering"),Object(o.b)("th",{parentName:"tr",align:null},"Use CNAME Record (Root)"),Object(o.b)("th",{parentName:"tr",align:null},"Use A Record (Root)"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Namecheap"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"\u2705")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Cloudflare"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"\u2705"),Object(o.b)("td",{parentName:"tr",align:null},"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"GoDaddy"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"\u2705")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"OpenDNS"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"\u2705")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Oracle Dyn Managed DNS"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"\u2705")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Cisco Umbrella"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"\u2705")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Amazon Route 53"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"\u2705")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Google Cloud DNS"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"\u2705")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"IBM Domain Name Services (DNS)"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"\u2705"),Object(o.b)("td",{parentName:"tr",align:null},"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Azure DNS"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"\u2705"),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}i.isMDXComponent=!0}}]);