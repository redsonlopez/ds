const isProd = location.hostname.includes('github.io');
const base = document.createElement('base');
base.href = isProd ? '/machine-learning/' : '/';
document.head.prepend(base);

