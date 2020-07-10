// Kurt Kaiser
// Link to Form: https://forms.gle/btnuC7CW4Qoy3GMX9

var form = FormApp.getActiveForm();

function onOpen() {
  var ui = FormApp.getUi(); 
  ui.createMenu('Auto System')
    .addItem('Form', 'showFormSidebar')
    .addSeparator()
    .addToUi();
}

function showFormSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Form')
    .setTitle('Edit Data')
    .setWidth(300);
  FormApp.getUi()
    .showSidebar(html);
}

function getData(num){
  var temp = form.getItems();
  return temp[num].getTitle();
}
