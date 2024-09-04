/* eslint-disable no-undef */
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  readJSONFile: (filePath) => ipcRenderer.invoke('read-json-file', filePath),
  on: (channel, func) => ipcRenderer.on(channel, func),
  send: (channel, data) => ipcRenderer.send(channel, data),
});