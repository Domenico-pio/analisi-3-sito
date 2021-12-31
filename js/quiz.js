function check() {
  var risp=document.getElementById("risposta");
  var opzioni= document.getElementsByName("risp");
  console.log(opzioni[0].name);
  for (var i = 0; i < opzioni.length; i++) {
    opzioni[i].disabled=true;
  }

  if(document.getElementById("correct").checked){

    document.getElementById("risultato").innerHTML="risposta correta";

  }
  else {
    document.getElementById("risultato").innerHTML="risposta sbagliata";

  };
  risp.style.display="";
}

var parametersQuiz = {
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
//"appletOnLoad":function(api){ api.setValue("applet",0); api.setValue("applet2",1); api.setValue("applet3",0); api.setValue("applet4",0); api.setValue("applet5",0);  },
"showFullscreenButton":false,
"scale":1,
"disableAutoScale":false,
"allowUpscale":false,
"clickToLoad":false,
"appName":"classic",
"buttonRounding":0.7,
"buttonShadows":false,
"language":"it",
"filename":"geo/quiz.ggb",

};
var views = {'is3D': 0,'AV': 0,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};
var appquiz= new GGBApplet(parametersQuiz,views);
window.onload=function () {
  appquiz.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');
  appquiz.inject('ggbquiz');
}
