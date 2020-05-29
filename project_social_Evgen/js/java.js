"use strict";
function show_rule1(){
	document.getElementById("r1").style.display = "block";
	document.getElementById("r2").style.display = "none";
	document.getElementById("r3").style.display = "none";
	document.getElementById("r4").style.display = "none";
	document.getElementById("r5").style.display = "none";
	document.getElementById("r6").style.display = "none";
}
function show_rule2(){
	document.getElementById("r2").style.display = "block";
	document.getElementById("r1").style.display = "none";
	document.getElementById("r3").style.display = "none";
	document.getElementById("r4").style.display = "none";
	document.getElementById("r5").style.display = "none";
	document.getElementById("r6").style.display = "none";
}
function show_rule3(){
	document.getElementById("r3").style.display = "block";
	document.getElementById("r2").style.display = "none";
	document.getElementById("r1").style.display = "none";
	document.getElementById("r4").style.display = "none";
	document.getElementById("r5").style.display = "none";
	document.getElementById("r6").style.display = "none";
}
function show_rule4(){
	document.getElementById("r4").style.display = "block";
	document.getElementById("r2").style.display = "none";
	document.getElementById("r1").style.display = "none";
	document.getElementById("r3").style.display = "none";
	document.getElementById("r5").style.display = "none";
	document.getElementById("r6").style.display = "none";
}
function show_rule5(){
	document.getElementById("r5").style.display = "block";
	document.getElementById("r4").style.display = "none";
	document.getElementById("r3").style.display = "none";
	document.getElementById("r2").style.display = "none";
	document.getElementById("r1").style.display = "none";
	document.getElementById("r6").style.display = "none";
}
function show_rule6(){
	document.getElementById("r6").style.display = "block";
	document.getElementById("r5").style.display = "none";
	document.getElementById("r4").style.display = "none";
	document.getElementById("r3").style.display = "none";
	document.getElementById("r2").style.display = "none";
	document.getElementById("r1").style.display = "none";
}
function areaRectangle(){
	let a=document.form1.t1.value;
	let b=document.form1.t2.value;
	let c=document.form1.t3.value;
	let result= ((10*a)+(6.25*b)-(5*c)+5)*1.375;
	document.form1.area.value=result;
}
function areaRectangle_w(){
	let a_w=document.form1_w.t1_w.value;
	let b_w=document.form1_w.t2_w.value;
	let c_w=document.form1_w.t3_w.value;
	let result_w= ((10*a_w)+(6.25*b_w)-(5*c_w)-161)*1.2;
	document.form1_w.area_w.value=result_w;
}