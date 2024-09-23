const path = require('path');
const fs = require('fs');

async function saveJsonFile(filePath, fileContent) {
    try {
        fs.writeFileSync(filePath, fileContent, 'utf8');
        console.log('Datei erfolgreich gespeichert:', filePath);
        return { success: true };
    } catch (error) {
        console.error('Fehler beim Speichern der Datei:', error);
        return { success: false };
    }
}

const jsonData = JSON.stringify({ message: 'Hallo, Welt!' }, null, 2);
saveJsonFile(path.join(__dirname, 'output.json'), jsonData);

console.log('Nuxt-Projekt läuft ohne Electron.');

