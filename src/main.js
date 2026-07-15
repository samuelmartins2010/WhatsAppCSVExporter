const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 750,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(createWindow);

ipcMain.handle("selecionar-pasta", async () => {

    const resultado = await dialog.showOpenDialog(win, {
        properties: ["openDirectory"]
    });

    if (resultado.canceled)
        return [];

    const pasta = resultado.filePaths[0];

    const arquivos = fs.readdirSync(pasta)
        .filter(a => a.toLowerCase().endsWith(".txt"))
        .map(nome => ({
            nome,
            caminho: path.join(pasta, nome)
        }));

    return arquivos;

});