"use strict";(self.webpackChunkhassan_website=self.webpackChunkhassan_website||[]).push([[1088],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=m(a),h=r,k=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(k,l(l({ref:e},p),{},{components:a})):n.createElement(k,l({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=h;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[d]="string"==typeof t?t:r,l[1]=s;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2994:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:8},l="Basic Enum, Info Gathering & Vulnerability Assessment.",s={unversionedId:"CyberSecurity/CyberrSecurity360/Basic Enum, Info Gathering & Vulnerability Assessment",id:"CyberSecurity/CyberrSecurity360/Basic Enum, Info Gathering & Vulnerability Assessment",title:"Basic Enum, Info Gathering & Vulnerability Assessment.",description:"---",source:"@site/docs/CyberSecurity/CyberrSecurity360/Basic Enum, Info Gathering & Vulnerability Assessment.md",sourceDirName:"CyberSecurity/CyberrSecurity360",slug:"/CyberSecurity/CyberrSecurity360/Basic Enum, Info Gathering & Vulnerability Assessment",permalink:"/journey/docs/CyberSecurity/CyberrSecurity360/Basic Enum, Info Gathering & Vulnerability Assessment",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Foot Printing And More..",permalink:"/journey/docs/CyberSecurity/CyberrSecurity360/Foot Printing and More.."},next:{title:"The Craft of Network Scanning",permalink:"/journey/docs/CyberSecurity/CyberrSecurity360/The Craft of Network Scanning"}},o={},m=[{value:"<strong>What &amp; Why Information Gathering</strong>",id:"what--why-information-gathering",level:2},{value:"<strong><em>Assets Discovery</em></strong>",id:"assets-discovery",level:2},{value:"<strong><em>What Is Assets Discovery ?</em></strong>",id:"what-is-assets-discovery-",level:3},{value:"<strong>Enumeration</strong>",id:"enumeration",level:2},{value:"<strong>Domain</strong>",id:"domain",level:3},{value:"<strong>Types of Domain</strong>",id:"types-of-domain",level:3},{value:"<strong>Horizontal Enumeration</strong>",id:"horizontal-enumeration",level:3},{value:"<strong><em>Vertical Enumeration</em></strong>",id:"vertical-enumeration",level:3},{value:"<strong><em>Passive Information gathering</em></strong>.",id:"passive-information-gathering",level:2},{value:"<strong>What is subdomain enumeration?</strong>",id:"what-is-subdomain-enumeration",level:3},{value:"<strong>FQND</strong>",id:"fqnd",level:3},{value:"<strong><em>Information gathering of Subdomains.</em></strong>",id:"information-gathering-of-subdomains",level:2},{value:"<strong><em>Censys Search</em></strong>:",id:"censys-search",level:3},{value:"<strong><em>RapidDNS:</em></strong>",id:"rapiddns",level:3},{value:"<strong><em>Crt sh</em></strong>",id:"crt-sh",level:3},{value:"<strong><em>Amass</em></strong>",id:"amass",level:3},{value:"<strong>Amass enumeration</strong>",id:"amass-enumeration",level:3},{value:"<strong><em>Hunting Subdomains</em></strong>",id:"hunting-subdomains",level:3},{value:"<strong><em>Subfinder</em></strong>",id:"subfinder",level:3},{value:"<strong><em>Haveibeenpwned:</em></strong>",id:"haveibeenpwned",level:3},{value:"<strong><em>Vulnerability Identification</em></strong>",id:"vulnerability-identification",level:2},{value:"<strong>API</strong>",id:"api",level:3},{value:"<strong>Shodan</strong> :",id:"shodan-",level:3},{value:"CLI",id:"cli",level:4},{value:"GUI",id:"gui",level:4},{value:"<strong><em>Fullhunt</em></strong>",id:"fullhunt",level:3},{value:"<strong><em>Zoomeye</em></strong>",id:"zoomeye",level:3},{value:"<strong><em>Finding The Pieces</em></strong>",id:"finding-the-pieces",level:2},{value:"<strong><em>Google Dorks</em></strong>",id:"google-dorks",level:3},{value:"<strong>WaybackURLs</strong>",id:"waybackurls",level:3},{value:"<strong>Gau</strong> :",id:"gau-",level:3},{value:"<strong>Exif Tool</strong>",id:"exif-tool",level:2},{value:"<strong>What exif tool do ?</strong>",id:"what-exif-tool-do-",level:3},{value:"<strong><em>Nuclei </em></strong>",id:"nuclei-",level:2},{value:"Installation : Sudo apt install nuclei",id:"installation--sudo-apt-install-nuclei",level:3}],p={toc:m},d="wrapper";function u(t){let{components:e,...i}=t;return(0,r.kt)(d,(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-enum-info-gathering--vulnerability-assessment"},"Basic Enum, Info Gathering & Vulnerability Assessment."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what--why-information-gathering"},(0,r.kt)("strong",{parentName:"h2"},"What & Why Information Gathering")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Information Gathering means collecting the information for whatever means necessary.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is a crucial phase in Hacking... Information helps the tester to know about the entities and fascilable planning to test the security.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The information mostly gathers form websites for the entities")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"assets-discovery"},(0,r.kt)("strong",{parentName:"h2"},(0,r.kt)("em",{parentName:"strong"},"Assets Discovery"))),(0,r.kt)("h3",{id:"what-is-assets-discovery-"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"What Is Assets Discovery ?"))),(0,r.kt)("p",null,"As a person will be the target then collect information of target with the people the target meet. The victim asset means what is has an assets."),(0,r.kt)("p",null,"It makes the attack path increased."),(0,r.kt)("h2",{id:"enumeration"},(0,r.kt)("strong",{parentName:"h2"},"Enumeration")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After validation when the information is dug up is called enumerations")),(0,r.kt)("h3",{id:"domain"},(0,r.kt)("strong",{parentName:"h3"},"Domain")),(0,r.kt)("p",null,"A domain name is a unique address for a website that can be acquired. Usually, it consists of a website name and a domain name extension."),(0,r.kt)("h3",{id:"types-of-domain"},(0,r.kt)("strong",{parentName:"h3"},"Types of Domain")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Horizontal Domain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Vertical Domain"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Domains"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Domain-vertical-horizotal",src:a(3277).Z,width:"938",height:"584"}))))),(0,r.kt)("h3",{id:"horizontal-enumeration"},(0,r.kt)("strong",{parentName:"h3"},"Horizontal Enumeration")),(0,r.kt)("p",null,"During a security assessment, our main aim is to find and list all the main websites owned by a single entity."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Crunchbase"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"crunchbase",src:a(158).Z,width:"1572",height:"974"}))))),(0,r.kt)("h3",{id:"vertical-enumeration"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"Vertical Enumeration"))),(0,r.kt)("p",null,"Vertical enumeration, or vertical domain correlation, is the process of discovering and connecting related websites that belong to the same organization or entity."),(0,r.kt)("p",null,"Vertical Enumeration can be performed with the help of below methods. Which is"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"passive-information-gathering"},(0,r.kt)("strong",{parentName:"h2"},(0,r.kt)("em",{parentName:"strong"},"Passive Information gathering")),"."),(0,r.kt)("p",null,"Passive information gathering is based on ",(0,r.kt)("strong",{parentName:"p"},"other with whatever is asked")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Don\u2019t trust the passive information because it is available to others for some logical reasons.")),(0,r.kt)("h3",{id:"what-is-subdomain-enumeration"},(0,r.kt)("strong",{parentName:"h3"},"What is subdomain enumeration?")),(0,r.kt)("p",null,"Subdomain enumeration is a crucial step in understanding the structure of a website. It involves finding and identifying smaller sections within a larger website. To put it simply, it's like exploring different sections or pages that are part of a main website. ",(0,r.kt)("strong",{parentName:"p"},"Subdomain Enumeration")," is a process of finding sub-domains associated to the root domain. According to ",(0,r.kt)("code",null,"RFC 1034"),', "a domain is a subdomain of another domain if it is contained within that domain".'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Levels Domains"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"understanding-level-of-domain",src:a(9015).Z,width:"1556",height:"966"}))))),(0,r.kt)("h3",{id:"fqnd"},(0,r.kt)("strong",{parentName:"h3"},"FQND")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Fully Qualified Domain Name (",(0,r.kt)("strong",{parentName:"p"},"FQDN"),") is the complete domain name for a specific computer, or host, on the internet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An FQDN looks like this: -"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"myhost.example.com. ",(0,r.kt)("strong",{parentName:"p"},"----\x3e")," Fully Qualified Domain Name\nmyhost ",(0,r.kt)("strong",{parentName:"p"},"----\x3e")," is the host located within the domain example.com (subdomain)")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"information-gathering-of-subdomains"},(0,r.kt)("strong",{parentName:"h2"},(0,r.kt)("em",{parentName:"strong"},"Information gathering of Subdomains."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"whois lookup"),": help to gather the information based on ",(0,r.kt)("strong",{parentName:"p"},"domain"),"."),(0,r.kt)("p",null,"How the ",(0,r.kt)("strong",{parentName:"p"},"whois")," get the information of Domian because when the target Regester with domain vendors it must provide some information/details to authority. And they will available this information public as they use this method of advertisement unless and until buy the premium subscription"),(0,r.kt)("p",null,"Register ",(0,r.kt)("strong",{parentName:"p"},"whois")," server is where the whois get the information of domain."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Syntax: whois")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Cmd"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#whois <name><.in><.com><.etc>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\xa0 The premium subscription: REDACTED FOR PRIVACY \xa0 \xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0The premium non-subscription gets the information marketing also: GoDaddy sell domain")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"different-between-paid&amp;unpaid",src:a(597).Z,width:"1058",height:"408"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xa0",(0,r.kt)("em",{parentName:"li"},"Use various information from this ",(0,r.kt)("strong",{parentName:"em"},"Updated Date")," and try to buy before the original target did."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"This is Known as Security Plan.\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"This is not a Security Plan.\xa0")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Different-bw-securitnonsecurit-plain",src:a(1692).Z,width:"1057",height:"434"})," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Try to Find the information which can be reuse for further Gathering."))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"censys-search"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"Censys Search")),":"),(0,r.kt)("p",null,"Censys Search is a search engine that helps you find and understand information about devices and networks connected to the internet, revealing security issues and other important details."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Home page:")," ",(0,r.kt)("a",{parentName:"th",href:"https://search.censys.io/"},(0,r.kt)("strong",{parentName:"a"},"https://search.censys.io/"))))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Census-home-page",src:a(977).Z,width:"1056",height:"513"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sometimes censys found and sometimes it's doesn't")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"censys-ip-name-search",src:a(294).Z,width:"923",height:"820"}))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},(0,r.kt)("em",{parentName:"strong"},"Try to Explore more like this :"))))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"this indicate that the target use vpn for palo alto vendous which is global protect. Got the Algorithum Details and try to decrepted .")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"censys-search-pa",src:a(4775).Z,width:"735",height:"695"}))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"How does censys know get these details"))," ?\xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Using the certificate"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Censys-search-certi",src:a(875).Z,width:"734",height:"680"}))))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rapiddns"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"RapidDNS:"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Home: ",(0,r.kt)("a",{parentName:"strong",href:"https://rapiddns.io/"},"https://rapiddns.io/"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It Will Give Information about DNS Records of targets")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"crt-sh"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"Crt sh"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"It searches through the certificate fingerprint and domain name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"cet-sh-results",src:a(9605).Z,width:"1004",height:"966"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"These three certs might be belonged to netplace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The operator of the certificate is google and Cloudflare")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"amass"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"Amass"))),(0,r.kt)("p",null,"To install run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install amass\n")),(0,r.kt)("p",null,"Discovery target for enumeration"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Syntax"),": >>"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"amas intel \u2013org\n")),(0,r.kt)("h3",{id:"amass-enumeration"},(0,r.kt)("strong",{parentName:"h3"},"Amass enumeration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"amass enum \u2013d [domain-name]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"amass enum \u2013passive \u2013d [domain-name] -src\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hunting-subdomains"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"Hunting Subdomains"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sublist3r\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Syntax: sublist3r \u2013d [domain-name]_\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"subfinder"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"Subfinder"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"d - Specify our target domain\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"subfinder-results",src:a(8658).Z,width:"998",height:"451"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"haveibeenpwned"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"Haveibeenpwned:"))),(0,r.kt)("p",null,"This tool is used to determine if an email has previously been compromised. Like whois works it collects from the leaks and breaches."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"vulnerability-identification"},(0,r.kt)("strong",{parentName:"h2"},(0,r.kt)("em",{parentName:"strong"},"Vulnerability Identification"))),(0,r.kt)("h3",{id:"api"},(0,r.kt)("strong",{parentName:"h3"},"API")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A software can be anything, any game, any application.")),(0,r.kt)("p",null,"The same software is hosted on an IP address and port (server concept because it is served) , but an additional feature is authentication. If someone wants to connect to this software, they need to authenticate using a username and password. A similar concept applies to APIs, where instead of authentication with a username and password, it is replaced with a token-based value. Whoever has the token value can access this particular software.  "),(0,r.kt)("h3",{id:"shodan-"},(0,r.kt)("strong",{parentName:"h3"},"Shodan")," :"),(0,r.kt)("p",null,"What is shodan ? : - Shodan is a database\nWhich database ? : - IOT database  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Shodan is a database of IOT and it host it over http/https and communicate over that and if we need to access the shodan need authentication which is token based")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"API will proved an interface which delivery this type of services and interact")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"And the API is the authentication Token. Which help to interact which shodan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Shodan is a search engine used to search for any device that is connected to the internet. Commonly used to search for IoT devices like cameras, raspberry-pi's, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Shodan: It has GUI (",(0,r.kt)("a",{parentName:"p",href:"https://shodan.io"},"https://shodan.io"),") as well as CLI, shodan says that it has information but it can be wrong or have very less information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It collects information on backend to make the world secure and cybersecurity. So, kind of vulnerability assessment"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Shodan Map"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"shodan-filter-map",src:a(928).Z,width:"999",height:"545"}))))),(0,r.kt)("h4",{id:"cli"},"CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shodan\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the API to Shodan from the account")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shodan init <api-key>\n")),(0,r.kt)("h4",{id:"gui"},"GUI"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"shodan-gui-netplace-results",src:a(374).Z,width:"746",height:"525"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Shodan Information can be False Positive")),(0,r.kt)("h3",{id:"fullhunt"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"Fullhunt"))),(0,r.kt)("p",null,"its similar like shodan ."),(0,r.kt)("p",null,"Home: ",(0,r.kt)("a",{parentName:"p",href:"https://fullhunt.io"},"https://fullhunt.io")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It gives some information like shodan")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Intelligence X"))),(0,r.kt)("p",null,"\xa0home: ",(0,r.kt)("a",{parentName:"p",href:"https://intelx.io/"},"https://intelx.io/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\xa0",(0,r.kt)("strong",{parentName:"p"},"intelligence")," ",(0,r.kt)("strong",{parentName:"p"},"X")," ",(0,r.kt)("strong",{parentName:"p"},"is")," a search engine and data archive. Search the public web by email, domain, IP, CIDR, Bitcoin address and more.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It has the GUI and CLI as very"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Intex.py\n")),(0,r.kt)("h3",{id:"zoomeye"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"Zoomeye"))),(0,r.kt)("p",null,"Home: zoomeye.org"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"finding-the-pieces"},(0,r.kt)("strong",{parentName:"h2"},(0,r.kt)("em",{parentName:"strong"},"Finding The Pieces"))),(0,r.kt)("h3",{id:"google-dorks"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"Google Dorks"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Google dorks it some ",(0,r.kt)("em",{parentName:"li"},"specials keyword")," which use for filters."),(0,r.kt)("li",{parentName:"ul"},"Google will provide input of whatever is searched but using google dorks it extends the searching capability."),(0,r.kt)("li",{parentName:"ul"},"Google dorks is some keyword which search and proved some particulate context.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Google Dorks Map"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"google-dork-map",src:a(3506).Z,width:"925",height:"572"}))))),(0,r.kt)("p",null,"Its use to get results of ",(0,r.kt)("strong",{parentName:"p"},"root domains")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"site\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Site")," if use this keyword which is ",(0,r.kt)("strong",{parentName:"p"},"site (tesla.com)")," google will provide all results which ends with particular words ",(0,r.kt)("strong",{parentName:"p"},"tesla.com"),"."),(0,r.kt)("p",null,"Not Using site word: it giving some different website like (LinkedIn) etc. ] even if I search netplace.in in google."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Without Using Site CMD\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"without-site-cmd",src:a(1920).Z,width:"910",height:"455"}))))),(0,r.kt)("p",null,"As seems there are many ADs and more."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"With Site\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"results-with-site-cmd",src:a(9033).Z,width:"809",height:"702"}))))),(0,r.kt)("p",null,"Using site word: it gives all results which ends with particular words netplace.in"),(0,r.kt)("p",null,"Similar if don\u2019t need some subdomain or any unwanted site like Instagram Add the \u2013site: subdomain-name There are multiply subdomain of amazon.com"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-site<target.com>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Excluding the music subdomain of amazon using  parameters")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2013site:music.amazon.com\n")),(0,r.kt)("p",null,"Using this filter parameter the results value decrease and chances to find the target information increases."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"cmd"),(0,r.kt)("th",{parentName:"tr",align:null},"Details \xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#inurl"),(0,r.kt)("td",{parentName:"tr",align:null},"This Parameter is the text which is provide is there in URL Box.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#Flietyp"),(0,r.kt)("td",{parentName:"tr",align:null},"As the name says it proved with the extension of file like png, jpg, pdf etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#Intitle"),(0,r.kt)("td",{parentName:"tr",align:null},"As the name as about title, it provide results based on title which can be seen in html (title)(/title)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#Intitle:index"),(0,r.kt)("td",{parentName:"tr",align:null},"means its open directory which is in title tab")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#cache:target.com"),(0,r.kt)("td",{parentName:"tr",align:null},"Google will display the most recent cached version of that webpage as stored in its search index.If the original webpage is down or inaccessible, you can still view the cached version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#cache:target.com XYZ"),(0,r.kt)("td",{parentName:"tr",align:null},"check for specific keywords in cached")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#inurl:index.php?id"),(0,r.kt)("td",{parentName:"tr",align:null},"check for targets globally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#inurl:index.php?id= site:target.com"),(0,r.kt)("td",{parentName:"tr",align:null},"check for SQLi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#filetype:.php site:.gov"),(0,r.kt)("td",{parentName:"tr",align:null},"check for php")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#Intitle: index of inurl: ftp/sql"),(0,r.kt)("td",{parentName:"tr",align:null},"vulnerable FTP servers Or SQL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'#intitle:"index of" ".env"'),(0,r.kt)("td",{parentName:"tr",align:null},"Enviroment File of Websites")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'#intext:"Index of /" +.htaccess'),(0,r.kt)("td",{parentName:"tr",align:null},".htaccess files provide a way to make configuration changes on a per-directory basis.")))),(0,r.kt)("h3",{id:"waybackurls"},(0,r.kt)("strong",{parentName:"h3"},"WaybackURLs")),(0,r.kt)("p",null,"GUI of waybackURLs is ",(0,r.kt)("strong",{parentName:"p"},"Waybackmachine")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"WaybackURLs"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*  Seen when the waybackurl is up what is does is it cache all the famous site dynamic screenshot the frontend screenshot and store in they database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"waybackurls-results",src:a(735).Z,width:"480",height:"207"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"For CLI: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/tomnomnom/waybackurls"},"https://github.com/tomnomnom/waybackurls"))))),(0,r.kt)("h3",{id:"gau-"},(0,r.kt)("strong",{parentName:"h3"},"Gau")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lc/gau"},"https://github.com/lc/gau")),(0,r.kt)("li",{parentName:"ul"},"Fetch known URLs from AlienVault's Open Threat Exchange, the Way back Machine, and Common Crawl.")),(0,r.kt)("h2",{id:"exif-tool"},(0,r.kt)("strong",{parentName:"h2"},"Exif Tool")),(0,r.kt)("p",null,"Whenever computer creates files it creates meta data and saved that meta data so that meta data can be retreive by multipy ways , and the easy way is exiftool"),(0,r.kt)("h3",{id:"what-exif-tool-do-"},(0,r.kt)("strong",{parentName:"h3"},"What exif tool do ?")),(0,r.kt)("p",null,"Whatever meta data is there , it poll out that information "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installation : sudo apt install exiftool")),(0,r.kt)("p",null,"Let see how exiftool works"),(0,r.kt)("p",null,"#Exiftool /home/kali/downloads\\ (filename.pdf)"),(0,r.kt)("p",null,"Modify the file remove the meta data sensitive information.\n#exiftool \u2013all= /home/kali/downloads\\ ","[filename.pdf ]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GUI Version is also available"),(0,r.kt)("li",{parentName:"ul"},"Website : ",(0,r.kt)("a",{parentName:"li",href:"https://exifinfo.org/"},"https://exifinfo.org/"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ExifTools"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use both Local upload and for online is Images URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"exiftools-start",src:a(2788).Z,width:"480",height:"206"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Results")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"exiftools-start-results",src:a(8456).Z,width:"480",height:"231"}))))),(0,r.kt)("h2",{id:"nuclei-"},(0,r.kt)("strong",{parentName:"h2"},(0,r.kt)("em",{parentName:"strong"},"Nuclei "))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Its it has template, like Metasploit has Auxiliary for scanning script, those script identifies another information against the target. It a template base tasks execution.")),(0,r.kt)("h3",{id:"installation--sudo-apt-install-nuclei"},"Installation : Sudo apt install nuclei"),(0,r.kt)("code",null,"nudlie "),"- When the nuclei start its first download default-nuclei template which is YAM base.",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Argument \u2013u ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#nuclie \u2013u [target-ipaddr]\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"CMD"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-t"),(0,r.kt)("td",{parentName:"tr",align:null},"to define the templates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-ss"),(0,r.kt)("td",{parentName:"tr",align:null},"will scan auto scanning")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"for safe execution")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-nt"),(0,r.kt)("td",{parentName:"tr",align:null},"for new templates")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the custom templates from github or create one using yml and more."),(0,r.kt)("code",null,"https://github.com/emadshanab/Nuclei-Templates-Collection/blob/main/README.md")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"From this download in this case : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pikpikcu/nuclei-templates/blob/master/README.md"},"https://github.com/pikpikcu/nuclei-templates/blob/master/README.md")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Basic Nuclei Scan"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Nuclie-scan1",src:a(1374).Z,width:"2048",height:"2754"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Nuclie-scan-windows",src:a(6898).Z,width:"1834",height:"2052"}))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nuclei Auto scan which include Host-spray and template spray."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"nuclie-scan-ss-auto",src:a(972).Z,width:"2048",height:"2732"}))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Custom Template Scan"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Download the Template or Create one.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Note sometime the template can be an issue so make sure to validate before")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"nuclie-custom-scans",src:a(1022).Z,width:"2048",height:"4138"}))))))}u.isMDXComponent=!0},3277:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Vertical&HorizontalDomain-53d7e8d314a84e7bf14dfa78971240df.png"},294:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/census-ip-name-search-268a69d6d69052bad66ee0da90d8a30f.png"},875:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/censys-search-certi-a4fc077bcc2e31432c5007ab79c2e0c8.png"},4775:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/censys-search-pa-5ea4071c74912a0b0fc2c55fcf8a279b.png"},977:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/censyshomepage-0d6c2a8b257d49acd5aa18295bc7a1e5.png"},9605:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/crtsh-results-82aa5dfccd38637443152aaa13c16f02.png"},158:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/crunchbase-b328dda8d2301023fca91a802b72c634.png"},597:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/different-between-paid-unpaid-a9ecbadd7d0c869580929d1c0f201873.png"},1692:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/different-between-security-nonsecurityplan-30119be364ee58b4fb76ef895af581b3.png"},8456:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/exiftools-starts-results-207c931892b0b7b90d79598f80a28f2a.png"},2788:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/exiftools-starts-baeec3bf1a6d85fd5bcecd01e1930c8c.png"},3506:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/google-dorks-map-5756cf9acbdbe8891a559b73a554d445.png"},9033:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/results-with-site-b55faf5c52f728311da2a3f592780263.png"},1920:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/results-without-site-7146aeb4a22a2e3cb4379bb72856dd35.png"},6898:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/nucleiscanwindows-defafaa5b6e21eecbf5c575cae38b80c.png"},1374:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/nucliescan1-d7b406e89624b5655a038e16e7252a5b.png"},1022:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/nucliescanaustom-c06bd978078ab3983b489d7ae5857881.png"},972:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/nucliescanssauto-b0fc68264bcf5577b872ac20292df853.png"},928:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/shodan-filter-cli-map-5ca5c9004fe09123684b589c63ddcbc7.png"},374:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/shodan-gui-netplace-results-1dca228eef76680faaa343d655e54176.png"},8658:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/subfinder-results-f57d84f06d67fdfff2e38c33b5ef8e1d.png"},9015:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/understandinglevelofdomain-b5f854167d8bf6dfb618dd9f58e1026e.png"},735:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/waybacks-results1-bda7b43548dd9b061b04e0ab933fae88.png"}}]);