<template lang="pug">
VContainer
    VRow
        VCol(cols="12")
            h1 Markdown to JSON
    VRow
        VCol(cols="12")
            // Dateiauswahl-Button
            VFileInput(label="Markdown Datei auswählen" @change="handleFileUpload" prepend-icon="mdi-file" outlined dense)
    VRow
        VCol(cols="12")
            // Textfeld zur Anzeige des Dateipfads
            VTextField(v-model="filePath" label="Ausgewählter Dateipfad" readonly prepend-icon="mdi-folder" outlined dense)
    VRow
        VCol(cols="12")
            // Button zum Speichern der Datei
            VBtn(@click="saveFile" color="yellow" dark) Speichern
</template>

<script lang="ts">
import { convertMarkdownToJson } from '../src/markdownToJson';

export default {
    data() {
        return {
            filePath: '', // Pfad der ausgewählten Datei
            fileContent: '', // Inhalt der Datei
        }
    },
    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0]; // Extrahiere die Datei aus dem Event
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.fileContent = e.target.result as string; // Speichere den Inhalt der Datei
                    this.filePath = file.name; // Zeige den Dateinamen im Textfeld an
                };
                reader.readAsText(file); // Lese die Datei als Text
            }
        },
        saveFile() {
            if (this.fileContent) {
                const jsonResult = JSON.stringify(convertMarkdownToJson(this.fileContent), null, 2); // Konvertiere in JSON

                // Erstelle ein Blob und löse den Download aus
                const blob = new Blob([jsonResult], { type: 'application/json' });
                const url = window.URL.createObjectURL(blob);

                // Erstelle ein temporäres Link-Element, um den Download auszulösen
                const a = document.createElement('a');
                const outputFileName = this.filePath.replace(/\.[^/.]+$/, "") + '.json'; // Setze den Dateinamen
                a.href = url;
                a.download = 'output.json'; // Dateiname
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a); // Entferne den Link nach dem Klick

                alert('Datei erfolgreich gespeichert');
            } else {
                alert('Keine Datei ausgewählt');
            }
        }
    },
};
</script>

<style lang="less">
@import '@/assets/styles/variables.less';

.h1 {
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.p {
  font-size: 18px;
}

.v-col {
    align-items: center;
    text-align: center;
}

.v-btn {
  margin: 10px;
}
</style>
