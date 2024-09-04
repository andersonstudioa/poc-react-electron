import { ipcMain as d, app as t, BrowserWindow as i } from "electron";
import { fileURLToPath as c } from "url";
import r from "path";
import f from "fs";
const h = c(import.meta.url), a = r.dirname(h);
function n() {
  const e = new i({
    width: 800,
    height: 600,
    fullscreen: !0,
    // Inicia em fullscreen
    autoHideMenuBar: !0,
    // Oculta a barra de menus
    webPreferences: {
      // Sem preload.js
      nodeIntegration: !0,
      // Habilitar a integração com Node.js
      contextIsolation: !1
      // Desabilitar isolamento de contexto
    }
  });
  process.env.NODE_ENV === "development" ? e.loadURL("http://localhost:5173") : e.loadFile(r.join(a, "dist/index.html")), e.show();
}
d.handle("read-json-file", async (e, l) => {
  try {
    const o = r.join(a, "dist", l), s = f.readFileSync(o, "utf-8");
    return JSON.parse(s);
  } catch (o) {
    throw console.error("Erro ao ler o arquivo JSON:", o), o;
  }
});
t.whenReady().then(() => {
  n(), t.on("activate", () => {
    i.getAllWindows().length === 0 && n();
  });
});
t.on("window-all-closed", () => {
  process.platform !== "darwin" && t.quit();
});
