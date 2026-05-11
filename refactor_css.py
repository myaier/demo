import re

with open('/Users/z/i/demo/index.css', 'r') as f:
    content = f.read()

# Define the elements to refactor
elements = [
    ('LG', r'(\.LG\s*\{[^}]*\})'),
    ('hero-tag', r'(\.hero-tag\s*\{[^}]*\})'),
    ('input-group', r'(\.input-group\s*\{[^}]*\})'),
    ('LG-btn', r'(\.LG-btn\s*\{[^}]*\})'),
    ('btn-primary', r'(\.btn-primary\s*\{[^}]*\})'),
    ('step-number', r'(\.step-number\s*\{[^}]*\})')
]

for name, pattern in elements:
    # 1. Find the ::after block and extract its box-shadow
    after_pattern = r'(\.' + name + r'::after\s*\{.*?)(box-shadow:\s*[^;]+;)(.*?\})'
    
    match_after = re.search(after_pattern, content, re.DOTALL)
    if not match_after:
        print(f"Could not find ::after for {name}")
        continue
    
    box_shadow = match_after.group(2)
    
    # 2. Remove box-shadow from ::after
    new_after = match_after.group(1) + match_after.group(3)
    content = content[:match_after.start()] + new_after + content[match_after.end():]
    
    # 3. Add box-shadow to main class
    match_main = re.search(pattern, content, re.DOTALL)
    if not match_main:
        print(f"Could not find main for {name}")
        continue
        
    main_block = match_main.group(1)
    # Insert before the closing brace
    new_main = main_block[:-1] + "  " + box_shadow.strip() + "\n}"
    content = content[:match_main.start()] + new_main + content[match_main.end():]

# 4. Fix btn-primary gradient symmetry
content = content.replace(
    '''  background-image: linear-gradient(
    135deg,
    var(--glass-border-mid),
    transparent 30%,
    transparent 70%,
    rgba(10, 132, 255, 0.6)
  );''',
    '''  background-image: linear-gradient(
    135deg,
    var(--glass-border-mid),
    transparent 30%,
    transparent 70%,
    var(--glass-border-mid)
  );'''
)

with open('/Users/z/i/demo/index.css', 'w') as f:
    f.write(content)

print("Done refactoring CSS.")
