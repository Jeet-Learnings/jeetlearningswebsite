from docx import Document

doc = Document('public/extradata/Combined file - Agriculture.docx')

# Find Agricultural Engineer section
in_section = False
content = []
for para in doc.paragraphs:
    text = para.text.strip()
    if text == 'Agricultural Engineering':
        in_section = True
        continue
    if in_section and text:
        # Check if this is a new career section
        if any(career in text for career in ['Agriculture Research', 'Animal', 'Apiculture', 'Aquaculture']):
            break
        content.append(text)

for line in content[:200]:
    print(line)
