(this["webpackJsonpfindmind-project"]=this["webpackJsonpfindmind-project"]||[]).push([[0],{1:function(e,t,a){e.exports={logo:"mystyle_logo__2uCKU",editportal_container:"mystyle_editportal_container__feics",editportal_innerbox:"mystyle_editportal_innerbox__1EfDo",modal_buttons:"mystyle_modal_buttons__KZHLN",delete_task_icon:"mystyle_delete_task_icon__1145T",close_modal_icon:"mystyle_close_modal_icon__2LyP2",modal_taskname:"mystyle_modal_taskname__3nmjL",modal_add_details:"mystyle_modal_add_details__UF-Ut",modal_add_date:"mystyle_modal_add_date__3A6EV",modal_to_another_list:"mystyle_modal_to_another_list__1Xb2o",unchecked:"mystyle_unchecked__2Fcqt",checked:"mystyle_checked__3nDnW",tasklabel:"mystyle_tasklabel__Fsf30",completed_checkbox:"mystyle_completed_checkbox__13UcT",checkicon:"mystyle_checkicon__g_fP9",new_task_button:"mystyle_new_task_button__3DJpn",newtask:"mystyle_newtask__11WGQ",edittask:"mystyle_edittask__Vym12",task:"mystyle_task__JMFOw",checkedlabel:"mystyle_checkedlabel__30Qtw",new_task_box_button:"mystyle_new_task_box_button__AQ-KF",taskbox_name:"mystyle_taskbox_name__2RfeM",edit_taskbox:"mystyle_edit_taskbox__ODqUT",input_text:"mystyle_input_text__2Qu44",boxname_text:"mystyle_boxname_text__23QrD",taskbox:"mystyle_taskbox__1X4w_",photo_container:"mystyle_photo_container__1IUSZ",photo:"mystyle_photo__3ogAK",text_logo:"mystyle_text_logo__1hJuW",header:"mystyle_header__9wmYm",container:"mystyle_container__366Nk",buttonDecor:"mystyle_buttonDecor__tPn_v",fieldsetBorder:"mystyle_fieldsetBorder__360rA",Inline:"mystyle_Inline__17UVX",DefWidth:"mystyle_DefWidth__3fg5v",hide_input_border:"mystyle_hide_input_border__g_3MM"}},19:function(e,t,a){},36:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(15),r=a.n(c),o=(a(36),a(4)),l=a(5),i=a(7),d=a(6),h=(a(19),a(16)),j=a(9),b=a(1),m=a.n(b),u=a(0),_=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsx)(n.a.Fragment,{children:Object(u.jsx)("form",{action:"",className:m.a.DefWidth,children:Object(u.jsxs)("fieldset",{className:m.a.fieldsetBorder,children:[Object(u.jsx)("legend",{children:this.props.label}),Object(u.jsx)("input",{type:"text",value:this.props.value,placeholder:this.props.placeholder,onChange:function(t){e.props.handleChange(e.props.Property,t.target.value)},className:m.a.hide_input_border})]})})})}}]),a}(s.Component),p=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{children:Object(u.jsx)("form",{action:"",className:m.a.DefWidth,children:Object(u.jsxs)("fieldset",{className:m.a.fieldsetBorder,children:[Object(u.jsx)("legend",{children:this.props.label}),Object(u.jsx)("input",{type:"password",value:this.props.value,placeholder:this.props.placeholder,className:m.a.hide_input_border,onChange:function(t){e.props.handleChange(e.props.Property,t.target.value)}})]})})})}}]),a}(s.Component),O=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{style:{alignSelf:"flex-start"},children:[Object(u.jsx)("input",{type:"checkbox",name:"remember"}),Object(u.jsxs)("label",{htmlFor:"remember",style:{color:"white"},children:[this.props.value," "]})]})}}]),a}(s.Component),x=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleChange=function(e,t){s.setState(Object(j.a)({},e,t))},s.login=function(e){var t,a=JSON.parse(localStorage.getItem("state")),n=Object(h.a)(a);try{for(n.s();!(t=n.n()).done;)t.value.email===s.state.email?console.log("LoggedIN"):console.log("Wrong Email/Password")}catch(c){n.e(c)}finally{n.f()}},s.state={email:"",password:""},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)("h1",{children:"Log in! "}),Object(u.jsx)("br",{}),Object(u.jsx)(_,{Property:"email",label:"Email Address",handleChange:this.handleChange,value:this.state.email,placeholder:"Enter Username"}),Object(u.jsx)("br",{}),Object(u.jsx)(p,{Property:"password",label:"Password",handleChange:this.handleChange,value:this.state.password,placeholder:"Enter Password"}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:m.a.Inline,children:[Object(u.jsx)(O,{value:"Remember me"}),Object(u.jsxs)("span",{style:{alignSelf:"flex-end",position:"absolute"},children:[" ",Object(u.jsx)("a",{href:"google.com",style:{color:"white",textDecoration:"none"},children:"Forgot Password"})," "]})]}),Object(u.jsx)("button",{className:m.a.buttonDecor,onClick:function(t){e.login(t)},children:" Log in "})]})}}]),a}(s.Component),y=a(21),f=a(10),v=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{style:{alignSelf:"flex-start"},children:[Object(u.jsx)("input",{type:"checkbox",name:"remember"}),Object(u.jsxs)("label",{htmlFor:"remember",style:{color:"white"},children:[this.props.value," "]})]})}}]),a}(s.Component),k=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsx)(n.a.Fragment,{children:Object(u.jsx)("form",{action:"",className:m.a.DefWidth,children:Object(u.jsxs)("fieldset",{className:m.a.fieldsetBorder,children:[Object(u.jsx)("legend",{children:this.props.label}),Object(u.jsx)("input",{type:"text",value:this.props.value,placeholder:this.props.placeholder,onChange:function(t){e.props.setProperty(e.props.Property,t.target.value)},className:m.a.hide_input_border})]})})})}}]),a}(s.Component),g=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{children:Object(u.jsx)("form",{action:"",className:m.a.DefWidth,children:Object(u.jsxs)("fieldset",{className:m.a.fieldsetBorder,children:[Object(u.jsx)("legend",{children:this.props.label}),Object(u.jsx)("input",{type:"password",value:this.props.value,placeholder:this.props.placeholder,className:m.a.hide_input_border,onChange:function(t){e.props.setProperty(e.props.Property,t.target.value)}})]})})})}}]),a}(s.Component),N=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).signUp=function(){var e;(e=JSON.parse(localStorage.getItem("state")))?localStorage.setItem("state",JSON.stringify([].concat(Object(f.a)(e),[s.state]))):localStorage.setItem("state",JSON.stringify([s.state])),console.log(JSON.parse(localStorage.getItem("state")))},s.setProperty=function(e,t){s.setState(Object(y.a)(Object(y.a)({},s.state),{},Object(j.a)({},e,t)))},s.state={username:"",email:"",password:""},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)("h1",{children:"Sign Up"}),Object(u.jsx)("br",{}),Object(u.jsx)(k,{label:"Username",Property:"username",value:this.state.username,setProperty:this.setProperty,placeholder:"Enter Name"}),Object(u.jsx)("br",{}),Object(u.jsx)(k,{label:"Email Address",Property:"email",value:this.state.email,setProperty:this.setProperty,placeholder:"Enter Email Adress"}),Object(u.jsx)("br",{}),Object(u.jsx)(g,{label:"Password",Property:"password",value:this.state.password,setProperty:this.setProperty,placeholder:"Enter Password"}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:m.a.Inline,children:Object(u.jsx)(v,{value:" I accept the term and condition "})}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{id:"downBtn",className:m.a.buttonDecor,onClick:this.signUp,children:"Sign Up"})]})}}]),a}(s.Component),w=a(31),C=a.n(w),P=a(13),S=a(12),I=n.a.createContext();I.Provider,I.Consumer;var B=function(e){return r.a.createPortal(Object(u.jsx)("div",{className:m.a.editportal_container,children:Object(u.jsxs)("div",{className:m.a.editportal_innerbox,children:[Object(u.jsxs)("div",{className:m.a.modal_buttons,children:[Object(u.jsx)("div",{className:m.a.delete_task_icon,onClick:function(t){e.deleteTask(t,e.taskKey)},children:Object(u.jsx)(S.a,{icon:P.c})}),Object(u.jsx)("div",{className:m.a.close_modal_icon,onClick:function(){e.showModal(!1)},children:Object(u.jsx)(S.a,{icon:P.a})})]}),Object(u.jsx)("div",{className:m.a.modal_taskname,children:e.item.text}),Object(u.jsx)("textarea",{placeholder:"Add details",className:m.a.modal_add_details}),Object(u.jsx)("div",{className:m.a.modal_add_date,children:"Add date"}),Object(u.jsx)("div",{className:m.a.modal_to_another_list,children:"Move to another list"})]})}),document.getElementById("portal-root"))},D=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).check=function(e){e.target.checked?(e.target.className=m.a.checked,e.target.parentElement.className=m.a.checkedlabel):(e.target.className=m.a.unchecked,e.target.parentElement.className=m.a.task)},s.showModal=function(e){s.setState({showModal:e})},s.state={showModal:!1},s}return Object(l.a)(a,[{key:"render",value:function(){var e,t=this;return e=this.state.showModal?Object(u.jsx)(B,{showModal:this.showModal,deleteTask:this.props.deleteTask,item:this.props.item,taskKey:this.props.item.key}):null,Object(u.jsxs)("div",{className:m.a.task,children:[Object(u.jsx)("input",{type:"checkbox",className:m.a.unchecked,onChange:function(e){t.check(e)},name:"completed_checkbox",id:""}),Object(u.jsx)("div",{className:m.a.tasklabel,children:this.props.item.text}),Object(u.jsx)("div",{className:m.a.edittask,children:Object(u.jsx)(S.a,{icon:P.b,onClick:function(){t.showModal(!0)}})}),e]})}}]),a}(s.Component),T=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).addTask=function(e){var t=s.state.currentItem;if(""!==t.text){var a=[].concat(Object(f.a)(s.state.items),[t]);s.setState({items:a,currentItem:{text:"",key:""}})}},s.handleInput=function(e){s.setState({currentItem:{text:e.target.value,key:Date.now()}})},s.deleteTask=function(e,t){var a,n,c=s.state.items,r=Object(h.a)(c);try{for(r.s();!(n=r.n()).done;)(a=n.value).key===t&&(a.text="")}catch(o){r.e(o)}finally{r.f()}s.setState({items:c,currentItem:s.state.currentItem})},s.state={items:[],currentItem:{text:"",key:"",details:"",date:""}},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=Array.from(this.state.items).map((function(t,a){return""!==t.text?Object(u.jsx)(D,{item:t,deleteTask:e.deleteTask,editTask:e.editTask},a):null}));return Object(u.jsxs)("div",{className:m.a.taskbox,children:[Object(u.jsxs)("div",{className:m.a.taskbox_name,children:[Object(u.jsx)("div",{className:m.a.boxname_text,children:this.props.taskBoxName}),Object(u.jsx)("div",{className:m.a.edit_taskbox,onClick:function(){console.log("Edit task")},children:"..."})]}),Object(u.jsxs)("div",{className:m.a.newtask,children:[Object(u.jsx)("div",{className:m.a.new_task_button,onClick:function(t){e.addTask(t)},children:"+"}),Object(u.jsx)("input",{value:this.state.currentItem.text,className:m.a.input_text,placeholder:"New Task",onChange:function(t){e.handleInput(t)}})]}),t]})}}]),a}(s.Component),E=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).addTaskBox=function(){var e=prompt("Enter list Name");""!==e?s.setState({taskBoxes:[].concat(Object(f.a)(s.state.taskBoxes),[e])}):alert("Should not be empty!!!")},s.state={taskBoxes:[],imgURL:""},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=Math.floor(100*Math.random());C.a.get("https://picsum.photos/id/"+t+"/info").then((function(t){200===t.status&&e.setState({imgURL:t.data.download_url})}))}},{key:"render",value:function(){var e=this,t=this.state.taskBoxes.map((function(e){return Object(u.jsx)(T,{taskBoxName:e})}));return Object(u.jsxs)("div",{className:m.a.taskboard,children:[Object(u.jsxs)("header",{className:m.a.header,children:[Object(u.jsx)("div",{className:m.a.logo}),Object(u.jsx)("span",{className:m.a.text_logo,children:"TaskBoard"}),Object(u.jsx)("div",{className:m.a.photo_container,children:Object(u.jsx)("img",{className:m.a.photo,src:this.state.imgURL,alt:"",height:"100px",width:"100px"})})]}),t,Object(u.jsx)("div",{className:m.a.new_task_box_button,onClick:function(t){e.addTaskBox()},children:"+"})]})}}]),a}(s.Component),F=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleClick=function(e,t){"Login"===e?s.setState({element:Object(u.jsx)(x,{})}):"Sign Up"===e&&s.setState({element:Object(u.jsx)(N,{})})},s.state={element:""},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsx)(n.a.Fragment,{children:Object(u.jsx)(E,{})})}}]),a}(s.Component),M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,60)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root")),M()}},[[59,1,2]]]);
//# sourceMappingURL=main.9f9def3a.chunk.js.map