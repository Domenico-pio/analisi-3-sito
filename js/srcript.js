// JavaScript Document
// 0 =false 1=true
// prima funzione
var fileName;//="geo/funzione1.ggb";
var frist = true;
// var parameters = {
// "id":"applet",
// "scaleContainerClass": 'graphs',
// "showMenuBar":false,
// "showAlgebraInput":false,
// "showToolBar":false,
// "showResetIcon":false,
// //"customToolBar":"0 77 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
// "showToolBarHelp":false,
// "enableLabelDrags":false,
// "enableShiftDragZoom":false,
// "enableRightClick":false,
// "errorDialogsActive":false,
// "useBrowserForJS":false,
// "allowStyleBar":false,
// "preventFocus":true,
// "showZoomButtons":false,
// "capturingThreshold":3,
// "appletOnLoad":function(api){ api.setValue("applet",1); api.setValue("applet2",0); api.setValue("applet3",0); api.setValue("applet4",0); api.setValue("applet5",0);  },
// "showFullscreenButton":false,
// "scale":1,
// "disableAutoScale":false,
// "allowUpscale":false,
// "clickToLoad":false,
// "appName":"classic",
// "buttonRounding":0.7,
// "buttonShadows":false,
// "language":"it",
//
// "filename":fileName,
// };
var parameters = {
"id":"applet",
"scaleContainerClass": 'graphs',
"showMenuBar":false,
"showAlgebraInput":false,
"showToolBar":false,
"showResetIcon":false,
"showToolBarHelp":false,
"enableLabelDrags":false,
"enableShiftDragZoom":false,
"enableRightClick":false,
"errorDialogsActive":false,
"useBrowserForJS":false,
"allowStyleBar":false,
"preventFocus":true,
"showZoomButtons":false,
"capturingThreshold":3,
"appletOnLoad":function(api){ api.setValue("applet",1); api.setValue("applet2",0); api.setValue("applet3",0); api.setValue("applet4",0); api.setValue("applet5",0);  },
"showFullscreenButton":false,
"scale":1,
"disableAutoScale":false,
"allowUpscale":false,
"clickToLoad":false,
"appName":"classic",
"buttonRounding":0.7,
"buttonShadows":false,
"language":"it",
"filename":fileName,

};
var parameters2 = {
"id":"applet2",
"scaleContainerClass": 'graphs',
"showMenuBar":false,
"showAlgebraInput":false,
"showToolBar":false,
"showResetIcon":false,
"showToolBarHelp":false,
"enableLabelDrags":false,
"enableShiftDragZoom":false,
"enableRightClick":false,
"errorDialogsActive":false,
"useBrowserForJS":false,
"allowStyleBar":false,
"preventFocus":true,
"showZoomButtons":false,
"capturingThreshold":3,
"appletOnLoad":function(api){ api.setValue("applet",0); api.setValue("applet2",1); api.setValue("applet3",0); api.setValue("applet4",0); api.setValue("applet5",0);  },
"showFullscreenButton":false,
"scale":1,
"disableAutoScale":false,
"allowUpscale":false,
"clickToLoad":false,
"appName":"classic",
"buttonRounding":0.7,
"buttonShadows":false,
"language":"it",
"filename":fileName,

};
var parameters3 = {
"id":"applet3",
"scaleContainerClass": 'graphs',
"showMenuBar":false,
"showAlgebraInput":false,
"showToolBar":false,
"showResetIcon":false,
"showToolBarHelp":false,
"enableLabelDrags":false,
"enableShiftDragZoom":false,
"enableRightClick":false,
"errorDialogsActive":false,
"useBrowserForJS":false,
"allowStyleBar":false,
"preventFocus":true,
"showZoomButtons":false,
"capturingThreshold":3,
"appletOnLoad":function(api){ api.setValue("applet",0); api.setValue("applet2",0); api.setValue("applet3",1); api.setValue("applet4",0); api.setValue("applet5",0);  },
"showFullscreenButton":false,
"scale":1,
"disableAutoScale":false,
"allowUpscale":false,
"clickToLoad":false,
"appName":"classic",
"buttonRounding":0.7,
"buttonShadows":false,
"language":"it",
"filename":fileName,
};
var parameters4 = {
"id":"applet4",
"scaleContainerClass": 'graphs',
"showMenuBar":false,
"showAlgebraInput":false,
"showToolBar":false,
"showResetIcon":false,
"enableLabelDrags":false,
"enableShiftDragZoom":false,
"enableRightClick":false,
"errorDialogsActive":false,
"useBrowserForJS":false,
"allowStyleBar":false,
"preventFocus":true,
"showZoomButtons":false,
"capturingThreshold":3,
"appletOnLoad":function(api){ api.setValue("applet",0); api.setValue("applet2",0); api.setValue("applet3",0); api.setValue("applet4",1); api.setValue("applet5",0);  },//api.setVisible('p',false);api.setVisible('epsilon',false);api.setVisible('b',true);  },
"showFullscreenButton":false,
"scale":1,
"disableAutoScale":false,
"allowUpscale":false,
"clickToLoad":false,
"appName":"classic",
"buttonRounding":0.7,
"buttonShadows":false,
"language":"it",
"filename":fileName,
};
var parameters5 = {
"id":"applet5",
"scaleContainerClass": 'graphs',
"showMenuBar":false,
"showAlgebraInput":false,
"showToolBar":false,
"showResetIcon":false,
"showToolBarHelp":false,
"enableLabelDrags":false,
"enableShiftDragZoom":false,
"enableRightClick":false,
"errorDialogsActive":false,
"useBrowserForJS":false,
"allowStyleBar":false,
"preventFocus":true,
"showZoomButtons":false,
"capturingThreshold":3,
"appletOnLoad":function(api){ api.setValue("applet",0); api.setValue("applet2",0); api.setValue("applet3",0); api.setValue("applet4",0); api.setValue("applet5",1);  },
"showFullscreenButton":false,
"scale":1,
"disableAutoScale":false,
"allowUpscale":false,
"clickToLoad":false,
"appName":"classic",
"buttonRounding":0.7,
"buttonShadows":false,
"language":"it",
"filename":fileName,
};
var parametersEx = {
"id":"appletEx",

"scaleContainerClass": 'graphs',
"showMenuBar":false,
"showAlgebraInput":false,
"showToolBar":false,
"showResetIcon":false,
//"customToolBar":"0 77 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
"showToolBarHelp":false,
"enableLabelDrags":false,
"enableShiftDragZoom":false,
"enableRightClick":false,
"errorDialogsActive":false,
"useBrowserForJS":false,
"allowStyleBar":false,
"preventFocus":true,
"showZoomButtons":false,
"capturingThreshold":3,
// add code here to run when the applet starts
//"appletOnLoad":function(api){ api.setVisible('a',true) },
"showFullscreenButton":false,
"scale":1,
"disableAutoScale":false,
"allowUpscale":false,
"clickToLoad":false,
"appName":"classic",
"buttonRounding":0.7,
"buttonShadows":false,
"language":"it",
// use this instead of ggbBase64 to load a material from geogebra.org
// "material_id":"RHYH3UQ8",
// use this instead of ggbBase64 to load a .ggb file
"filename":"geo/esempio1.ggb",
};
var parametersEx2 = {
"id":"appletEx2",

"scaleContainerClass": 'graphs',
"showMenuBar":false,
"showAlgebraInput":false,
"showToolBar":false,
"showResetIcon":false,
//"customToolBar":"0 77 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
"showToolBarHelp":false,
"enableLabelDrags":false,
"enableShiftDragZoom":false,
"enableRightClick":false,
"errorDialogsActive":false,
"useBrowserForJS":false,
"allowStyleBar":false,
"preventFocus":true,
"showZoomButtons":false,
"capturingThreshold":3,
// add code here to run when the applet starts
//"appletOnLoad":function(api){ api.setVisible('a',true) },
"showFullscreenButton":false,
"scale":1,
"disableAutoScale":false,
"allowUpscale":true,
"clickToLoad":false,
"appName":"classic",
"buttonRounding":0.7,
"buttonShadows":false,
"language":"it",
// use this instead of ggbBase64 to load a material from geogebra.org
// "material_id":"RHYH3UQ8",
// use this instead of ggbBase64 to load a .ggb file
"filename":"geo/esempio2.ggb",
};
var parametersEx3 = {
"id":"appletEX3",

"scaleContainerClass": 'graphs',
"showMenuBar":false,
"showAlgebraInput":false,
"showToolBar":false,
"showResetIcon":false,
//"customToolBar":"0 77 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
"showToolBarHelp":false,
"enableLabelDrags":false,
"enableShiftDragZoom":false,
"enableRightClick":false,
"errorDialogsActive":false,
"useBrowserForJS":false,
"allowStyleBar":false,
"preventFocus":true,
"showZoomButtons":false,
"capturingThreshold":3,
// add code here to run when the applet starts
//"appletOnLoad":function(api){ api.setVisible('a',true) },
"showFullscreenButton":false,
"scale":1,
"disableAutoScale":false,
"allowUpscale":true,
"clickToLoad":false,
"appName":"classic",
"buttonRounding":0.7,
"buttonShadows":false,
"language":"it",
// use this instead of ggbBase64 to load a material from geogebra.org
// "material_id":"RHYH3UQ8",
// use this instead of ggbBase64 to load a .ggb file
"filename":"geo/esempio3.ggb",
};
// is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
var views = {'is3D': 0,'AV': 0,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};
var applet = new GGBApplet(parameters,views);
var applet2 = new GGBApplet(parameters2,views);
var applet3 = new GGBApplet(parameters3, views);
var applet4 = new GGBApplet(parameters4, views);
var applet5 = new GGBApplet(parameters5, views);
var appletEx= new GGBApplet(parametersEx, views);
var appletEx2= new GGBApplet(parametersEx2, views);
var appletEx3= new GGBApplet(parametersEx3, views);
var xhttp = new XMLHttpRequest();


function writeText(xml,option) {
    var xmlDoc = xml.responseXML;
		// var x = xmlDoc.getElementsByTagName("fileName")[0].childNodes[0];
		//var y = x.childNodes[0];
		// var file = x.nodeValue;
		//var x=xlmDoc.getElementsByTagName("funzione")];
		var text = xmlDoc.getElementsByTagName("text")[option-1].getElementsByTagName("desc");
		var formula=xmlDoc.getElementsByTagName("formula")[option-1].childNodes[0];
		var file=xmlDoc.getElementsByTagName("fileName")[option-1].childNodes[0];
		//document.getElementById("formula").innerHTML=formula.nodeValue='\\[\\f_n(x)=\\sqrt{x+\\frac{1}{n}}\\]';
		document.getElementById("formula").innerHTML=formula.nodeValue;
		MathJax.typesetPromise().then(() => {
  	// modify the DOM here
		for (var i = 1; i < 6; i++) {
			console.log(text[i-1].childNodes[0].nodeValue);
			document.getElementById("ggbApplet"+i+"text").innerHTML= text[i-1].childNodes[0].nodeValue;
		}
  	MathJax.typesetPromise();
		}).catch((err) => console.log(err.message));

		return file.nodeValue;

}



function plots(){
		//console.log(parameters);
		//console.log(parameters2);
		applet.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');
		applet2.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');
		applet3.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');
		applet4.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');
		applet5.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');
		applet.inject('ggbApplet');
		applet2.inject('ggbApplet2');
		applet3.inject('ggbApplet3');
		applet4.inject('ggbApplet4');
		applet5.inject('ggbApplet5');
	}

function cambia(){
	var gallery=document.getElementById("confronto");
	var option=document.getElementById("select").value;
	var item;
	xhttp.open("GET", "text.xml", true);
	xhttp.send();
	xhttp.onreadystatechange=function(){
		if (this.readyState == 4 && this.status == 200) {
			 item=writeText(this,option);
			 //console.log("prim "+fileName);
			 fileName="geo/"+item;
			 if(frist){
			 		//onsole.log(fileName);
			 		gallery.style.display="";
					parameters.filename=fileName;
					parameters2.filename=fileName;
					parameters3.filename=fileName;
					parameters4.filename=fileName;
					parameters5.filename=fileName;
			 		plots();
			 		frist=false;
			 		//console.log(frist);
		 	}else{
			 		//gallery.style.display="";
			 		//console.log(fileName+" in ");
			 		//console.log(frist);
			 		//plots();
			 		applet.openFile(fileName);
			 		applet2.openFile(fileName);
			 		applet3.openFile(fileName);
			 		applet4.openFile(fileName);
			 		applet5.openFile(fileName);
		 	};
		}else {
			console.log(this.status);
		}
	};
}

window.onload=function (){
	appletEx.inject('ggbExemple');
	appletEx2.inject('ggbExemple2');
	appletEx3.inject('ggbExemple3');
	//plots();
	// var text=document.getElementById("prova").innerHTML;
	// console.log(text);


};
