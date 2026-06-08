;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="b98bd9d5-cbaf-2c83-798e-9fbf27d6e6b5")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,167892,e=>{"use strict";var t=e.i(221628),s=e.i(416340),a=e.i(843778);let n="mx-auto w-full max-w-[1200px]",r="px-4 @lg:px-6 @xl:px-10",i=(0,s.forwardRef)(({className:e,bottomPadding:s,size:n="default",...i},o)=>(0,t.jsx)("div",{ref:o,...i,className:(0,a.cn)("mx-auto w-full @container",{small:"max-w-[768px]",default:"max-w-[1200px]",large:"max-w-[1600px]",full:"max-w-none"}[n],r,s&&"pb-16",e)})),o=(0,s.forwardRef)(({className:e,...s},n)=>(0,t.jsx)("header",{...s,ref:n,className:(0,a.cn)("w-full","flex-col gap-3 py-6",e)})),l=(0,s.forwardRef)(({className:e,...s},n)=>(0,t.jsx)("h1",{ref:n,...s,className:(0,a.cn)(e)})),c=(0,s.forwardRef)(({className:e,...s},n)=>(0,t.jsx)("p",{ref:n,...s,className:(0,a.cn)("text-sm text-foreground-light",e)})),d=(0,s.forwardRef)(({className:e,isFullWidth:s,topPadding:n,...r},i)=>(0,t.jsx)("div",{ref:i,...r,className:(0,a.cn)("flex flex-col first:pt-12 py-6",s?"w-full":"gap-3 @md:grid-cols-12 @lg:grid",e)})),u=(0,s.forwardRef)(({className:e,...s},n)=>(0,t.jsx)("div",{ref:n,...s,className:(0,a.cn)("w-full h-px bg-border shrink-0",e)})),m=(0,s.forwardRef)(({className:e,...s},n)=>(0,t.jsx)("h3",{ref:n,...s,className:(0,a.cn)("text-foreground text-xl",e)})),p=(0,s.forwardRef)(({className:e,...s},n)=>(0,t.jsx)("p",{ref:n,...s,className:(0,a.cn)("text-sm text-foreground-light",e)})),h=(0,s.forwardRef)(({className:e,children:s,title:n,...r},i)=>(0,t.jsxs)("div",{ref:i,...r,className:(0,a.cn)("col-span-4 xl:col-span-5 prose text-sm",e),children:[n&&(0,t.jsx)("h2",{children:n}),s]})),f=(0,s.forwardRef)(({className:e,...s},n)=>(0,t.jsx)("div",{ref:n,...s,className:(0,a.cn)("col-span-8 xl:col-span-7","flex flex-col gap-6",e)})),x=(0,s.forwardRef)(({className:e,...s},n)=>(0,t.jsx)("div",{ref:n,...s,className:(0,a.cn)("flex flex-col gap-3 items-center",e)})),g=(0,s.forwardRef)(({className:e,...s},n)=>(0,t.jsx)("div",{ref:n,...s,className:(0,a.cn)("flex w-full items-center",e)})),j=(0,s.forwardRef)(({className:e,...s},n)=>(0,t.jsx)("div",{ref:n,...s,className:(0,a.cn)("flex flex-row gap-3",e)})),b=(0,s.forwardRef)(({className:e,...s},n)=>(0,t.jsx)("div",{ref:n,...s,className:(0,a.cn)("flex flex-col gap-3","min-w-[420px]",e)})),y=(0,s.forwardRef)(({className:e,...s},i)=>(0,t.jsx)("div",{ref:i,...s,className:(0,a.cn)(n,r,"my-8 flex flex-col gap-8",e)}));o.displayName="ScaffoldHeader",l.displayName="ScaffoldTitle",c.displayName="ScaffoldDescription",i.displayName="ScaffoldContainer",u.displayName="ScaffoldDivider",d.displayName="ScaffoldSection",b.displayName="ScaffoldColumn",h.displayName="ScaffoldSectionDetail",f.displayName="ScaffoldSectionContent",x.displayName="ScaffoldFilterAndContent",g.displayName="ScaffoldActionsContainer",j.displayName="ScaffoldActionsGroup",y.displayName="ScaffoldContainerLegacy",m.displayName="ScaffoldSectionTitle",p.displayName="ScaffoldSectionDescription",e.s(["MAX_WIDTH_CLASSES",0,n,"PADDING_CLASSES",0,r,"ScaffoldActionsContainer",0,g,"ScaffoldActionsGroup",0,j,"ScaffoldColumn",0,b,"ScaffoldContainer",0,i,"ScaffoldContainerLegacy",0,y,"ScaffoldDescription",0,c,"ScaffoldDivider",0,u,"ScaffoldFilterAndContent",0,x,"ScaffoldHeader",0,o,"ScaffoldSection",0,d,"ScaffoldSectionContent",0,f,"ScaffoldSectionDescription",0,p,"ScaffoldSectionDetail",0,h,"ScaffoldSectionTitle",0,m,"ScaffoldTitle",0,l])},602146,e=>{"use strict";e.s(["onSearchInputEscape",0,(e,t)=>s=>{"Escape"===s.key&&(s.stopPropagation(),e.length>0?t(""):s.currentTarget.blur())}])},202003,e=>{"use strict";e.s(["buildStudioPageTitle",0,e=>{let t=[e.entity,e.section,e.surface,e.project,e.org,e.brand],s=[];return t.forEach(e=>{let t=(e=>{if(void 0===e)return;let t=e.trim().replace(/\s+/g," ");if(0!==t.length)return t.length<=60?t:`${t.slice(0,59).trimEnd()}…`})(e);if(!t)return;let a=s[s.length-1];(void 0===a||a.toLowerCase()!==t.toLowerCase())&&s.push(t)}),s.join(" | ")}])},22194,e=>{"use strict";var t=e.i(221628);e.i(481541);var s=e.i(665265),s=s,a=e.i(188139),n=e.i(416340),r=e.i(843778);e.s(["ProfileImage",0,({alt:e,src:i,placeholder:o,className:l})=>{let[c,d]=(0,n.useState)(!1);return i&&!c?(0,t.jsx)(a.default,{alt:e??"",src:i,width:"24",height:"24",className:(0,r.cn)("aspect-square bg-foreground rounded-full object-cover",l),onError:()=>d(!0)}):o??(0,t.jsx)("figure",{className:(0,r.cn)("bg-foreground rounded-full flex items-center justify-center",l),children:(0,t.jsx)(s.default,{size:18,strokeWidth:1.5,className:"text-background"})})}],22194)},980533,e=>{"use strict";e.s(["getPathSegment",0,function(e,t){return e.split("/")[t]},"getPathnameWithoutQuery",0,function(e,t){return null==e?t:e.split(/[?#]/)[0]??t}])},744061,e=>{"use strict";var t=e.i(221628),s=e.i(938933),a=e.i(843778);function n({children:e,tag:s="div",style:a}){let r=`${s}`;return(0,t.jsx)(r,{style:a,children:e})}n.Title=function({level:e=1,children:s,style:a}){let n=`h${e}`;return(0,t.jsx)(n,{style:a,children:s})},n.Text=function({children:e,style:s,mark:a,code:n,keyboard:r,strong:i}){return n?(0,t.jsx)("code",{style:s,children:e}):a?(0,t.jsx)("mark",{style:s,children:e}):r?(0,t.jsx)("kbd",{style:s,children:e}):i?(0,t.jsx)("strong",{style:s,children:e}):(0,t.jsx)("span",{style:s,children:e})},n.Link=function({children:e,target:s="_blank",href:a,onClick:n,style:r}){return(0,t.jsx)("a",{onClick:n,href:a,target:s,rel:"noopener noreferrer",style:r,children:e})};var r=e.i(416340);let i=(0,r.createContext)({type:"text"}),o=e=>{let{type:s}=e;return(0,t.jsx)(i.Provider,{value:{type:s},children:e.children})},l=()=>{let e=(0,r.useContext)(i);if(void 0===e)throw Error("MenuContext must be used within a MenuContextProvider.");return e};function c({children:e,className:s,ulClassName:a,style:n,type:r="text"}){return(0,t.jsx)("nav",{role:"menu","aria-label":"Sidebar","aria-orientation":"vertical","aria-labelledby":"options-menu",className:s,style:n,children:(0,t.jsx)(o,{type:r,children:(0,t.jsx)("ul",{className:a,children:e})})})}c.Item=function({children:e,icon:n,active:r,onClick:i,style:o}){let c=(0,s.default)("menu"),{type:d}=l(),u=[c.item.base];u.push(c.item.variants[d].base),r?u.push(c.item.variants[d].active):u.push(c.item.variants[d].normal);let m=[c.item.content.base];r?m.push(c.item.content.active):m.push(c.item.content.normal);let p=[c.item.icon.base];return r?p.push(c.item.icon.active):p.push(c.item.icon.normal),(0,t.jsxs)("li",{role:"menuitem",className:(0,a.cn)("outline-hidden",u),style:o,onClick:i,"aria-current":r?"page":void 0,children:[n&&(0,t.jsx)("div",{className:`${p.join(" ")} min-w-fit`,children:n}),(0,t.jsx)("span",{className:m.join(" "),children:e})]})},c.Group=function({children:e,icon:a,title:n}){let r=(0,s.default)("menu"),{type:i}=l();return(0,t.jsxs)("div",{className:[r.group.base,r.group.variants[i]].join(" "),children:[a&&(0,t.jsx)("span",{className:r.group.icon,children:a}),(0,t.jsx)("span",{className:r.group.content,children:n}),e]})},c.Misc=function({children:e}){return(0,t.jsx)("div",{children:(0,t.jsx)(n.Text,{children:(0,t.jsx)("span",{children:e})})})},e.s(["default",0,c],744061)},862326,e=>{"use strict";var t=e.i(744061);e.s(["Menu",()=>t.default])},388147,e=>{"use strict";var t=e.i(221628),s=e.i(587433),a=e.i(862326),n=e.i(561978),r=e.i(837710),i=e.i(654894);let o=({item:e,isActive:o,target:l="_self",hoverText:c="",onClick:d})=>{let{name:u="",url:m="",icon:p,rightIcon:h,isExternal:f,label:x,disabled:g,shortcutId:j}=e,b=(0,t.jsx)(a.Menu.Item,{icon:p,active:o,onClick:d,children:(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1 min-w-0 flex-1",title:j?void 0:c||("string"==typeof u?u:""),children:[(0,t.jsx)("span",{className:"truncate flex-1 min-w-0",children:u}),void 0!==x&&(0,t.jsx)(s.Badge,{className:"shrink-0",variant:"new"===x.toLowerCase()?"success":"warning",children:x})]}),h&&(0,t.jsx)("div",{children:h})]})});if(g)return(0,t.jsx)("div",{className:"opacity-50 pointer-events-none",children:b});if(m){if(f){let e=(0,t.jsx)(r.Button,{asChild:!0,block:!0,className:"justify-start!",type:"text",size:"small",icon:p,children:(0,t.jsx)(n.default,{href:m,target:"_blank",rel:"noreferrer",children:u})});return j?(0,t.jsx)(i.ShortcutTooltip,{shortcutId:j,side:"right",delayDuration:1e3,children:e}):e}let e=(0,t.jsx)(n.default,{href:m,className:"block",target:l,onClick:d,children:b});return j?(0,t.jsx)(i.ShortcutTooltip,{shortcutId:j,side:"right",delayDuration:1e3,children:e}):e}return b};e.s(["ProductMenu",0,({page:e,menu:n,onItemClick:r})=>(0,t.jsx)("div",{className:"flex flex-col space-y-4",children:(0,t.jsx)(a.Menu,{type:"pills",children:n.map((i,l)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"my-4 space-y-4",children:(0,t.jsxs)("div",{className:"md:mx-3",children:[(0,t.jsx)(a.Menu.Group,{title:i.title?(0,t.jsxs)("div",{className:"flex flex-col space-y-2 uppercase font-mono",children:[(0,t.jsx)("span",{children:i.title}),i.isPreview&&(0,t.jsx)(s.Badge,{variant:"warning",children:"Not production ready"})]}):null}),(0,t.jsx)("div",{children:i.items.map(s=>{let a=s.pages?s.pages.includes(e??""):e===s.key;return(0,t.jsx)(o,{item:s,isActive:a,target:s.isExternal?"_blank":"_self",onClick:r},s.key)})})]})}),l!==n.length-1&&(0,t.jsx)("div",{className:"h-px w-[calc(100%-1.5rem)] mx-auto md:w-full bg-border-overlay"})]},i.key||i.title))})})],388147)},11872,e=>{"use strict";var t=e.i(221628),s=e.i(896779),a=e.i(416340),n=e.i(194125);let r=e=>e.flatMap(e=>{let t=e.childItems?r(e.childItems):[];return!e.shortcutId||!e.url||e.disabled||e.isExternal?t:[e,...t]}),i=({item:e})=>{let t=(0,s.useRouter)(),{shortcutId:r,url:i}=e,o=(0,a.useCallback)(()=>{t.push(i)},[t,i]);return(0,n.useShortcut)(r,o),null};e.s(["ProductMenuShortcuts",0,({menu:e})=>{let s=e.flatMap(e=>r(e.items));return(0,t.jsx)(t.Fragment,{children:s.map(e=>(0,t.jsx)(i,{item:e},`${e.shortcutId}-${e.url}`))})}])},228027,e=>{"use strict";var t=e.i(221628),s=e.i(766181),a=e.i(843778);let n=(0,s.cva)(["pt-12 last:pb-12 gap-6"],{variants:{orientation:{horizontal:"grid @3xl:grid-cols-[1fr_2fr] @3xl:gap-12",vertical:"flex flex-col"}},defaultVariants:{orientation:"vertical"}}),r=({className:e,orientation:s="vertical",children:r,...i})=>(0,t.jsx)("div",{"data-slot":"page-section","data-orientation":s,className:(0,a.cn)(n({orientation:s}),e),...i,children:r});r.displayName="PageSectionRoot";let i=({className:e,children:s,...n})=>(0,t.jsx)("div",{"data-slot":"page-section-summary",className:(0,a.cn)("flex flex-col gap-1",e),...n,children:s});i.displayName="PageSectionSummary";let o=({className:e,children:s,...n})=>(0,t.jsx)("h2",{"data-slot":"page-section-title",className:(0,a.cn)("heading-section",e),...n,children:s});o.displayName="PageSectionTitle";let l=({className:e,children:s,...n})=>(0,t.jsx)("div",{"data-slot":"page-section-description",className:(0,a.cn)("text-sm text-foreground-light",e),style:{textBoxTrim:"trim-end"},...n,children:s});l.displayName="PageSectionDescription";let c=({className:e,...s})=>(0,t.jsx)("div",{"data-slot":"page-section-aside",className:(0,a.cn)("flex items-center gap-2","@xl:self-end",e),...s});c.displayName="PageSectionAside";let d=({className:e,children:s,...n})=>(0,t.jsx)("div",{className:"@container",children:(0,t.jsx)("div",{"data-slot":"page-section-meta",className:(0,a.cn)("flex flex-col @xl:flex-row @xl:justify-between @xl:items-center gap-4",'*:data-[slot="page-section-summary"]:flex-1','*:data-[slot="page-section-summary"]:@xl:self-center','*:data-[slot="page-section-aside"]:shrink-0',e),...n,children:s})});d.displayName="PageSectionMeta";let u=({className:e,...s})=>(0,t.jsx)("div",{"data-slot":"page-section-content",className:(0,a.cn)(e),...s});u.displayName="PageSectionContent",e.s(["PageSection",0,r,"PageSectionAside",0,c,"PageSectionContent",0,u,"PageSectionDescription",0,l,"PageSectionMeta",0,d,"PageSectionSummary",0,i,"PageSectionTitle",0,o])},3259,720512,e=>{"use strict";var t=e.i(221628),s=e.i(335032),a=e.i(631700);e.s(["ChevronRightIcon",()=>a.default],720512);var a=a,n=e.i(416340),r=e.i(843778);let i=n.forwardRef(({...e},s)=>(0,t.jsx)("nav",{ref:s,"aria-label":"breadcrumb",...e}));i.displayName="Breadcrumb";let o=n.forwardRef(({className:e,...s},a)=>(0,t.jsx)("ol",{ref:a,className:(0,r.cn)("flex flex-wrap items-center gap-0.5 wrap-break-word text-sm text-muted-foreground sm:gap-1.5",e),...s}));o.displayName="BreadcrumbList";let l=n.forwardRef(({className:e,...s},a)=>(0,t.jsx)("li",{ref:a,className:(0,r.cn)("inline-flex text-foreground-lighter items-center gap-1.5 leading-5",e),...s}));l.displayName="BreadcrumbItem";let c=n.forwardRef(({asChild:e,className:a,...n},i)=>{let o=e?s.Slot.Slot:"a";return(0,t.jsx)(o,{ref:i,className:(0,r.cn)("transition-colors underline lg:no-underline hover:text-foreground",a),...n})});c.displayName="BreadcrumbLink";let d=n.forwardRef(({className:e,...s},a)=>(0,t.jsx)("span",{ref:a,role:"link","aria-disabled":"true","aria-current":"page",className:(0,r.cn)("no-underline text-foreground",e),...s}));d.displayName="BreadcrumbPage";let u=({children:e,className:s,...n})=>(0,t.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,r.cn)("[&>svg]:size-3.5 text-foreground-muted",s),...n,children:e??(0,t.jsx)(a.default,{})});u.displayName="BreadcrumbSeparator";let m=({className:e,...s})=>(0,t.jsxs)("span",{className:(0,r.cn)("flex h-4 w-4 items-center justify-center",e),...s,children:[(0,t.jsx)("svg",{role:"presentation","aria-hidden":"true",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}),(0,t.jsx)("span",{className:"sr-only",children:"More"})]});m.displayName="BreadcrumbEllipsis",e.s(["Breadcrumb",0,i,"BreadcrumbEllipsis",0,m,"BreadcrumbItem",0,l,"BreadcrumbLink",0,c,"BreadcrumbList",0,o,"BreadcrumbPage",0,d,"BreadcrumbSeparator",0,u],3259)},127739,e=>{"use strict";var t=e.i(221628),s=e.i(766181),a=e.i(416340),n=e.i(843778);let r=(0,s.cva)(["mx-auto w-full @container px-6 xl:px-10"],{variants:{size:{small:"max-w-[768px]",default:"max-w-[1200px]",large:"max-w-[1600px]",full:"max-w-none"}},defaultVariants:{size:"default"}}),i=(0,a.forwardRef)(({className:e,size:s,...a},i)=>(0,t.jsx)("div",{ref:i,...a,className:(0,n.cn)(r({size:s}),e)}));i.displayName="PageContainer",e.s(["PageContainer",0,i])},456050,e=>{"use strict";var t=e.i(221628),s=e.i(766181),a=e.i(416340),n=e.i(843778),r=e.i(3259),i=e.i(127739);let o=(0,s.cva)(["flex flex-col gap-4 w-full"],{variants:{size:{default:"pt-12",small:"pt-12",large:"pt-12",full:"pt-6"}},defaultVariants:{size:"default"}}),l=(0,a.createContext)({size:"default"}),c=()=>(0,a.useContext)(l),d=({className:e,children:s,...a})=>{let{size:o}=c();return(0,t.jsx)(i.PageContainer,{size:o,children:(0,t.jsx)(r.Breadcrumb,{"data-slot":"page-header-breadcrumb",className:(0,n.cn)("flex items-center gap-4 [&_li]:text-xs",e),...a,children:s})})};d.displayName="PageHeaderBreadcrumb";let u=({className:e,...s})=>(0,t.jsx)("div",{"data-slot":"page-header-icon",className:(0,n.cn)("text-foreground-light",e),...s});u.displayName="PageHeaderIcon";let m=({className:e,children:s,...a})=>(0,t.jsx)("div",{"data-slot":"page-header-summary",className:(0,n.cn)("flex flex-col gap-1",e),...a,children:s});m.displayName="PageHeaderSummary";let p=({className:e,children:s,...a})=>{let{size:r}=c();return(0,t.jsx)(i.PageContainer,{size:r,children:(0,t.jsx)("div",{"data-slot":"page-header-meta",className:(0,n.cn)("flex flex-col @xl:flex-row @xl:justify-between @xl:items-center gap-4",'*:data-[slot="page-header-icon"]:shrink-0','*:data-[slot="page-header-summary"]:flex-1',e),...a,children:s})})};p.displayName="PageHeaderMeta";let h=({className:e,...s})=>(0,t.jsx)("div",{"data-slot":"page-header-actions",className:(0,n.cn)("flex items-center gap-2 shrink-0",e),...s});h.displayName="PageHeaderAside";let f=({className:e,...s})=>{let{size:a}=c();return(0,t.jsx)(i.PageContainer,{size:a,className:(0,n.cn)("full"===a&&"border-b"),children:(0,t.jsx)("div",{"data-slot":"page-header-footer",className:(0,n.cn)("w-full [&>nav]:border-b-0","full"!==a&&"border-b",e),...s})})};f.displayName="PageHeaderNavigationTabs",e.s(["PageHeader",0,({className:e,size:s,children:a,...r})=>{let i=s??"default";return(0,t.jsx)(l.Provider,{value:{size:i},children:(0,t.jsx)("div",{"data-slot":"page-header","data-size":i,className:(0,n.cn)(o({size:i}),e),...r,children:a})})},"PageHeaderAside",0,h,"PageHeaderBreadcrumb",0,d,"PageHeaderDescription",0,({className:e,children:s,...a})=>(0,t.jsx)("div",{"data-slot":"page-header-description",className:(0,n.cn)("heading-subSection text-foreground-light",e),...a,children:s}),"PageHeaderIcon",0,u,"PageHeaderMeta",0,p,"PageHeaderNavigationTabs",0,f,"PageHeaderSummary",0,m,"PageHeaderTitle",0,({className:e,children:s,...a})=>(0,t.jsx)("h1",{"data-slot":"page-header-title",className:(0,n.cn)("heading-title",e),...a,children:s})])},537087,e=>{"use strict";let t=(0,e.i(679709).default)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);e.s(["default",0,t])},573569,e=>{"use strict";var t=e.i(537087);e.s(["RefreshCw",()=>t.default])},562616,e=>{"use strict";function t(e,...s){return e.reduce((e,t,a)=>e+t+(s[a]??""),"")}let s=/^[A-Za-z_][A-Za-z0-9_]*$/;e.s(["analyticsLiteral",0,function(e){if("number"==typeof e){if(!Number.isFinite(e))throw Error("analyticsLiteral: non-finite numbers are not supported");return String(e)}if("boolean"==typeof e)return e?t`true`:t`false`;if("string"!=typeof e)throw Error("analyticsLiteral: only string, number, or boolean inputs are supported");let s="";for(let t of e)"'"===t?s+="''":"\\"===t?s+="\\\\":s+=t;return`'${s}'`},"joinSqlFragments",0,function(e,t){return e.join(t)},"quotedIdent",0,function(e){let t=e.split(".");if(0===t.length||t.some(e=>!s.test(e)))throw Error(`quotedIdent: invalid identifier "${e}"`);return t.map(e=>"`"+e+"`").join(".")},"safeSql",0,t])},338391,e=>{"use strict";var t=e.i(234745);async function s({projectRef:e,endpoint:a,sql:n,iso_timestamp_start:r,iso_timestamp_end:i,method:o="post",key:l,signal:c,headers:d}){let u=void 0!==d?new Headers(d):void 0;if("get"===o){let{data:s,error:o}=await (0,t.get)(a,{params:{path:{ref:e},query:{sql:n,iso_timestamp_start:r,iso_timestamp_end:i,...l?{key:l}:{}}},signal:c,headers:u});return o&&(0,t.handleError)(o),s}let{data:m,error:p}=await (0,t.post)(a,{params:{path:{ref:e},...l?{query:{key:l}}:{}},body:{sql:n,iso_timestamp_start:r,iso_timestamp_end:i},signal:c,headers:u});return p&&(0,t.handleError)(p),m}e.s(["executeAnalyticsSql",0,s])},458570,e=>{"use strict";let t=(0,e.i(679709).default)("ArrowDownWideNarrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);e.s(["default",0,t])},570958,e=>{"use strict";var t=e.i(10429);e.s(["createNavigationHandler",0,(e,s)=>a=>{if("key"in a){("Enter"===a.key||" "===a.key)&&(a.preventDefault(),a.metaKey||a.ctrlKey?window.open(`${t.BASE_PATH}${e}`,"_blank"):s.push(e));return}if("button"in a&&0===a.button&&(a.metaKey||a.ctrlKey)||"button"in a&&1===a.button){a.preventDefault(),window.open(`${t.BASE_PATH}${e}`,"_blank");return}s.push(e)}])},839941,e=>{"use strict";var t=e.i(221628);e.i(128328);var s=e.i(158639),a=e.i(896779),n=e.i(416340),r=e.i(825713),i=e.i(388147),o=e.i(11872),l=e.i(951138),c=e.i(368136);let d=()=>{let{ref:e="default"}=(0,s.useParams)();return(0,n.useMemo)(()=>[{title:"Manage",items:[{name:"Functions",key:"main",pages:["","[functionSlug]","new"],url:`/project/${e}/functions`,items:[],shortcutId:c.SHORTCUT_IDS.NAV_FUNCTIONS_OVERVIEW},{name:"Secrets",key:"secrets",url:`/project/${e}/functions/secrets`,items:[],shortcutId:c.SHORTCUT_IDS.NAV_FUNCTIONS_SECRETS}]}],[e])},u=()=>{let e=(0,a.useRouter)().pathname.split("/")[4],s=d();return(0,t.jsx)(i.ProductMenu,{page:e,menu:s})},m=(0,l.withAuth)(({children:e,title:s,browserTitle:a})=>{let n=d();return(0,t.jsxs)(r.ProjectLayout,{product:"Edge Functions",browserTitle:{...a,section:s},productMenu:(0,t.jsx)(u,{}),isBlocking:!1,children:[(0,t.jsx)(o.ProductMenuShortcuts,{menu:n}),e]})});e.s(["EdgeFunctionsProductMenu",0,u,"default",0,m])},799910,e=>{"use strict";let t=(0,e.i(679709).default)("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);e.s(["ArrowDownNarrowWide",0,t],799910)},525855,e=>{"use strict";var t=e.i(458570);e.s(["ArrowDownWideNarrow",()=>t.default])},743052,e=>{"use strict";var t=e.i(221628),s=e.i(312062),a=e.i(36709),n=e.i(416340),r=e.i(843778),i=e.i(375761);let o=(0,n.forwardRef)(({commands:e,className:s},a)=>(0,t.jsx)("div",{ref:a,className:(0,r.cn)("space-y-4",s),children:e.map((e,s)=>(0,t.jsx)(l,{item:e},`command-${s}`))}));o.displayName="CommandRender";let l=({item:e})=>{let[r,o]=(0,n.useState)(!1);return(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)("span",{className:"font-mono text-sm text-foreground-lighter",children:`> ${e.comment}`}),(0,t.jsx)("div",{className:"flex items-center gap-2",children:(0,t.jsxs)("div",{className:"flex gap-2 font-mono text-sm font-normal text-foreground",children:[(0,t.jsx)("span",{className:"text-foreground-lighter",children:"$"}),(0,t.jsxs)("span",{children:[(0,t.jsxs)("span",{children:[e.jsx?e.jsx():null," "]}),(0,t.jsx)("button",{type:"button",className:"text-foreground-lighter hover:text-foreground",onClick:()=>{var t;t=e.command,o(!0),(0,i.copyToClipboard)(t),setTimeout(()=>o(!1),3e3)},children:r?(0,t.jsx)(s.Check,{size:14,strokeWidth:3,className:"text-brand"}):(0,t.jsx)(a.Copy,{size:14})})]})]})})]})};e.s(["default",0,o])},672296,e=>{"use strict";e.s(["sanitizeArrayOfObjects",0,function(e,t={}){let{maxDepth:s=3,redaction:a="[REDACTED]",truncationNotice:n="[REDACTED: max depth reached]",sensitiveKeys:r=[]}=t,i=new Set(["password","passwd","pwd","pass","secret","token","id_token","access_token","refresh_token","apikey","api_key","api-key","apiKey","key","privatekey","private_key","client_secret","clientSecret","auth","authorization","ssh_key","sshKey","bearer","session","cookie","csrf","xsrf","ip","ip_address","ipAddress","aws_access_key_id","aws_secret_access_key","gcp_service_account_key",...r].map(e=>e.toLowerCase())),o=[{re:/\b(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)\b/g,reason:"ip"},{re:/\b(?:[A-Fa-f0-9]{1,4}:){2,7}[A-Fa-f0-9]{1,4}\b/g,reason:"ip6"},{re:/\b(AKI|ASI)A[0-9A-Z]{16}\b/g,reason:"aws_access_key_id"},{re:/\b[0-9A-Za-z/+]{40}\b/g,reason:"aws_secret_access_key_like"},{re:/\bBearer\s+[A-Za-z0-9\-._~+/]+=*\b/g,reason:"bearer"},{re:/\b[A-Za-z0-9-_]+?\.[A-Za-z0-9-_]+?\.[A-Za-z0-9-_]+?\b/g,reason:"jwt_like"},{re:/\b[A-Za-z0-9_\-]{24,64}\b/g,reason:"long_token"}],l=new WeakMap;function c(e){let t=e;for(let{re:e}of o)t=t.replace(e,a);return t}function d(e){return i.has(String(e).toLowerCase())}return e.map(e=>(function e(t,r){if(null==t||"number"==typeof t||"boolean"==typeof t||"bigint"==typeof t)return t;if("string"==typeof t)return c(t);if("function"==typeof t)return"[Function]";if(t instanceof Date)return t.toISOString();if(t instanceof RegExp)return t.toString();if(ArrayBuffer.isView(t)&&!(t instanceof DataView))return`[TypedArray byteLength=${t.byteLength}]`;if(t instanceof ArrayBuffer)return`[ArrayBuffer byteLength=${t.byteLength}]`;if(r>=s)return n;if("object"==typeof t){if(l.has(t))return"[Circular]";if(Array.isArray(t)){let s=[];l.set(t,s);for(let a=0;a<t.length;a++)s[a]=e(t[a],r+1);return s}if(function(e){if(null===e||"object"!=typeof e)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}(t)){let s={};for(let[n,i]of(l.set(t,s),Object.entries(t)))d(n)?s[n]=a:s[n]=e(i,r+1);return s}if(t instanceof Map){let s=[];for(let[n,i]of(l.set(t,s),t.entries())){let t=d(n)?a:e(n,r+1),o=d(n)?a:e(i,r+1);s.push([t,o])}return s}if(t instanceof Set){let s=[];for(let a of(l.set(t,s),t.values()))s.push(e(a,r+1));return s}if(t instanceof URL)return t.toString();if(t instanceof Error){let e={name:t.name,message:c(t.message),stack:n};return l.set(t,e),e}try{return c(String(t))}catch{return c(Object.prototype.toString.call(t))}}return c(String(t))})(e,0))},"sanitizeUrlHashParams",0,function(e){return e.split("#")[0]}])},19688,38423,e=>{"use strict";var t=e.i(125356);let s={list:()=>["access-tokens"],detail:e=>["access-tokens",e]};e.s(["accessTokenKeys",0,s],38423);var a=e.i(234745);async function n(e){let{data:t,error:s}=await (0,a.get)("/platform/profile/access-tokens",{signal:e});return s&&(0,a.handleError)(s),t}e.s(["useAccessTokensQuery",0,({enabled:e=!0,...a}={})=>(0,t.useQuery)({queryKey:s.list(),queryFn:({signal:e})=>n(e),...a})],19688)},998344,996941,835453,628411,425730,e=>{"use strict";let t="u"<typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__;e.s(["DEBUG_BUILD",0,t],998344);var s=e.i(469449);function a(e){let t={};try{e.forEach((e,s)=>{"string"==typeof e&&(t[s]=e)})}catch{}return t}function n(e){let t=Object.create(null);try{Object.entries(e).forEach(([e,s])=>{"string"==typeof s&&(t[e]=s)})}catch{}return t}function r(e){let t=e.headers||{},s=("string"==typeof t["x-forwarded-host"]?t["x-forwarded-host"]:void 0)||("string"==typeof t.host?t.host:void 0),a=("string"==typeof t["x-forwarded-proto"]?t["x-forwarded-proto"]:void 0)||e.protocol||(e.socket?.encrypted?"https":"http"),r=e.url||"",o=function({url:e,protocol:t,host:s}){return e?.startsWith("http")?e:e&&s?`${t}://${s}${e}`:void 0}({url:r,host:s,protocol:a}),l=e.body||void 0,c=e.cookies;return{url:o,method:e.method,query_string:i(r),headers:n(t),cookies:c,data:l}}function i(e){if(e)try{let t=new URL(e,"http://s.io").search.slice(1);return t.length?t:void 0}catch{return}}e.s(["headersToDict",0,n,"httpRequestToRequestData",0,r,"winterCGHeadersToDict",0,a,"winterCGRequestToRequestData",0,function(e){let t=a(e.headers);return{method:e.method,url:e.url,query_string:i(e.url),headers:t}}],996941);var o=e.i(817729),l=e.i(40108);function c(e){let t=l.GLOBAL_OBJ[Symbol.for("@vercel/request-context")],s=t?.get?.();s?.waitUntil&&s.waitUntil(e)}e.s(["vercelWaitUntil",0,c],835453);var d=e.i(521852);async function u(){try{t&&d.debug.log("Flushing events..."),await (0,o.flush)(2e3),t&&d.debug.log("Done flushing events")}catch(e){t&&d.debug.log("Error while flushing events:\n",e)}}async function m(e){let{req:t,res:a,err:n}=e,i=a?.statusCode||e.statusCode;if(i&&i<500||!e.pathname)return Promise.resolve();(0,s.withScope)(e=>{if(t){let s=r(t);e.setSDKProcessingMetadata({normalizedRequest:s})}(0,o.captureException)(n||`_error.js called with falsy error (${n})`,{mechanism:{type:"auto.function.nextjs.underscore_error",handled:!1,data:{function:"_error.getInitialProps"}}})}),c(u())}e.s(["flushSafelyWithTimeout",0,u],628411),e.s(["captureUnderscoreErrorException",0,m],425730)},974200,e=>{"use strict";let t=[{value:"hello-world",name:"Simple Hello World",description:"Basic function that returns a JSON response",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

interface ReqPayload {
  name: string;
}

console.info("server started");

export default {
  fetch: withSupabase({ auth: ["publishable", "secret"] }, async (req, ctx) => {
    const { name }: ReqPayload = await req.json();

    // Using 'sb_secret_xyz' bypasses RLS — use for privileged operations
    if (ctx.authMode === "secret") {
      return Response.json({
        message: \`Hello \${name} admin!\`,
      });
    }

    return Response.json({
      message: \`Hello \${name}!\`,
    });
  }),
};`},{value:"database-access",name:"Supabase Database Access",description:"Example using Supabase client to query your database",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

// This endpoint uses 'user' access, credentials is required.
export default {
  fetch: withSupabase({ auth: "user" }, async (_req, { supabase }) => {
    // TODO: Change the table_name to your table
    const { data, error } = await supabase.from("table_name").select("*");

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 },
      );
    }

    return Response.json({ data });
  }),
};`},{value:"storage-upload",name:"Supabase Storage Upload",description:"Upload files to Supabase Storage",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";
import { randomUUID } from "node:crypto"

export default {
  fetch: withSupabase({ auth: "publishable" }, async (req, { supabase }) => {
    const formData = await req.formData()
    const file = formData.get('file')

    // TODO: update your-bucket to the bucket you want to write files
    const { data, error } = await supabase
      .storage
      .from('your-bucket')
      .upload(
        \`\${file.name}-\${randomUUID()}\`,
        file,
        { contentType: file.type }
      )

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 },
      );
    }

    return Response.json({ data });
  }),
};`},{value:"node-api",name:"Node Built-in API Example",description:"Example using Node.js built-in crypto and http modules",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { randomBytes } from "node:crypto";
import { createServer } from "node:http";
import process from "node:process";

const generateRandomString = (length) => {
  const buffer = randomBytes(length);
  return buffer.toString('hex');
};

const randomString = generateRandomString(10);
console.log(randomString);

const server = createServer((req, res) => {
  const message = \`Hello\`;
  res.end(message);
});

server.listen(9999);`},{value:"express",name:"Express Server",description:"Example using Express.js for routing",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import express from "npm:express@4.18.2";

const app = express();

// TODO: replace slug with Function's slug
// https://supabase.com/docs/guides/functions/routing?queryGroups=framework&framework=expressjs
app.get(/slug/(.*)/, (req, res) => {
  res.send("Welcome to Supabase");
});

app.listen(8000);`},{value:"stream-text-with-ai-sdk",name:"Stream text with AI SDK",description:"Generate and stream text with Vercel AI SDK",content:`/*
 * Setup OPENAI_API_KEY secret to get started.
 * For usage with useChat, point transport.api to this endpoint
 * and include your publishable key as ApiKey: <key> in transport.headers.
 */

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";
import { createOpenAI } from "npm:@ai-sdk/openai";
import { convertToModelMessages, streamText } from "npm:ai";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, content-type",
  "Access-Control-Max-Age": "3600",
  Vary: "Access-Control-Request-Headers",
};

class ClientError extends Error {}

const openai = createOpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
});

const SYSTEM_PROMPT = "You are a helpful AI assistant.";

export default {
  fetch: withSupabase({ auth: "publishable", cors }, async (req, _ctx) => {
    try {
      const body = await req.json().catch(() => {
        throw new ClientError("Invalid JSON payload");
      }) as { messages?: unknown; model?: unknown };

      const { messages, model: modelName } = body;

      if (!Array.isArray(messages)) {
        throw new ClientError("Request must include a messages array");
      }

      const normalizedMessages = await convertToModelMessages(messages);

      const model = openai(
        typeof modelName === "string" ? modelName : "gpt-5.1-chat-latest",
      );

      const result = streamText({
        model,
        messages: normalizedMessages,
        system: SYSTEM_PROMPT,
      });

      return result.toUIMessageStreamResponse({
        sendReasoning: true,
        sendSources: true,
      });
    } catch (err) {
      if (err instanceof ClientError) {
        return Response.json({ error: err.message }, { status: 400 });
      }

      console.error("Assistant chat error:", err);
      return Response.json({
        error: "Failed to process chat request",
        details: err instanceof Error ? err.message : String(err),
      }, { status: 500 });
    }
  }),
};`},{value:"generate-recipes-with-ai-sdk",name:"Generate recipes with AI SDK",description:"Generate structured cooking recipes with Vercel AI SDK",content:`/*
 * 1) Setup OPENAI_API_KEY secret to get started.
 * 2) Call this endpoint with { prompt, model? } to generate a recipe object matching the schema below.
 */
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";
import { createOpenAI } from "npm:@ai-sdk/openai";
import { generateText, Output } from "npm:ai";
import { z } from "npm:zod";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, content-type",
  "Access-Control-Max-Age": "3600",
  Vary: "Access-Control-Request-Headers",
};

class ClientError extends Error {}

const openai = createOpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
});

const RecipeSchema = z.object({
  recipe: z.object({
    name: z.string(),
    ingredients: z.array(z.string()),
    steps: z.array(z.string()),
  }),
});

const SYSTEM_PROMPT =
  "You are a recipe generator. Always return a structured recipe matching the given schema.";

export default {
  fetch: withSupabase({ auth: "publishable", cors }, async (req, _ctx) => {
    try {
      const body = await req.json().catch(() => {
        throw new ClientError("Invalid JSON payload");
      }) as {
        model?: unknown;
        prompt?: unknown;
      };

      const { model: modelName, prompt } = body;

      if (typeof prompt !== "string" || !prompt.trim()) {
        throw new ClientError("Request must include a non-empty prompt string");
      }

      const model = openai(
        typeof modelName === "string" ? modelName : "gpt-5.1-chat-latest",
      );

      const result = await generateText({
        model,
        system: SYSTEM_PROMPT,
        prompt,
        output: Output.object({
          schema: RecipeSchema,
        }),
      });

      return Response.json(result.output, { status: 200 });
    } catch (err) {
      if (err instanceof ClientError) {
        return Response.json({ error: err.message }, { status: 400 });
      }

      console.error("generateText error:", err);
      console.error("Assistant chat error:", err);
      return Response.json({
        error: "Failed to process generateText request",
        details: err instanceof Error ? err.message : String(err),
      }, { status: 500 });
    }
  }),
};`},{value:"stripe-webhook",name:"Stripe Webhook Example",description:"Handle Stripe webhook events securely",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";
import Stripe from "npm:stripe";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!);

export default {
  fetch: withSupabase({ auth: "none" }, async (req, { supabaseAdmin }) => {
    const body = await req.text();
    const sig = req.headers.get("stripe-signature")!;

    let event: Stripe.Event;
    try {
      event = await stripe.webhooks.constructEventAsync(
        body,
        sig,
        Deno.env.get("STRIPE_WEBHOOK_SECRET")!,
      );
    } catch {
      return Response.json({ error: "Invalid signature" }, { status: 401 });
    }

    /*
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await supabaseAdmin
          .from("orders")
          .update({ status: "paid" })
          .eq("stripe_session_id", session.id);
        break;
      }
    }
    */

    console.log(\`🔔 Event received: \${event.id}\`)
    return Response.json({ received: true });
  }),
};
`},{value:"resend-email",name:"Send Emails",description:"Send emails using the Resend API",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;

export default {
  fetch: withSupabase({ auth: "user" }, async (req, _ctx) => {
    const { to, subject, html } = await req.json();
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: \`Bearer \${RESEND_API_KEY}\`,
      },
      body: JSON.stringify({
        from: "you@example.com",
        to,
        subject,
        html,
      }),
    });
    const data = await res.json();

    return Response.json(data);
  }),
};`},{value:"image-transform",name:"Image Transformation",description:"Transform images using ImageMagick WASM",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";
import {
  ImageMagick,
  initializeImageMagick,
} from "npm:@imagemagick/magick-wasm@0.0.30";

await initializeImageMagick();

export default {
  fetch: withSupabase({ auth: "publishable" }, async (req, _ctx) => {
    const formData = await req.formData();
    const file = formData.get("file");
    const content = await file.arrayBuffer();

    const result = await ImageMagick.read(new Uint8Array(content), (img) => {
      img.resize(500, 300);
      img.blur(60, 5);
      return img.write((data) => data);
    });

    return new Response(
      result,
      { headers: { "Content-Type": "image/png" } },
    );
  }),
};`},{value:"websocket-server",name:"WebSocket Server Example",description:"Create a real-time WebSocket server",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

export default {
  fetch: withSupabase({ auth: "publishable" }, async (req, _ctx) => {
    const upgrade = req.headers.get("upgrade") || "";
    if (upgrade.toLowerCase() != "websocket") {
      return new Response("request isn't trying to upgrade to websocket.");
    }

    const { socket, response } = Deno.upgradeWebSocket(req);

    socket.onopen = () => {
      console.log("client connected!");
      socket.send("Welcome to Supabase Edge Functions!");
    };

    socket.onmessage = (e) => {
      console.log("client sent message:", e.data);
      socket.send(new Date().toString());
    };

    return response;
  }),
};`}];e.s(["EDGE_FUNCTION_TEMPLATES",0,t])},551734,e=>{"use strict";var t=e.i(221628);e.i(128328);var s=e.i(657588),a=e.i(158639),n=e.i(758825),r=e.i(573569),i=e.i(949648),o=e.i(478372),l=e.i(896779),c=e.i(294742),d=e.i(416340),u=e.i(837710),m=e.i(627069),p=e.i(492418),h=e.i(710483),f=e.i(746301),x=e.i(127739),g=e.i(456050),j=e.i(228027),b=e.i(108151),y=e.i(169967),v=e.i(841104),w=e.i(508158),k=e.i(602089),S=e.i(874311),_=e.i(215618),N=e.i(215312),P=e.i(635494),C=e.i(967052),A=e.i(317040),T=e.i(441081);let R=()=>{let e=(0,l.useRouter)(),{ref:s}=(0,a.useParams)(),n=(0,A.useAiAssistantStateSnapshot)(),{openSidebar:r}=(0,T.useSidebarManagerSnapshot)(),i=(0,C.useTrack)(),[,o]=(0,c.useQueryState)("create",c.parseAsString),d=(0,P.useIsProjectActive)();return(0,t.jsxs)(S.DropdownMenu,{children:[(0,t.jsx)(S.DropdownMenuTrigger,{asChild:!0,disabled:!d,children:(0,t.jsx)(N.ButtonTooltip,{type:"primary",disabled:!d,iconRight:(0,t.jsx)(y.ChevronDown,{className:"w-4 h-4",strokeWidth:1.5}),tooltip:{content:{side:"bottom",text:d?void 0:"Unable to deploy function as project is inactive"}},children:"Deploy a new function"})}),(0,t.jsxs)(S.DropdownMenuContent,{align:"end",className:"w-80",children:[(0,t.jsxs)(S.DropdownMenuItem,{onSelect:()=>{e.push(`/project/${s}/functions/new`),i("edge_function_via_editor_button_clicked",{origin:"secondary_action"})},className:"gap-4",children:[(0,t.jsx)(v.Code,{className:"shrink-0",size:16,strokeWidth:1.5}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-foreground",children:"Via Editor"}),(0,t.jsx)("p",{children:"Write and deploy in the browser"})]})]}),(0,t.jsxs)(S.DropdownMenuItem,{className:"gap-4",onSelect:()=>{o("cli"),i("edge_function_via_cli_button_clicked",{origin:"secondary_action"})},children:[(0,t.jsx)(w.Terminal,{className:"shrink-0",size:16,strokeWidth:1.5}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-foreground",children:"Via CLI"}),(0,t.jsx)("p",{children:"Write locally, deploy with the CLI"})]})]}),(0,t.jsxs)(S.DropdownMenuItem,{className:"gap-4",onSelect:()=>{r(_.SIDEBAR_KEYS.AI_ASSISTANT),n.newChat({name:"Create new edge function",initialInput:"Create a new edge function that ...",suggestions:{title:"I can help you create a new edge function. Here are a few example prompts to get you started:",prompts:[{label:"Stripe Payments",description:"Create a new edge function that processes payments with Stripe"},{label:"Email with Resend",description:"Create a new edge function that sends emails with Resend"},{label:"PDF Generator",description:"Create a new edge function that generates PDFs from HTML templates"}]}}),i("edge_function_ai_assistant_button_clicked",{origin:"secondary_action"})},children:[(0,t.jsx)(k.AiIconAnimation,{className:"shrink-0",size:16}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-foreground",children:"Via AI Assistant"}),(0,t.jsx)("p",{children:"Let the Assistant write and deploy for you"})]})]})]})]})};var E=e.i(799910),I=e.i(525855);let D=["name:asc","name:desc","created_at:asc","created_at:desc","updated_at:asc","updated_at:desc"],z=({value:e,onChange:s})=>(0,t.jsxs)(S.DropdownMenu,{children:[(0,t.jsx)(S.DropdownMenuTrigger,{asChild:!0,children:(0,t.jsxs)(u.Button,{type:"default",icon:e.includes("desc")?(0,t.jsx)(I.ArrowDownWideNarrow,{size:14}):(0,t.jsx)(E.ArrowDownNarrowWide,{size:14}),children:["Sorted by ",function(e){let[t]=e.split(":");return t.replace("_"," ")}(e)]})}),(0,t.jsx)(S.DropdownMenuContent,{align:"start",className:"w-48",children:(0,t.jsxs)(S.DropdownMenuRadioGroup,{value:e,onValueChange:e=>s(e),children:[(0,t.jsxs)(S.DropdownMenuSub,{children:[(0,t.jsx)(S.DropdownMenuSubTrigger,{children:"Sort by name"}),(0,t.jsxs)(S.DropdownMenuSubContent,{children:[(0,t.jsx)(S.DropdownMenuRadioItem,{value:"name:asc",children:"Ascending"}),(0,t.jsx)(S.DropdownMenuRadioItem,{value:"name:desc",children:"Descending"})]})]}),(0,t.jsxs)(S.DropdownMenuSub,{children:[(0,t.jsx)(S.DropdownMenuSubTrigger,{children:"Sort by created at"}),(0,t.jsxs)(S.DropdownMenuSubContent,{children:[(0,t.jsx)(S.DropdownMenuRadioItem,{value:"created_at:asc",children:"Ascending"}),(0,t.jsx)(S.DropdownMenuRadioItem,{value:"created_at:desc",children:"Descending"})]})]}),(0,t.jsxs)(S.DropdownMenuSub,{children:[(0,t.jsx)(S.DropdownMenuSubTrigger,{children:"Sort by updated at"}),(0,t.jsxs)(S.DropdownMenuSubContent,{children:[(0,t.jsx)(S.DropdownMenuRadioItem,{value:"updated_at:asc",children:"Ascending"}),(0,t.jsx)(S.DropdownMenuRadioItem,{value:"updated_at:desc",children:"Descending"})]})]})]})})]});var M=e.i(86086);e.i(69870);var q=e.i(55956),O=e.i(312062),L=e.i(36709),F=e.i(843778),H=e.i(375761),B=e.i(694833),$=e.i(480683),U=e.i(125356),K=e.i(68205),W=e.i(234745),G=e.i(338391),Y=e.i(562616);async function V({projectRef:e,functionIds:t=[]},s){let a;if(!e)throw Error("projectRef is required");if(0===t.length)return{};let n=(0,q.default)().toISOString(),r=(0,q.default)().subtract(1,"hour").toISOString(),i=await (0,G.executeAnalyticsSql)({projectRef:e,endpoint:"/platform/projects/{ref}/analytics/endpoints/logs.all",sql:(a=t.length>0?Y.safeSql`  and function_id in (${(0,Y.joinSqlFragments)(t.map(Y.analyticsLiteral),", ")})\n`:Y.safeSql``,Y.safeSql`
-- edge-functions-last-hour-stats
select
  function_id,
  count(distinct id) as requests_count,
  count(distinct case when response.status_code >= 500 then id end) as server_err_count
from
  function_edge_logs
  cross join unnest(metadata) as m
  cross join unnest(m.response) as response
where
  function_id is not null
${a}group by
  function_id
`),iso_timestamp_start:r,iso_timestamp_end:n,key:"last-hour-stats",signal:s});return i?.error&&(0,W.handleError)(i.error),(i?.result??[]).reduce((e,t)=>{let s=e=>{let t=Number(e??0);return Number.isFinite(t)?t:0},a=s(t.requests_count),n=s(t.server_err_count);return e[t.function_id]={functionId:t.function_id,requestsCount:a,serverErrorCount:n,errorRate:a>0?n/a*100:0},e},{})}var Q=e.i(240788),Z=e.i(570958);let X=({function:e})=>{let n=(0,l.useRouter)(),{ref:r}=(0,a.useParams)(),[i,o]=(0,d.useState)(!1),c=(0,s.useFlag)("edgeFunctionsRequestMetrics"),{data:u}=(0,$.useProjectApiUrl)({projectRef:r}),m=`${u}/functions/v1/${e.slug}`,h=(0,Z.createNavigationHandler)(`/project/${r}/functions/${e.slug}${M.IS_PLATFORM?"":"/code"}`,n),{data:f}=(0,Q.useEdgeFunctionsQuery)({projectRef:r}),{data:x,isPending:g,isError:j}=(({projectRef:e,functionIds:t=[]},{enabled:s=!0,...a}={})=>(0,U.useQuery)({queryKey:K.edgeFunctionsKeys.lastHourStats(e,t),queryFn:({signal:s})=>V({projectRef:e,functionIds:t},s),enabled:s&&void 0!==e&&t.length>0,staleTime:6e4,retry:!1,...a}))({projectRef:r,functionIds:(0,d.useMemo)(()=>c&&f?(0,K.normalizeFunctionIds)(f.map(e=>e.id)):[],[f,c])},{enabled:c}),y=x?.[e.id];return(0,t.jsxs)(p.TableRow,{onClick:h,onAuxClick:h,onKeyDown:h,tabIndex:0,className:"cursor-pointer inset-focus",children:[(0,t.jsx)(p.TableCell,{children:(0,t.jsx)("p",{className:"text-sm text-foreground whitespace-nowrap py-2",children:e.name})}),(0,t.jsx)(p.TableCell,{children:(0,t.jsxs)("div",{className:"text-xs text-foreground-light flex gap-2 items-center truncate",children:[(0,t.jsx)("p",{title:m,className:"font-mono truncate hidden md:inline max-w-120",children:m}),(0,t.jsx)("button",{type:"button",className:"text-foreground-lighter hover:text-foreground transition",onClick:e=>{e.stopPropagation(),o(!0),(0,H.copyToClipboard)(m),setTimeout(()=>o(!1),3e3)},children:i?(0,t.jsx)("div",{className:"text-brand",children:(0,t.jsx)(O.Check,{size:14,strokeWidth:3})}):(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)("div",{className:"block",children:(0,t.jsx)(L.Copy,{size:14,strokeWidth:1.5})})})})]})}),(0,t.jsx)(p.TableCell,{className:"hidden 2xl:table-cell whitespace-nowrap",children:e.created_at?(0,t.jsx)(B.TimestampInfo,{className:"text-sm text-foreground-light whitespace-nowrap",utcTimestamp:e.created_at,label:(0,q.default)(e.created_at).fromNow()}):(0,t.jsx)("span",{className:"text-sm text-foreground-light",children:"–"})}),(0,t.jsx)(p.TableCell,{className:"lg:table-cell",children:e.updated_at?(0,t.jsx)(B.TimestampInfo,{className:"text-sm text-foreground-light whitespace-nowrap",utcTimestamp:e.updated_at,label:(0,q.default)(e.updated_at).fromNow()}):(0,t.jsx)("span",{className:"text-sm text-foreground-light",children:"–"})}),c&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.TableCell,{className:"lg:table-cell whitespace-nowrap",children:g?(0,t.jsx)(b.ShimmeringLoader,{className:"w-12"}):j?(0,t.jsx)("p",{className:"text-foreground-lighter",title:"Failed to load stats",children:"-"}):(0,t.jsx)("p",{className:"text-foreground-light",children:void 0!==y?y.requestsCount.toLocaleString():"-"})}),(0,t.jsx)(p.TableCell,{className:"lg:table-cell whitespace-nowrap",children:g?(0,t.jsx)(b.ShimmeringLoader,{className:"w-12"}):j?(0,t.jsx)("p",{className:"text-foreground-lighter",title:"Failed to load stats",children:"-"}):void 0!==y?(0,t.jsx)("span",{className:(0,F.cn)("text-sm",y.errorRate>=1?"text-destructive":y.errorRate>.1?"text-warning":"text-foreground-light"),children:function(e){if(0===e)return"0%";if(e>=100)return"100%";if(e<.1)return"<0.1%";let t=Math.min(Number(e.toFixed(1)),100);return t>=100?"100%":`${t.toFixed(1)}%`}(y.errorRate)}):(0,t.jsx)("p",{className:"text-foreground-lighter",children:"-"})})]}),(0,t.jsxs)(p.TableCell,{className:"hidden 2xl:table-cell",children:[(0,t.jsx)("p",{className:"text-foreground-light",children:e.version}),(0,t.jsx)("button",{tabIndex:-1,className:"sr-only",children:"Go to function details"})]})]},e.id)};var J=e.i(822219),ee=e.i(561978),et=e.i(974200),es=e.i(167892),ea=e.i(513826),en=e.i(856613),er=e.i(548760),ei=e.i(56865),eo=e.i(912793),el=e.i(10429);let ec=()=>{let{ref:e}=(0,a.useParams)(),s=(0,l.useRouter)(),{isCli:n,isSelfHosted:r}=(0,ei.useDeploymentMode)(),i=(0,A.useAiAssistantStateSnapshot)(),{openSidebar:o}=(0,T.useSidebarManagerSnapshot)(),p=(0,C.useTrack)(),[,h]=(0,c.useQueryState)("create",c.parseAsString),f=(0,eo.useIsFeatureEnabled)("edge_functions:show_stripe_example"),x=(0,d.useMemo)(()=>f?et.EDGE_FUNCTION_TEMPLATES:et.EDGE_FUNCTION_TEMPLATES.filter(e=>"stripe-webhook"!==e.value),[f]),g=el.IS_PLATFORM?"Deploy your first edge function":"Add your first edge function";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m.Card,{children:[(0,t.jsx)(m.CardHeader,{children:(0,t.jsx)(m.CardTitle,{children:g})}),(0,t.jsxs)(m.CardContent,{className:"p-0 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] divide-y md:divide-y-0 md:divide-x divide-default items-stretch",children:[el.IS_PLATFORM&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(v.Code,{strokeWidth:1.5,size:20}),(0,t.jsx)("h4",{className:"text-base text-foreground",children:"Via Editor"})]}),(0,t.jsx)("p",{className:"text-sm text-foreground-light mb-4 mt-1",children:"Create and edit functions directly in the browser. Download to local at any time."}),(0,t.jsx)(u.Button,{type:"default",onClick:()=>{s.push(`/project/${e}/functions/new`),p("edge_function_via_editor_button_clicked",{origin:"no_functions_block"})},children:"Open Editor"})]}),(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(k.AiIconAnimation,{size:20}),(0,t.jsx)("h4",{className:"text-base text-foreground",children:"AI Assistant"})]}),(0,t.jsx)("p",{className:"text-sm text-foreground-light mb-4 mt-1",children:"Let our AI assistant help you create functions. Perfect for kickstarting a function."}),(0,t.jsx)(u.Button,{type:"default",onClick:()=>{o(_.SIDEBAR_KEYS.AI_ASSISTANT),i.newChat({name:"Create new edge function",initialInput:"Create a new edge function that ...",suggestions:{title:"I can help you create a new edge function. Here are a few example prompts to get you started:",prompts:[{label:"Stripe Payments",description:"Create a new edge function that processes payments with Stripe"},{label:"Email with Resend",description:"Create a new edge function that sends emails with Resend"},{label:"PDF Generator",description:"Create a new edge function that generates PDFs from HTML templates"}]}}),p("edge_function_ai_assistant_button_clicked",{origin:"no_functions_block"})},children:"Open Assistant"})]})]}),(el.IS_PLATFORM||n)&&(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(w.Terminal,{strokeWidth:1.5,size:20}),(0,t.jsx)("h4",{className:"text-base text-foreground",children:"Via CLI"})]}),(0,t.jsx)("p",{className:"text-sm text-foreground-light mb-4 mt-1",children:"Create and deploy functions using the Supabase CLI. Ideal for local development and version control."}),(0,t.jsx)(u.Button,{type:"default",onClick:()=>{h("cli"),p("edge_function_via_cli_button_clicked",{origin:"no_functions_block"})},children:"View CLI Instructions"})]}),r&&(0,t.jsx)(ed,{})]})]}),el.IS_PLATFORM&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(es.ScaffoldSectionTitle,{className:"text-xl mb-4 mt-12",children:"Start with a template"}),(0,t.jsx)(er.ResourceList,{children:x.map(s=>(0,t.jsx)(en.ResourceItem,{media:(0,t.jsx)(v.Code,{strokeWidth:1.5,size:16,className:"translate-y-[-9px]"}),onClick:()=>{p("edge_function_template_clicked",{templateName:s.name,origin:"functions_page"})},children:(0,t.jsxs)(ee.default,{href:`/project/${e}/functions/new?template=${s.value}`,children:[(0,t.jsx)("p",{children:s.name}),(0,t.jsx)("p",{className:"text-sm text-foreground-lighter",children:s.description})]})},s.name))})]})]})},ed=()=>(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(J.Server,{strokeWidth:1.5,size:20}),(0,t.jsx)("h4",{className:"text-base text-foreground",children:"Self-Hosted"})]}),(0,t.jsxs)("p",{className:"text-sm text-foreground-light mb-4 mt-1",children:["Place each function at"," ",(0,t.jsx)("code",{className:"text-code-inline",children:"volumes/functions/<function-name>/index.ts"})," and restart the ",(0,t.jsx)("code",{className:"text-code-inline",children:"functions"})," service to pick up changes."]}),(0,t.jsx)(ea.DocsButton,{href:`${el.DOCS_URL}/guides/self-hosting/self-hosted-functions`})]});var eu=e.i(253214),em=e.i(26898),ep=e.i(690885),eh=e.i(833063),ef=e.i(348534),ex=e.i(743052),eg=e.i(19688),ej=e.i(108892),eb=e.i(2579);let ey=(0,d.forwardRef)(({closable:e=!1,removeBorder:s=!1,...r},i)=>{let o=(0,l.useRouter)(),{ref:c}=(0,a.useParams)(),[m,p]=(0,d.useState)(!e),{data:h}=(0,eg.useAccessTokensQuery)(),{can:f}=(0,eb.useAsyncCheckPermissions)(em.PermissionAction.SECRETS_READ,"*"),{data:x}=(0,ej.useAPIKeysQuery)({projectRef:c},{enabled:f}),{data:g}=(0,$.useProjectApiUrl)({projectRef:c}),j=`${g}/functions/v1`,{anonKey:b,publishableKey:y}=(0,ej.getKeys)(x),v=y?.api_key??b?.api_key??"[YOUR ANON KEY]",k=`https://${g}`,S=g?new URL(k).hostname.split(".").pop():"co",_=[{command:"supabase functions new hello-world",description:" creates a function stub at ./functions/hello-world/index.ts",jsx:()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"text-brand-600",children:"supabase"})," functions new hello-world"]}),comment:"Create a function"},{command:`supabase functions deploy hello-world --project-ref ${c}`,description:"Deploys function at ./functions/hello-world/index.ts",jsx:()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"text-brand-600",children:"supabase"})," functions deploy hello-world --project-ref ",c]}),comment:"Deploy your function"},{command:`curl -L -X POST 'https://${c}.supabase.${S}/functions/v1/hello-world' -H 'Authorization: Bearer ${v}'${b?.type==="publishable"?` -H 'apikey: ${v}'`:""} --data '{"name":"Functions"}'`,description:"Invokes the hello-world function",jsx:()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"text-brand-600",children:"curl"})," -L -X POST '",j,"/hello-world' -H 'Authorization: Bearer [YOUR ANON KEY]'",b?.type==="publishable"?" -H 'apikey: [YOUR ANON KEY]' ":"",'--data \'{"name":"Functions"}\'']}),comment:"Invoke your function"}];return(0,t.jsxs)(ef.Collapsible,{ref:i,open:m,className:"w-full",onOpenChange:()=>p(!m),...r,children:[(0,t.jsxs)(ef.CollapsibleTrigger,{className:"flex w-full justify-between",disabled:!e,children:[(0,t.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,t.jsx)("div",{className:"flex items-center justify-center w-8 h-8 p-2 border rounded-sm bg-alternative",children:(0,t.jsx)(w.Terminal,{strokeWidth:2})}),(0,t.jsx)("h4",{children:"Create your first Edge Function via the CLI"})]}),e&&(0,t.jsx)("div",{className:"cursor-pointer",onClick:()=>p(!m),children:m?(0,t.jsx)(eh.Minimize2,{size:16,strokeWidth:1.5}):(0,t.jsx)(ep.Maximize2,{size:16,strokeWidth:1.5})})]}),(0,t.jsxs)(ef.CollapsibleContent,{className:"w-full transition-all data-closed:animate-collapsible-up data-open:animate-collapsible-down",children:[(0,t.jsx)(ex.default,{commands:_,className:"my-4"}),h&&0===h.length?(0,t.jsxs)("div",{className:"py-4 space-y-3 border-t",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-foreground",children:"You may need to create an access token"}),(0,t.jsx)("p",{className:"text-sm text-foreground-light",children:"You can create a secure access token in your account section"})]}),(0,t.jsx)(u.Button,{type:"default",onClick:()=>o.push("/account/tokens"),children:"Access tokens"})]}):(0,t.jsxs)("div",{className:"py-4 space-y-3 border-t",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-base text-foreground",children:"Need help?"}),(0,t.jsx)("p",{className:"text-sm text-foreground-light",children:"Read the documentation, or browse some sample code."})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(ea.DocsButton,{href:`${el.DOCS_URL}/guides/functions`}),(0,t.jsx)(u.Button,{asChild:!0,type:"default",icon:(0,t.jsx)(n.ExternalLink,{}),children:(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions",children:"Examples"})})]})]})]})]})});ey.displayName="TerminalInstructions";let ev=()=>{let[e,s]=(0,c.useQueryState)("create",c.parseAsString);return(0,t.jsx)(eu.Dialog,{open:"cli"===e,onOpenChange:e=>!e&&void s(null),children:(0,t.jsxs)(eu.DialogContent,{size:"large",children:[(0,t.jsx)(eu.DialogTitle,{className:"sr-only",children:"Create your first Edge Function via the CLI"}),(0,t.jsx)(eu.DialogSection,{padding:"small",children:(0,t.jsx)(ey,{closable:!1})})]})})};var ew=e.i(368136),ek=e.i(194125);let eS="name:asc";var e_=e.i(448710),eN=e.i(839941),eP=e.i(567558),eC=e.i(654894),eA=e.i(602146);let eT=()=>{let e=(0,l.useRouter)(),{ref:n}=(0,a.useParams)(),g=(0,s.useFlag)("edgeFunctionsRequestMetrics"),y=(0,P.useIsProjectActive)(),v=(0,d.useRef)(null),[w,k]=(0,c.useQueryState)("search",c.parseAsString.withDefault("")),[S,_]=(0,c.useQueryState)("sort",(0,c.parseAsStringLiteral)(D).withDefault("name:asc")),{data:N,error:C,isPending:A,isError:T,isSuccess:R,isFetching:E,refetch:I}=(0,Q.useEdgeFunctionsQuery)({projectRef:n});!function({searchInputRef:e,setSearch:t,sort:s,setSort:a,canCreateNew:n,onCreateNew:r,onRefresh:i}){(0,ek.useShortcut)(ew.SHORTCUT_IDS.LIST_PAGE_FOCUS_SEARCH,()=>{e.current?.focus(),e.current?.select()},{label:"Search functions"}),(0,ek.useShortcut)(ew.SHORTCUT_IDS.LIST_PAGE_NEW_ITEM,r,{enabled:n,label:"Deploy a new function"}),(0,ek.useShortcut)(ew.SHORTCUT_IDS.LIST_PAGE_RESET_FILTERS,()=>{t("")}),(0,ek.useShortcut)(ew.SHORTCUT_IDS.FUNCTIONS_LIST_REFRESH,i),(0,ek.useShortcut)(ew.SHORTCUT_IDS.FUNCTIONS_LIST_CLEAR_SORT,()=>a(eS),{enabled:s!==eS})}({searchInputRef:v,setSearch:k,sort:S,setSort:_,canCreateNew:y,onCreateNew:()=>e.push(`/project/${n}/functions/new`),onRefresh:()=>{I()}});let M=(0,d.useMemo)(()=>{let e=(N??[]).filter(e=>e.name.toLowerCase().includes(w.toLowerCase())),[t,s]=S.split(":"),a="asc"===s?1:-1;return e.sort((e,s)=>"name"===t?e.name.localeCompare(s.name)*a:"created_at"===t?(e.created_at-s.created_at)*a:"updated_at"===t?(e.updated_at-s.updated_at)*a:0)},[N,w,S]),q=(N??[]).length>0;return(0,t.jsx)(x.PageContainer,{size:"large",children:(0,t.jsx)(j.PageSection,{children:(0,t.jsx)(j.PageSectionContent,{children:(0,t.jsxs)("div",{className:"flex flex-col gap-6",children:[A&&(0,t.jsx)(b.GenericSkeletonLoader,{}),T&&(el.IS_PLATFORM?(0,t.jsx)(eP.default,{error:C,subject:"Failed to retrieve edge functions"}):(0,t.jsx)(h.Admonition,{type:"warning",title:"Failed to retrieve edge functions",children:(0,t.jsx)("p",{className:"prose [&>code]:text-xs text-sm",children:"Edge functions could not be read from disk. The functions directory may be missing, not mounted into Studio, or unreadable."})})),R&&(0,t.jsx)(t.Fragment,{children:q?(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"flex items-center gap-2",children:(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)(eC.ShortcutTooltip,{shortcutId:ew.SHORTCUT_IDS.LIST_PAGE_FOCUS_SEARCH,label:"Search functions",side:"bottom",children:(0,t.jsx)(f.Input,{ref:v,placeholder:"Search function names",icon:(0,t.jsx)(i.Search,{}),size:"tiny",className:"w-32 md:w-64",value:w,onChange:e=>k(e.target.value),onKeyDown:(0,eA.onSearchInputEscape)(w,k),actions:[w&&(0,t.jsx)(u.Button,{size:"tiny",type:"text",icon:(0,t.jsx)(o.X,{}),onClick:()=>k(""),className:"p-0 h-5 w-5"},"clear")]})})})}),(0,t.jsx)("div",{className:"flex items-center gap-2",children:(0,t.jsx)(z,{value:S,onChange:_})}),(0,t.jsx)(eC.ShortcutTooltip,{shortcutId:ew.SHORTCUT_IDS.FUNCTIONS_LIST_REFRESH,side:"bottom",children:(0,t.jsx)(u.Button,{type:"default",icon:(0,t.jsx)(r.RefreshCw,{}),loading:E,onClick:()=>I(),children:"Refresh"})}),(0,t.jsx)("span",{className:"border-l border-default pl-2 text-xs text-foreground-light",children:w&&M.length!==N.length?`Viewing ${M.length} of ${N.length} functions in total`:`Viewing ${N.length} ${1===N.length?"function":"functions"} in total`})]}),(0,t.jsx)(m.Card,{children:(0,t.jsxs)(p.Table,{children:[(0,t.jsx)(p.TableHeader,{children:(0,t.jsxs)(p.TableRow,{children:[(0,t.jsx)(p.TableHead,{children:"Name"}),(0,t.jsx)(p.TableHead,{children:"URL"}),(0,t.jsx)(p.TableHead,{className:"hidden 2xl:table-cell",children:"Created"}),(0,t.jsx)(p.TableHead,{className:"lg:table-cell",children:"Updated"}),g&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.TableHead,{className:"lg:table-cell",children:"Total requests (1h)"}),(0,t.jsx)(p.TableHead,{className:"lg:table-cell",children:"5xx error rate (1h)"})]}),(0,t.jsx)(p.TableHead,{className:"hidden 2xl:table-cell",children:"Deployments"})]})}),(0,t.jsx)(p.TableBody,{children:(0,t.jsx)(t.Fragment,{children:M.length>0?M.map(e=>(0,t.jsx)(X,{function:e},e.id)):(0,t.jsx)(p.TableRow,{children:(0,t.jsxs)(p.TableCell,{colSpan:g?8:6,children:[(0,t.jsx)("p",{className:"text-sm text-foreground",children:"No results found"}),(0,t.jsxs)("p",{className:"text-sm text-foreground-light",children:['Your search for "',w,'" did not return any results']})]})})})})]})})]}):(0,t.jsx)(ec,{})})]})})})})};eT.getLayout=e=>(0,t.jsxs)(e_.default,{children:[(0,t.jsx)(eN.default,{title:"Edge Functions",children:(0,t.jsxs)("div",{className:"w-full min-h-full flex flex-col items-stretch",children:[(0,t.jsx)(g.PageHeader,{size:"large",children:(0,t.jsxs)(g.PageHeaderMeta,{children:[(0,t.jsxs)(g.PageHeaderSummary,{children:[(0,t.jsx)(g.PageHeaderTitle,{children:"Edge Functions"}),(0,t.jsx)(g.PageHeaderDescription,{children:"Run server-side logic close to your users"})]}),(0,t.jsxs)(g.PageHeaderAside,{children:[(0,t.jsx)(ea.DocsButton,{href:`${el.DOCS_URL}/guides/functions`}),(0,t.jsx)(u.Button,{asChild:!0,type:"default",icon:(0,t.jsx)(n.ExternalLink,{}),children:(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions",children:"Examples"})}),el.IS_PLATFORM&&(0,t.jsx)(R,{})]})]})}),e]})}),(0,t.jsx)(ev,{})]}),e.s(["default",0,eT],551734)},621250,(e,t,s)=>{let a="/project/[ref]/functions";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(551734)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})},111410,e=>{e.v(t=>Promise.all(["static/chunks/0fapkys0ri-_l.js","static/chunks/0~4sz39c_mg-o.js"].map(t=>e.l(t))).then(()=>t(677146)))},883471,e=>{e.v(t=>Promise.all(["static/chunks/06p2kpj04m4yn.js"].map(t=>e.l(t))).then(()=>t(518769)))},692992,e=>{e.v(t=>Promise.all(["static/chunks/0f12yrswzr1z2.js"].map(t=>e.l(t))).then(()=>t(897936)))},306064,e=>{e.v(t=>Promise.all(["static/chunks/0imgo7gs0_t8d.js"].map(t=>e.l(t))).then(()=>t(843731)))},329867,e=>{e.v(t=>Promise.all(["static/chunks/14pnx4wkfxwl0.js"].map(t=>e.l(t))).then(()=>t(562380)))},643342,e=>{e.v(t=>Promise.all(["static/chunks/0vl7m.74mi~6x.js","static/chunks/0nzbagpf5_1q4.js","static/chunks/0a~s7vfbwjli3.js","static/chunks/0pu-c~48~wxg6.js","static/chunks/0atc44db2_961.js","static/chunks/0mauiau2w.a3n.js","static/chunks/0xs42br2r6co5.js","static/chunks/051wi-a42k1v7.js","static/chunks/0o~u-bq_fkqp6.js"].map(t=>e.l(t))).then(()=>t(232258)))},804879,e=>{e.v(t=>Promise.all(["static/chunks/0w0qo4w5bpkvd.js","static/chunks/0loc2zv_48v18.js","static/chunks/0a~s7vfbwjli3.js","static/chunks/0atc44db2_961.js","static/chunks/08sfzq2q9.nl8.js"].map(t=>e.l(t))).then(()=>t(199687)))},95833,e=>{e.v(t=>Promise.all(["static/chunks/0rdl7siznoe_x.js","static/chunks/09~no5pl_obih.js"].map(t=>e.l(t))).then(()=>t(142543)))},846537,e=>{e.v(t=>Promise.all(["static/chunks/01vq2u-nj2zot.js"].map(t=>e.l(t))).then(()=>t(245201)))},50229,e=>{e.v(t=>Promise.all(["static/chunks/17o_wx35gl351.js"].map(t=>e.l(t))).then(()=>t(331248)))},263652,e=>{e.v(t=>Promise.all(["static/chunks/0rywafsw-6g89.js"].map(t=>e.l(t))).then(()=>t(700224)))},822335,e=>{e.v(t=>Promise.all(["static/chunks/130u0nco-gmpy.js"].map(t=>e.l(t))).then(()=>t(48216)))},827389,e=>{e.v(t=>Promise.all(["static/chunks/0q9f5ej5c8u0a.js"].map(t=>e.l(t))).then(()=>t(780795)))},306465,e=>{e.v(t=>Promise.all(["static/chunks/0y_nxho2d0k-y.js"].map(t=>e.l(t))).then(()=>t(84223)))},320810,e=>{e.v(t=>Promise.all(["static/chunks/0b6~d1w4j692e.js"].map(t=>e.l(t))).then(()=>t(190529)))},44756,e=>{e.v(t=>Promise.all(["static/chunks/10whcp9gm7~1k.js"].map(t=>e.l(t))).then(()=>t(411609)))},77572,e=>{e.v(t=>Promise.all(["static/chunks/0r0bwdd1oeak4.js"].map(t=>e.l(t))).then(()=>t(550910)))},299015,e=>{e.v(t=>Promise.all(["static/chunks/0mb.7j~oz_szr.js"].map(t=>e.l(t))).then(()=>t(956403)))},853832,e=>{e.v(t=>Promise.all(["static/chunks/09yw33ucvjq77.js"].map(t=>e.l(t))).then(()=>t(523047)))},444444,e=>{e.v(t=>Promise.all(["static/chunks/15pe8af5os~7w.js"].map(t=>e.l(t))).then(()=>t(306141)))},89982,e=>{e.v(t=>Promise.all(["static/chunks/10ndn1_q82ns6.js"].map(t=>e.l(t))).then(()=>t(84181)))},439,e=>{e.v(t=>Promise.all(["static/chunks/09xi1zfr2260f.js"].map(t=>e.l(t))).then(()=>t(585967)))},674055,e=>{e.v(t=>Promise.all(["static/chunks/03kx7ucpp5b6p.js"].map(t=>e.l(t))).then(()=>t(659864)))},801894,e=>{e.v(t=>Promise.all(["static/chunks/0yy~b5jo~bh.j.js"].map(t=>e.l(t))).then(()=>t(532683)))},578444,e=>{e.v(t=>Promise.all(["static/chunks/0~1l14owyzj5c.js"].map(t=>e.l(t))).then(()=>t(221183)))},185608,e=>{e.v(t=>Promise.all(["static/chunks/0~qx2nzdpnwqz.js"].map(t=>e.l(t))).then(()=>t(79472)))},612314,e=>{e.v(t=>Promise.all(["static/chunks/0ig_efln.eo5n.js"].map(t=>e.l(t))).then(()=>t(980791)))},660943,e=>{e.v(t=>Promise.all(["static/chunks/16q_50rcfqzir.js"].map(t=>e.l(t))).then(()=>t(620893)))},214615,e=>{e.v(t=>Promise.all(["static/chunks/08dhnvqtho~su.js"].map(t=>e.l(t))).then(()=>t(194742)))},877303,e=>{e.v(t=>Promise.all(["static/chunks/0qbdrxkgb.swe.js"].map(t=>e.l(t))).then(()=>t(85809)))},565731,e=>{e.v(t=>Promise.all(["static/chunks/008npwwjamnf2.js"].map(t=>e.l(t))).then(()=>t(846526)))},439954,e=>{e.v(t=>Promise.all(["static/chunks/00d-l9m5lnxdv.js"].map(t=>e.l(t))).then(()=>t(399358)))},646193,e=>{e.v(t=>Promise.all(["static/chunks/05qtdilohd~w7.js"].map(t=>e.l(t))).then(()=>t(270671)))},310666,e=>{e.v(t=>Promise.all(["static/chunks/094ci2h0zwu2y.js"].map(t=>e.l(t))).then(()=>t(191809)))},38970,e=>{e.v(t=>Promise.all(["static/chunks/10338r_-mrr7m.js","static/chunks/0etx14629d407.js","static/chunks/00g-f9lsw_91v.js"].map(t=>e.l(t))).then(()=>t(66554)))},68365,e=>{e.v(t=>Promise.all(["static/chunks/0u9p~dxnsj-w5.js"].map(t=>e.l(t))).then(()=>t(531769)))},705292,e=>{e.v(t=>Promise.all(["static/chunks/0ap4hm_2.yq9y.js"].map(t=>e.l(t))).then(()=>t(147575)))},930188,e=>{e.v(t=>Promise.all(["static/chunks/0depke8p2eu1z.js"].map(t=>e.l(t))).then(()=>t(604919)))},736620,e=>{e.v(t=>Promise.all(["static/chunks/0mveicz4lz3tj.js"].map(t=>e.l(t))).then(()=>t(85022)))},101928,e=>{e.v(t=>Promise.all(["static/chunks/0mm~snu2~dq3y.js"].map(t=>e.l(t))).then(()=>t(846161)))},41375,e=>{e.v(t=>Promise.all(["static/chunks/02kj68im06set.js"].map(t=>e.l(t))).then(()=>t(834473)))},715733,e=>{e.v(t=>Promise.all(["static/chunks/13jetsarig1lq.js"].map(t=>e.l(t))).then(()=>t(417897)))},268726,e=>{e.v(t=>Promise.all(["static/chunks/1499ufsalmt_b.js"].map(t=>e.l(t))).then(()=>t(898187)))},740028,e=>{e.v(t=>Promise.all(["static/chunks/173dlyz5qiu-~.js"].map(t=>e.l(t))).then(()=>t(391060)))},24661,e=>{e.v(t=>Promise.all(["static/chunks/0tmc189rtw37j.js"].map(t=>e.l(t))).then(()=>t(549587)))},134805,e=>{e.v(t=>Promise.all(["static/chunks/0.2xngu77jthy.js"].map(t=>e.l(t))).then(()=>t(664336)))},597523,e=>{e.v(t=>Promise.all(["static/chunks/11km3nz.f.eef.js"].map(t=>e.l(t))).then(()=>t(245099)))},678679,e=>{e.v(t=>Promise.all(["static/chunks/12dsmdes91jfo.js"].map(t=>e.l(t))).then(()=>t(404154)))},73751,e=>{e.v(t=>Promise.all(["static/chunks/11njii9nc~g7u.js"].map(t=>e.l(t))).then(()=>t(31724)))},909495,e=>{e.v(t=>Promise.all(["static/chunks/03_x_o864nb~2.js"].map(t=>e.l(t))).then(()=>t(698380)))},548863,e=>{e.v(t=>Promise.all(["static/chunks/15py-z87j1qk4.js","static/chunks/0a~s7vfbwjli3.js"].map(t=>e.l(t))).then(()=>t(79703)))},283398,e=>{e.v(t=>Promise.all(["static/chunks/0h_a0hxg~repb.js"].map(t=>e.l(t))).then(()=>t(541970)))},274794,e=>{e.v(t=>Promise.all(["static/chunks/177ec~91g829l.js","static/chunks/0a~s7vfbwjli3.js","static/chunks/0keesrozfhzaj.js","static/chunks/0-4prhow_2035.js","static/chunks/0q~tc5hf~vvm4.js","static/chunks/0atc44db2_961.js"].map(t=>e.l(t))).then(()=>t(571538)))},929825,e=>{e.v(t=>Promise.all(["static/chunks/0b3gi~5c0tn22.js"].map(t=>e.l(t))).then(()=>t(777403)))},579437,e=>{e.v(t=>Promise.all(["static/chunks/0res-jioh6ipz.js","static/chunks/0a~s7vfbwjli3.js","static/chunks/04_u5kl5zxm7d.js","static/chunks/0atc44db2_961.js","static/chunks/07a8tf~qh8fap.js"].map(t=>e.l(t))).then(()=>t(524943)))},609157,e=>{e.v(t=>Promise.all(["static/chunks/0res-jioh6ipz.js","static/chunks/0a~s7vfbwjli3.js","static/chunks/04_u5kl5zxm7d.js","static/chunks/0atc44db2_961.js","static/chunks/12ifpj0k-6-f~.js"].map(t=>e.l(t))).then(()=>t(323205)))},150116,e=>{e.v(t=>Promise.all(["static/chunks/0gpvdphhn21_u.js"].map(t=>e.l(t))).then(()=>t(763645)))},707643,e=>{e.v(t=>Promise.all(["static/chunks/154ke5dv9~ox4.js","static/chunks/0a~s7vfbwjli3.js"].map(t=>e.l(t))).then(()=>t(935100)))},467186,e=>{e.v(t=>Promise.all(["static/chunks/02i0eehq__r2x.js"].map(t=>e.l(t))).then(()=>t(6777)))},639206,e=>{e.v(t=>Promise.all(["static/chunks/0bs~-e851qa34.js","static/chunks/0_hlbfkp6tzjt.js"].map(t=>e.l(t))).then(()=>t(791713)))},250577,e=>{e.v(t=>Promise.all(["static/chunks/0ic21ob.faaj6.js"].map(t=>e.l(t))).then(()=>t(429091)))},610764,e=>{e.v(t=>Promise.all(["static/chunks/0.20bv8fys3nc.js","static/chunks/0z400125~b-~z.js"].map(t=>e.l(t))).then(()=>t(247311)))},818633,e=>{e.v(t=>Promise.all(["static/chunks/0jjr.7e3ie27n.js","static/chunks/07qprorx86.ik.js"].map(t=>e.l(t))).then(()=>t(338481)))},859528,e=>{e.v(t=>Promise.all(["static/chunks/03g69_2g8_2q..js"].map(t=>e.l(t))).then(()=>t(372475)))},500556,e=>{e.v(t=>Promise.all(["static/chunks/0p__5d.97c8ed.css","static/chunks/0ifzb_2f6ut.l.css","static/chunks/0zm-hcfy46vnl.js","static/chunks/0a~s7vfbwjli3.js","static/chunks/12g1m-9pg.lo1.js","static/chunks/0q~tc5hf~vvm4.js","static/chunks/10do4f5ook2rp.js","static/chunks/0_f.8ykeoa4n9.js","static/chunks/04uxp_ac9t-x..js","static/chunks/07jdbmrp~k0z7.js","static/chunks/13xbv2_m8077v.js"].map(t=>e.l(t))).then(()=>t(321608)))},596207,e=>{e.v(t=>Promise.all(["static/chunks/0nda8.p50y.j6.js","static/chunks/12~y9.7zep9_3.js"].map(t=>e.l(t))).then(()=>t(865243)))},354946,e=>{e.v(t=>Promise.all(["static/chunks/0hm_un036zf5b.js","static/chunks/0nda8.p50y.j6.js"].map(t=>e.l(t))).then(()=>t(674412)))},943222,e=>{e.v(t=>Promise.all(["static/chunks/0ojcml_xfi8bb.js"].map(t=>e.l(t))).then(()=>t(140017)))},98740,e=>{e.v(t=>Promise.all(["static/chunks/0-o4r50_rlpg4.js"].map(t=>e.l(t))).then(()=>t(795776)))},130281,e=>{e.v(t=>Promise.all(["static/chunks/03w0ky2ch~0rj.js"].map(t=>e.l(t))).then(()=>t(10338)))},429186,e=>{e.v(t=>Promise.all(["static/chunks/07ohhmi5njylm.js","static/chunks/0y6rcq1425_6w.js","static/chunks/0kws5scat_tcp.js","static/chunks/0f3wn~ewm5nl3.js","static/chunks/0crb8s8p4ypxy.js","static/chunks/17i.~7rx3zftk.js"].map(t=>e.l(t))).then(()=>t(818996)))},488584,e=>{e.v(t=>Promise.all(["static/chunks/0owfo049_wdyi.js"].map(t=>e.l(t))).then(()=>t(851420)))},25642,e=>{e.v(t=>Promise.all(["static/chunks/0aosvz75hzyos.js","static/chunks/0a~s7vfbwjli3.js","static/chunks/0mcvibd3yvcpz.js","static/chunks/0t337q-xnfdye.js","static/chunks/15hou4_7sm86s.js","static/chunks/0atc44db2_961.js","static/chunks/16~1o2qyxmzk8.js","static/chunks/07l2-k5w9m-9r.js","static/chunks/140uy0m5gfux9.js","static/chunks/0.4776luh_cpx.js"].map(t=>e.l(t))).then(()=>t(207831)))},561602,e=>{e.v(t=>Promise.all(["static/chunks/03flevbm08f56.js","static/chunks/0mcvibd3yvcpz.js","static/chunks/0p7t0x97du8eq.js","static/chunks/0vary-h32qkdm.js"].map(t=>e.l(t))).then(()=>t(326204)))},877114,e=>{e.v(t=>Promise.all(["static/chunks/0h7u2qo-k_8n~.js"].map(t=>e.l(t))).then(()=>t(812136)))},540007,e=>{e.v(t=>Promise.all(["static/chunks/00h30~s47nx4s.js"].map(t=>e.l(t))).then(()=>t(785951)))},593029,e=>{e.v(t=>Promise.all(["static/chunks/0myo16wqiz7a..js"].map(t=>e.l(t))).then(()=>t(755497)))},849654,e=>{e.v(e=>Promise.resolve().then(()=>e(839941)))},639363,e=>{e.v(t=>Promise.all(["static/chunks/0hk.-u6gjodb4.js"].map(t=>e.l(t))).then(()=>t(904340)))},425360,e=>{e.v(t=>Promise.all(["static/chunks/13u_n184r7wx5.js"].map(t=>e.l(t))).then(()=>t(409222)))},548315,e=>{e.v(t=>Promise.all(["static/chunks/0yb7w79hy3et5.js","static/chunks/0mcvibd3yvcpz.js"].map(t=>e.l(t))).then(()=>t(256337)))},661328,e=>{e.v(t=>Promise.all(["static/chunks/0uy7zwe_rn69v.js","static/chunks/0mcvibd3yvcpz.js"].map(t=>e.l(t))).then(()=>t(447400)))},265029,e=>{e.v(t=>Promise.all(["static/chunks/14-.-tpp7r5zs.js"].map(t=>e.l(t))).then(()=>t(289339)))},151872,e=>{e.v(t=>Promise.all(["static/chunks/0tqrkswab7cqy.js"].map(t=>e.l(t))).then(()=>t(865389)))}]);

//# debugId=b98bd9d5-cbaf-2c83-798e-9fbf27d6e6b5
//# sourceMappingURL=0-809df6lnal..js.map