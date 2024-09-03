import { contextBridge, ipcRenderer } from 'electron';

// Expor APIs seguras para o processo de renderização
contextBridge.exposeInMainWorld('api', {
  // Exemplo de método para enviar uma mensagem ao processo principal
  sendMessage: (channel, data) => ipcRenderer.send(channel, data),
  // Exemplo de método para ouvir mensagens do processo principal
  onMessage: (channel, callback) => ipcRenderer.on(channel, (event, ...args) => callback(...args)),
});
