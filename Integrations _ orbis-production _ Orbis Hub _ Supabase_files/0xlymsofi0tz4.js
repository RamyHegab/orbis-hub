;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="08829f64-c017-3a0d-48e2-66e9b7acb9f9")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,938933,e=>{"use strict";var t=e.i(416340);let r={bg:{brand:{primary:"bg-purple-600",secondary:"bg-purple-200"}},text:{brand:"text-purple-600",body:"text-foreground-light",title:"text-foreground"},border:{brand:"border-brand-600",primary:"border-default",secondary:"border-secondary",alternative:"border-alternative"},placeholder:"placeholder-foreground-muted",focus:`
    outline-hidden
    focus:ring-current focus:ring-2
  `,"focus-visible":`
    outline-hidden
    transition-all
    outline-0
    focus-visible:outline-4
    focus-visible:outline-offset-1
  `,size:{text:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},padding:{tiny:"px-2.5 py-1",small:"px-3 py-2",medium:"px-4 py-2",large:"px-4 py-2",xlarge:"px-6 py-3"}},overlay:{base:"absolute inset-0 bg-background opacity-50",container:"fixed inset-0 transition-opacity"}},a={tiny:`${r.size.text.tiny} ${r.size.padding.tiny}`,small:`${r.size.text.small} ${r.size.padding.small}`,medium:`${r.size.text.medium} ${r.size.padding.medium}`,large:`${r.size.text.large} ${r.size.padding.large}`,xlarge:`${r.size.text.xlarge} ${r.size.padding.xlarge}`},o={card:{base:`
      bg-surface-100

      border
      ${r.border.primary}

      flex flex-col
      rounded-md shadow-lg overflow-hidden relative
    `,hoverable:"transition hover:-translate-y-1 hover:shadow-2xl",head:`px-8 py-6 flex justify-between
    border-b
      ${r.border.primary} `,content:"p-8"},tabs:{base:"w-full justify-between space-y-4",underlined:{list:`
        flex items-center border-b
        ${r.border.secondary}
        `,base:`
        relative
        cursor-pointer
        text-foreground-lighter
        flex
        items-center
        space-x-2
        text-center
        transition
        focus:outline-hidden
        focus-visible:ring-3
        focus-visible:ring-foreground-muted
        focus-visible:border-foreground-muted
      `,inactive:`
        hover:text-foreground
      `,active:`
        !text-foreground
        border-b-2 border-foreground
      `},pills:{list:"flex space-x-1",base:`
        relative
        cursor-pointer
        flex
        items-center
        space-x-2
        text-center
        transition
        shadow-xs
        rounded-sm
        border
        focus:outline-hidden
        focus-visible:ring-3
        focus-visible:ring-foreground-muted
        focus-visible:border-foreground-muted
        `,inactive:`
        bg-background
        border-strong hover:border-foreground-muted
        text-foreground-muted hover:text-foreground
      `,active:`
        bg-selection
        text-foreground
        border-stronger
      `},"rounded-pills":{list:"flex flex-wrap gap-2",base:`
        relative
        cursor-pointer
        flex
        items-center
        space-x-2
        text-center
        transition
        shadow-xs
        rounded-full
        focus:outline-hidden
        focus-visible:ring-3
        focus-visible:ring-foreground-muted
        focus-visible:border-foreground-muted
        `,inactive:`
        bg-surface-200 hover:bg-surface-300
        hover:border-foreground-lighter
        text-foreground-lighter hover:text-foreground
      `,active:`
        bg-foreground
        text-background
        border-foreground
      `},block:"w-full flex items-center justify-center",size:{...a},scrollable:"overflow-auto whitespace-nowrap no-scrollbar mask-fadeout-right",wrappable:"flex-wrap",content:"focus:outline-hidden transition-height"},input:{base:`
      block
      box-border
      w-full
      rounded-md
      shadow-xs
      transition-all
      text-foreground
      border
      focus-visible:shadow-md
      ${r.focus}
      focus-visible:border-foreground-muted
      focus-visible:ring-background-control
      ${r.placeholder}
      group
    `,variants:{standard:`
        bg-foreground/[.026]
        border border-control
        `,error:`
        bg-destructive-200
        border border-destructive-500
        focus:ring-destructive-400
        placeholder:text-destructive-400
       `},container:"relative",with_icon:{tiny:"pl-7",small:"pl-8",medium:"pl-8",large:"pl-10",xlarge:"pl-11"},size:{...a},disabled:"opacity-50",actions_container:"absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",textarea_actions_container:"absolute inset-y-1.5 right-0 pl-3 pr-1 flex space-x-1 items-start",textarea_actions_container_items:"flex items-center"},sidepanel:{base:`
      z-50
      bg-dash-sidebar
      flex flex-col
      fixed
      inset-y-0
      h-full lg:h-screen
      border-l
      shadow-xl
    `,header:`
      flex items-center
      space-y-1 py-4 px-4 bg-dash-sidebar sm:px-6
      border-b h-(--header-height)
    `,contents:`
      relative
      flex-1
      overflow-y-auto
    `,content:`
      px-4 sm:px-6
    `,footer:`
      flex justify-end gap-2
      p-4 bg-overlay
      border-t
    `,size:{medium:"w-screen max-w-md h-full",large:"w-screen max-w-2xl h-full",xlarge:"w-screen max-w-3xl h-full",xxlarge:"w-screen max-w-4xl h-full",xxxlarge:"w-screen max-w-5xl h-full",xxxxlarge:"w-screen max-w-6xl h-full"},align:{left:`
        left-0
        data-open:animate-panel-slide-left-out
        data-closed:animate-panel-slide-left-in
      `,right:`
        right-0
        data-open:animate-panel-slide-right-out
        data-closed:animate-panel-slide-right-in
      `},separator:`
      w-full
      h-px
      my-2
      bg-border
    `,overlay:`
      z-50
      fixed
      bg-alternative
      h-full w-full
      left-0
      top-0
      opacity-75
      data-closed:animate-fade-out-overlay-bg
      data-open:animate-fade-in-overlay-bg
    `,trigger:`
      border-none bg-transparent p-0 focus:ring-0
    `},form_layout:{container:"grid gap-2",flex:{left:{base:"flex flex-row gap-6",content:"",labels:"order-2",data_input:"order-1"},right:{base:"flex flex-row gap-6 justify-between",content:"order-last",labels:"",data_input:"text-right"}},responsive:"md:grid md:grid-cols-12",non_responsive:"grid grid-cols-12 gap-2",labels_horizontal_layout:"flex flex-row space-x-2 justify-between col-span-12",labels_vertical_layout:"flex flex-col space-y-2 col-span-4",data_input_horizontal_layout:"col-span-12",non_box_data_input_spacing_vertical:"my-3",non_box_data_input_spacing_horizontal:"my-3 md:mt-0 mb-3",data_input_vertical_layout:"col-span-8",data_input_vertical_layout__align_right:"text-right",label:{base:"block text-foreground-light",size:{...r.size.text}},label_optional:{base:"text-foreground-lighter",size:{...r.size.text}},description:{base:"mt-2 text-foreground-lighter leading-normal",size:{...r.size.text}},label_before:{base:"text-foreground-lighter ",size:{...r.size.text}},label_after:{base:"text-foreground-lighter",size:{...r.size.text}},error:{base:`
        text-red-900
        transition-all
        data-show:mt-2
        data-show:animate-slide-down-normal
        data-hide:animate-slide-up-normal
      `,size:{...r.size.text}},size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"}},menu:{item:{base:`
        cursor-pointer
        flex space-x-3 items-center
        outline-hidden
        focus-visible:ring-1 ring-foreground-muted focus-visible:z-10
        group
      `,content:{base:"transition truncate text-sm w-full",normal:"text-foreground-light group-hover:text-foreground",active:"text-foreground font-semibold"},icon:{base:"transition truncate text-sm",normal:"text-foreground-lighter group-hover:text-foreground-light",active:"text-foreground"},variants:{text:{base:`
            py-1
          `,normal:`
            font-normal
            border-default
            group-hover:border-foreground-muted`,active:`
            font-semibold
            text-foreground-muted
            z-10
          `},border:{base:`
            px-4 py-1
          `,normal:`
            border-l
            font-normal
            border-default
            group-hover:border-foreground-muted`,active:`
            font-semibold

            text-foreground-muted
            z-10

            border-l
            border-brand
            group-hover:border-brand
          `,rounded:"rounded-md"},pills:{base:"my-px px-3 py-[3px] rounded-md transition-colors active:bg-sidebar-accent/50",normal:`
            font-normal
            border-default
            hover:bg-sidebar-accent/50
            group-hover:border-foreground-muted`,active:`
            font-semibold
            bg-sidebar-accent
            text-foreground-lighter
            z-10 rounded-md
          `}}},group:{base:`
        flex space-x-3
        mb-2
        font-normal
      `,icon:"text-foreground-lighter",content:"text-sm text-foreground-lighter w-full",variants:{text:"",pills:"px-3",border:""}}},modal:{base:`
      relative
      bg-dash-sidebar
      my-4 max-w-screen
      border border-overlay
      rounded-md
      shadow-xl
      data-open:animate-overlay-show
      data-closed:animate-overlay-hide

    `,header:`
      bg-surface-200
      space-y-1 py-3 px-4 sm:px-5
      border-b border-overlay
      flex items-center justify-between
    `,footer:`
      flex justify-end gap-2
      py-3 px-5
      border-t border-overlay
    `,size:{tiny:"sm:align-middle sm:w-full sm:max-w-xs",small:"sm:align-middle sm:w-full sm:max-w-sm",medium:"sm:align-middle sm:w-full sm:max-w-lg",large:"sm:align-middle sm:w-full md:max-w-xl",xlarge:"sm:align-middle sm:w-full md:max-w-3xl",xxlarge:"sm:align-middle sm:w-full max-w-screen md:max-w-6xl",xxxlarge:"sm:align-middle sm:w-full md:max-w-7xl"},overlay:`
      z-40
      fixed
      bg-alternative
      h-full w-full
      left-0
      top-0
      opacity-75
      data-closed:animate-fade-out-overlay-bg
      data-open:animate-fade-in-overlay-bg
    `,scroll_overlay:`
      z-40
      fixed
      inset-0
      grid
      place-items-center
      overflow-y-auto
      data-open:animate-overlay-show data-closed:animate-overlay-hide
    `,separator:`
      w-full
      h-px
      my-2
      bg-border-overlay
    `,content:"px-5"},listbox:{base:`
      block
      box-border
      w-full
      rounded-md
      shadow-xs
      text-foreground
      border
      focus-visible:shadow-md
      ${r.focus}
      focus-visible:border-foreground-muted
      focus-visible:ring-background-control
      ${r.placeholder}
      indent-px
      transition-all
      bg-none
    `,container:"relative",label:"truncate",variants:{standard:`
        bg-control
        border border-control

        aria-expanded:border-foreground-muted
        aria-expanded:ring-border-muted
        aria-expanded:ring-2
        `,error:`
        bg-destructive-200
        border border-destructive-500
        focus:ring-destructive-400
        placeholder:text-destructive-400
       `},options_container_animate:`
      transition
      data-open:animate-slide-down
      data-open:opacity-1
      data-closed:animate-slide-up
      data-closed:opacity-0
    `,options_container:`
      bg-overlay
      shadow-lg
      border border-solid
      border-overlay max-h-60
      rounded-md py-1 text-base
      sm:text-sm z-10 overflow-hidden overflow-y-scroll

      origin-dropdown
      data-open:animate-dropdown-content-show
      data-closed:animate-dropdown-content-hide
    `,with_icon:"pl-2",addOnBefore:`
      w-full flex flex-row items-center space-x-3
    `,size:{...a},disabled:"opacity-50",actions_container:"absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",chevron_container:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",chevron:"h-5 w-5 text-foreground-muted",option:`
      w-listbox
      transition cursor-pointer select-none relative py-2 pl-3 pr-9
      text-foreground-light
      text-sm
      hover:bg-border-overlay
      focus:bg-border-overlay
      focus:text-foreground
      border-none
      focus:outline-hidden
    `,option_active:"text-foreground bg-selection",option_disabled:"cursor-not-allowed opacity-60",option_inner:"flex items-center space-x-3",option_check:"absolute inset-y-0 right-0 flex items-center pr-3 text-brand",option_check_active:"text-brand",option_check_icon:"h-5 w-5"},inputErrorIcon:{base:`
      flex items-center
      right-3 pr-2 pl-2
      inset-y-0
      pointer-events-none
      text-red-900
    `},inputIconContainer:{base:`
    absolute inset-y-0
    left-0 pl-2 flex
    items-center pointer-events-none
    text-foreground-light
    [&_svg]:stroke-[1.5]
    `,size:{tiny:"[&_svg]:h-[14px] [&_svg]:w-[14px]",small:"[&_svg]:h-[18px] [&_svg]:w-[18px]",medium:"[&_svg]:h-[20px] [&_svg]:w-[20px]",large:"[&_svg]:h-[20px] [&_svg]:w-[20px] pl-3",xlarge:"[&_svg]:h-[24px] [&_svg]:w-[24px] pl-3",xxlarge:"[&_svg]:h-[30px] [&_svg]:w-[30px] pl-3",xxxlarge:"[&_svg]:h-[42px] [&_svg]:w-[42px] pl-3"}},icon:{container:"shrink-0 flex items-center justify-center rounded-full p-3"},loading:{base:"relative",content:{base:"transition-opacity duration-300",active:"opacity-40"},spinner:`
      absolute
      text-foreground-lighter animate-spin
      inset-0
      size-5
      m-auto
    `}},s=(0,t.createContext)({theme:o});e.s(["default",0,function(e){let{theme:{[e]:r}}=(0,t.useContext)(s);return JSON.parse(r=JSON.stringify(r).replace(/\\n/g,"").replace(/\s\s+/g," "))}],938933)},95053,e=>{"use strict";var t=e.i(221628),r=e.i(766181),a=e.i(416340),o=e.i(843778),s=e.i(20482),i=e.i(737018),l=e.i(282410);let n=(0,r.cva)("relative grid gap-10",{variants:{size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},align:{left:"",right:""},responsive:{true:"",false:""},layout:{horizontal:"flex flex-col gap-2 md:grid md:grid-cols-12",vertical:"flex flex-col gap-2",flex:"flex flex-row gap-3","flex-row-reverse":"flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between"},flex:{true:"",false:""}},compoundVariants:[{layout:"flex",align:"right",className:"justify-between"},{layout:"flex-row-reverse",align:"right",className:"justify-between"}],defaultVariants:{}}),d=(0,r.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"flex flex-col gap-2 col-span-4",vertical:"flex flex-row gap-2 justify-between",flex:"flex flex-col gap-0 min-w-0","flex-row-reverse":"flex flex-col min-w-0 grow"},labelLayout:{horizontal:"",vertical:"","":""}},compoundVariants:[{flex:!0,align:"left",className:"order-2"},{flex:!0,align:"right",className:"order-1"},{layout:["vertical","flex"],labelLayout:void 0,flex:!1,className:"flex flex-row gap-2 justify-between"},{layout:"horizontal",className:"flex flex-col gap-2"}],defaultVariants:{}}),u=(0,r.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"order-1",right:"order-2"},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:"order-1"},{flex:!0,align:"right",className:"order-2"},{layout:["vertical","flex"],className:"col-span-12"},{layout:"horizontal",align:"left",className:"col-span-8"},{layout:"horizontal",align:"right",className:"text-right"}],defaultVariants:{}}),c=(0,r.cva)("text-foreground-lighter leading-normal",{variants:{size:{...l.SIZE.text},layout:{vertical:"mt-2",horizontal:"mt-2",flex:"","flex-row-reverse":""}},defaultVariants:{}}),f=(0,r.cva)("text-foreground-muted",{variants:{size:{...l.SIZE.text}},defaultVariants:{}}),m=(0,r.cva)("text-foreground-muted",{variants:{size:{...l.SIZE.text}},defaultVariants:{}}),g=(0,r.cva)("text-foreground-muted",{variants:{size:{...l.SIZE.text}},defaultVariants:{}}),p=(0,r.cva)("",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:""},{flex:!0,align:"right",className:"order-last"},{layout:"flex-row-reverse",className:"flex flex-col justify-center items-start md:items-end shrink-0 md:w-1/2 xl:w-2/5 [&>div]:md:w-full"}]}),x=(0,r.cva)("",{variants:{nonBoxInput:{true:"",false:""},label:{true:"",false:""},layout:{vertical:"",horizontal:"","flex-row-reverse":""}},compoundVariants:[{nonBoxInput:!0,label:!0,layout:"vertical",className:"my-3"},{nonBoxInput:!0,label:!0,layout:"horizontal",className:"my-3 md:mt-0 mb-3"}],defaultVariants:{}}),b=a.default.forwardRef(({align:e="left",className:r,description:a,id:l,label:b,labelOptional:v,layout:h="vertical",style:y,labelLayout:w,size:_="medium",beforeLabel:E,afterLabel:S,nonBoxInput:j=!b,hideMessage:k=!1,isReactForm:N,error:I,...P},O)=>{let L="flex"===h||"flex-row-reverse"===h,A=!!(b||E||S),D=N&&!k?(0,t.jsx)(s.FormMessage,{className:(0,o.cn)("mt-2 transition-all duration-300 ease-in-out","flex-row-reverse"===h&&"mt-0"),"data-formlayout-id":"message"}):I&&!k?(0,t.jsx)("p",{className:(0,o.cn)("mt-2 text-sm text-destructive","flex-row-reverse"===h&&"mt-0"),children:I}):null,z=a&&N?(0,t.jsx)(s.FormDescription,{className:(0,o.cn)(c({size:_,layout:h})),"data-formlayout-id":"description",id:`${l}-description`,children:a}):a?(0,t.jsx)("p",{className:(0,o.cn)(c({size:_,layout:h}),"text-sm text-foreground-light"),"data-formlayout-id":"description",children:a}):null,R=()=>(0,t.jsxs)(t.Fragment,{children:[E&&(0,t.jsx)("span",{className:(0,o.cn)(f({size:_})),id:l+"-before","data-formlayout-id":"beforeLabel",children:(0,t.jsx)("span",{children:E})}),(0,t.jsx)("span",{children:b}),S&&(0,t.jsx)("span",{className:(0,o.cn)(m({size:_})),id:l+"-after","data-formlayout-id":"afterLabel",children:S})]});return(0,t.jsxs)("div",{ref:O,...P,className:(0,o.cn)(n({size:_,flex:L,align:e,layout:h}),r),children:[L&&(0,t.jsxs)("div",{className:(0,o.cn)(p({flex:L,align:e,layout:h})),children:[P.children,"flex-row-reverse"===h&&D]}),A||v||"horizontal"===h?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:(0,o.cn)(d({align:e,labelLayout:w,flex:L,layout:h})),"data-formlayout-id":"labelContainer",children:[A&&N?(0,t.jsx)(s.FormLabel,{className:"text-foreground flex gap-2 items-center wrap-break-word","data-formlayout-id":"formLabel",htmlFor:P.name||l,children:(0,t.jsx)(R,{})}):(0,t.jsx)(i.Label,{className:"text-foreground flex gap-2 items-center wrap-break-word leading-normal","data-formlayout-id":"label",htmlFor:P.name||l,children:(0,t.jsx)(R,{})}),v&&(0,t.jsx)("span",{className:(0,o.cn)(g({size:_})),id:l+"-optional","data-formlayout-id":"labelOptional",children:v}),L&&(0,t.jsxs)(t.Fragment,{children:[z,"flex-row-reverse"!==h&&D]})]})}):null,!L&&(0,t.jsx)("div",{className:(0,o.cn)(u({align:e,layout:h})),style:y,"data-formlayout-id":"dataContainer",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:(0,o.cn)(x({nonBoxInput:j,label:b,layout:h})),"data-formlayout-id":"nonBoxInputContainer",children:P.children}),D,z]})})]})});e.s(["FormLayout",0,b])},538482,e=>{"use strict";var t=e.i(221628),r=e.i(416340),a=e.i(20482),o=e.i(95053);let s=(0,r.forwardRef)(({...e},r)=>(0,t.jsx)(a.FormItem,{children:(0,t.jsx)(o.FormLayout,{ref:r,isReactForm:!0,...e,children:e.children})}));s.displayName="FormItemLayout",e.s(["FormItemLayout",0,s])},344580,e=>{"use strict";var t=e.i(67318),r=function(e,r,a){if(e&&"reportValidity"in e){var o=(0,t.get)(a,r);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},a=function(e,t){var a=function(a){var o=t.fields[a];o&&o.ref&&"reportValidity"in o.ref?r(o.ref,a,e):o.refs&&o.refs.forEach(function(t){return r(t,a,e)})};for(var o in t.fields)a(o)},o=function(e,r){r.shouldUseNativeValidation&&a(e,r);var o={};for(var l in e){var n=(0,t.get)(r.fields,l),d=Object.assign(e[l]||{},{ref:n&&n.ref});if(i(r.names||Object.keys(e),l)){var u=Object.assign({},s((0,t.get)(o,l)));(0,t.set)(u,"root",d),(0,t.set)(o,l,u)}else(0,t.set)(o,l,d)}return o},s=function(e){return Array.isArray(e)?e.filter(Boolean):[]},i=function(e,t){return e.some(function(e){return e.startsWith(t+".")})},l=function(e,r){for(var a={};e.length;){var o=e[0],s=o.code,i=o.message,l=o.path.join(".");if(!a[l])if("unionErrors"in o){var n=o.unionErrors[0].errors[0];a[l]={message:n.message,type:n.code}}else a[l]={message:i,type:s};if("unionErrors"in o&&o.unionErrors.forEach(function(t){return t.errors.forEach(function(t){return e.push(t)})}),r){var d=a[l].types,u=d&&d[o.code];a[l]=(0,t.appendErrors)(l,r,a,s,u?[].concat(u,o.message):o.message)}e.shift()}return a};e.s(["zodResolver",0,function(e,t,r){return void 0===r&&(r={}),function(s,i,n){try{return Promise.resolve(function(o){try{var i=Promise.resolve(e["sync"===r.mode?"parse":"parseAsync"](s,t)).then(function(e){return n.shouldUseNativeValidation&&a({},n),{errors:{},values:r.raw?s:e}})}catch(e){return o(e)}return i&&i.then?i.then(void 0,o):i}(function(e){if(null!=e.errors)return{values:{},errors:o(l(e.errors,!n.shouldUseNativeValidation&&"all"===n.criteriaMode),n)};throw e}))}catch(e){return Promise.reject(e)}}}],344580)},478372,602795,e=>{"use strict";let t=(0,e.i(679709).default)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["default",0,t],602795),e.s(["X",0,t],478372)},606479,e=>{"use strict";var t=e.i(546904);e.s(["Dialog",0,t])},253214,e=>{"use strict";var t=e.i(221628),r=e.i(766181),a=e.i(478372),o=e.i(606479),s=e.i(416340),i=e.i(843778);let l="py-4",n="px-4 md:px-5",d="py-6",u="px-4 md:px-7",c=(0,r.cva)("",{variants:{padding:{medium:`${d} ${u}`,small:`${l} ${n}`}},defaultVariants:{padding:"small"}}),f=o.Dialog.Root,m=o.Dialog.Trigger,g=e=>(0,t.jsx)(o.Dialog.Portal,{...e});g.displayName=o.Dialog.Portal.displayName;let p=s.forwardRef(({className:e,centered:r=!0,...a},s)=>(0,t.jsx)(o.Dialog.Overlay,{ref:s,className:(0,i.cn)("bg-black/40 backdrop-blur-xs","z-50 fixed inset-0 grid place-items-center overflow-y-auto data-closed:animate-overlay-hide py-8",!r&&"flex flex-col flex-start pb-8 sm:pt-12 md:pt-20 lg:pt-32 xl:pt-40 px-5",e),...a}));p.displayName=o.Dialog.Overlay.displayName;let x=(0,r.cva)((0,i.cn)("relative z-50 w-full max-w-screen border shadow-md dark:shadow-xs","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[state=closed]:slide-out-to-left-[0%] data-[state=closed]:slide-out-to-top-[0%]","data-[state=open]:slide-in-from-left-[0%] data-[state=open]:slide-in-from-top-[0%]","sm:rounded-lg md:w-full","bg-dash-sidebar"),{variants:{size:{tiny:"sm:align-middle sm:w-full sm:max-w-xs",small:"sm:align-middle sm:w-full sm:max-w-sm",medium:"sm:align-middle sm:w-full sm:max-w-lg",large:"sm:align-middle sm:w-full md:max-w-xl",xlarge:"sm:align-middle sm:w-full md:max-w-3xl",xxlarge:"sm:align-middle sm:w-full md:max-w-6xl",xxxlarge:"sm:align-middle sm:w-full md:max-w-7xl"}},defaultVariants:{size:"medium"}}),b=s.forwardRef(({className:e,children:r,size:s,hideClose:l,dialogOverlayProps:n,centered:d=!0,...u},c)=>(0,t.jsx)(g,{children:(0,t.jsx)(p,{centered:d,...n,children:(0,t.jsxs)(o.Dialog.Content,{ref:c,className:(0,i.cn)(x({size:s}),e),...u,children:[r,!l&&(0,t.jsxs)(o.Dialog.Close,{className:(0,i.cn)("absolute p-0.5 right-3.5 top-3.5 rounded-xs opacity-20 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-foreground-muted","hit-area-6"),children:[(0,t.jsx)(a.X,{size:16}),(0,t.jsx)("span",{className:"sr-only",children:"Close"})]})]})})}));b.displayName=o.Dialog.Content.displayName;let v=s.forwardRef(({className:e,padding:r,...a},o)=>(0,t.jsx)("div",{ref:o,...a,className:(0,i.cn)("flex flex-col gap-1.5 text-center sm:text-left",c({padding:r}),e)}));v.displayName="DialogHeader";let h=s.forwardRef(({className:e,children:r,padding:a,...o},s)=>(0,t.jsx)("div",{ref:s,className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2","border-t",c({padding:a}),e),...o,children:r}));h.displayName="DialogFooter";let y=s.forwardRef(({className:e,...r},a)=>(0,t.jsx)(o.Dialog.Title,{ref:a,className:(0,i.cn)("text-base leading-none font-normal max-w-[calc(100%-1rem)]",e),...r}));y.displayName=o.Dialog.Title.displayName;let w=s.forwardRef(({className:e,...r},a)=>(0,t.jsx)(o.Dialog.Description,{ref:a,className:(0,i.cn)("text-sm text-foreground-lighter",e),...r}));w.displayName=o.Dialog.Description.displayName;let _=s.forwardRef(({className:e,children:r,...a},s)=>(0,t.jsx)(o.Dialog.Close,{ref:s,className:(0,i.cn)("opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-foreground-muted",e),...a,children:r}));_.displayName=o.Dialog.Close.displayName;let E=s.forwardRef(({className:e,children:r,padding:a,...o},s)=>(0,t.jsx)("div",{ref:s,...o,className:(0,i.cn)(c({padding:a}),"overflow-hidden",e),children:r}));E.displayName="DialogSection";let S=s.forwardRef(({className:e,children:r,...a},o)=>(0,t.jsx)("div",{ref:o,...a,className:(0,i.cn)("w-full h-px bg-border",e)}));S.displayName="DialogSectionSeparator",e.s(["DIALOG_PADDING_X",0,u,"DIALOG_PADDING_X_SMALL",0,n,"DIALOG_PADDING_Y",0,d,"DIALOG_PADDING_Y_SMALL",0,l,"Dialog",0,f,"DialogClose",0,_,"DialogContent",0,b,"DialogDescription",0,w,"DialogFooter",0,h,"DialogHeader",0,v,"DialogSection",0,E,"DialogSectionSeparator",0,S,"DialogTitle",0,y,"DialogTrigger",0,m])},4517,e=>{"use strict";var t=e.i(201844);function r(e,{pages:t,pageParams:a}){let o=t.length-1;return t.length>0?e.getNextPageParam(t[o],t,a[o],a):void 0}function a(e,{pages:t,pageParams:r}){return t.length>0?e.getPreviousPageParam?.(t[0],t,r[0],r):void 0}e.s(["hasNextPage",0,function(e,t){return!!t&&null!=r(e,t)},"hasPreviousPage",0,function(e,t){return!!t&&!!e.getPreviousPageParam&&null!=a(e,t)},"infiniteQueryBehavior",0,function(e){return{onFetch:(o,s)=>{let i=o.options,l=o.fetchOptions?.meta?.fetchMore?.direction,n=o.state.data?.pages||[],d=o.state.data?.pageParams||[],u={pages:[],pageParams:[]},c=0,f=async()=>{let s=!1,f=(0,t.ensureQueryFn)(o.options,o.fetchOptions),m=async(e,r,a)=>{let i;if(s)return Promise.reject();if(null==r&&e.pages.length)return Promise.resolve(e);let l=(Object.defineProperty(i={client:o.client,queryKey:o.queryKey,pageParam:r,direction:a?"backward":"forward",meta:o.options.meta},"signal",{enumerable:!0,get:()=>(o.signal.aborted?s=!0:o.signal.addEventListener("abort",()=>{s=!0}),o.signal)}),i),n=await f(l),{maxPages:d}=o.options,u=a?t.addToStart:t.addToEnd;return{pages:u(e.pages,n,d),pageParams:u(e.pageParams,r,d)}};if(l&&n.length){let e="backward"===l,t={pages:n,pageParams:d},o=(e?a:r)(i,t);u=await m(t,o,e)}else{let t=e??n.length;do{let e=0===c?d[0]??i.initialPageParam:r(i,u);if(c>0&&null==e)break;u=await m(u,e),c++}while(c<t)}return u};o.options.persister?o.fetchFn=()=>o.options.persister?.(f,{client:o.client,queryKey:o.queryKey,meta:o.options.meta,signal:o.signal},s):o.fetchFn=f}}}])},169967,e=>{"use strict";let t=(0,e.i(679709).default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",0,t],169967)},937942,e=>{"use strict";var t=e.i(221628),r=e.i(561978),a=e.i(843778);let o="underline transition underline-offset-2 decoration-foreground-lighter hover:decoration-foreground text-inherit hover:text-foreground";e.s(["InlineLink",0,({href:e,className:s,children:i,title:l,...n})=>{let d=(0,a.cn)(o,s);return e.startsWith("http")?(0,t.jsx)("a",{title:l,className:d,href:e,target:"_blank",rel:"noreferrer noopener",...n,children:i}):(0,t.jsx)(r.default,{className:d,href:e,title:l,...n,children:i})},"InlineLinkClassName",0,o])},479095,e=>{"use strict";var t=e.i(221628),r=e.i(416340),a=e.i(600317),o="horizontal",s=["horizontal","vertical"],i=r.forwardRef((e,r)=>{var i;let{decorative:l,orientation:n=o,...d}=e,u=(i=n,s.includes(i))?n:o;return(0,t.jsx)(a.Primitive.div,{"data-orientation":u,...l?{role:"none"}:{"aria-orientation":"vertical"===u?u:void 0,role:"separator"},...d,ref:r})});i.displayName="Separator",e.s(["Root",0,i,"Separator",0,i],119218);var l=e.i(119218),l=l,n=e.i(843778);let d=r.forwardRef(({className:e,orientation:r="horizontal",decorative:a=!0,...o},s)=>(0,t.jsx)(l.Root,{ref:s,decorative:a,orientation:r,className:(0,n.cn)("shrink-0 bg-border-muted","horizontal"===r?"h-px w-full":"h-full w-px",e),...o}));d.displayName=l.Root.displayName,e.s(["Separator",0,d],479095)},108892,348682,e=>{"use strict";var t=e.i(125356);let r={list:(e,t)=>["projects",e,"api-keys",t].filter(Boolean),single:(e,t)=>["projects",e,"api-keys",t],status:e=>["projects",e,"api-keys","legacy"],temporary:e=>["projects",e,"api-keys","temporary"]};e.s(["apiKeysKeys",0,r],348682);var a=e.i(234745);async function o({projectRef:e,reveal:t},r){if(!e)throw Error("projectRef is required");let{data:s,error:i}=await (0,a.get)("/v1/projects/{ref}/api-keys",{params:{path:{ref:e},query:{reveal:t}},signal:r});return i&&(0,a.handleError)(i),s}e.s(["getKeys",0,(e=[])=>{let t=e.find(e=>"anon"===e.name),r=e.find(e=>"service_role"===e.name),a=e.find(e=>"publishable"===e.type);return{anonKey:t,serviceKey:r,publishableKey:a,secretKey:e.find(e=>"secret"===e.type),allSecretKeys:e.filter(e=>"secret"===e.type)}},"useAPIKeysQuery",0,({projectRef:e,reveal:a=!1},{enabled:s=!0,...i}={})=>(0,t.useQuery)({queryKey:r.list(e,a),queryFn:({signal:t})=>o({projectRef:e,reveal:a},t),enabled:s&&void 0!==e,...i})],108892)},78162,e=>{"use strict";e.s(["configKeys",0,{settings:e=>["projects",e,"settings"],settingsV2:e=>["projects",e,"settings-v2"],api:e=>["projects",e,"settings","api"],postgrest:e=>["projects",e,"postgrest"],jwtSecretUpdatingStatus:e=>["projects",e,"jwt-secret-updating-status"],storage:e=>["projects",e,"storage"],upgradeEligibility:e=>["projects",e,"upgrade-eligibility"],upgradeStatus:e=>["projects",e,"upgrade-status"],diskAttributes:e=>["projects",e,"disk-attributes"],diskBreakdown:e=>["projects",e,"disk-breakdown"],diskUtilization:e=>["projects",e,"disk-utilization"],projectCreationPostgresVersions:(e,t,r)=>["projects",e,t,r,"available-creation-versions"],projectUnpausePostgresVersions:e=>["projects",e,"available-unpause-versions"],diskAutoscaleConfig:e=>["projects",e,"disk-autoscale-config"],deploymentMode:()=>["deployment-mode"]}])},345216,e=>{"use strict";let t=(0,e.i(679709).default)("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);e.s(["BookOpen",0,t],345216)},513826,e=>{"use strict";var t=e.i(221628),r=e.i(345216),a=e.i(837710);e.s(["DocsButton",0,({href:e,abbrev:o=!0,className:s})=>(0,t.jsx)(a.Button,{asChild:!0,type:"default",className:s,icon:(0,t.jsx)(r.BookOpen,{}),onClick:e=>e.stopPropagation(),children:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e,children:o?"Docs":"Documentation"})})])},986261,(e,t,r)=>{var a=e.r(781125);t.exports=function(e){return e&&e.length?a(e):[]}},392491,e=>{"use strict";e.i(850036);var t=e.i(957386),r=e.i(986261),a=e.i(539256),o=e.i(416340),s=e.i(635494),i=e.i(615515),l=e.i(12214),n=e.i(298625);let d=["auth","cron","etl","extensions","information_schema","net","pgsodium","pgsodium_masks","pgbouncer","pgtle","pgmq","realtime","storage","supabase_functions","supabase_migrations","vault","graphql","graphql_public",t.QUEUES_SCHEMA],u=({excludeSchemas:e=[]}={})=>{let t=(0,o.useMemo)(()=>e,[JSON.stringify(e)]),u=(()=>{let{data:e}=(0,s.useSelectedProjectQuery)(),t=(0,n.useFDWsQuery)({projectRef:e?.ref,connectionString:e?.connectionString}),a=(0,o.useMemo)(()=>i.WRAPPERS.filter(e=>e.server.options.some(e=>e.name===i.SUPABASE_TARGET_SCHEMA_OPTION.name)),[]),d=(0,o.useMemo)(()=>(t.data?.filter(e=>a.some(t=>(0,l.wrapperMetaComparator)(t,e)))??[]).map(e=>{let t=(0,l.convertKVStringArrayToJson)(e.server_options??[]).supabase_target_schema??"",a=(0,r.default)(t.split(",").filter(Boolean));return{serverName:e.server_name,type:e.handler.replace("_fdw_handler",""),schemas:a}}),[t.data,a]);return{...t,data:d}})(),c=(0,o.useMemo)(()=>{let e=d.map(e=>({name:e,type:"internal"})),r=u.data?.flatMap(e=>e.schemas.map(t=>({name:t,type:"fdw",fdwType:e.type,serverName:e.serverName})));return(0,a.default)([...e,...r],e=>e.name).filter(e=>!t.includes(e.name))},[u.data,t]);return{...u,data:c}};e.s(["INTERNAL_SCHEMAS",0,d,"useIsProtectedSchema",0,({schema:e,excludedSchemas:t=[]})=>{let{data:r}=u({excludeSchemas:t}),a=r.find(t=>t.name===e);return a?{isSchemaLocked:!0,reason:a.type,fdwType:a.fdwType}:{isSchemaLocked:!1,reason:void 0,fdwType:void 0}},"useProtectedSchemas",0,u])},67574,e=>{"use strict";let t=(0,e.i(679709).default)("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);e.s(["Book",0,t],67574)},681328,e=>{"use strict";e.s(["EMPTY_ARR",0,[],"EMPTY_OBJ",0,{},"noop",0,function(){}])},463333,208747,e=>{"use strict";var t=e.i(221628);e.i(128328);var r=e.i(657588),a=e.i(947748),o=e.i(524906),s=e.i(802715),i=e.i(294742),l=e.i(416340);let n=()=>{let e=(0,r.useFlag)("unifiedLogs"),t=(0,r.useFlag)("pgdeltaDiff"),o=(0,r.useFlag)("platformWebhooks"),s=(0,r.useFlag)("jitDbAccess");return[{key:a.LOCAL_STORAGE_KEYS.UI_PREVIEW_RLS_TESTER,name:"RLS Tester",discussionsUrl:"https://github.com/orgs/supabase/discussions/45233",enabled:!0,isNew:!0,isPlatformOnly:!1,isDefaultOptIn:!1},{key:a.LOCAL_STORAGE_KEYS.UI_PREVIEW_UNIFIED_LOGS,name:"Updated Logs interface",discussionsUrl:"https://github.com/orgs/supabase/discussions/37234",enabled:e,isNew:!0,isPlatformOnly:!0,isDefaultOptIn:!1},{key:a.LOCAL_STORAGE_KEYS.UI_PREVIEW_ADVISOR_RULES,name:"Disable Advisor rules",discussionsUrl:void 0,enabled:!0,isNew:!1,isPlatformOnly:!0,isDefaultOptIn:!1},{key:a.LOCAL_STORAGE_KEYS.UI_PREVIEW_PG_DELTA_DIFF,name:"PG Delta Diff",discussionsUrl:void 0,isNew:!1,isPlatformOnly:!0,isDefaultOptIn:!0,enabled:t},{key:a.LOCAL_STORAGE_KEYS.UI_PREVIEW_PLATFORM_WEBHOOKS,name:"Platform webhooks",discussionsUrl:void 0,isNew:!0,isPlatformOnly:!0,isDefaultOptIn:!1,enabled:o},{key:a.LOCAL_STORAGE_KEYS.UI_PREVIEW_JIT_DB_ACCESS,name:"Temporary access",discussionsUrl:void 0,isNew:!0,isPlatformOnly:!0,isDefaultOptIn:!1,enabled:s},{key:a.LOCAL_STORAGE_KEYS.UI_PREVIEW_CLS,name:"Column-level privileges",discussionsUrl:"https://github.com/orgs/supabase/discussions/20295",enabled:!0,isNew:!1,isPlatformOnly:!1,isDefaultOptIn:!1},{key:a.LOCAL_STORAGE_KEYS.UI_PREVIEW_MARKETPLACE,name:"Marketplace",discussionsUrl:void 0,enabled:!0,isNew:!0,isPlatformOnly:!1,isDefaultOptIn:!0}].sort((e,t)=>Number(t.isNew)-Number(e.isNew))};e.s(["useFeaturePreviews",0,n],208747);var d=e.i(681328);let u=(0,l.createContext)({flags:d.EMPTY_OBJ,onUpdateFlag:s.default}),c=()=>(0,l.useContext)(u);e.s(["FeaturePreviewContextProvider",0,({children:e})=>{let{hasLoaded:a}=(0,l.useContext)(r.FeatureFlagContext),s=n(),[i,d]=(0,l.useState)(()=>s.reduce((e,t)=>({...e,[t.key]:!1}),{})),c=(0,l.useEffectEvent)(()=>{d(s.reduce((e,t)=>{let r=t.isDefaultOptIn,a=o.safeLocalStorage.getItem(t.key);return{...e,[t.key]:a?"true"===a:r}},{}))});return(0,l.useEffect)(()=>{c()},[a]),(0,t.jsx)(u.Provider,{value:{flags:i,onUpdateFlag:(e,t)=>{o.safeLocalStorage.setItem(e,t?"true":"false"),d({...i,[e]:t})}},children:e})},"useFeaturePreviewContext",0,c,"useFeaturePreviewModal",0,()=>{let e=n(),[t,r]=(0,i.useQueryState)("featurePreviewModal"),a=t?.trim()??null,o=null!==a,s=a||e[0].key,d=(0,l.useCallback)(e=>{r(e)},[r]),u=(0,l.useCallback)(e=>{e?d(s):r(null)},[d,r,s]);return(0,l.useMemo)(()=>({showFeaturePreviewModal:o,selectedFeatureKey:s,selectFeaturePreview:d,toggleFeaturePreviewModal:u}),[o,s,d,u])},"useIsAdvisorRulesEnabled",0,()=>{let{flags:e}=c();return e[a.LOCAL_STORAGE_KEYS.UI_PREVIEW_ADVISOR_RULES]},"useIsColumnLevelPrivilegesEnabled",0,()=>{let{flags:e}=c();return e[a.LOCAL_STORAGE_KEYS.UI_PREVIEW_CLS]},"useIsJitDbAccessEnabled",0,()=>{let{flags:e}=c();return(0,r.useFlag)("jitDbAccess")&&e[a.LOCAL_STORAGE_KEYS.UI_PREVIEW_JIT_DB_ACCESS]},"useIsMarketplaceEnabled",0,()=>{let{flags:e}=c();return(0,r.useFlag)("marketplaceIntegrations")&&e[a.LOCAL_STORAGE_KEYS.UI_PREVIEW_MARKETPLACE]},"useIsPgDeltaDiffEnabled",0,()=>{let{flags:e}=c();return(0,r.useFlag)("pgdeltaDiff")&&e[a.LOCAL_STORAGE_KEYS.UI_PREVIEW_PG_DELTA_DIFF]},"useIsPlatformWebhooksEnabled",0,()=>{let{flags:e}=c();return(0,r.useFlag)("platformWebhooks")&&e[a.LOCAL_STORAGE_KEYS.UI_PREVIEW_PLATFORM_WEBHOOKS]},"useIsRLSTesterEnabled",0,()=>{let{flags:e}=c();return e[a.LOCAL_STORAGE_KEYS.UI_PREVIEW_RLS_TESTER]},"useUnifiedLogsPreview",0,()=>{let{flags:e,onUpdateFlag:t}=c(),{hasLoaded:o}=(0,l.useContext)(r.FeatureFlagContext),s=(0,r.useFlag)("unifiedLogs");return{isEnabled:s&&e[a.LOCAL_STORAGE_KEYS.UI_PREVIEW_UNIFIED_LOGS],isEligible:s,isLoading:!o,enable:()=>t(a.LOCAL_STORAGE_KEYS.UI_PREVIEW_UNIFIED_LOGS,!0),disable:()=>t(a.LOCAL_STORAGE_KEYS.UI_PREVIEW_UNIFIED_LOGS,!1)}}],463333)},469099,e=>{"use strict";let t=(0,e.i(679709).default)("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);e.s(["Boxes",0,t],469099)}]);

//# debugId=08829f64-c017-3a0d-48e2-66e9b7acb9f9
//# sourceMappingURL=0-da63bn55d9o.js.map