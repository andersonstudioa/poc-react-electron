import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('ipcRenderer', {
  on: (channel, func) => ipcRenderer.on(channel, func),
  send: (channel, data) => ipcRenderer.send(channel, data),
});
