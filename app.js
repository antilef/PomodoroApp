const electron = require('electron');
const path = require('path');
const url = require('url');

const {app,BrowserWindow }  = electron;

let mainWin = null ;
app.on('ready',()=>{
  mainWin = new BrowserWindow({
    height:600,
    width:415,
    resizable:false,
    center:true
  })
  mainWin.loadFile('index.html');
  mainWin.on('close',()=>{
    mainWindow = null;
  })

})
