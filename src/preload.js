const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {

    selecionarPasta: () =>
        ipcRenderer.invoke("selecionar-pasta")

});