/*  Modulo HTTP

- serve per creare un web server 
- importare http
- creare un server con risposta default
- mettere server in ascolto
- gestire richiesta con routing e errore

*/

//Importare server http

const http = require('http');

const server = http.createServer((req,res)=>{

    /* res.write('benenuto sul nostro sito');
    res.end */

    if(req.url === "/"){
        res.end("Benvenuto nel sito");
    }else if(req.url === "/AmorosoFranz"){
        res.end(`<h1>La spiegazione del modulo HTTP</h1><br><p>Questo codice crea un server HTTP utilizzando il modulo 'http' di Node.js.
        <br>
        1. Importa il modulo 'http' utilizzando 'require('http');'.
        <br>
        <br>
        2. Crea un server utilizzando la funzione 'createServer()' del modulo 'http' che accetta una funzione di callback come parametro. Questa callback viene eseguita ogni volta che viene effettuata una richiesta al server. La funzione di callback prende due argomenti: 'req' (oggetto della richiesta) e 'res' (oggetto della risposta).
        <br>
        <br>
        3. All'interno della callback, utilizza un'istruzione 'if-else if-else' per gestire le diverse richieste del server. In base all'URL della richiesta ('req.url'), vengono prese diverse azioni:
            <br>
           - Se l'URL : "/" (la homepage), viene inviata una risposta con il testo "Benvenuto sul sito" utilizzando 'res.end()''.
           <br>
           - Se l'URL : "/AmorosoFranz", viene inviata una risposta con il testo "La Pagina dello Zio Franz" utilizzando 'res.end()''.
           <br>
           - Se l'URL : diverso da "/" e "/AmorosoFranz", viene inviata una risposta HTML con un messaggio di errore e un link per tornare alla homepage utilizzando 'res.end()' e includendo un tag HTML per formattare il testo.
        <br>
        <br>
        4. Infine, utilizza il metodo 'listen()'' del server per metterlo in ascolto sulla porta 3000.
        
        Quindi, quando il server è in esecuzione, risponderà alle richieste HTTP in base all'URL specificato nel codice. Ad esempio, se si accede a "http://localhost:3000/", si otterrà il messaggio di benvenuto. Se si accede a "http://localhost:3000/AmorosoFranz", si otterrà "La Pagina dello Zio Franz". Per qualsiasi altro URL, si otterrà un messaggio di errore.</p>`)
    } else {
        res.end(`<h1>Errore</h1 
    <p>Torna alla <a href="/">home</a>perchè la pagina non esiste o alla spiegazione del <a href="/AmorosoFranz">modulo nodeJS HTTP</a></p>
    `)
    }
})


//mettere l'ascolto del server
server.listen(3000);






