# CoGo Projekt

Um das ganze hier von 0 auf 100 zum fliegen zu bekommen müssen folgende Dinge vorhanden sein:
->node.js

dann können mit folgendem Befehl alle Abhängigkeiten installiert werden
(folgende Befehle müssen im Projekt root Ordner ausgeführt werden, also hier...)
npm install

danach stehen folgende Scripte (siehe package.json) zur verfügung
=>npm run start (Startet den Entwicklungsserver und baut die Webpage lokal)
=>npm run build (Baut eine Produktive Snowpack distibution (inaktiv!))
=>npm run wp (Baut die webpack JS Datei, die am ende auf dem Webserver zusammen mit allen Dateien im public Ordner landet)

die Finale Ordnerstruktur nach "npm run wp" muss wiefolgt aussehen

=> ORDNER_AUF_WEBSERVER
   inhalt = alle Dateien aus public
    => unterordner "dist"
       inhalt = alle Dateien aus dist

(∩｀-´)⊃━☆ﾟ.*･｡ﾟ