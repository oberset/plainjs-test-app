import { PlainComponent as Pjs } from 'plainjs';

console.time('render');
Pjs.render(
    '<h1 content="hello"></h1>',
    { hello: 'Hello World!!!' },
    document.querySelector('.hello')
);
console.timeEnd('render');

