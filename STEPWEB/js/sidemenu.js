// declare variable
var sidemenu__list1 = document.getElementById("sidemenu__list1");
var sidemenu__list2 = document.getElementById("sidemenu__list2");
var sidemenu__list3 = document.getElementById("sidemenu__list3");
var sidemenu__list4 = document.getElementById("sidemenu__list4");
var sideContent__list1 = document.getElementById("sideContent__list1");
var sideContent__list2 = document.getElementById("sideContent__list2");
var sideContent__list3 = document.getElementById("sideContent__list3");
var sideContent__list4 = document.getElementById("sideContent__list4");


sidemenu__list1.addEventListener("click", function(e) {
	hideandshow(1);
});

sidemenu__list2.addEventListener("click", function(e) {
	hideandshow(2);
});

sidemenu__list3.addEventListener("click", function(e) {
	hideandshow(3);
});

sidemenu__list4.addEventListener("click", function(e) {
	hideandshow(4);
});

function hideandshow (input) {
	if(input==1) {
		sidemenu__list1.style.borderLeft = `20px solid #1c1b1d`;
		sidemenu__list2.style.borderLeft = `none`;
		sidemenu__list3.style.borderLeft = `none`;
		sidemenu__list4.style.borderLeft = `none`;
		hideContent_2();
		hideContent_3();
		hideContent_4();
		showContent1();
		}
	else if(input==2) {
		hideContent_1();
		hideContent_3();
		hideContent_4();
		showContent2();
		sidemenu__list1.style.borderLeft = `none`;
		sidemenu__list3.style.borderLeft = `none`;
		sidemenu__list4.style.borderLeft = `none`;
		sidemenu__list2.style.borderLeft = `20px solid #1c1b1d`;
	}else if(input==3) {
	hideContent_1();
	hideContent_2();
	hideContent_4();
	showContent3();
	sidemenu__list1.style.borderLeft = `none`;
	sidemenu__list2.style.borderLeft = `none`;
	sidemenu__list4.style.borderLeft = `none`;
	sidemenu__list3.style.borderLeft = `20px solid #1c1b1d`;
	}
	else if(input==4) {
	hideContent_1();
	hideContent_2();
	hideContent_3();
	showContent4();
	sidemenu__list1.style.borderLeft = `none`;
	sidemenu__list2.style.borderLeft = `none`;
	sidemenu__list3.style.borderLeft = `none`;
	sidemenu__list4.style.borderLeft = `20px solid #1c1b1d`;
	$(".global__countries").counterUp({delay:20,time:1500});

	}
}

function hideContent_1() {
	sideContent__list1.style.visibility = `hidden`;
	sideContent__list1.style.opacity = `0`;
	sideContent__list1.style.transition = `visibility 0s, opacity 0.5s linear`;
}

function hideContent_2() {
	sideContent__list2.style.visibility = `hidden`;
	sideContent__list2.style.opacity = `0`;
	sideContent__list2.style.transition = `visibility 0s, opacity 0.5s linear`;
}

function hideContent_3() {
	sideContent__list3.style.visibility = `hidden`;
	sideContent__list3.style.opacity = `0`;
	sideContent__list3.style.transition = `visibility 0s, opacity 0.5s linear`;
}

function hideContent_4() {
	sideContent__list4.style.visibility = `hidden`;
	sideContent__list4.style.opacity = `0`;
	sideContent__list4.style.transition = `visibility 0s, opacity 0.5s linear`;
}

function showContent1() {
	sideContent__list1.style.visibility = `visible`;
	sideContent__list1.style.opacity = `1`;
}

function showContent2() {
	sideContent__list2.style.visibility = `visible`;
	sideContent__list2.style.opacity = `1`;
}

function showContent3() {
	sideContent__list3.style.visibility = `visible`;
	sideContent__list3.style.opacity = `1`;
}

function showContent4() {
	sideContent__list4.style.visibility = `visible`;
	sideContent__list4.style.opacity = `1`;
}