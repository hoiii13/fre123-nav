import{z as e,B as s}from"./index-1fdc2001.js";import{h as i,P as o}from"./el-icon-37d8cfb4.js";const u=e({id:"MenuState",state:()=>({isCollapse:!1,menuList:[]}),getters:{},actions:{async setCollapse(){this.isCollapse=!this.isCollapse},async setMenuList(t){this.menuList=t}},persist:s("MenuState")}),n=200,a=[{icon:"message-box",title:"\u7F51\u7AD9\u7BA1\u7406",path:"/platform",children:[{path:"/website/info",title:"\u7F51\u7AD9\u914D\u7F6E",icon:"setting"},{path:"/website/surprise",title:"\u5E7F\u544A\u7BA1\u7406",icon:"link"}]},{icon:"goods",title:"\u8D44\u6E90\u7BA1\u7406",path:"/resource/index",children:[{path:"/resource/index",title:"\u8D44\u6E90\u7BA1\u7406",icon:"goods"},{path:"/resource/hot",title:"\u70ED\u95E8\u914D\u7F6E",icon:"setting"},{path:"/resource/category",title:"\u5206\u7C7B\u7BA1\u7406",icon:"suitcase"}]}],r="\u6210\u529F";var c={code:n,data:a,msg:r};const h=t=>i.post(o+"/site_admin/user_login",t),g=()=>c;export{u as M,g,h as l};
