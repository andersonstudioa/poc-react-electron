import { app, BrowserWindow } from "electron";
//import { join } from "path";

function createWindow() {
  const win = new BrowserWindow({
    show: false
  });
  win.maximize();
  win.loadURL("http://localhost:5173");
  win.show();
}

app.whenReady().then(() => {
  createWindow();

  app.on("active", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  // eslint-disable-next-line no-undef
  if (process.platform !== "darwin") app.quit();
});