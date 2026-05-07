# Setup Guide: Dynamic Content Extraction

## Quick Start

### 1. Convert DOCX to TXT (One-time setup)

```bash
python convert_docx_to_txt.py
```

This creates TXT files in `public/content-data/` from all DOCX files in `public/extradata/`.

**Output:**
```
Found 21 DOCX files
================================================================================
✓ Converted: public\extradata\Combined file - Agriculture.docx → public\content-data\Combined file - Agriculture.txt
✓ Converted: public\extradata\Combined File - Account and Finance.docx → ...
... (19 more files)
================================================================================
Successfully converted 21/21 files
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Test Dynamic Content

Visit any career page that doesn't have pre-built data:

```
http://localhost:3000/agriculture/agricultural_engineer
```

The page will:
1. Show a loading spinner
2. Fetch data from `/api/careers/extract`
3. Parse and display the content
4. Show the formatted career page

## How to Verify It's Working

### Check 1: Network Tab
1. Open DevTools (F12)
2. Go to Network tab
3. Visit a career page
4. Look for request: `GET /api/careers/extract?category=...&career=...`
5. Response should be JSON with `guideSections`

### Check 2: Console
1. Open DevTools Console
2. Should see no errors
3. May see: "Extracting content from source files..."

### Check 3: Page Display
1. Career heading should display
2. Pathways should show in 2-3 column grid
3. Steps should be numbered 1-6
4. Market snapshot should show salary tiers

## File Locations

After setup, you should have:

```
public/content-data/
├── Combined file - Agriculture.txt (✓ Created)
├── Combined File - Account and Finance.txt (✓ Created)
├── Combined file - Architecture and Construction.txt (✓ Created)
├── Combined file - Arts and Design.txt (✓ Created)
├── Combined file - Bio Science and Research.txt (✓ Created)
├── Combined File - Business Management.txt (✓ Created)
├── Combined File - Education and Training.txt (✓ Created)
├── Combined File - Environment.txt (✓ Created)
├── Combined File - Government Services.txt (✓ Created)
├── Combined File - Health Science.txt (✓ Created)
├── Combined file - Hospitality and Tourism.txt (✓ Created)
├── Combined File - Human and Social Sciences.txt (✓ Created)
├── Combined File - Legal Services.txt (✓ Created)
├── Combined File - Logistics and Transportation.txt (✓ Created)
├── Combined File - Manufacturing.txt (✓ Created)
├── Combined File - Marketing and Advertising.txt (✓ Created)
├── Combined File - Media and Communication.txt (✓ Created)
├── Combined File - Sports and Physical Activities.txt (✓ Created)
├── Comined File - Public Safety and Security.txt (✓ Created)
├── Combine File - Information Technology.txt (✓ Created)
└── Combined - Science, Maths and Engineering.txt (✓ Created)
```

## Testing Different Careers

Try these URLs to test different categories:

```
# Agriculture
http://localhost:3000/agriculture/agricultural_engineer
http://localhost:3000/agriculture/agri_business_management

# Science & Engineering
http://localhost:3000/science-mathematics-engineering/civil_engineer

# Business
http://localhost:3000/business-management/business_analyst

# Health
http://localhost:3000/health-science/doctor
```

## Troubleshooting

### Issue: "Career not found" error

**Solution:**
1. Check the career name in the URL matches the TXT file
2. Verify TXT file exists in `public/content-data/`
3. Check the exact spelling in the TXT file

### Issue: "Category not found" error

**Solution:**
1. Verify category slug in URL
2. Check `CATEGORY_FILE_MAP` in `app/api/careers/extract/route.ts`
3. Ensure TXT file exists for that category

### Issue: Blank page or loading spinner stuck

**Solution:**
1. Check browser console for errors
2. Check Network tab for failed API requests
3. Verify TXT files were created: `ls public/content-data/`
4. Check server logs for parsing errors

### Issue: Content not formatted correctly

**Solution:**
1. Check TXT file content manually
2. Verify section headers match expected format
3. Check for special characters that might break parsing

## Updating Content

### To update a career:

1. Edit the DOCX file in `public/extradata/`
2. Run conversion again:
   ```bash
   python convert_docx_to_txt.py
   ```
3. Refresh the browser (Ctrl+Shift+R for hard refresh)
4. The new content will be displayed

### To add a new career:

1. Add it to the DOCX file in `public/extradata/`
2. Run conversion:
   ```bash
   python convert_docx_to_txt.py
   ```
3. Visit the URL: `http://localhost:3000/category/career_name`

## Performance Tips

1. **First Load**: May take 1-2 seconds to parse and display
2. **Subsequent Loads**: Instant (browser caching)
3. **Server**: Parsing is fast (< 100ms per request)

## Next Steps

1. ✅ Run `python convert_docx_to_txt.py`
2. ✅ Start dev server: `npm run dev`
3. ✅ Test a career page
4. ✅ Check Network tab for API calls
5. ✅ Verify content displays correctly

## Support

If you encounter issues:

1. Check `DYNAMIC_CONTENT_EXTRACTION.md` for detailed documentation
2. Review error messages in browser console
3. Check Network tab for API response
4. Verify TXT files exist and have content

---

**Status**: ✅ Dynamic content extraction system is ready to use!
