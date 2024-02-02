"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[24033],{24033:(b,m,e)=>{e.r(m),e.d(m,{ZoomControlExampleModule:()=>T});var s=e(36895),n=e(94650),d=e(84319),u=e(71527),g=e(90133),C=e(58354),_=e(28776),x=e(41628),h=e(19969),z=e(78580),f=e(46921);const Z=["content"];function M(o,r){if(1&o){const t=n.EpF();n.TgZ(0,"prizm-listing-item",15),n.NdJ("click",function(){const a=n.CHM(t).index,E=n.oxw(2);return n.KtG(E.chooseScale(a))}),n._uU(1),n.qZA()}if(2&o){const t=r.$implicit;n.xp6(1),n.hij(" ",t,"% ")}}function O(o,r){if(1&o){const t=n.EpF();n.TgZ(0,"prizm-data-list",12)(1,"div",13),n.YNc(2,M,2,1,"prizm-listing-item",14),n.qZA(),n.TgZ(3,"div",13)(4,"prizm-listing-item",15),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return n.KtG(c.scaleDecrease())}),n.ynx(5,16),n._UZ(6,"prizm-icon",17),n.BQk(),n._uU(7," \u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c "),n.ynx(8,18),n.TgZ(9,"span"),n._uU(10," F "),n.qZA(),n.BQk(),n.qZA(),n.TgZ(11,"prizm-listing-item",15),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return n.KtG(c.scaleIncrease())}),n.ynx(12,16),n._UZ(13,"prizm-icon",19),n.BQk(),n._uU(14," \u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c "),n.ynx(15,18),n.TgZ(16,"span"),n._uU(17," F "),n.qZA(),n.BQk(),n.qZA()(),n.TgZ(18,"div",13)(19,"prizm-listing-item",15),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return n.KtG(c.setScale(100))}),n.ynx(20,16),n._UZ(21,"prizm-icon",20),n.BQk(),n._uU(22," \u041f\u043e\u043b\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 "),n.ynx(23,18),n.TgZ(24,"span"),n._uU(25," F "),n.qZA(),n.BQk(),n.qZA(),n.TgZ(26,"prizm-listing-item",15),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return n.KtG(c.setScale(100))}),n.ynx(27,16),n._UZ(28,"prizm-icon",21),n.BQk(),n._uU(29," \u0412\u043f\u0438\u0441\u0430\u0442\u044c "),n.ynx(30,18),n.TgZ(31,"span"),n._uU(32," F "),n.qZA(),n.BQk(),n.qZA()(),n.TgZ(33,"div",13)(34,"prizm-listing-item",15),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return n.KtG(c.setScale(160))}),n.ynx(35,16),n._UZ(36,"prizm-icon",22),n.BQk(),n._uU(37," \u041f\u043e \u0432\u044b\u0441\u043e\u0442\u0435 "),n.ynx(38,18),n.TgZ(39,"span"),n._uU(40," F "),n.qZA(),n.BQk(),n.qZA(),n.TgZ(41,"prizm-listing-item",15),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return n.KtG(c.setScale(c.contentWidth/250*100))}),n.ynx(42,16),n._UZ(43,"prizm-icon",23),n.BQk(),n._uU(44," \u041f\u043e \u0448\u0438\u0440\u0438\u043d\u0435 "),n.ynx(45,18),n.TgZ(46,"span"),n._uU(47," F "),n.qZA(),n.BQk(),n.qZA()()()}if(2&o){const t=n.oxw();n.xp6(2),n.Q6J("ngForOf",t.scalesList)}}const v=function(o,r){return{"width.px":o,"height.px":r}};let P=(()=>{class o{constructor(t){this.cdRef=t,this.openDropdown=!1,this.scalesList=[200,150,100,50],this.scaleIdx=3,this.currentScale=this.scalesList[this.scaleIdx]}get contentWidth(){return this.contentElement.nativeElement.offsetWidth}scaleIncrease(){this.scaleIdx>0&&(this.scaleIdx--,this.currentScale=this.scalesList[this.scaleIdx]),this.cdRef.markForCheck()}closeDropdown(){this.openDropdown=!1}scaleDecrease(){this.scaleIdx<this.scalesList.length-1&&(this.scaleIdx++,this.currentScale=this.scalesList[this.scaleIdx]),this.cdRef.markForCheck()}chooseScale(t){this.scaleIdx=t,this.currentScale=this.scalesList[this.scaleIdx],this.cdRef.markForCheck()}setScale(t){this.currentScale=t,this.cdRef.markForCheck()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(n.sBO))},o.\u0275cmp=n.Xpm({type:o,selectors:[["prizm-zoom-control-example-basic"]],viewQuery:function(t,i){if(1&t&&n.Gf(Z,7),2&t){let c;n.iGM(c=n.CRH())&&(i.contentElement=c.first)}},decls:15,vars:12,consts:[[1,"container"],["header","\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"],["instruments","",1,"zoom-control"],["prizmIconButton","","appearanceType","ghost","icon","sort-zoom-out","appearance","secondary","size","m",1,"zoom-control__btn",3,"disabled","click"],["prizmDropdownHostWidth","100%",3,"isOpen","content","isOpenChange"],[1,"zoom-control__select",3,"click"],["iconClass","chevrons-dropdown",1,"zoom-control__select-icon"],["prizmIconButton","","appearanceType","ghost","icon","sort-maximize","appearance","secondary","size","m",1,"zoom-control__btn",3,"disabled","click"],[1,"content"],["content",""],[1,"scalable-item",3,"ngStyle"],["dropdown",""],[1,"settings"],[1,"settings-group"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["leftBox",""],["iconClass","sort-zoom-out",1,"icon"],["rightBox",""],["iconClass","sort-maximize",1,"icon"],["iconClass","arrows-expand-all",1,"icon"],["iconClass","editor-border-outer",1,"icon"],["iconClass","arrows-arrow-expand-vertical",1,"icon"],["iconClass","arrows-arrow-expand-horizontal",1,"icon"]],template:function(t,i){if(1&t&&(n.TgZ(0,"div",0)(1,"prizm-panel",1)(2,"div",2)(3,"button",3),n.NdJ("click",function(){return i.scaleDecrease()}),n.qZA(),n.TgZ(4,"prizm-dropdown-host",4),n.NdJ("isOpenChange",function(a){return i.openDropdown=a}),n.TgZ(5,"button",5),n.NdJ("click",function(){return i.openDropdown=!i.openDropdown}),n._uU(6),n.ALo(7,"number"),n._UZ(8,"prizm-icon",6),n.qZA()(),n.TgZ(9,"button",7),n.NdJ("click",function(){return i.scaleIncrease()}),n.qZA()()(),n.TgZ(10,"div",8,9),n._UZ(12,"div",10),n.qZA()(),n.YNc(13,O,48,1,"ng-template",null,11,n.W1O)),2&t){const c=n.MAs(14);n.xp6(3),n.Q6J("disabled",i.scaleIdx===i.scalesList.length-1),n.xp6(1),n.Q6J("isOpen",i.openDropdown)("content",c),n.xp6(2),n.hij(" ",n.xi3(7,6,i.currentScale,".0-1"),"% "),n.xp6(3),n.Q6J("disabled",0===i.scaleIdx),n.xp6(3),n.Q6J("ngStyle",n.WLB(9,v,250*i.currentScale/100,250*i.currentScale/100))}},dependencies:[s.sg,s.PC,C.b,_.y,x.Z,h.n,z.K,f.W,s.JJ],styles:["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{outline:none;border:none;background:transparent;cursor:pointer}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:var(--prizm-v3-background-fill-primary);border:1px solid var(--prizm-v3-background-stroke)}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:400px;width:100%;display:grid;align-items:center;justify-content:center;overflow-y:auto;overflow-x:hidden}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .scalable-item[_ngcontent-%COMP%]{height:100%;width:100%;background:#c38989;border-radius:20%;transition:.4s}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;background:transparent}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--prizm-v3-form-stroke-default);border-radius:4px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .zoom-control[_ngcontent-%COMP%]{height:100%;padding:0 16px;display:flex;align-items:center;gap:2px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .zoom-control__btn[_ngcontent-%COMP%]{height:32px;width:32px;z-index:10001}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .zoom-control__select[_ngcontent-%COMP%]{height:32px;width:256px;padding-left:16px;padding-right:8px;display:flex;align-items:center;justify-content:space-between;background:var(--prizm-v3-background-fill-secondary);border:1px solid var(--prizm-v3-form-stroke-default);border-radius:2px;font-weight:400;font-size:14px;line-height:16px;color:var(--prizm-v3-text-icon-primary);transition:.4s}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .zoom-control__select-icon[_ngcontent-%COMP%]{height:32px;width:32px;display:flex;align-items:center;justify-content:center;color:var(--prizm-v3-text-icon-tertiary)}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .zoom-control__select[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .zoom-control__select[_ngcontent-%COMP%]:focus{border-color:var(--prizm-v3-status-info-primary-default)}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .zoom-control__select[_ngcontent-%COMP%]:hover   .zoom-control__select-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .zoom-control__select[_ngcontent-%COMP%]:focus   .zoom-control__select-icon[_ngcontent-%COMP%]{color:var(--prizm-v3-status-info-primary-default)}.settings[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:var(--prizm-v3-background-fill-primary)}.settings.default[_ngcontent-%COMP%]{border:none}.settings-group[_ngcontent-%COMP%]{padding:16px 0;border-bottom:1px solid var(--prizm-v3-background-stroke)}.settings-group[_ngcontent-%COMP%]:last-child{border:none}"],changeDetection:0}),o})();function y(o,r){if(1&o&&(n.TgZ(0,"prizm-doc-example",3),n._UZ(1,"prizm-zoom-control-example-basic"),n.qZA()),2&o){const t=n.oxw();n.Q6J("content",t.zoomControlBasicExample)}}let B=(()=>{class o{constructor(){this.zoomControlBasicExample={TypeScript:e.e(1602).then(e.t.bind(e,1602,17)),HTML:e.e(1628).then(e.t.bind(e,1628,17)),LESS:e.e(15614).then(e.t.bind(e,15614,17))}}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["prizm-zoom-control-example"]],decls:4,vars:0,consts:[["header","Zoom control"],["description","",1,"page-description"],["prizmDocPageTab",""],["id","base","heading","Base",3,"content"]],template:function(t,i){1&t&&(n.TgZ(0,"prizm-doc-page",0)(1,"div",1),n._uU(2," Our zoom component allows you to zoom in and out of the map. It is a simple button that when clicked will zoom in or out of the map. The zoom level is controlled by the zoom level of the map. "),n.qZA(),n.YNc(3,y,2,1,"ng-template",2),n.qZA())},dependencies:[d.W,u.l,g.a,P],changeDetection:0}),o})();var p=e(27677),k=e(34793),l=e(34007);let T=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[s.ez,p.Qp,l.pqj,k.Bz.forChild((0,p.GB)(B)),l.cRT,l.Qjd,l.VMx,l.ddl,l._Lo,l.KBf,l.xig,l.WQS]}),o})()}}]);