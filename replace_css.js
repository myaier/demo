const fs = require('fs');
let css = fs.readFileSync('index.css', 'utf8');

css = css.replace(
  `:root {
  --font-heading: "S";
  --font-body: "S";
  --apple-blue: #0a84ff;
  --apple-bg: #000000;
  --r: 28px;
}`,
  `:root {
  --font-heading: "S";
  --font-body: "S";
  --apple-blue: #0a84ff;
  --apple-bg: #000000;
  --r: 28px;
  --text-primary: #EBEBF5;
  --text-secondary: #AEAEB2;
  --text-tertiary: #636366;
  --text-quaternary: #8E8E93;
  --text-btn: #D1D1D6;
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-bg-input: rgba(255, 255, 255, 0.04);
  --glass-bg-steps: rgba(255, 255, 255, 0.02);
  --glass-bg-step-num: rgba(255, 255, 255, 0.06);
  --glass-bg-hover: rgba(255, 255, 255, 0.08);
  --glass-border-light: rgba(255, 255, 255, 0.2);
  --glass-border-dark: rgba(255, 255, 255, 0.05);
  --glass-border-mid: rgba(255, 255, 255, 0.4);
  --glass-border-dim: rgba(255, 255, 255, 0.1);
  --glass-border-bright: rgba(255, 255, 255, 0.3);
  --glass-border-faint: rgba(255, 255, 255, 0.08);
  --btn-primary-bg: rgba(10, 132, 255, 0.05);
  --btn-primary-hover: rgba(10, 132, 255, 0.12);
  --btn-primary-shadow-in: rgba(10, 132, 255, 0.25);
  --btn-primary-shadow-out: rgba(0, 0, 0, 0.3);
  --btn-primary-text-shadow: rgba(10, 132, 255, 0.5);
  --btn-primary-active-shadow: rgba(10, 132, 255, 0.15);
  --icon-filter: invert(1) opacity(0.85);
  --bg-image: url("bg.svg");
  --divider-bg: url("divider.svg") no-repeat center/100% 100%;
  --step-divider-color: transparent;
  --demo-hover: rgba(255, 255, 255, 0.08);
}

[data-theme="light"] {
  --apple-blue: #007aff;
  --apple-bg: #F2F2F7;
  --text-primary: #000000;
  --text-secondary: #3C3C43;
  --text-tertiary: #636366;
  --text-quaternary: #8E8E93;
  --text-btn: #3C3C43;
  --glass-bg: rgba(255, 255, 255, 0.5);
  --glass-bg-input: rgba(255, 255, 255, 0.6);
  --glass-bg-steps: rgba(255, 255, 255, 0.4);
  --glass-bg-step-num: rgba(0, 0, 0, 0.05);
  --glass-bg-hover: rgba(0, 0, 0, 0.05);
  --glass-border-light: rgba(0, 0, 0, 0.1);
  --glass-border-dark: rgba(0, 0, 0, 0.02);
  --glass-border-mid: rgba(0, 0, 0, 0.15);
  --glass-border-dim: rgba(0, 0, 0, 0.05);
  --glass-border-bright: rgba(0, 0, 0, 0.08);
  --glass-border-faint: rgba(0, 0, 0, 0.03);
  --btn-primary-bg: rgba(0, 122, 255, 0.1);
  --btn-primary-hover: rgba(0, 122, 255, 0.15);
  --btn-primary-shadow-in: rgba(0, 122, 255, 0.1);
  --btn-primary-shadow-out: rgba(0, 0, 0, 0.05);
  --btn-primary-text-shadow: rgba(0, 122, 255, 0.2);
  --btn-primary-active-shadow: rgba(0, 122, 255, 0.05);
  --icon-filter: invert(0) opacity(0.7);
  --bg-image: radial-gradient(circle at 50% 0%, #FFFFFF, #E5E5EA);
  --divider-bg: none;
  --step-divider-color: rgba(0, 0, 0, 0.1);
  --demo-hover: rgba(0, 0, 0, 0.05);
}`
);

css = css.replace(/background: url\("bg\.svg"\) center\/cover fixed;/g, 'background: var(--bg-image) center/cover fixed;');
css = css.replace(/color: #EBEBF5;/g, 'color: var(--text-primary);');
css = css.replace(/background: rgba\(255, 255, 255, 0\.03\);/g, 'background: var(--glass-bg);');
css = css.replace(/inset 1px 1px 0px rgba\(255, 255, 255, 0\.2\),\n    inset -1px -1px 0px rgba\(255, 255, 255, 0\.05\),\n    inset 2px 2px 12px rgba\(255, 255, 255, 0\.05\);/g, 'inset 1px 1px 0px var(--glass-border-light),\n    inset -1px -1px 0px var(--glass-border-dark),\n    inset 2px 2px 12px var(--glass-border-dark);');
css = css.replace(/background-image: linear-gradient\(\n    135deg,\n    rgba\(255, 255, 255, 0\.2\),\n    transparent 40%,\n    rgba\(255, 255, 255, 0\.05\)\n  \);/g, 'background-image: linear-gradient(\n    135deg,\n    var(--glass-border-light),\n    transparent 40%,\n    var(--glass-border-dark)\n  );');
css = css.replace(/color: #AEAEB2;/g, 'color: var(--text-secondary);');
css = css.replace(/background: rgba\(255, 255, 255, 0\.04\);/g, 'background: var(--glass-bg-input);');

const insetReplaceOld = `inset 1px 1px 0px rgba(255, 255, 255, 0.3),
    inset -1px -1px 0px rgba(255, 255, 255, 0.1),
    inset 2px 2px 8px 1px rgba(255, 255, 255, 0.08);`;
const insetReplaceNew = `inset 1px 1px 0px var(--glass-border-bright),
    inset -1px -1px 0px var(--glass-border-dim),
    inset 2px 2px 8px 1px var(--glass-border-faint);`;
css = css.split(insetReplaceOld).join(insetReplaceNew);

const bgReplaceOld = `background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4),
    transparent 50%,
    rgba(255, 255, 255, 0.1)
  );`;
const bgReplaceNew = `background-image: linear-gradient(
    135deg,
    var(--glass-border-mid),
    transparent 50%,
    var(--glass-border-dim)
  );`;
css = css.split(bgReplaceOld).join(bgReplaceNew);

css = css.replace(/color: #636366;/g, 'color: var(--text-tertiary);');
css = css.replace(/color: #8E8E93;/g, 'color: var(--text-quaternary);');
css = css.replace(/color: #D1D1D6;/g, 'color: var(--text-btn);');

css = css.replace(/background: rgba\(10, 132, 255, 0\.05\);/g, 'background: var(--btn-primary-bg);');
css = css.replace(/background: rgba\(10, 132, 255, 0\.12\);/g, 'background: var(--btn-primary-hover);');
css = css.replace(/inset 0 0 24px rgba\(10, 132, 255, 0\.25\),\n    inset 0 8px 32px rgba\(0, 0, 0, 0\.3\);/g, 'inset 0 0 24px var(--btn-primary-shadow-in),\n    inset 0 8px 32px var(--btn-primary-shadow-out);');
css = css.replace(/text-shadow: 0 0 12px rgba\(10, 132, 255, 0\.5\);/g, 'text-shadow: 0 0 12px var(--btn-primary-text-shadow);');
css = css.replace(/box-shadow: inset 0 0 8px rgba\(10, 132, 255, 0\.15\);/g, 'box-shadow: inset 0 0 8px var(--btn-primary-active-shadow);');

css = css.replace(/background: rgba\(255, 255, 255, 0\.08\);/g, 'background: var(--demo-hover);');
css = css.replace(/background: rgba\(255, 255, 255, 0\.02\);/g, 'background: var(--glass-bg-steps);');

css = css.replace(/background: url\("divider\.svg"\) no-repeat center\/100% 100%;/g, 'background: var(--divider-bg);\n  background-color: var(--step-divider-color);');

css = css.replace(/background: rgba\(255, 255, 255, 0\.06\);/g, 'background: var(--glass-bg-step-num);');
css = css.replace(/box-shadow: inset 0 1px 0 rgba\(255, 255, 255, 0\.15\);/g, 'box-shadow: inset 0 1px 0 var(--glass-border-mid);');

css = css.replace(/filter: invert\(1\) opacity\(0\.85\);/g, 'filter: var(--icon-filter);');

fs.writeFileSync('index.css', css);
