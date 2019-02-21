gdjs.GameOverCode = {};
gdjs.GameOverCode.GDRulesButtonObjects1= [];
gdjs.GameOverCode.GDRulesButtonObjects2= [];
gdjs.GameOverCode.GDworktObjects1= [];
gdjs.GameOverCode.GDworktObjects2= [];
gdjs.GameOverCode.GDBackTextObjects1= [];
gdjs.GameOverCode.GDBackTextObjects2= [];
gdjs.GameOverCode.GDbackgroundObjects1= [];
gdjs.GameOverCode.GDbackgroundObjects2= [];
gdjs.GameOverCode.GDhazardtObjects1= [];
gdjs.GameOverCode.GDhazardtObjects2= [];
gdjs.GameOverCode.GDfuntObjects1= [];
gdjs.GameOverCode.GDfuntObjects2= [];
gdjs.GameOverCode.GDCanvasObjects1= [];
gdjs.GameOverCode.GDCanvasObjects2= [];
gdjs.GameOverCode.GDBuildingsObjects1= [];
gdjs.GameOverCode.GDBuildingsObjects2= [];
gdjs.GameOverCode.GDLifeLineObjects1= [];
gdjs.GameOverCode.GDLifeLineObjects2= [];
gdjs.GameOverCode.GDButtonObjects1= [];
gdjs.GameOverCode.GDButtonObjects2= [];
gdjs.GameOverCode.GDcloseObjects1= [];
gdjs.GameOverCode.GDcloseObjects2= [];
gdjs.GameOverCode.GDBackgroundObjects1= [];
gdjs.GameOverCode.GDBackgroundObjects2= [];
gdjs.GameOverCode.GDPlayAgainObjects1= [];
gdjs.GameOverCode.GDPlayAgainObjects2= [];
gdjs.GameOverCode.GDGameOverObjects1= [];
gdjs.GameOverCode.GDGameOverObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDcloseObjects1Objects = Hashtable.newFrom({"close": gdjs.GameOverCode.GDcloseObjects1});gdjs.GameOverCode.eventsList0xca9a38 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("www.kredytofer.pl/", runtimeScene);
}}

}


}; //End of gdjs.GameOverCode.eventsList0xca9a38
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.GameOverCode.GDButtonObjects1});gdjs.GameOverCode.eventsList0xc69b88 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.GameOverCode.eventsList0xc69b88
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.GameOverCode.GDButtonObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDcloseObjects1Objects = Hashtable.newFrom({"close": gdjs.GameOverCode.GDcloseObjects1});gdjs.GameOverCode.eventsList0xb0b28 = function(runtimeScene) {

{

gdjs.GameOverCode.GDcloseObjects1.createFrom(runtimeScene.getObjects("close"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDcloseObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDcloseObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDcloseObjects1[i].setOpacity(100);
}
}
{ //Subevents
gdjs.GameOverCode.eventsList0xca9a38(runtimeScene);} //End of subevents
}

}


{

gdjs.GameOverCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDButtonObjects1 */
gdjs.GameOverCode.GDPlayAgainObjects1.createFrom(runtimeScene.getObjects("PlayAgain"));
{for(var i = 0, len = gdjs.GameOverCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDButtonObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDPlayAgainObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayAgainObjects1[i].setOpacity(100);
}
}
{ //Subevents
gdjs.GameOverCode.eventsList0xc69b88(runtimeScene);} //End of subevents
}

}


{

gdjs.GameOverCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDButtonObjects1 */
gdjs.GameOverCode.GDPlayAgainObjects1.createFrom(runtimeScene.getObjects("PlayAgain"));
{for(var i = 0, len = gdjs.GameOverCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDButtonObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDPlayAgainObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayAgainObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.GameOverCode.GDcloseObjects1.createFrom(runtimeScene.getObjects("close"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDcloseObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDcloseObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDcloseObjects1[i].setOpacity(255);
}
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(1000);
}{runtimeScene.getGame().getVariables().getFromIndex(53).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(71).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(65).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(59).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(66).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(60).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(72).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(54).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(67).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(61).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(73).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(55).setNumber(0);
}{runtimeScene.getGame().getVariables().get("money").setNumber(2000);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setString("No job");
}{runtimeScene.getGame().getVariables().getFromIndex(8).setString("High school");
}{runtimeScene.getGame().getVariables().getFromIndex(6).setString("No relationship");
}{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(34).setNumber(2018);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(33).setNumber(9);
}{runtimeScene.getGame().getVariables().getFromIndex(126).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(42).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(35).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(40).setNumber(0);
}}

}


}; //End of gdjs.GameOverCode.eventsList0xb0b28


gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.GameOverCode.GDRulesButtonObjects1.length = 0;
gdjs.GameOverCode.GDRulesButtonObjects2.length = 0;
gdjs.GameOverCode.GDworktObjects1.length = 0;
gdjs.GameOverCode.GDworktObjects2.length = 0;
gdjs.GameOverCode.GDBackTextObjects1.length = 0;
gdjs.GameOverCode.GDBackTextObjects2.length = 0;
gdjs.GameOverCode.GDbackgroundObjects1.length = 0;
gdjs.GameOverCode.GDbackgroundObjects2.length = 0;
gdjs.GameOverCode.GDhazardtObjects1.length = 0;
gdjs.GameOverCode.GDhazardtObjects2.length = 0;
gdjs.GameOverCode.GDfuntObjects1.length = 0;
gdjs.GameOverCode.GDfuntObjects2.length = 0;
gdjs.GameOverCode.GDCanvasObjects1.length = 0;
gdjs.GameOverCode.GDCanvasObjects2.length = 0;
gdjs.GameOverCode.GDBuildingsObjects1.length = 0;
gdjs.GameOverCode.GDBuildingsObjects2.length = 0;
gdjs.GameOverCode.GDLifeLineObjects1.length = 0;
gdjs.GameOverCode.GDLifeLineObjects2.length = 0;
gdjs.GameOverCode.GDButtonObjects1.length = 0;
gdjs.GameOverCode.GDButtonObjects2.length = 0;
gdjs.GameOverCode.GDcloseObjects1.length = 0;
gdjs.GameOverCode.GDcloseObjects2.length = 0;
gdjs.GameOverCode.GDBackgroundObjects1.length = 0;
gdjs.GameOverCode.GDBackgroundObjects2.length = 0;
gdjs.GameOverCode.GDPlayAgainObjects1.length = 0;
gdjs.GameOverCode.GDPlayAgainObjects2.length = 0;
gdjs.GameOverCode.GDGameOverObjects1.length = 0;
gdjs.GameOverCode.GDGameOverObjects2.length = 0;

gdjs.GameOverCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['GameOverCode'] = gdjs.GameOverCode;
