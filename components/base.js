// components/base.js — inclua antes de tudo
const isProd = location.hostname.includes('github.io');
const base = document.createElement('base');
base.href = isProd ? '/ds/' : '/';
document.head.prepend(base);

