import re

with open('index.css', 'r') as f:
    content = f.read()

# Remove -webkit- and -moz- lines
content = re.sub(r'\s*-webkit-font-smoothing: antialiased;\n', '\n', content)
content = re.sub(r'\s*-moz-osx-font-smoothing: grayscale;\n', '\n', content)
content = re.sub(r'\s*-webkit-mask:.*?(?:;|\n\s*-webkit-mask-composite: xor;)', '', content, flags=re.DOTALL)
content = re.sub(r'\s*-webkit-mask-composite: xor;', '', content)
content = re.sub(r'\s*-webkit-user-select: none;', '', content)
content = re.sub(r':-webkit-autofill', ':autofill', content)
content = re.sub(r'\s*-webkit-text-fill-color:.*?;', '', content)

# Variable replacements
replacements = {
    '--apple-blue': '--c-blue',
    '--apple-bg': '--c-bg',
    '--text-primary': '--t1',
    '--text-secondary': '--t2',
    '--text-tertiary': '--t3',
    '--text-quaternary': '--t4',
    '--text-btn': '--t-btn',
    '--glass-bg-input': '--bg-in',
    '--glass-bg-steps': '--bg-st',
    '--glass-bg-step-num': '--bg-num',
    '--glass-bg-hover': '--bg-hv',
    '--glass-bg-tag': '--bg-tg',
    '--glass-bg': '--bg',
    '--glass-border-light': '--bd-l',
    '--glass-border-dark': '--bd-d',
    '--glass-border-mid': '--bd-m',
    '--glass-border-dim': '--bd-dim',
    '--glass-border-bright': '--bd-b',
    '--glass-border-faint': '--bd-f',
    '--btn-primary-shadow-hover': '--btn-sh-hv',
    '--btn-primary-shadow-active': '--btn-sh-ac',
    '--btn-primary-bg': '--btn-bg',
    '--btn-primary-hover': '--btn-hv',
    '--btn-primary-shadow': '--btn-sh',
    '--btn-primary-shadow-in': '--btn-sh-in',
    '--btn-primary-active-shadow': '--btn-ac-sh',
    '--btn-primary-text-shadow': '--btn-t-sh',
    '--icon-filter': '--ic-fl',
    '--bg-image': '--bg-img',
    '--divider-bg': '--div-bg',
    '--step-divider-color': '--div-c',
    '--demo-hover': '--demo-hv',
    '--glass-shadow': '--sh',
    '--element-shadow-hover': '--el-sh-hv',
    '--element-shadow-active': '--el-sh-ac',
    '--element-shadow': '--el-sh',
    '--input-shadow': '--in-sh',
    '--filter-glass': '--fl-gl',
    '--filter-highlight': '--fl-hl',
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('index.css', 'w') as f:
    f.write(content)
