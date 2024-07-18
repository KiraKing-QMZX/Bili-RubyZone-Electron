// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron')
const path = require('node:path')
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
icon:'./res/1721191305376.ico',
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
const template = [
  {
    label: '操作',
    submenu: [
    { role: 'forcereload ' , label:'刷新'},
    { role: 'minimize' , label:'最小化到任务栏'},
    { role: 'quit' , label:'退出'}
    ]
  }]
mainWindow.setFullScreen(true);

  mainWindow.loadFile('index.html')
  const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {

    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})