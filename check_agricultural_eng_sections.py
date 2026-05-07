from docx import Document

doc = Document('public/extradata/Combined file - Agriculture.docx')

# Find Agricultural Engineering section
in_section = False
section_content = []
for para in doc.paragraphs:
    text = para.text.strip()
    if text == 'Agricultural Engineering':
        in_section = True
        continue
    if in_section and text:
        # Check if this is a new career section
        if any(career in text for career in ['Agriculture Research', 'Animal', 'Apiculture', 'Aquaculture']):
            break
        section_content.append(text)

# Print all section headers (lines that are likely section titles)
print("Agricultural Engineering - All Sections:")
print("=" * 80)
for i, line in enumerate(section_content):
    # Print lines that look like section headers (short, title case, not starting with "Step")
    if (not line.startswith('Step') and 
        not line.startswith('Pathway') and
        len(line) < 80 and 
        len(line) > 5 and
        line[0].isupper()):
        print(f"{i}: {line}")
