(this["webpackJsonppocket-change"]=this["webpackJsonppocket-change"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(7),i=n.n(c),l=(n(12),n(2)),r=(n(13),n(5)),o=n(0),u=function(e){var t=e.balance,n=e.setBalance,a=e.incomeBalance,s=e.setIncomeBalance,c=e.inputIncomeText,i=e.setInputIncomeText,l=e.inputDollarText,u=e.setDollarInputText,x=e.incomeEntries,j=e.setIncomeEntries;return Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{value:c,onChange:function(e){i(e.target.value)},type:"text",className:"income-input",placeholder:"Input income"}),Object(o.jsx)("input",{value:l,onChange:function(e){u(e.target.value)},type:"number",className:"income-input-value",placeholder:"$"}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),j([].concat(Object(r.a)(x),[{text:c,amount:parseInt(l),id:100*Math.random()}])),n(t+parseInt(l)),s(a+parseInt(l)),i(""),u("")},className:"income-button",type:"submit",children:Object(o.jsx)("i",{className:"fas fa-plus-square"})})]})},x=function(e){var t=e.balance,n=e.setBalance,a=e.incomeBalance,s=e.setIncomeBalance,c=e.incomeEntries,i=e.setIncomeEntries,l=e.incomeEntry,r=e.text,u=e.amount;return Object(o.jsxs)("div",{className:"income",children:[Object(o.jsx)("li",{className:"income-item",children:r}),Object(o.jsxs)("li",{className:"income-item",children:["$",u]}),Object(o.jsx)("button",{onClick:function(){n(t-u),s(a-u),i(c.filter((function(e){return e.id!==l.id})))},className:"trash-btn",children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})},j=function(e){var t=e.balance,n=e.setBalance,a=e.incomeBalance,s=e.setIncomeBalance,c=e.incomeEntries,i=e.setIncomeEntries;return Object(o.jsx)("div",{className:"income-container",children:Object(o.jsx)("ul",{className:"income-list",children:c.map((function(e){return Object(o.jsx)(x,{balance:t,setBalance:n,incomeBalance:a,setIncomeBalance:s,incomeEntries:c,setIncomeEntries:i,incomeEntry:e,id:e.id,text:e.text,amount:e.amount})}))})})},p=function(e){var t=e.balance,n=e.setBalance,a=e.expenseBalance,s=e.setExpenseBalance,c=e.inputExpenseText,i=e.setInputExpenseText,l=e.inputExpenseDollarText,u=e.setExpenseDollarInputText,x=e.expenseEntries,j=e.setExpenseEntries;return Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{value:c,onChange:function(e){i(e.target.value)},type:"text",className:"expense-input",placeholder:"Input an expense"}),Object(o.jsx)("input",{value:l,onChange:function(e){u(e.target.value)},type:"number",className:"expense-input-value",placeholder:"$"}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),j([].concat(Object(r.a)(x),[{text:c,amount:parseInt(l),id:100*Math.random()}])),n(t-parseInt(l)),s(a+parseInt(l)),i(""),u("")},className:"expense-button",type:"submit",children:Object(o.jsx)("i",{className:"fas fa-plus-square"})})]})},b=function(e){var t=e.balance,n=e.setBalance,a=e.expenseBalance,s=e.setExpenseBalance,c=e.expenseEntries,i=e.setExpenseEntries,l=e.expenseEntry,r=e.text,u=e.amount;return Object(o.jsxs)("div",{className:"expense",children:[Object(o.jsx)("li",{className:"expense-item",children:r}),Object(o.jsxs)("li",{className:"expense-item",children:["$",u]}),Object(o.jsx)("button",{onClick:function(){n(t+u),s(a-u),i(c.filter((function(e){return e.id!==l.id})))},className:"trash-btn",children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})},m=function(e){var t=e.balance,n=e.setBalance,a=e.expenseBalance,s=e.setExpenseBalance,c=e.expenseEntries,i=e.setExpenseEntries;return Object(o.jsx)("div",{className:"expense-container",children:Object(o.jsx)("ul",{className:"expense-list",children:c.map((function(e){return Object(o.jsx)(b,{balance:t,setBalance:n,expenseBalance:a,setExpenseBalance:s,expenseEntries:c,setExpenseEntries:i,expenseEntry:e,id:e.id,text:e.text,amount:e.amount})}))})})};var O=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(0),i=Object(l.a)(c,2),r=i[0],x=i[1],b=Object(a.useState)(0),O=Object(l.a)(b,2),d=O[0],h=O[1],E=Object(a.useState)(""),f=Object(l.a)(E,2),B=f[0],I=f[1],v=Object(a.useState)(""),N=Object(l.a)(v,2),g=N[0],T=N[1],C=Object(a.useState)([]),y=Object(l.a)(C,2),D=y[0],S=y[1],k=Object(a.useState)(""),$=Object(l.a)(k,2),F=$[0],L=$[1],M=Object(a.useState)(""),P=Object(l.a)(M,2),q=P[0],w=P[1],J=Object(a.useState)([]),A=Object(l.a)(J,2),z=A[0],G=A[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"Pocket Change"})}),Object(o.jsx)("div",{children:Object(o.jsxs)("h2",{className:"budget",children:["Leftover balance: $",n]})}),Object(o.jsx)(u,{balance:n,setBalance:s,incomeBalance:r,setIncomeBalance:x,inputIncomeText:B,setInputIncomeText:I,inputDollarText:g,setDollarInputText:T,incomeEntries:D,setIncomeEntries:S}),Object(o.jsx)("div",{children:Object(o.jsxs)("h3",{children:["Income: $",r]})}),Object(o.jsx)(j,{balance:n,setBalance:s,incomeBalance:r,setIncomeBalance:x,incomeEntries:D,setIncomeEntries:S}),Object(o.jsx)(p,{balance:n,setBalance:s,expenseBalance:d,setExpenseBalance:h,inputExpenseText:F,setInputExpenseText:L,inputExpenseDollarText:q,setExpenseDollarInputText:w,expenseEntries:z,setExpenseEntries:G}),Object(o.jsx)("div",{children:Object(o.jsxs)("h3",{children:["Expenses: $",d]})}),Object(o.jsx)(m,{balance:n,setBalance:s,expenseBalance:d,setExpenseBalance:h,expenseEntries:z,setExpenseEntries:G})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.c36e847d.chunk.js.map