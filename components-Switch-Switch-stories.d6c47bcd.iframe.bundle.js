"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[6311],{"./src/components/Switch/Switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Switch_stories});var external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Switch_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Switch/Switch.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Switch_module.Z,options);const Switch_Switch_module=Switch_module.Z&&Switch_module.Z.locals?Switch_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Switch=(0,react.forwardRef)((({size="small",error,...restProps},ref)=>(0,jsx_runtime.jsxs)("div",{className:(0,clsx.Z)(Switch_Switch_module.container,{[Switch_Switch_module.large]:"large"===size,[Switch_Switch_module.error]:error}),children:[(0,jsx_runtime.jsx)("div",{className:Switch_Switch_module.circle}),(0,jsx_runtime.jsx)("div",{className:Switch_Switch_module.line}),(0,jsx_runtime.jsx)("div",{className:Switch_Switch_module.handle}),(0,jsx_runtime.jsx)("input",{className:Switch_Switch_module.input,type:"checkbox",role:"switch",ref,...restProps})]})));Switch.displayName="Switch";try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{size:{defaultValue:{value:"small"},description:"Sets Switch size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},error:{defaultValue:{value:"false"},description:"Applies error styling when `true`.",name:"error",required:!1,type:{name:"boolean"}},checked:{defaultValue:{value:"false"},description:"If `true`, the `Switch` will be checked.\nYou'll need to pass `onChange` to update its value (since it is now controlled)",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the `Switch` will be disabled",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"If `true`, the `Switch` input is marked as required,\nand `required` attribute will be added",name:"required",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:{value:"false"},description:"If `true`, the Switch will be initially checked.",name:"defaultChecked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"The callback invoked when the checked state of the `Switch` changes.",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},onBlur:{defaultValue:null,description:"The callback invoked when the `Switch` is blurred (loses focus)",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},onFocus:{defaultValue:null,description:"The callback invoked when the `Switch` is focused",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},name:{defaultValue:null,description:"The name of the input field in a `Switch`\n(Useful for form submission).",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The value to be used in a `Switch`.\nThis is the value that will be returned on form submission.",name:"value",required:!1,type:{name:"string | number"}},id:{defaultValue:null,description:"id assigned to input",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines the string that labels the underlying input element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Refers to the `id` of the element that labels the underlying input element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:"true"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"The tab-index property of the underlying input element.",name:"tabIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}const Switch_stories={title:"Components/Forms/Switch",component:Switch,parameters:{controls:{sort:"requiredFirst"},docs:{description:{component:"Switch allows users to turn an individual option on or off.\nChanging a switch should take immediate effect and should not require the user to click Save or Submit to apply the new state.\n\n[Figma Source File | Switch](https://www.figma.com/file/aw89OTdj5ciuZxTNS5QuRa/Autopilot-Design-System?type=design&node-id=32%3A3214)"}}},argTypes:{checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},render:function RenderSwitch(args){const[_,updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return(0,jsx_runtime.jsx)(Switch,{...args,onChange:e=>updateArgs({checked:e.target.checked})})}},Default={args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Switch/Switch.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ETEXDIdrBfr2KSxWqz0x {\n\tbox-sizing: border-box;\n\n\t& * {\n\t\tbox-sizing: border-box;\n\t}\n\n\tdisplay: inline-block;\n\tposition: relative;\n\tbackground-color: var(--lok-color-background-switch-default);\n\toverflow: hidden;\n\ttransition: background-color var(--lok-motion-speed-1) ease-in-out;\n\n\t&:focus-within {\n\t\toutline: 2px solid var(--lok-color-border-active);\n\t\toutline-color: -webkit-focus-ring-color;\n\t\toutline-offset: 1px;\n\t}\n\n\t--handle-offset: 3px;\n\t--switch-height: 24px;\n\n\t&.FoMWkAKe15nm26r6qU6N {\n\t\t--switch-height: 32px;\n\t}\n\n\t--handle-side: calc(var(--switch-height) - var(--handle-offset) * 2);\n\n\twidth: calc(var(--handle-side) * 2 + var(--handle-offset) * 2);\n\theight: var(--switch-height);\n\tborder-radius: calc(var(--switch-height) / 2);\n\n\t.cQBu0pirp9RlOhrraTte {\n\t\tbackground-color: var(--lok-color-background-switch-control-default);\n\t\tposition: absolute;\n\t\ttop: var(--handle-offset);\n\t\tleft: var(--handle-offset);\n\t\ttransition: transform 0.2s ease-in-out;\n\t\tbox-shadow: 0 0 4px 1px #78809d14;\n\t\twidth: var(--handle-side);\n\t\theight: var(--handle-side);\n\t\tborder-radius: var(--handle-side);\n\t}\n\n\t--circle-side: 10px;\n\n\t.sXwOpO6yt21fEQyeUvIQ {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\tleft: calc(var(--handle-offset) + (var(--handle-side) - var(--circle-side)) / 2);\n\t\twidth: var(--circle-side);\n\t\theight: var(--circle-side);\n\t\tborder-radius: 50%;\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tborder-color: var(--lok-color-background-switch-default);\n\t\ttransition: border-color var(--lok-motion-speed-1) ease-in-out;\n\t}\n\n\t--line-width: 2px;\n\n\t.iaj0AQq1yvDetWiw0BqV {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\tright: calc(var(--handle-offset) + (var(--handle-side) - var(--line-width)) / 2);\n\t\twidth: var(--line-width);\n\t\theight: 10px;\n\t\tborder-radius: 1px;\n\t\tbackground-color: var(--lok-color-background-switch-marker-default);\n\t\ttransition: background-color var(--lok-motion-speed-1) ease-in-out;\n\t}\n\n\t&:has(input:disabled) {\n\t\tbackground-color: var(--lok-color-background-switch-disabled);\n\n\t\t.cQBu0pirp9RlOhrraTte {\n\t\t\tbackground-color: var(--lok-color-background-switch-control-disabled);\n\t\t}\n\n\t\t.sXwOpO6yt21fEQyeUvIQ {\n\t\t\tborder-color: var(--lok-color-background-switch-marker-default);\n\t\t}\n\n\t\t.iaj0AQq1yvDetWiw0BqV {\n\t\t\tbackground-color: var(--lok-color-background-switch-marker-default);\n\t\t}\n\t}\n\n\t&:has(input:checked) {\n\t\t.cQBu0pirp9RlOhrraTte {\n\t\t\ttransform: translateX(100%);\n\t\t}\n\t}\n\n\t/* stylelint-disable-next-line no-descending-specificity -- Because of the nesting it is not possible to satisfy the linter */\n\t&:has(input:not(:disabled)) {\n\t\t&:hover {\n\t\t\t.cQBu0pirp9RlOhrraTte {\n\t\t\t\ttransform: translateX(1px);\n\t\t\t}\n\t\t}\n\n\t\t&:has(input:checked) {\n\t\t\t&:hover {\n\t\t\t\t.cQBu0pirp9RlOhrraTte {\n\t\t\t\t\ttransform: translateX(calc(100% - 1px));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t/* stylelint-disable-next-line no-descending-specificity, no-duplicate-selectors -- Because of the nesting it is not possible to satisfy the linter */\n\t\t&:has(input:checked) {\n\t\t\tbackground-color: var(--lok-color-background-switch-active);\n\n\t\t\t.sXwOpO6yt21fEQyeUvIQ {\n\t\t\t\tborder-color: var(--lok-color-background-switch-marker-active);\n\t\t\t}\n\n\t\t\t.iaj0AQq1yvDetWiw0BqV {\n\t\t\t\tbackground-color: var(--lok-color-background-switch-marker-active);\n\t\t\t}\n\t\t}\n\n\t\t/* Was not sure how to solve the specificity issue in another way. It has to be more specific than :has(input:checked). */\n\t\t&.bST2tDO_QL5obqEdFm9X.bST2tDO_QL5obqEdFm9X {\n\t\t\tbackground-color: var(--lok-color-background-switch-error);\n\n\t\t\t.sXwOpO6yt21fEQyeUvIQ {\n\t\t\t\tborder-color: var(--lok-color-background-switch-marker-error);\n\t\t\t}\n\n\t\t\t.iaj0AQq1yvDetWiw0BqV {\n\t\t\t\tbackground-color: var(--lok-color-background-switch-marker-error);\n\t\t\t}\n\t\t}\n\t}\n}\n\n.n2VqiBmHaHEPQViCb1ag {\n\tall: initial;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\tcursor: pointer;\n}\n","",{version:3,sources:["webpack://./src/components/Switch/Switch.module.css"],names:[],mappings:"AAAA;CACC,sBAAsB;;CAEtB;EACC,sBAAsB;CACvB;;CAEA,qBAAqB;CACrB,kBAAkB;CAClB,4DAA4D;CAC5D,gBAAgB;CAChB,kEAAkE;;CAElE;EACC,iDAAiD;EACjD,uCAAuC;EACvC,mBAAmB;CACpB;;CAEA,oBAAoB;CACpB,qBAAqB;;CAErB;EACC,qBAAqB;CACtB;;CAEA,oEAAoE;;CAEpE,8DAA8D;CAC9D,4BAA4B;CAC5B,6CAA6C;;CAE7C;EACC,oEAAoE;EACpE,kBAAkB;EAClB,yBAAyB;EACzB,0BAA0B;EAC1B,sCAAsC;EACtC,iCAAiC;EACjC,yBAAyB;EACzB,0BAA0B;EAC1B,iCAAiC;CAClC;;CAEA,mBAAmB;;CAEnB;EACC,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,gFAAgF;EAChF,yBAAyB;EACzB,0BAA0B;EAC1B,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,wDAAwD;EACxD,8DAA8D;CAC/D;;CAEA,iBAAiB;;CAEjB;EACC,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,gFAAgF;EAChF,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,mEAAmE;EACnE,kEAAkE;CACnE;;CAEA;EACC,6DAA6D;;EAE7D;GACC,qEAAqE;EACtE;;EAEA;GACC,+DAA+D;EAChE;;EAEA;GACC,mEAAmE;EACpE;CACD;;CAEA;EACC;GACC,2BAA2B;EAC5B;CACD;;CAEA,6HAA6H;CAC7H;EACC;GACC;IACC,0BAA0B;GAC3B;EACD;;EAEA;GACC;IACC;KACC,uCAAuC;IACxC;GACD;EACD;;EAEA,qJAAqJ;EACrJ;GACC,2DAA2D;;GAE3D;IACC,8DAA8D;GAC/D;;GAEA;IACC,kEAAkE;GACnE;EACD;;EAEA,yHAAyH;EACzH;GACC,0DAA0D;;GAE1D;IACC,6DAA6D;GAC9D;;GAEA;IACC,iEAAiE;GAClE;EACD;CACD;AACD;;AAEA;CACC,YAAY;CACZ,kBAAkB;CAClB,MAAM;CACN,OAAO;CACP,WAAW;CACX,YAAY;CACZ,UAAU;CACV,eAAe;AAChB",sourcesContent:[".container {\n\tbox-sizing: border-box;\n\n\t& * {\n\t\tbox-sizing: border-box;\n\t}\n\n\tdisplay: inline-block;\n\tposition: relative;\n\tbackground-color: var(--lok-color-background-switch-default);\n\toverflow: hidden;\n\ttransition: background-color var(--lok-motion-speed-1) ease-in-out;\n\n\t&:focus-within {\n\t\toutline: 2px solid var(--lok-color-border-active);\n\t\toutline-color: -webkit-focus-ring-color;\n\t\toutline-offset: 1px;\n\t}\n\n\t--handle-offset: 3px;\n\t--switch-height: 24px;\n\n\t&.large {\n\t\t--switch-height: 32px;\n\t}\n\n\t--handle-side: calc(var(--switch-height) - var(--handle-offset) * 2);\n\n\twidth: calc(var(--handle-side) * 2 + var(--handle-offset) * 2);\n\theight: var(--switch-height);\n\tborder-radius: calc(var(--switch-height) / 2);\n\n\t.handle {\n\t\tbackground-color: var(--lok-color-background-switch-control-default);\n\t\tposition: absolute;\n\t\ttop: var(--handle-offset);\n\t\tleft: var(--handle-offset);\n\t\ttransition: transform 0.2s ease-in-out;\n\t\tbox-shadow: 0 0 4px 1px #78809d14;\n\t\twidth: var(--handle-side);\n\t\theight: var(--handle-side);\n\t\tborder-radius: var(--handle-side);\n\t}\n\n\t--circle-side: 10px;\n\n\t.circle {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\tleft: calc(var(--handle-offset) + (var(--handle-side) - var(--circle-side)) / 2);\n\t\twidth: var(--circle-side);\n\t\theight: var(--circle-side);\n\t\tborder-radius: 50%;\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tborder-color: var(--lok-color-background-switch-default);\n\t\ttransition: border-color var(--lok-motion-speed-1) ease-in-out;\n\t}\n\n\t--line-width: 2px;\n\n\t.line {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\tright: calc(var(--handle-offset) + (var(--handle-side) - var(--line-width)) / 2);\n\t\twidth: var(--line-width);\n\t\theight: 10px;\n\t\tborder-radius: 1px;\n\t\tbackground-color: var(--lok-color-background-switch-marker-default);\n\t\ttransition: background-color var(--lok-motion-speed-1) ease-in-out;\n\t}\n\n\t&:has(input:disabled) {\n\t\tbackground-color: var(--lok-color-background-switch-disabled);\n\n\t\t.handle {\n\t\t\tbackground-color: var(--lok-color-background-switch-control-disabled);\n\t\t}\n\n\t\t.circle {\n\t\t\tborder-color: var(--lok-color-background-switch-marker-default);\n\t\t}\n\n\t\t.line {\n\t\t\tbackground-color: var(--lok-color-background-switch-marker-default);\n\t\t}\n\t}\n\n\t&:has(input:checked) {\n\t\t.handle {\n\t\t\ttransform: translateX(100%);\n\t\t}\n\t}\n\n\t/* stylelint-disable-next-line no-descending-specificity -- Because of the nesting it is not possible to satisfy the linter */\n\t&:has(input:not(:disabled)) {\n\t\t&:hover {\n\t\t\t.handle {\n\t\t\t\ttransform: translateX(1px);\n\t\t\t}\n\t\t}\n\n\t\t&:has(input:checked) {\n\t\t\t&:hover {\n\t\t\t\t.handle {\n\t\t\t\t\ttransform: translateX(calc(100% - 1px));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t/* stylelint-disable-next-line no-descending-specificity, no-duplicate-selectors -- Because of the nesting it is not possible to satisfy the linter */\n\t\t&:has(input:checked) {\n\t\t\tbackground-color: var(--lok-color-background-switch-active);\n\n\t\t\t.circle {\n\t\t\t\tborder-color: var(--lok-color-background-switch-marker-active);\n\t\t\t}\n\n\t\t\t.line {\n\t\t\t\tbackground-color: var(--lok-color-background-switch-marker-active);\n\t\t\t}\n\t\t}\n\n\t\t/* Was not sure how to solve the specificity issue in another way. It has to be more specific than :has(input:checked). */\n\t\t&.error.error {\n\t\t\tbackground-color: var(--lok-color-background-switch-error);\n\n\t\t\t.circle {\n\t\t\t\tborder-color: var(--lok-color-background-switch-marker-error);\n\t\t\t}\n\n\t\t\t.line {\n\t\t\t\tbackground-color: var(--lok-color-background-switch-marker-error);\n\t\t\t}\n\t\t}\n\t}\n}\n\n.input {\n\tall: initial;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\tcursor: pointer;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"ETEXDIdrBfr2KSxWqz0x",large:"FoMWkAKe15nm26r6qU6N",handle:"cQBu0pirp9RlOhrraTte",circle:"sXwOpO6yt21fEQyeUvIQ",line:"iaj0AQq1yvDetWiw0BqV",error:"bST2tDO_QL5obqEdFm9X",input:"n2VqiBmHaHEPQViCb1ag"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);