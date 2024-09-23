// API-Aufruf an den Nuxt-Server, um die Datei zu speichern
document.getElementById('save-file').addEventListener('click', async () => {
    const fileContent = 'Dies ist ein Beispieltext.';

    // API-Aufruf zum Speichern der Datei auf dem Server
    const response = await fetch('/api/saveFile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileContent }),
    });

    const result = await response.json();
    if (result.success) {
        alert('Datei erfolgreich auf dem Server gespeichert');
    } else {
        alert('Speichern auf dem Server fehlgeschlagen');
    }
});
