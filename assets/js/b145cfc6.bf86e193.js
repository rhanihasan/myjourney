"use strict";(self.webpackChunkhassan_website=self.webpackChunkhassan_website||[]).push([[3327],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=o(a),m=r,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(k,s(s({ref:t},d),{},{components:a})):n.createElement(k,s({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),l=a(6010),s=a(2466),i=a(6550),u=a(1980),o=a(7392),d=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,o]=k({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),h(e)}),[o,h,l]),tabValues:l}}var b=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=o[a].value;n!==i&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},s,{className:(0,l.Z)("tabs__item",N.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(f,(0,n.Z)({key:String(t)},e))}},2969:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){let{children:t,color:a}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},7892:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162),a(2969);const l={sidebar_position:4},s="IP Address Subnetting & IPv6",i={unversionedId:"CyberSecurity/CCNA/Networking Fundametails IP-Subnetting",id:"CyberSecurity/CCNA/Networking Fundametails IP-Subnetting",title:"IP Address Subnetting & IPv6",description:"What & Why IP Address",source:"@site/docs/CyberSecurity/CCNA/Networking Fundametails IP-Subnetting.md",sourceDirName:"CyberSecurity/CCNA",slug:"/CyberSecurity/CCNA/Networking Fundametails IP-Subnetting",permalink:"/journey/docs/CyberSecurity/CCNA/Networking Fundametails IP-Subnetting",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Network Cables",permalink:"/journey/docs/CyberSecurity/CCNA/Network Cables"},next:{title:"CheckPoint Introduction",permalink:"/journey/docs/CyberSecurity/CheckPoint/Checkpoint_intro"}},u={},o=[{value:"What &amp; Why IP Address",id:"what--why-ip-address",level:2},{value:"Versions",id:"versions",level:3},{value:"IP Address Class",id:"ip-address-class",level:2},{value:"Note",id:"note",level:3},{value:"Types of IP Address",id:"types-of-ip-address",level:2},{value:"NAT (Network Address Translation)",id:"nat-network-address-translation",level:2},{value:"Private IP Address IPv4",id:"private-ip-address-ipv4",level:2},{value:"Digging up IP Address",id:"digging-up-ip-address",level:2},{value:"What &amp; Why Subnet",id:"what--why-subnet",level:2},{value:"What &amp; Why Subnetting",id:"what--why-subnetting",level:2},{value:"Subnet Address",id:"subnet-address",level:2},{value:"FLSM",id:"flsm",level:2},{value:"What &amp; Why FLSM (Fixed Length Subnet Mask)",id:"what--why-flsm-fixed-length-subnet-mask",level:2},{value:"VLSM",id:"vlsm",level:2},{value:"What &amp; Why VLSM (Variable Length Subnet Mask)",id:"what--why-vlsm-variable-length-subnet-mask",level:2},{value:"IPv6",id:"ipv6",level:2},{value:"What &amp; Why IPv6",id:"what--why-ipv6",level:2}],d={toc:o},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ip-address-subnetting--ipv6"},"IP Address Subnetting & IPv6"),(0,r.kt)("h2",{id:"what--why-ip-address"},"What & Why IP Address"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IP stands for Internet Protocol."),(0,r.kt)("li",{parentName:"ul"},"IP Address was created and assigned by IANA (Internet Assigned Numbers Authority)."),(0,r.kt)("li",{parentName:"ul"},"It's an address that can control access.")),(0,r.kt)("h3",{id:"versions"},"Versions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IPv1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IPv2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IPv3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IPv4 & IPv6 are successful and working.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IANA is the organization that distributes IP Addresses worldwide."))),(0,r.kt)("h2",{id:"ip-address-class"},"IP Address Class"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Class A"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0.0 - 126.255.255.255"),(0,r.kt)("td",{parentName:"tr",align:null},"Used by ISPs & their Public IPs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Class B"),(0,r.kt)("td",{parentName:"tr",align:null},"128.0.0.0 - 191.255.255.255"),(0,r.kt)("td",{parentName:"tr",align:null},"Used by ISPs & their Public IPs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Class C"),(0,r.kt)("td",{parentName:"tr",align:null},"192.0.0.0 - 223.255.255.255"),(0,r.kt)("td",{parentName:"tr",align:null},"Used by ISPs & their Public IPs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Class D"),(0,r.kt)("td",{parentName:"tr",align:null},"224.0.0.0 - 239.255.255.255"),(0,r.kt)("td",{parentName:"tr",align:null},"Network Device/Communication & Multicast")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Class E"),(0,r.kt)("td",{parentName:"tr",align:null},"240.0.0.0 - 255.255.255.255"),(0,r.kt)("td",{parentName:"tr",align:null},"Research Centre etc.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IP Range: 0-255.0-255.0-255.0-255"),(0,r.kt)("li",{parentName:"ul"},"Dynamic Combination"),(0,r.kt)("li",{parentName:"ul"},"First and Last Part should not be zero"),(0,r.kt)("li",{parentName:"ul"},"ISPs can use Classes A, B, C"),(0,r.kt)("li",{parentName:"ul"},"Last number being zero represents Network"),(0,r.kt)("li",{parentName:"ul"},"One IP Address can maintain 65,535 Devices")),(0,r.kt)("h3",{id:"note"},"Note"),(0,r.kt)("p",null,"Due to the increase in electronic devices, the shortage of assigned IP addresses has led to the use of Private Addresses with NAT."),(0,r.kt)("h2",{id:"types-of-ip-address"},"Types of IP Address"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Public: Used on the internet. No two machines can have the same IP address and port simultaneously."),(0,r.kt)("li",{parentName:"ol"},"Private: Used in LAN. Two LANs in different locations can have the same IPs. Machines can access others within LAN but can't access the web.")),(0,r.kt)("h2",{id:"nat-network-address-translation"},"NAT (Network Address Translation)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Converting free-use private IP addresses into public IP addresses."),(0,r.kt)("li",{parentName:"ul"},"Private IP addresses work under LAN and go through NAT to reach WAN.")),(0,r.kt)("h2",{id:"private-ip-address-ipv4"},"Private IP Address IPv4"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Hosts Up"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Class A"),(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0.0 - 10.255.255.255"),(0,r.kt)("td",{parentName:"tr",align:null},"(16,777,216 IP addresses)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Class B"),(0,r.kt)("td",{parentName:"tr",align:null},"172.16.0.0 - 172.31.255.255"),(0,r.kt)("td",{parentName:"tr",align:null},"(1,048,576 IP addresses)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Class C"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.0.0 - 192.168.255.255"),(0,r.kt)("td",{parentName:"tr",align:null},"(65,536 IP addresses)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These addresses are private and can only be used within a local network."),(0,r.kt)("li",{parentName:"ul"},"They can't access the internet directly; they're converted into public IP addresses when accessing the internet.")),(0,r.kt)("h2",{id:"digging-up-ip-address"},"Digging up IP Address"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IPv4 is divided into 4 parts, each with 8 bits."),(0,r.kt)("li",{parentName:"ul"},"IPv4 has a total of 32 bits."),(0,r.kt)("li",{parentName:"ul"},"Each part can have a number from 0-255."),(0,r.kt)("li",{parentName:"ul"},"IP address can't start or end with 0."),(0,r.kt)("li",{parentName:"ul"},"IP with 0 at the end represents the network.")),(0,r.kt)("h1",{id:"subnet"},"Subnet"),(0,r.kt)("h2",{id:"what--why-subnet"},"What & Why Subnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Subnet can divide big networks."),(0,r.kt)("li",{parentName:"ul"},"Subnet can control IP addresses."),(0,r.kt)("li",{parentName:"ul"},"Subnets are the bits which IP addresses have.")),(0,r.kt)("p",null,"Example: 192.168.1.0 has 255.255.255.0 subnets which have (65,536 IP addresses) free in LANs."),(0,r.kt)("h2",{id:"what--why-subnetting"},"What & Why Subnetting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Subnetting is dividing the subnets.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Network Bits are fixed and can't change.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Host Bits are changeable."))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Class A has 10.0.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"That means 10 is network bits & 0.0.0 is host bits, 32-8 = 24 host bits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Class A 10.0.0.0 has 8 network bits and 24 host bits.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Class B has 172.16.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"That means 172.16 is 8+8 bits = 16 bits and host bits are 32 \u2013 16 = 16 host bits.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Class B 172.16.0.0 has 16 network & 16 host bits.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Class C has 192.168.1.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"That means 192.168.1 = 8+8+8 = 24 and host bits are 32-24 = 8 host bits.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Class C 192.168.1.0 has 24 network & 8 host bits."))),(0,r.kt)("p",null,"Formula: 2^n = two to the power of n + Internet Protocol has 8 bits."),(0,r.kt)("h2",{id:"subnet-address"},"Subnet Address"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number/Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/8"),(0,r.kt)("td",{parentName:"tr",align:null},"Default of Class A Network ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/16"),(0,r.kt)("td",{parentName:"tr",align:null},"Default of Class B Network ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/24"),(0,r.kt)("td",{parentName:"tr",align:null},"Default of Class C Network ID")))),(0,r.kt)("p",null,"Formula for Subnet Mask:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class A: Network Bits + Converted Host Bits = Subnet Mask"),(0,r.kt)("li",{parentName:"ul"},"Class B: Network Bits + Converted Host Bits = Subnet Mask"),(0,r.kt)("li",{parentName:"ul"},"Class C: Network Bits + Converted Host Bits = Subnet Mask")),(0,r.kt)("h2",{id:"flsm"},"FLSM"),(0,r.kt)("h2",{id:"what--why-flsm-fixed-length-subnet-mask"},"What & Why FLSM (Fixed Length Subnet Mask)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FLSM stands for Fixed Length Subnet Mask."),(0,r.kt)("li",{parentName:"ul"},"Its subnet size can't be changed, also known as Fixed Size."),(0,r.kt)("li",{parentName:"ul"},"FLSM means a big IP can be shortened into an equal number of small networks.")),(0,r.kt)("h2",{id:"vlsm"},"VLSM"),(0,r.kt)("h2",{id:"what--why-vlsm-variable-length-subnet-mask"},"What & Why VLSM (Variable Length Subnet Mask)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"VLSM stands for Variable Length Subnet Mask.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"VLSM means we can give IPs according to our needs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We start from networks with the highest requirement.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"VLSM allows efficient use of IP addresses in variable-sized subnets."))),(0,r.kt)("h2",{id:"ipv6"},"IPv6"),(0,r.kt)("h2",{id:"what--why-ipv6"},"What & Why IPv6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IPv6 was introduced to address the shortage of IPv4 addresses."),(0,r.kt)("li",{parentName:"ul"},"IPv6 has a size of 128 bits."),(0,r.kt)("li",{parentName:"ul"},"IPv6 has 8 segments of 16 bits each, totaling 128 bits."),(0,r.kt)("li",{parentName:"ul"},"IPv6 is classless and not an upgraded version of IPv4."),(0,r.kt)("li",{parentName:"ul"},"Larger header size in IPv6 (40 bytes) compared to IPv4 (20 bytes)."),(0,r.kt)("li",{parentName:"ul"},"NAT is not required in IPv6 due to a large number of available addresses."),(0,r.kt)("li",{parentName:"ul"},"IPv6 supports various addressing and routing functionalities.")))}c.isMDXComponent=!0}}]);