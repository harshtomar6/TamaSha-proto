const electron = require('electron')
const {app, BrowserWindow } = electron

let mainWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 1100, height: 650, backgroundColor: '#2A363B', show: false})
  mainWindow.setMenu(null);
  mainWindow.loadURL('http://localhost:3000/')
  mainWindow.webContents.openDevTools();
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.focus()
  })
})