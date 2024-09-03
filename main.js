/* eslint-disable no-undef */
import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';

// Resolver __dirname em módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true, // Inicia em fullscreen
    autoHideMenuBar: true, // Oculta a barra de menus
    webPreferences: {
      //preload: path.join(__dirname, 'preload.js'), // Adiciona o preload script
      nodeIntegration: false, // Desabilitar a integração com Node.js para segurança
      contextIsolation: true, // Manter o isolamento de contexto
    },
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173'); // Durante o desenvolvimento
  } else {
    win.loadFile(path.join(__dirname, 'dist/index.html')); // No modo de produção
  }

  win.show();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
