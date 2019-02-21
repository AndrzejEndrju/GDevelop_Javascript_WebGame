gdjs.BuyForHomeCode = {};
gdjs.BuyForHomeCode.GDRulesButtonObjects1= [];
gdjs.BuyForHomeCode.GDRulesButtonObjects2= [];
gdjs.BuyForHomeCode.GDworktObjects1= [];
gdjs.BuyForHomeCode.GDworktObjects2= [];
gdjs.BuyForHomeCode.GDBackTextObjects1= [];
gdjs.BuyForHomeCode.GDBackTextObjects2= [];
gdjs.BuyForHomeCode.GDbackgroundObjects1= [];
gdjs.BuyForHomeCode.GDbackgroundObjects2= [];
gdjs.BuyForHomeCode.GDhazardtObjects1= [];
gdjs.BuyForHomeCode.GDhazardtObjects2= [];
gdjs.BuyForHomeCode.GDfuntObjects1= [];
gdjs.BuyForHomeCode.GDfuntObjects2= [];
gdjs.BuyForHomeCode.GDCanvasObjects1= [];
gdjs.BuyForHomeCode.GDCanvasObjects2= [];
gdjs.BuyForHomeCode.GDBuildingsObjects1= [];
gdjs.BuyForHomeCode.GDBuildingsObjects2= [];
gdjs.BuyForHomeCode.GDLifeLineObjects1= [];
gdjs.BuyForHomeCode.GDLifeLineObjects2= [];
gdjs.BuyForHomeCode.GDButtonObjects1= [];
gdjs.BuyForHomeCode.GDButtonObjects2= [];
gdjs.BuyForHomeCode.GDcloseObjects1= [];
gdjs.BuyForHomeCode.GDcloseObjects2= [];
gdjs.BuyForHomeCode.GDmenuObjects1= [];
gdjs.BuyForHomeCode.GDmenuObjects2= [];
gdjs.BuyForHomeCode.GDBackObjects1= [];
gdjs.BuyForHomeCode.GDBackObjects2= [];

gdjs.BuyForHomeCode.conditionTrue_0 = {val:false};
gdjs.BuyForHomeCode.condition0IsTrue_0 = {val:false};
gdjs.BuyForHomeCode.condition1IsTrue_0 = {val:false};


gdjs.BuyForHomeCode.mapOfGDgdjs_46BuyForHomeCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.BuyForHomeCode.GDButtonObjects1});gdjs.BuyForHomeCode.eventsList0xbfa1d0 = function(runtimeScene) {

{


gdjs.BuyForHomeCode.condition0IsTrue_0.val = false;
{
gdjs.BuyForHomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.BuyForHomeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BuyView", false);
}}

}


}; //End of gdjs.BuyForHomeCode.eventsList0xbfa1d0
gdjs.BuyForHomeCode.mapOfGDgdjs_46BuyForHomeCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.BuyForHomeCode.GDButtonObjects1});gdjs.BuyForHomeCode.mapOfGDgdjs_46BuyForHomeCode_46GDcloseObjects1Objects = Hashtable.newFrom({"close": gdjs.BuyForHomeCode.GDcloseObjects1});gdjs.BuyForHomeCode.eventsList0x8476b8 = function(runtimeScene) {

{


gdjs.BuyForHomeCode.condition0IsTrue_0.val = false;
{
gdjs.BuyForHomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.BuyForHomeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("www.kredytofer.pl/", runtimeScene);
}}

}


}; //End of gdjs.BuyForHomeCode.eventsList0x8476b8
gdjs.BuyForHomeCode.mapOfGDgdjs_46BuyForHomeCode_46GDcloseObjects1Objects = Hashtable.newFrom({"close": gdjs.BuyForHomeCode.GDcloseObjects1});gdjs.BuyForHomeCode.eventsList0xb0b28 = function(runtimeScene) {

{

gdjs.BuyForHomeCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.BuyForHomeCode.condition0IsTrue_0.val = false;
{
gdjs.BuyForHomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BuyForHomeCode.mapOfGDgdjs_46BuyForHomeCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.BuyForHomeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BuyForHomeCode.GDButtonObjects1 */
{for(var i = 0, len = gdjs.BuyForHomeCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.BuyForHomeCode.GDButtonObjects1[i].setOpacity(100);
}
}
{ //Subevents
gdjs.BuyForHomeCode.eventsList0xbfa1d0(runtimeScene);} //End of subevents
}

}


{

gdjs.BuyForHomeCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.BuyForHomeCode.condition0IsTrue_0.val = false;
{
gdjs.BuyForHomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BuyForHomeCode.mapOfGDgdjs_46BuyForHomeCode_46GDButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.BuyForHomeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BuyForHomeCode.GDButtonObjects1 */
{for(var i = 0, len = gdjs.BuyForHomeCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.BuyForHomeCode.GDButtonObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.BuyForHomeCode.GDcloseObjects1.createFrom(runtimeScene.getObjects("close"));

gdjs.BuyForHomeCode.condition0IsTrue_0.val = false;
{
gdjs.BuyForHomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BuyForHomeCode.mapOfGDgdjs_46BuyForHomeCode_46GDcloseObjects1Objects, runtimeScene, true, false);
}if (gdjs.BuyForHomeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BuyForHomeCode.GDcloseObjects1 */
{for(var i = 0, len = gdjs.BuyForHomeCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.BuyForHomeCode.GDcloseObjects1[i].setOpacity(100);
}
}
{ //Subevents
gdjs.BuyForHomeCode.eventsList0x8476b8(runtimeScene);} //End of subevents
}

}


{

gdjs.BuyForHomeCode.GDcloseObjects1.createFrom(runtimeScene.getObjects("close"));

gdjs.BuyForHomeCode.condition0IsTrue_0.val = false;
{
gdjs.BuyForHomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BuyForHomeCode.mapOfGDgdjs_46BuyForHomeCode_46GDcloseObjects1Objects, runtimeScene, true, true);
}if (gdjs.BuyForHomeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BuyForHomeCode.GDcloseObjects1 */
{for(var i = 0, len = gdjs.BuyForHomeCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.BuyForHomeCode.GDcloseObjects1[i].setOpacity(255);
}
}}

}


{


{
}

}


}; //End of gdjs.BuyForHomeCode.eventsList0xb0b28


gdjs.BuyForHomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.BuyForHomeCode.GDRulesButtonObjects1.length = 0;
gdjs.BuyForHomeCode.GDRulesButtonObjects2.length = 0;
gdjs.BuyForHomeCode.GDworktObjects1.length = 0;
gdjs.BuyForHomeCode.GDworktObjects2.length = 0;
gdjs.BuyForHomeCode.GDBackTextObjects1.length = 0;
gdjs.BuyForHomeCode.GDBackTextObjects2.length = 0;
gdjs.BuyForHomeCode.GDbackgroundObjects1.length = 0;
gdjs.BuyForHomeCode.GDbackgroundObjects2.length = 0;
gdjs.BuyForHomeCode.GDhazardtObjects1.length = 0;
gdjs.BuyForHomeCode.GDhazardtObjects2.length = 0;
gdjs.BuyForHomeCode.GDfuntObjects1.length = 0;
gdjs.BuyForHomeCode.GDfuntObjects2.length = 0;
gdjs.BuyForHomeCode.GDCanvasObjects1.length = 0;
gdjs.BuyForHomeCode.GDCanvasObjects2.length = 0;
gdjs.BuyForHomeCode.GDBuildingsObjects1.length = 0;
gdjs.BuyForHomeCode.GDBuildingsObjects2.length = 0;
gdjs.BuyForHomeCode.GDLifeLineObjects1.length = 0;
gdjs.BuyForHomeCode.GDLifeLineObjects2.length = 0;
gdjs.BuyForHomeCode.GDButtonObjects1.length = 0;
gdjs.BuyForHomeCode.GDButtonObjects2.length = 0;
gdjs.BuyForHomeCode.GDcloseObjects1.length = 0;
gdjs.BuyForHomeCode.GDcloseObjects2.length = 0;
gdjs.BuyForHomeCode.GDmenuObjects1.length = 0;
gdjs.BuyForHomeCode.GDmenuObjects2.length = 0;
gdjs.BuyForHomeCode.GDBackObjects1.length = 0;
gdjs.BuyForHomeCode.GDBackObjects2.length = 0;

gdjs.BuyForHomeCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['BuyForHomeCode'] = gdjs.BuyForHomeCode;
