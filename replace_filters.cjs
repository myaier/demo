const fs = require('fs');
let css = fs.readFileSync('index.css', 'utf8');

const glassSvgDataUri = `url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="l" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="40"/></filter></svg>#l')`;
const glassSvgFileUrl = `url("svg/filter/glass.svg#l")`;

const highlightSvgDataUri = `url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="hl" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="n"/><feDisplacementMap in="SourceAlpha" in2="n" scale="6" result="w"/><feGaussianBlur in="w" stdDeviation="2.5" result="b"/><feSpecularLighting in="b" surfaceScale="3.5" specularConstant="1.2" specularExponent="40" lighting-color="white" result="s"><feDistantLight azimuth="225" elevation="40"/></feSpecularLighting><feComposite in="s" in2="SourceAlpha" operator="in" result="ms"/><feBlend in="ms" in2="SourceGraphic" mode="screen"/></filter></svg>#hl')`;
const highlightSvgFileUrl = `url("svg/filter/highlight.svg#hl")`;

css = css.split(glassSvgDataUri).join(glassSvgFileUrl);
css = css.split(highlightSvgDataUri).join(highlightSvgFileUrl);

fs.writeFileSync('index.css', css);
