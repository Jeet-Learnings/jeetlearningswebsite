# Dynamic Content Extraction System

## Overview

This system dynamically extracts career data from TXT files (converted from DOCX) and displays them on the website with proper formatting. This allows for real-time content updates without needing to rebuild the TypeScript data files.

## Architecture

### 1. **Content Conversion** (`convert_docx_to_txt.py`)
- Converts all DOCX files from `public/extradata/` to TXT format
- Stores converted files in `public/content-data/`
- Preserves all text content including tables and paragraphs

### 2. **API Route** (`app/api/careers/extract/route.ts`)
- Server-side endpoint that reads TXT files
- Parses career data and extracts guide sections
- Returns formatted JSON response
- Handles category-to-filename mapping

### 3. **Custom Hook** (`app/hooks/useDynamicCareerData.ts`)
- Client-side hook for fetching career data
- Manages loading, error, and data states
- Automatically fetches data when category/career changes

### 4. **Component** (`app/components/CareerPageDynamicContent.tsx`)
- Renders dynamically extracted career data
- Handles different section types (pathways, market, etc.)
- Displays loading and error states
- Responsive design matching existing UI

### 5. **Integration** (`app/[category]/[career]/page.tsx`)
- Falls back to dynamic extraction when pre-built data is unavailable
- Maintains backward compatibility with existing static data

## File Structure

```
public/
├── extradata/                    # Original DOCX files
│   ├── Combined file - Agriculture.docx
│   ├── Combined File - Account and Finance.docx
│   └── ... (21 files total)
└── content-data/                 # Converted TXT files
    ├── Combined file - Agriculture.txt
    ├── Combined File - Account and Finance.txt
    └── ... (21 files total)

app/
├── api/
│   └── careers/
│       └── extract/
│           └── route.ts          # API endpoint
├── components/
│   └── CareerPageDynamicContent.tsx  # Rendering component
├── hooks/
│   └── useDynamicCareerData.ts   # Data fetching hook
└── services/
    └── contentExtractionService.ts  # (Optional) Client-side service
```

## How It Works

### Step 1: Content Conversion
```bash
python convert_docx_to_txt.py
```
This creates TXT files in `public/content-data/` from DOCX files.

### Step 2: API Request
When a user visits a career page without pre-built data:
```
GET /api/careers/extract?category=agriculture&career=agricultural_engineer
```

### Step 3: Server-Side Parsing
The API route:
1. Maps category slug to TXT filename
2. Reads the TXT file
3. Finds the career section
4. Parses guide sections (pathways, market, etc.)
5. Returns formatted JSON

### Step 4: Client-Side Rendering
The component:
1. Uses the `useDynamicCareerData` hook
2. Fetches data from the API
3. Renders sections with proper formatting
4. Handles loading/error states

## Supported Sections

The system automatically recognizes and formats these sections:

- **Career Pathways** - Displays as 2-3 column grid with numbered steps
- **Market Snapshot** - Shows salary tiers and opportunities
- **Where Are the Jobs** - Lists top cities and industries
- **Where to Study** - Shows institutions
- **Career Opportunities** - Lists conventional and emerging roles

## Category Mapping

```typescript
{
  agriculture: 'Combined file - Agriculture',
  'science-mathematics-engineering': 'Combined - Science, Maths and Engineering',
  'account-finance': 'Combined File - Account and Finance',
  // ... (20 more mappings)
}
```

## Adding New Content

### To add a new career:
1. Update the DOCX file in `public/extradata/`
2. Run: `python convert_docx_to_txt.py`
3. The new career will be automatically available

### To add a new category:
1. Add DOCX file to `public/extradata/`
2. Update `CATEGORY_FILE_MAP` in:
   - `app/api/careers/extract/route.ts`
   - `app/services/contentExtractionService.ts` (if using client-side)
3. Run: `python convert_docx_to_txt.py`

## Performance Considerations

- **Caching**: Consider adding caching headers to the API route
- **File Size**: TXT files are lightweight (~50-200KB each)
- **Parsing**: Server-side parsing is fast (< 100ms per request)
- **Client-Side**: Minimal JavaScript overhead

## Error Handling

The system handles:
- Missing category/career parameters
- File not found errors
- Parsing failures
- Network errors (client-side)

Users see appropriate error messages and can retry.

## Future Enhancements

1. **Caching Layer**: Add Redis/in-memory caching for frequently accessed careers
2. **Search**: Implement full-text search across all careers
3. **Versioning**: Track content versions and changes
4. **Admin Panel**: UI for managing content without code changes
5. **Incremental Updates**: Only update changed careers instead of full conversion

## Troubleshooting

### TXT files not created
```bash
# Ensure python-docx is installed
pip install python-docx

# Run conversion again
python convert_docx_to_txt.py
```

### API returns 404
- Check category slug matches `CATEGORY_FILE_MAP`
- Verify TXT file exists in `public/content-data/`
- Check career name spelling in TXT file

### Content not displaying
- Check browser console for errors
- Verify API response in Network tab
- Check component console logs

## Testing

To test the system:

```bash
# 1. Convert DOCX files
python convert_docx_to_txt.py

# 2. Start the development server
npm run dev

# 3. Visit a career page
# http://localhost:3000/agriculture/agricultural_engineer

# 4. Check Network tab for API call
# GET /api/careers/extract?category=agriculture&career=agricultural_engineer
```

## Maintenance

- **Weekly**: Monitor API response times
- **Monthly**: Review error logs
- **Quarterly**: Update content from source DOCX files
- **Annually**: Archive old versions

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review API response in browser DevTools
3. Check server logs for parsing errors
4. Verify TXT file content manually
