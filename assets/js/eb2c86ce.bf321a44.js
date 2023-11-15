"use strict";(self.webpackChunkhassan_website=self.webpackChunkhassan_website||[]).push([[2627],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(a),c=n,k=p["".concat(s,".").concat(c)]||p[c]||d[c]||l;return a?r.createElement(k,o(o({ref:t},m),{},{components:a})):r.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),m=a(12);function p(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=k({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,m.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),y=(()=>{const e=s??p;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var y=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=m.indexOf(t),r=u[a].value;r!==i&&(p(t),s(r))},c=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;a=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;a=m[t]??m[m.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:d},o,{className:(0,l.Z)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function v(e){const t=(0,y.Z)();return n.createElement(g,(0,r.Z)({key:String(t)},e))}},2969:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294);function n(e){let{children:t,color:a}=e;return r.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=(a(2969),a(4866)),o=a(5162);const i={sidebar_position:1},s="Fundamentails of Memory",u={unversionedId:"CyberSecurity/CCNA/Memory",id:"CyberSecurity/CCNA/Memory",title:"Fundamentails of Memory",description:"---",source:"@site/docs/CyberSecurity/CCNA/Memory.md",sourceDirName:"CyberSecurity/CCNA",slug:"/CyberSecurity/CCNA/Memory",permalink:"/journey/docs/CyberSecurity/CCNA/Memory",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CyberSecurity",permalink:"/journey/docs/category/cybersecurity"},next:{title:"Topology & Components",permalink:"/journey/docs/CyberSecurity/CCNA/Networking 101 Network Topology and Components"}},m={},p=[{value:"<strong>Types of Memory</strong>",id:"types-of-memory",level:2},{value:"<strong>Internal Memory</strong>",id:"internal-memory",level:2},{value:"<strong>ROM</strong>",id:"rom",level:3},{value:"<strong>What &amp; Why ROM</strong>",id:"what--why-rom",level:3},{value:"<strong>Type of ROM</strong>",id:"type-of-rom",level:3},{value:"<strong>RAM</strong>",id:"ram",level:3},{value:"<strong>What &amp; Why RAM</strong>",id:"what--why-ram",level:3},{value:"<strong>Types of RAM</strong>",id:"types-of-ram",level:4},{value:"<strong>External Memory</strong>",id:"external-memory",level:2},{value:"<strong>HardDrive</strong>",id:"harddrive",level:3},{value:"<strong>What &amp; Why HardDrive</strong>",id:"what--why-harddrive",level:4},{value:"<strong>Types of HardDrive</strong>",id:"types-of-harddrive",level:4},{value:"<strong>Cables</strong>",id:"cables",level:3}],d={toc:p},c="wrapper";function k(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fundamentails-of-memory"},"Fundamentails of Memory"),(0,n.kt)("hr",null),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"What is Memory",mdxType:"TabItem"},"It Stored data.")),(0,n.kt)("h2",{id:"types-of-memory"},(0,n.kt)("strong",{parentName:"h2"},"Types of Memory")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Internal Memory"),(0,n.kt)("li",{parentName:"ul"},"External Memory  ")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"internal-memory"},(0,n.kt)("strong",{parentName:"h2"},"Internal Memory")),(0,n.kt)("h3",{id:"rom"},(0,n.kt)("strong",{parentName:"h3"},"ROM")),(0,n.kt)("h3",{id:"what--why-rom"},(0,n.kt)("strong",{parentName:"h3"},"What & Why ROM")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read Only Memory. "),(0,n.kt)("li",{parentName:"ul"},"Small chip that doesn\u2019t have a lot of space and does the task that it is programmed to do. It has a memory of 10mb, 12mb etc."),(0,n.kt)("li",{parentName:"ul"},"Example: washing machine contains rom that tells it to set a timer and do different cycles for different amount of time, our phone shows the company name whenever it is switched on etc.")),(0,n.kt)("h3",{id:"type-of-rom"},(0,n.kt)("strong",{parentName:"h3"},"Type of ROM")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"EPROM",mdxType:"TabItem"},"Erasable programmable read only memory. Rom that can be removed and erased and reprogrammed."),(0,n.kt)(o.Z,{value:"EEPROM",mdxType:"TabItem"},"Electrically erasable read only memory. Rom that can electrically erased and reprogrammed.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"ram"},(0,n.kt)("strong",{parentName:"h3"},"RAM")),(0,n.kt)("h3",{id:"what--why-ram"},(0,n.kt)("strong",{parentName:"h3"},"What & Why RAM")),(0,n.kt)("p",null,"Read Only Memory.\nRam gives the cpu the files required for processing after retrieving it from the hard drive. Cache is present between ram and cpu.\nIt contains most used applications/data. It is faster than ram.\nThe information stored in this type of memory is lost when the power supply to the PC is switch off "),(0,n.kt)("h4",{id:"types-of-ram"},(0,n.kt)("strong",{parentName:"h4"},"Types of RAM")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Static:")," "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SRAM. It is a type of cache. Expensive and very fast. Power is supplied from the machine."),(0,n.kt)("li",{parentName:"ul"},"Static Random-access memory, it doesn't need multiply power supply."),(0,n.kt)("li",{parentName:"ul"},"The information doesn\u2019t deleted unit the user want to delete "),(0,n.kt)("li",{parentName:"ul"},"SRAM is a type of cache."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Dynamic:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DRAM. Also known as DDR."),(0,n.kt)("li",{parentName:"ul"},"Works as normal ram. It is called dynamic because it keeps on getting refreshed continuously in a few seconds. "),(0,n.kt)("li",{parentName:"ul"},"Dynamic Random-access memory, "),(0,n.kt)("li",{parentName:"ul"},"It needs multiple times of power supply."),(0,n.kt)("li",{parentName:"ul"},"The information got deleted when PC is shutdown."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Types of DRAM")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SDRAM "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Older RAMs could not be synced with the system and hence could not generate logs."),(0,n.kt)("li",{parentName:"ul"},"This would also pose difficulties to see how fast it is performing, Hence SDRAM was created. It stands for Synchronized DRAM."),(0,n.kt)("li",{parentName:"ul"},"It gives information of how long a service runs. Speed: 133 MHz Synchronous Dynamic Random-access memory."),(0,n.kt)("li",{parentName:"ul"},"SDRAM can't sync with system time and doesn\u2019t work in heavy apps."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"RDRAM "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"speed: 1GHz. Rambus dynamic ram."),(0,n.kt)("li",{parentName:"ul"},"Private company create this RDRAM."),(0,n.kt)("li",{parentName:"ul"},"RDRAM can take heavy task in 1990s."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DDR RAM"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Double Data Rate"),(0,n.kt)("li",{parentName:"ul"},"Updated sdram that was faster. Most phones have DDR4 nowadays.")))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"DDR1, DDR2, DDR3, DDR4, DDR5, DDR6(also known as GDDR6)")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"To check vendors, we can right click on this pc, manage, device manager.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"DDR"),(0,n.kt)("th",{parentName:"tr",align:null},"Details"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"In DDR1"),(0,n.kt)("td",{parentName:"tr",align:null},"we can put 2gb RAM.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DDR1"),(0,n.kt)("td",{parentName:"tr",align:null},"date is 1998 , Voltage is 25/2.6 , BandwidthSpeed is 1600.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DDR2"),(0,n.kt)("td",{parentName:"tr",align:null},"2 x 2 = 4gb ram")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DDR2"),(0,n.kt)("td",{parentName:"tr",align:null},"date is 2003, Voltage is 1.8, BandwidthSpeed is 2133")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DDR3"),(0,n.kt)("td",{parentName:"tr",align:null},"2 x 2 x 2 = 8 gbram")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DDR3"),(0,n.kt)("td",{parentName:"tr",align:null},"date is 2007, Voltage is 1.5/1.35 , BandwidthSpeed is 2666.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DDR4"),(0,n.kt)("td",{parentName:"tr",align:null},"date is 2014, Voltage is 1.2/1.05, BandwidthSpeed is 3200.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DDR6"),(0,n.kt)("td",{parentName:"tr",align:null},"2 x 2 x 2 x 2 x 2 x 2 = 64gb ram.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Laptops have different number of slots where ram can be inserted. These slots are called dimm slots. You can check the number of dimm slots in your laptop by going to task manager.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DDRRAM has type"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DDR1, DDR2, DDR3, DDR4 "),(0,n.kt)("li",{parentName:"ul"},"DDR1 has created by IBM "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"CPU "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Central Processing Unit. "),(0,n.kt)("li",{parentName:"ul"},"A CPU has multipy Cores. Cores are called the brain ."),(0,n.kt)("li",{parentName:"ul"},"Cores type : Single core, Dual core , Quad Core , Octa core, Hexa core , Deca core."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"NIC Card "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Network Interface Controller/Network Adopter."),(0,n.kt)("li",{parentName:"ul"},"NIC is a computer hardware component that connect a computer to a computer network."),(0,n.kt)("li",{parentName:"ul"},"NIC has MAC-Addr Not computer has MAC-Addr."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"GPU "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Graphics Processing Unit"),(0,n.kt)("li",{parentName:"ul"},"GPU is used in a wide range of apps including graphics and videos rendering. Although they best known for their capabilities in opening.")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"external-memory"},(0,n.kt)("strong",{parentName:"h2"},"External Memory")),(0,n.kt)("h3",{id:"harddrive"},(0,n.kt)("strong",{parentName:"h3"},"HardDrive")),(0,n.kt)("h4",{id:"what--why-harddrive"},(0,n.kt)("strong",{parentName:"h4"},"What & Why HardDrive")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"First created by IBM. Had a capacity of 5mb. "),(0,n.kt)("li",{parentName:"ul"},"All data is stored here")),(0,n.kt)("h4",{id:"types-of-harddrive"},(0,n.kt)("strong",{parentName:"h4"},"Types of HardDrive")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HDD")," ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Hard Disk Drive"),(0,n.kt)("li",{parentName:"ul"},"If the disk in it is cracked or bent, the data won't be recovered"),(0,n.kt)("li",{parentName:"ul"},"Takes more power and requires more space."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SDD"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Solid State Drive. "),(0,n.kt)("li",{parentName:"ul"},"Very compact and fast. Data is recoverable. ")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"These harddrives are connected to SATA drive. (pata --\x3e sata) pata was used before sata and was slower. Sata : serial ata.")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"LPDDR",label:"LPDDR",mdxType:"TabItem"},"Low Power Double Data Rate which is mostly used in Phones."),(0,n.kt)(o.Z,{value:"DIMM",label:"DIMM",mdxType:"TabItem"},"Dual In-Line Memory Module Which is used in Laptops & DIMM is memory module comprised of a small-side circuit board that holds a series of memory called DRAM")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"cables"},(0,n.kt)("strong",{parentName:"h3"},"Cables")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"PATA",label:"PATA Cable",mdxType:"TabItem"},"It  was first cable in industry to tranfer data from Hard drive to ram (upto 1GB)"),(0,n.kt)(o.Z,{value:"SATA",label:"SATA Cable",mdxType:"TabItem"},"It was invented after pata Cable, it is also use to share data form HDD to RAM (like upto 2GB)"),(0,n.kt)(o.Z,{value:"M2",label:"M2",mdxType:"TabItem"},"It is also a data cable and more efficient than SATA cable (upto 4GB)."),(0,n.kt)(o.Z,{value:"NVME",label:"NVME",mdxType:"TabItem"},"Non-Volatile Memory Express which is all in newly and lasted cable used to transfer data from HDD/SDD to RAM.")),(0,n.kt)("code",null,"User ==> Hard drive ==> Video ==>Play Video ==> CPU Command ==> RAM ==> Hard drive Software ==> Pickup ==> Video Played"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"Memory_external_harddrive",src:a(1056).Z,width:"1279",height:"777"}))))))}k.isMDXComponent=!0},1056:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/memorymindmap-0e950844205c83a3006613dfa4b60f3d.png"}}]);