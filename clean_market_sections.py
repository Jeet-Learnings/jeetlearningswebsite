import re

# Read the file
with open('app/data/hospitalityUpdateData.ts', 'r') as f:
    content = f.read()

# Find all market sections and clean them
# The pattern is: id: "market", ... content: [...]
# We need to remove everything after "Global Demand:" until the next section

# Split by market sections
pattern = r'(id: "market".*?content: \[)(.*?)(\]\s*},)'

def clean_market_content(match):
    prefix = match.group(1)
    content_str = match.group(2)
    suffix = match.group(3)
    
    # Split the content by lines
    lines = content_str.split('","')
    
    # Keep only lines until we hit "Top Institutions" or "Career Opportunities"
    cleaned_lines = []
    for line in lines:
        line_clean = line.strip().strip('"').strip()
        if line_clean.lower().startswith('top institutions') or line_clean.lower().startswith('career opportunities'):
            break
        cleaned_lines.append(line)
    
    # Reconstruct
    new_content = '","'.join(cleaned_lines)
    
    return prefix + new_content + suffix

# Apply the replacement
new_content = re.sub(pattern, clean_market_content, content, flags=re.DOTALL)

# Write back
with open('app/data/hospitalityUpdateData.ts', 'w') as f:
    f.write(new_content)

print("Cleaned market sections")
