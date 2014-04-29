var a_1=false;
function q1_1 () {
	a_1=true;
}
function q1_2 () {
	a_1=false;
}
function q1_3 () {
	a_1=false;
}
function q1_4 () {
	a_1=false;
}
/*--------------*/
/*--------------*/
/*--------------*/
/*--------------*/
var a_2=false;
function q2_1 () {
	a_2=false;
}
function q2_2 () {
	a_2=true;
}
function q2_3 () {
	a_2=false;
}
function q2_4 () {
	a_2=false;
}
/*--------------*/
/*--------------*/
/*--------------*/
/*--------------*/
var a_3=false;
function q3_1 () {
	a_3=false;
}
function q3_2 () {
	a_3=false;
}
function q3_3 () {
	a_3=false;
}
function q3_4 () {
	a_3=true;
}
/*--------------*/
/*--------------*/
/*--------------*/
/*--------------*/
var a_4=false;
function q4_1 () {
	a_4=false;
}
function q4_2 () {
	a_4=false;
}
function q4_3 () {
	a_4=true;
}
function q4_4 () {
	a_4=false;
}
function show2_f1() {
	$("#q2").removeClass('hidden');
	$("#q1").animate({opacity: 0},500);
	setTimeout('$("#q1").addClass("hidden")',500);
	setTimeout('$("#q2").animate({opacity: 1},500)',500);
}
function show1_f2 () {
	$("#q1").removeClass('hidden');
	$("#q2").animate({opacity: 0},500);
	setTimeout('$("#q2").addClass("hidden")',500);
	setTimeout('$("#q1").animate({opacity: 1},500)',500);
}
function show3_f2 () {
	$("#q3").removeClass('hidden');
	$("#q2").animate({opacity: 0},500);
	setTimeout('$("#q2").addClass("hidden")',500);
	setTimeout('$("#q3").animate({opacity: 1},500)',500);
}
function show2_f3 () {
	$("#q2").removeClass('hidden');
	$("#q3").animate({opacity: 0},500);
	setTimeout('$("#q3").addClass("hidden")',500);
	setTimeout('$("#q2").animate({opacity: 1},500)',500);
}
function show3_f4 () {
	$("#q3").removeClass('hidden');
	$("#q4").animate({opacity: 0},500);
	setTimeout('$("#q4").addClass("hidden")',500);
	setTimeout('$("#q3").animate({opacity: 1},500)',500);
}
function show4_f3 () {
	$("#q4").removeClass('hidden');
	$("#q3").animate({opacity: 0},500);
	setTimeout('$("#q3").addClass("hidden")',500);
	setTimeout('$("#q4").animate({opacity: 1},500)',500);
}
var answers = new Array();
answers[0]=a_1;
answers[1]=a_2;
answers[2]=a_3;
answers[3]=a_4;
var if_is_mistake=false;
var suma=0;
function show_results () {
	$("#q1").addClass("hidden");
	$("#q2").addClass("hidden");
	$("#q3").addClass("hidden");
	$("#q4").animate({opacity: 0},500);
	setTimeout('$("#q4").addClass("hidden")',500);
	$("#image_gg").removeClass("hidden");
	setTimeout('$("#image_gg").animate({opacity: 1},500)',500);
	for(var i=0;i<answers.length;i++){
		if (answers[i]) {
			suma+=1;
		};
		if (!answers[i]) {
			if_is_mistake=true;
		};

	}
if (if_is_mistake) {
	var s='Помилки в питаннях&nbsp;&nbsp;';
	for(var i=0;i<answers.length;i++){
		if (!answers[i]) {
			s=s+i;
		};
	}
	document.getElementById('mistakes').innerHTML=s;
};
else{
	document.getElementById('mistakes').innerHTML='Браво! Помилок нема';
};

	document.getElementById('num_of_correct_answers').innerHTML=suma;

}