/* eslint-disable no-undef */
import { app, BrowserWindow, ipcMain } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

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
      // Sem preload.js
      nodeIntegration: true, // Habilitar a integração com Node.js
      contextIsolation: false, // Desabilitar isolamento de contexto
    },
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173'); // Durante o desenvolvimento
  } else {
    win.loadFile(path.join(__dirname, 'dist/index.html')); // No modo de produção
  }

  win.show();
}

// Handler para leitura do JSON
ipcMain.handle('read-json-file', async (event, filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error);
    throw error;
  }
});

// Handler para leitura do JSON
ipcMain.handle('load-json-file', async (event, filePath) => {
  //TODO
  console.log(filePath);
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
