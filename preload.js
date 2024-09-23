window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text 
    }

    for (const dependency of ['chrome', 'node', '']) {
        replaceText(`${dependency}-version)`, process.versions[dependency])
    }
})
// Mit contextBridge.exposeInMainWorld expose ich eine API, die sicherstellt, dass der Renderer-Prozess nur die definierten Funktionen nutzen kann.
// ipcRenderer.invoke wird verwendet, um IPC-Nachrichten an den Main-Prozess zu senden, z. B. zum Öffnen eines Dialogs oder Speichern von Dateien.

// Expose protected methods to allow Renderer process to use Electron APIs
contextBridge.exposeInMainWorld('', {
    openDialog: () => ipcRenderer.invoke('dialog:open'), // Dialog öffnen
    saveFile: (fileContent) => ipcRenderer.invoke('file:save', fileContent) // Datei speichern
})