/* 
10 Package json

-package.json un file manifest con le info del nostro progetto
- lo si può creare manualmente, npm init, npt init -y
- com'è composto?
- installiamo una dipendenza d'esempio: lodash e bootstrap
- importiamo e usiamo lodash
- disistallare pacchetto con npm unistall oppure eliminiamo package-log, node-modules e depency
- package-lock.json
- spiegazione versioni x.y.z major-minor-patch
le devdepencies non sono necessarie per far funzionare il codice , invece , le depence sono essenziali per il corretto funzionamento per il codice
- per salvare le devdepencies bisogna usare il comando nel terminale npm install [name] --save-dev
*/

const _ = require('lodash');

const oggetti1 = [1, [2 ,[3, [4,]]]]

const oggetti2 = _.flatMapDeep(oggetti1);

console.log(oggetti2);