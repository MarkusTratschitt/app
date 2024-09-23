import { promises as fs } from 'fs';
import { join } from 'path';

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // Inhalt vom Frontend
  const filePath = join(process.cwd(), 'output.json'); // Speicherpfad der Datei

  try {
    await fs.writeFile(filePath, body.fileContent, 'utf-8'); // Datei speichern
    return { success: true };
  } catch (error) {
    console.error('Fehler beim Speichern der Datei:', error);
    return { success: false };
  }
});
