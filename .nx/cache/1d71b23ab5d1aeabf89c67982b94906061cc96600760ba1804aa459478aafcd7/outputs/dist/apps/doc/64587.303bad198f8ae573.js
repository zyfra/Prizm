"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[64587],{64587:(x,y,a)=>{a.r(y),a.d(y,{InputMultiSelectModule:()=>ft});var c=a(36895),s=a(27677),_=a(34793),p=a(97582),r=a(90433),m=a(78087),t=a(94650),C=a(67959),f=a(82307),M=a(40343),V=a(79274),S=a(84319),z=a(71527),v=a(90133),N=a(80840),E=a(82415),d=a(17401),h=a(67006),T=a(58354);function D(e,l){if(1&e&&(t.TgZ(0,"div",6),t._UZ(1,"prizm-icon",7),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(3),t.Oqu(o.stringify)}}function Z(e,l){1&e&&t._uU(0," \u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435 ")}function w(e,l){if(1&e&&(t.YNc(0,D,4,1,"div",4),t.YNc(1,Z,1,0,"ng-template",null,5,t.W1O)),2&e){const o=l.$implicit,i=t.MAs(2);t.Q6J("ngIf",-1!==o.obj.id)("ngIfElse",i)}}let b=(()=>{class e{constructor(){this.items=[{id:1,name:"\u0420\u043e\u0441\u0441\u0438\u044f"},{id:2,name:"\u0421\u0428\u0410"},{id:3,name:"\u041e\u0410\u042d"}],this.valueControl=new r.p4([3]),this.searchMatcher=(o,i)=>i?.name.toLowerCase().includes(o.toLowerCase()),this.transformer=o=>o?.id,this.identityMatcher=(o,i)=>o===i,this.stringify=o=>o.obj?.name}setDefaultValue(){this.valueControl.setValue([this.items[0].id])}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["prizm-input-multi-select-with-transformer-example"]],decls:17,vars:14,consts:[["label","Validators"],[3,"items","valueTemplate","formControl","searchMatcher","transformer","identityMatcher","stringify","searchable"],[3,"click"],["valueTemplate",""],["class","item",4,"ngIf","ngIfElse"],["allTemplate",""],[1,"item"],["iconClass","account-done"]],template:function(o,i){if(1&o&&(t.TgZ(0,"prizm-input-layout",0),t._UZ(1,"prizm-input-multi-select",1),t.qZA(),t._UZ(2,"br")(3,"br"),t.TgZ(4,"div")(5,"button",2),t.NdJ("click",function(){return i.setDefaultValue()}),t._uU(6," Set default value: "),t.TgZ(7,"b"),t._uU(8),t.ALo(9,"json"),t.qZA()()(),t._UZ(10,"br")(11,"br"),t.TgZ(12,"div"),t._uU(13),t.ALo(14,"json"),t.qZA(),t.YNc(15,w,3,2,"ng-template",null,3,t.W1O)),2&o){const n=t.MAs(16);t.xp6(1),t.Q6J("items",i.items)("valueTemplate",n)("formControl",i.valueControl)("searchMatcher",i.searchMatcher)("transformer",i.transformer)("identityMatcher",i.identityMatcher)("stringify",i.stringify)("searchable",!0),t.xp6(7),t.Oqu(t.lcZ(9,10,i.items[0].name)),t.xp6(5),t.hij("Current value: ",t.lcZ(14,12,i.valueControl.value),"")}},dependencies:[c.O5,r.JJ,r.oH,d.N,h.C,T.b,c.Ts],styles:[".item[_ngcontent-%COMP%]{display:flex;gap:.5rem}"]}),e})();var I=a(78580);let H=(()=>{class e{constructor(){this.valueControl=new r.p4([],[r.kI.required]),this.items=["One","Two","Three","Very long text with a lot of characters and spaces and other stuff and things"]}setDefaultValue(){this.valueControl.setValue(null)}setRequiredValidator(){this.valueControl.setValidators([r.kI.required])}clearValidator(){this.valueControl.setValidators([])}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["prizm-multi-select-validators-example"]],decls:15,vars:3,consts:[["label","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"],[3,"formControl","items"],[2,"display","flex","flex-flow","column","gap","1rem","width","20rem"],["prizmButton","",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"prizm-input-layout",0),t._UZ(1,"prizm-input-multi-select",1),t.qZA(),t._UZ(2,"br")(3,"br"),t.TgZ(4,"div",2)(5,"button",3),t.NdJ("click",function(){return i.setDefaultValue()}),t._uU(6,"Clear value"),t.qZA(),t.TgZ(7,"button",3),t.NdJ("click",function(){return i.clearValidator()}),t._uU(8,"Clear Validator"),t.qZA(),t.TgZ(9,"button",3),t.NdJ("click",function(){return i.setRequiredValidator()}),t._uU(10,"Set Required Validator"),t.qZA()(),t._UZ(11,"br")(12,"br"),t.TgZ(13,"div"),t._uU(14),t.qZA()),2&o&&(t.xp6(1),t.Q6J("formControl",i.valueControl)("items",i.items),t.xp6(13),t.hij("Current value: ",i.valueControl.value,""))},dependencies:[r.JJ,r.oH,I.K,d.N,h.C],styles:[".box[_ngcontent-%COMP%]{display:flex;gap:1rem}"]}),e})(),J=(()=>{class e{constructor(){this.value=!0,this.valueControl=new r.p4([]),this.items=["One","Two","Three","Very long text with a lot of characters and spaces and other stuff and things"],this.valueDisabled=new r.p4(!1)}ngOnInit(){this.valueDisabled.disable()}setDefaultValue(){this.valueControl.setValue([this.items[0]],{emitEvent:!1})}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["prizm-multi-select-base-example"]],decls:7,vars:2,consts:[["label","\u041f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c"],["selectAllItem","\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435","placeholder","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430",3,"formControl","items"],[2,"display","flex","flex-flow","column","gap","1rem","width","20rem"],["prizmButton","",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"prizm-input-layout",0),t._UZ(1,"prizm-input-multi-select",1),t.qZA(),t._UZ(2,"br")(3,"br"),t.TgZ(4,"div",2)(5,"button",3),t.NdJ("click",function(){return i.setDefaultValue()}),t._uU(6,"Set Default Value"),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("formControl",i.valueControl)("items",i.items))},dependencies:[r.JJ,r.oH,I.K,d.N,h.C],styles:[".box[_ngcontent-%COMP%]{display:flex;gap:1rem}"]}),e})(),U=(()=>{class e{constructor(){this.value=!0,this.valueControl=new r.p4(["\u0410\u043d\u0434\u0440\u0435\u0439 \u0421\u0430\u0444\u0430\u043d\u043e\u0432"]),this.items=["\u0410\u043d\u0434\u0440\u0435\u0439 \u0421\u0430\u0444\u0430\u043d\u043e\u0432","\u0421\u0435\u0440\u0433\u0435\u0439 \u041c\u0430\u0440\u043a\u043e\u0432","\u0410\u043d\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430","\u041a\u0430\u0442\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430","\u0421\u0430\u0448\u0430 \u0414\u0443\u0440\u043e\u0432","\u0412\u043b\u0430\u0434 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432","\u041a\u043e\u0441\u0442\u044f \u0429\u0435\u0440\u0431\u0430\u043a\u043e\u0432","\u0420\u0443\u0441\u0442\u0430\u043c \u0413\u0443\u0441\u0435\u0432","\u0424\u0438\u043b\u0438\u043f \u0423\u0432\u0430\u0440\u043e\u0432"]}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["prizm-multi-select-with-search-example"]],decls:2,vars:3,consts:[["label","\u041f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c"],["selectAllItem","\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435","placeholder","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430",3,"items","formControl","searchable"]],template:function(o,i){1&o&&(t.TgZ(0,"prizm-input-layout",0),t._UZ(1,"prizm-input-multi-select",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("items",i.items)("formControl",i.valueControl)("searchable",!0))},dependencies:[r.JJ,r.oH,d.N,h.C],encapsulation:2}),e})();function A(e,l){if(1&e&&(t.TgZ(0,"div",3),t._UZ(1,"prizm-icon",4),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&e){const o=l.$implicit;t.xp6(3),t.Oqu(o.stringify)}}let W=(()=>{class e{constructor(){this.items=["One","Two","Three"],this.valueControl=new r.p4(["Two"])}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["prizm-multi-select-with-template-example"]],decls:4,vars:3,consts:[["label","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"],[3,"items","valueTemplate","formControl"],["valueTemplate",""],[1,"item"],["iconClass","account-done"]],template:function(o,i){if(1&o&&(t.TgZ(0,"prizm-input-layout",0),t._UZ(1,"prizm-input-multi-select",1),t.qZA(),t.YNc(2,A,4,1,"ng-template",null,2,t.W1O)),2&o){const n=t.MAs(3);t.xp6(1),t.Q6J("items",i.items)("valueTemplate",n)("formControl",i.valueControl)}},dependencies:[r.JJ,r.oH,d.N,h.C,T.b],styles:[".item[_ngcontent-%COMP%]{display:flex;gap:.5rem}"]}),e})();function K(e,l){if(1&e&&(t.TgZ(0,"div",5),t._UZ(1,"prizm-icon",6),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&e){const o=t.oxw().$implicit;t.xp6(3),t.Oqu(o.stringify)}}function O(e,l){1&e&&t._uU(0," \u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435 ")}function Q(e,l){if(1&e&&(t.YNc(0,K,4,1,"div",3),t.YNc(1,O,1,0,"ng-template",null,4,t.W1O)),2&e){const o=l.$implicit,i=t.MAs(2);t.Q6J("ngIf",-1!==o.obj.id)("ngIfElse",i)}}let B=(()=>{class e{constructor(){this.items=[{id:1,name:"\u0420\u043e\u0441\u0441\u0438\u044f"},{id:2,name:"\u0421\u0428\u0410"},{id:3,name:"\u041e\u0410\u042d"}],this.selectAllItem={id:-1,name:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435"},this.valueControl=new r.p4([{id:3}]),this.searchMatcher=(o,i)=>i.name?.toLowerCase().includes(o.toLowerCase()),this.identityMatcher=(o,i)=>o?.id===i?.id,this.stringify=o=>o.obj?.name}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["prizm-multi-select-with-object-example"]],decls:4,vars:8,consts:[["label","\u041f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c"],[3,"items","selectAllItem","valueTemplate","formControl","searchMatcher","identityMatcher","stringify","searchable"],["valueTemplate",""],["class","item",4,"ngIf","ngIfElse"],["allTemplate",""],[1,"item"],["iconClass","account-done"]],template:function(o,i){if(1&o&&(t.TgZ(0,"prizm-input-layout",0),t._UZ(1,"prizm-input-multi-select",1),t.qZA(),t.YNc(2,Q,3,2,"ng-template",null,2,t.W1O)),2&o){const n=t.MAs(3);t.xp6(1),t.Q6J("items",i.items)("selectAllItem",i.selectAllItem)("valueTemplate",n)("formControl",i.valueControl)("searchMatcher",i.searchMatcher)("identityMatcher",i.identityMatcher)("stringify",i.stringify)("searchable",!0)}},dependencies:[c.O5,r.JJ,r.oH,d.N,h.C,T.b],styles:[".item[_ngcontent-%COMP%]{display:flex;gap:.5rem}"]}),e})();function Y(e,l){if(1&e&&(t.TgZ(0,"prizm-doc-example",4),t._UZ(1,"prizm-multi-select-base-example"),t.qZA(),t.TgZ(2,"prizm-doc-example",5),t._UZ(3,"prizm-multi-select-with-search-example"),t.qZA(),t.TgZ(4,"prizm-doc-example",6),t._UZ(5,"prizm-multi-select-with-template-example"),t.qZA(),t.TgZ(6,"prizm-doc-example",7),t._UZ(7,"prizm-multi-select-with-object-example"),t.qZA(),t.TgZ(8,"prizm-doc-example",8),t._UZ(9,"prizm-input-multi-select-with-transformer-example"),t.qZA(),t.TgZ(10,"prizm-doc-example",9),t._UZ(11,"prizm-multi-select-validators-example"),t.qZA()),2&e){const o=t.oxw();t.Q6J("content",o.exampleBase),t.xp6(2),t.Q6J("content",o.exampleWithSearch),t.xp6(2),t.Q6J("content",o.exampleWithTemplate),t.xp6(2),t.Q6J("content",o.exampleWithObject),t.xp6(2),t.Q6J("content",o.exampleWithTransformer),t.xp6(2),t.Q6J("content",o.exampleValidators)}}function j(e,l){1&e&&t._uU(0," Value Transformer (get value from object) ")}function G(e,l){1&e&&t._uU(0," Styles for dropdown modal window ")}function F(e,l){1&e&&t._uU(0," Classes for dropdown modal window ")}function L(e,l){1&e&&t._uU(0," Scrollbar in dropdown ")}function R(e,l){1&e&&t._uU(0," Icon ")}function X(e,l){1&e&&t._uU(0," select All Item ")}function $(e,l){1&e&&t._uU(0," Chips Deletable ")}function q(e,l){1&e&&t._uU(0," Identity Matcher ")}function k(e,l){1&e&&t._uU(0," Stringify ")}function tt(e,l){1&e&&t._uU(0," Search matcher (use for custom search) ")}function et(e,l){1&e&&t._uU(0," Items ")}function nt(e,l){1&e&&t._uU(0," Value Template ")}function ot(e,l){1&e&&t._uU(0," Searchable ")}function lt(e,l){1&e&&t._uU(0," Min Dropdown Height ")}function at(e,l){1&e&&t._uU(0," Dropdown Width ")}function it(e,l){1&e&&t._uU(0," Max Dropdown Height ")}function ut(e,l){1&e&&t._uU(0," Placeholder ")}function rt(e,l){1&e&&t._uU(0," Empty Content ")}function pt(e,l){1&e&&t._uU(0," Show clear button ")}function mt(e,l){1&e&&t._uU(0," Clear Button (icon or template) ")}function ct(e,l){1&e&&t._uU(0," Outer ")}function st(e,l){1&e&&t._uU(0," Size ")}function dt(e,l){1&e&&t._uU(0," Label ")}function ht(e,l){1&e&&t._uU(0," Clear ")}function yt(e,l){1&e&&t._uU(0," Border ")}function gt(e,l){1&e&&t._uU(0," Status ")}function _t(e,l){1&e&&t._uU(0," Position ")}function Ct(e,l){if(1&e){const o=t.EpF();t.TgZ(0,"prizm-doc-demo")(1,"prizm-input-layout",10,11),t._UZ(3,"prizm-input-multi-select",12,13),t.qZA()(),t.TgZ(5,"prizm-doc-documentation",14),t.YNc(6,j,1,0,"ng-template",15),t.YNc(7,G,1,0,"ng-template",16),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.dropdownStyles=n)}),t.YNc(8,F,1,0,"ng-template",17),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.dropdownClasses=n)}),t.YNc(9,L,1,0,"ng-template",18),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.dropdownScroll=n)}),t.YNc(10,R,1,0,"ng-template",19),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.icon=n)}),t.YNc(11,X,1,0,"ng-template",20),t.YNc(12,$,1,0,"ng-template",21),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.isChipsDeletable=n)}),t.YNc(13,q,1,0,"ng-template",22),t.YNc(14,k,1,0,"ng-template",23),t.YNc(15,tt,1,0,"ng-template",24),t.YNc(16,et,1,0,"ng-template",25),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.items=n)}),t.YNc(17,nt,1,0,"ng-template",26),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.valueTemplate=n)}),t.YNc(18,ot,1,0,"ng-template",27),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.searchable=n)}),t.YNc(19,lt,1,0,"ng-template",28),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.minDropdownHeight=n)}),t.YNc(20,at,1,0,"ng-template",29),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.dropdownWidth=n)}),t.YNc(21,it,1,0,"ng-template",30),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.maxDropdownHeight=n)}),t.YNc(22,ut,1,0,"ng-template",31),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.placeholder=n)}),t.YNc(23,rt,1,0,"ng-template",32),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.emptyContent=n)}),t.qZA(),t.TgZ(24,"prizm-doc-documentation",33),t.YNc(25,pt,1,0,"ng-template",34),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.forceClear=n)}),t.YNc(26,mt,1,0,"ng-template",35),t.YNc(27,ct,1,0,"ng-template",36),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.outer=n)}),t.YNc(28,st,1,0,"ng-template",37),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.size=n)}),t.YNc(29,dt,1,0,"ng-template",38),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.label=n)}),t.YNc(30,ht,1,0,"ng-template",39),t.YNc(31,yt,1,0,"ng-template",40),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.border=n)}),t.YNc(32,gt,1,0,"ng-template",41),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.status=n)}),t.YNc(33,_t,1,0,"ng-template",42),t.NdJ("documentationPropertyValueChange",function(n){t.CHM(o);const u=t.oxw();return t.KtG(u.inputPosition=n)}),t.qZA()}if(2&e){const o=t.MAs(2),i=t.MAs(4),n=t.oxw();t.xp6(1),t.Q6J("prizmDocHostElement",o)("prizmDocHostElementKey",n.layoutKey)("size",n.size)("label",n.label)("outer",n.outer)("border",n.border)("position",n.inputPosition)("status",n.status)("forceClear",n.forceClear),t.xp6(2),t.Q6J("prizmDocHostElement",i)("prizmDocHostElementKey",n.selectKey)("searchable",n.searchable)("dropdownScroll",n.dropdownScroll)("placeholder",n.placeholder)("emptyContent",n.emptyContent)("isChipsDeletable",n.isChipsDeletable)("dropdownStyles",n.dropdownStyles)("dropdownClasses",n.dropdownClasses)("formControl",n.valueControl)("icon",n.icon)("items",n.items)("dropdownWidth",n.dropdownWidth)("maxDropdownHeight",n.maxDropdownHeight),t.xp6(2),t.Q6J("hasTestId",!0)("heading",n.selectKey)("hostComponentKey",n.selectKey)("control",n.valueControl),t.xp6(2),t.Q6J("documentationPropertyValue",n.dropdownStyles)("documentationPropertyValues",n.dropdownStylesVariants),t.xp6(1),t.Q6J("documentationPropertyValue",n.dropdownClasses)("documentationPropertyValues",n.dropdownClassesVariants),t.xp6(1),t.Q6J("documentationPropertyValue",n.dropdownScroll)("documentationPropertyValues",n.dropdownScrollVariants),t.xp6(1),t.Q6J("documentationPropertyValue",n.icon)("documentationPropertyValues",n.iconVariants),t.xp6(2),t.Q6J("documentationPropertyValue",n.isChipsDeletable),t.xp6(4),t.Q6J("documentationPropertyValue",n.items)("documentationPropertyValues",n.itemsVariants),t.xp6(1),t.Q6J("documentationPropertyValue",n.valueTemplate),t.xp6(1),t.Q6J("documentationPropertyValue",n.searchable),t.xp6(1),t.Q6J("documentationPropertyValue",n.minDropdownHeight),t.xp6(1),t.Q6J("documentationPropertyValue",n.dropdownWidth),t.xp6(1),t.Q6J("documentationPropertyValue",n.maxDropdownHeight),t.xp6(1),t.Q6J("documentationPropertyValue",n.placeholder),t.xp6(1),t.Q6J("documentationPropertyValue",n.emptyContent),t.xp6(1),t.Q6J("heading",n.layoutKey)("hostComponentKey",n.layoutKey),t.xp6(1),t.Q6J("documentationPropertyValue",n.forceClear)("documentationPropertyValues",n.forceClearVariants),t.xp6(2),t.Q6J("documentationPropertyValue",n.outer),t.xp6(1),t.Q6J("documentationPropertyValue",n.size)("documentationPropertyValues",n.sizeVariants),t.xp6(1),t.Q6J("documentationPropertyValue",n.label),t.xp6(2),t.Q6J("documentationPropertyValue",n.border),t.xp6(1),t.Q6J("documentationPropertyValue",n.status)("documentationPropertyValues",n.statuses),t.xp6(1),t.Q6J("documentationPropertyValue",n.inputPosition)("documentationPropertyValues",n.inputPositionVariants)}}function Pt(e,l){if(1&e&&(t.TgZ(0,"ol",43)(1,"li")(2,"p"),t._uU(3," Import "),t.TgZ(4,"code"),t._uU(5,"PrizmInputMultiSelectModule"),t.qZA(),t._uU(6," into a module where you want to use our component "),t.qZA(),t._UZ(7,"prizm-doc-code",44),t.qZA()()),2&e){const o=t.oxw();t.xp6(7),t.Q6J("code",o.setupModule)}}class g{constructor(){this.dropdownStylesVariants=[null,{"--prizm-data-list-background":"gray","--prizm-select-item-background":"gray","--prizm-data-list-header-text":"white"}],this.dropdownClassesVariants=[null,{extraDropdownClass:!0}],this.layoutKey="PrizmInputLayoutComponent",this.selectKey="PrizmMultiSelectInputComponent",this.border=!1,this.inputPosition="left",this.inputPositionVariants=["left","center"],this.status="default",this.statuses=["default","success","warning","danger"],this.readOnly=!1,this.pseudoInvalid=!1,this.pseudoHovered=!1,this.pseudoPressed=!1,this.pseudoFocused=!1,this.focusable=!0,this.pseudoState="",this.focusedChange=!1,this.pressedChange=!1,this.hoveredChange=!1,this.focusVisibleChange=!1,this.icon=null,this.iconVariants=[null,"sort-zoom-in"],this.control=new r.p4,this.searchable=!1,this.outer=!1,this.label="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430",this.emptyContent="\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",this.isChipsDeletable=!0,this.forceClearVariants=[null,!1,!0],this.forceClear=this.forceClearVariants[0],this.size=this.sizeVariants[0],this.minDropdownHeight=0,this.dropdownWidth="100%",this.maxDropdownHeight=342,this.placeholder="",this.visibility="auto",this.itemsVariants=[["One","Two","Three"],["\u0410\u043d\u0434\u0440\u0435\u0439 \u0421\u0430\u0444\u0430\u043d\u043e\u0432","\u0421\u0435\u0440\u0433\u0435\u0439 \u041c\u0430\u0440\u043a\u043e\u0432","\u0410\u043d\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430","\u041a\u0430\u0442\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430","\u0421\u0430\u0448\u0430 \u0414\u0443\u0440\u043e\u0432","\u0412\u043b\u0430\u0434 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432","\u041a\u043e\u0441\u0442\u044f \u0429\u0435\u0440\u0431\u0430\u043a\u043e\u0432","\u0420\u0443\u0441\u0442\u0430\u043c \u0413\u0443\u0441\u0435\u0432","\u0424\u0438\u043b\u0438\u043f \u0423\u0432\u0430\u0440\u043e\u0432","\u0421\u0435\u0440\u0433\u0435\u0439 \u0421\u0430\u0444\u0430\u043d\u043e\u0432","\u0421\u0430\u0448\u0430 \u041c\u0430\u0440\u043a\u043e\u0432","\u041a\u0430\u0442\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430","\u041c\u0430\u0448\u0430 \u0412\u0435\u0442\u0440\u043e\u0432\u0430","\u0412\u043b\u0430\u0434 \u0414\u0443\u0440\u043e\u0432","\u0421\u0430\u0448\u0430 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432","\u0420\u0443\u0441\u0442\u0430\u043c \u0429\u0435\u0440\u0431\u0430\u043a\u043e\u0432","\u041a\u043e\u0441\u0442\u044f \u0413\u0443\u0441\u0435\u0432","\u0411\u043e\u0440\u0438\u0441 \u0423\u0432\u0430\u0440\u043e\u0432","\u0421\u0443\u043f\u0435\u0440 \u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u0447\u0438\u043f\u0441 \u0441 \u043a\u0430\u043a\u0438\u043c \u0442\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u044b\u043c"],[],null],this.dropdownScrollVariants=["auto","hidden","visible"],this.dropdownScroll="auto",this.valueControl=new r.p4,this.items=this.itemsVariants[1],this.setupModule=a.e(84274).then(a.t.bind(a,84274,17)),this.exampleBase={TypeScript:a.e(55259).then(a.t.bind(a,55259,17)),HTML:a.e(80205).then(a.t.bind(a,80205,17))},this.exampleWithTemplate={TypeScript:a.e(4299).then(a.t.bind(a,4299,17)),HTML:a.e(47856).then(a.t.bind(a,47856,17))},this.exampleWithObject={TypeScript:a.e(17365).then(a.t.bind(a,17365,17)),HTML:a.e(54483).then(a.t.bind(a,54483,17))},this.exampleWithTransformer={TypeScript:a.e(77779).then(a.t.bind(a,77779,17)),HTML:a.e(15630).then(a.t.bind(a,15630,17))},this.exampleValidators={TypeScript:a.e(60557).then(a.t.bind(a,60557,17)),HTML:a.e(93110).then(a.t.bind(a,93110,17))},this.exampleWithSearch={TypeScript:a.e(19671).then(a.t.bind(a,19671,17)),HTML:a.e(52147).then(a.t.bind(a,52147,17))},this.valueTemplate="",this.searchMatcher=(l,o)=>!!o?.toString()?.toLowerCase().includes(l?.toLowerCase()),this.identityMatcher=(l,o)=>l===o,this.stringify=l=>l?.toString?.()??""}get sizeVariants(){return this.outer?["s","m","l"]:["m","l"]}set disabled(l){l?this.control.disable():this.control.enable()}get disabled(){return this.control.disabled}getValueTemplate(...l){return[null,...l]}get val(){return this.control.value}setValue(l){this.control.setValue(l)}}g.\u0275fac=function(l){return new(l||g)},g.\u0275cmp=t.Xpm({type:g,selectors:[["prizm-multi-select-example"]],decls:6,vars:0,consts:[["header","InputMultiSelect"],["description","",1,"page-description"],["prizmDocPageTab",""],["prizmDocPageTab","","prizmDocHost",""],["id","base","heading","Base",3,"content"],["id","with-search","heading","With Search",3,"content"],["id","with-template","heading","With Template",3,"content"],["id","with-object","heading","With Object",3,"content"],["id","transformer","heading","Transformer",3,"content"],["id","validators","heading","Validators",3,"content"],[3,"prizmDocHostElement","prizmDocHostElementKey","size","label","outer","border","position","status","forceClear"],["inputElement",""],["selectAllItem","\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435",3,"prizmDocHostElement","prizmDocHostElementKey","searchable","dropdownScroll","placeholder","emptyContent","isChipsDeletable","dropdownStyles","dropdownClasses","formControl","icon","items","dropdownWidth","maxDropdownHeight"],["element",""],[3,"hasTestId","heading","hostComponentKey","control"],["documentationPropertyName","transformer","documentationPropertyType","PrizmMultiSelectValueTransformer","documentationPropertyMode","input"],["documentationPropertyName","dropdownStyles","documentationPropertyType","PrizmDropdownHostStyles","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValues","documentationPropertyValueChange"],["documentationPropertyName","dropdownClasses","documentationPropertyType","PrizmDropdownHostClasses","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValues","documentationPropertyValueChange"],["documentationPropertyName","dropdownScroll","documentationPropertyType","PrizmScrollbarVisibility","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValues","documentationPropertyValueChange"],["documentationPropertyName","icon","documentationPropertyType","PolymorphContent<PrizmSelectIconContext>","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValues","documentationPropertyValueChange"],["documentationPropertyName","selectAllItem","documentationPropertyType","T | null","documentationPropertyMode","input"],["documentationPropertyName","isChipsDeletable","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","identityMatcher","documentationPropertyType","PrizmSelectIdentityMatcher","documentationPropertyMode","input"],["documentationPropertyName","stringify","documentationPropertyType","PrizmSelectIdentityMatcher","documentationPropertyMode","input"],["documentationPropertyName","searchMatcher","documentationPropertyType","PrizmSelectSearchMatcher","documentationPropertyMode","input"],["documentationPropertyName","items","documentationPropertyType","T[]","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValues","documentationPropertyValueChange"],["documentationPropertyName","valueTemplate","documentationPropertyType","PolymorphContent","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","searchable","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minDropdownHeight","documentationPropertyType","number","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","dropdownWidth","documentationPropertyType","string","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxDropdownHeight","documentationPropertyType","number","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","placeholder","documentationPropertyType","string","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","emptyContent","documentationPropertyType","string","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],[3,"heading","hostComponentKey"],["documentationPropertyName","forceClear","documentationPropertyType","boolean | null","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValues","documentationPropertyValueChange"],["documentationPropertyName","clearButton","documentationPropertyType","PolymorphContent<PrizmInputLayoutClearButtonContext>","documentationPropertyMode","input"],["documentationPropertyName","outer","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyType","PrizmInputSize","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValues","documentationPropertyValueChange"],["documentationPropertyName","label","documentationPropertyType","string","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","clear","documentationPropertyType","MouseEvent","documentationPropertyMode","output"],["documentationPropertyName","border","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","status","documentationPropertyType","PrizmInputStatus","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValues","documentationPropertyValueChange"],["documentationPropertyName","position","documentationPropertyType","PrizmInputPosition","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValues","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","custom.module.ts",3,"code"]],template:function(l,o){1&l&&(t.TgZ(0,"prizm-doc-page",0)(1,"div",1),t._uU(2," InputMultiSelect is a component that allows users to select multiple options from a predefined list. It provides a user-friendly interface for making multiple selections and is commonly used in forms and data entry scenarios. With InputMultiSelect, users can easily choose multiple items by clicking or tapping on the options. The selected items are visually highlighted, providing clear feedback to the user. "),t.qZA(),t.YNc(3,Y,12,6,"ng-template",2),t.YNc(4,Ct,34,58,"ng-template",3),t.YNc(5,Pt,8,1,"ng-template",2),t.qZA())},dependencies:[C.c,f.F,M.K,V.N,S.W,z.l,v.a,N.w,E.k,r.JJ,r.oH,d.N,h.C,b,H,J,U,W,B],styles:[".extraDropdownClass{--prizm-data-list-background: green;--prizm-select-item-background: green;--prizm-select-item-hover-background: yellow;--prizm-data-list-header-text: white}"],changeDetection:0}),(0,p.gn)([m.zn,(0,p.w6)("design:type",Function),(0,p.w6)("design:paramtypes",[Object]),(0,p.w6)("design:returntype",Array)],g.prototype,"getValueTemplate",null);var P=a(34007);let ft=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,s.Qp,r.u5,r.UX,P.m98,P.KBf,P.$yW,P.pqj,_.Bz.forChild((0,s.GB)(g))]}),e})()},82415:(x,y,a)=>{a.d(y,{k:()=>_});var c=a(94650),s=a(91979);let _=(()=>{class p{constructor(m){this.hostElementService=m,this.prizmDocHostElementKey="index"}ngOnInit(){const m=Array.isArray(this.prizmDocHostElementKey)?this.prizmDocHostElementKey:[this.prizmDocHostElementKey],t=Array.isArray(this.prizmDocHostElement)?this.prizmDocHostElement:[this.prizmDocHostElement];for(const C in m)this.hostElementService.setHostElement(m[C],t[C])}}return p.\u0275fac=function(m){return new(m||p)(c.Y36(s.R))},p.\u0275dir=c.lG2({type:p,selectors:[["","prizmDocHostElement",""]],inputs:{prizmDocHostElement:"prizmDocHostElement",prizmDocHostElementKey:"prizmDocHostElementKey"}}),p})()},80840:(x,y,a)=>{a.d(y,{w:()=>_});var c=a(91979),s=a(94650);let _=(()=>{class p{}return p.\u0275fac=function(m){return new(m||p)},p.\u0275dir=s.lG2({type:p,selectors:[["","prizmDocHost",""]],features:[s._Bn([c.R])]}),p})()}}]);