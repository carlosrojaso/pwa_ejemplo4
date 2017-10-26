var CACHE_NAME = 'cache-v1.0';

var files = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/build/bundle.js',
  '/images/emoji/f1.svg',
  '/images/iconic/trash.svg',
  '/images/iconic/arrow-right.svg'
];

self.addEventListener('install', function(event) {
  console.log("Evento install");

});

self.addEventListener('fetch', function(event) {
  console.log("Evento Fetch");

});

self.addEventListener('activate', function(event) {
  console.log("Evento Activate");
});

self.addEventListener('sync', function(event) {
  console.log("Evento Sync");
  });
