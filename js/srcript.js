// JavaScript Document
// 0 =false 1=true
// prima funzione
var fileName;//="geo/funzione1.ggb";
var frist = true;
var parameters = {
"id":"applet",
"scaleContainerClass": 'graphs',
"showMenuBar":false,
"showAlgebraInput":false,
"showToolBar":false,
"showResetIcon":false,
//"customToolBar":"0 77 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
"showToolBarHelp":false,
"enableLabelDrags":true,
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
//"ggbBase64":"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",
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
