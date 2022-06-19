var electron = require('electron');

var app = electron.app
var BrowserWindow = electron.BrowserWindow
var process = electron.process

var mainWindow = null


app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200, height: 800, webPreferences: { nodeIntegration: true }
    })
    mainWindow.loadURL('https://rpg.blue/')
    require('./menu.js')({app:app,mainWindow:mainWindow})
    mainWindow.on('close', () => {
        mainWindow = null
    })
})
