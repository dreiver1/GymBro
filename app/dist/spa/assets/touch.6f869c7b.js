import{f as n,g as s,h as u,p as l}from"./index.22855cfa.js";import{a as d,u as f}from"./use-dark.5d763054.js";import{h as c}from"./render.a34a2fa1.js";var q=n({name:"QList",props:{...d,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:e}){const r=l(),a=f(t,r.proxy.$q),i=s(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>u(t.tag,{class:i.value},c(e.default))}});const o={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},g=Object.keys(o);o.all=!0;function y(t){const e={};for(const r of g)t[r]===!0&&(e[r]=!0);return Object.keys(e).length===0?o:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const p=["INPUT","TEXTAREA"];function b(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&p.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}export{q as Q,y as g,b as s};
