import re

with open('index.css', 'r') as f:
    content = f.read()

# Specifically target the exact multiline string
target = """  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;"""

content = content.replace(target, "")

with open('index.css', 'w') as f:
    f.write(content)
