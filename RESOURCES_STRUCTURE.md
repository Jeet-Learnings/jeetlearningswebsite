# Resources File Structure

## Overview
The `public/resources.txt` file contains comprehensive career resources organized by:
1. **Main Categories** - Broad career fields
2. **Sub-categories/Careers** - Specific career paths within each category
3. **Resource Types** - Professional Bodies, Top Universities, Scholarships
4. **Individual Resources** - Specific websites with descriptions

## Main Categories

### 1. **Accounts and Finance**
   - Actuarial Science
   - Banking and Related Services
   - Chartered Accountant
   - Company Secretary
   - Cost Accountant
   - Economics
   - Financial Analyst
   - Financial and Investment Planning
   - Financial Risk Management

### 2. **Agriculture**
   - Agri Business Management
   - Agricultural Engineering
   - Agricultural Research
   - Animal/Veterinary Science
   - Apiculture
   - Aquaculture
   - Dairy Technology
   - Florist
   - Food Science
   - Horticulture
   - Poultry
   - Sericulture
   - Vertical Farming

### 3. **Architecture and Construction**
   - Architecture
   - Construction
   - Maintenance and Operation
   - Urban Planning and Management

### 4. **Arts and Design**
   - Accessory Design
   - Animator
   - Cosmetology
   - Graphic Design
   - Interior Design
   - Photography
   - Videography
   - Web Design

### 5. **Bio Science**
   - Biotechnology
   - Microbiology
   - Genetics
   - Molecular Biology
   - Biochemistry

### 6. **Business Management**
   - Business Administration
   - Entrepreneurship
   - Human Resources
   - Marketing Management
   - Operations Management
   - Supply Chain Management

### 7. **Education**
   - Teaching (Primary, Secondary, Higher)
   - Educational Administration
   - Curriculum Development
   - Special Education

### 8. **Health Science**
   - Medicine
   - Nursing
   - Pharmacy
   - Physiotherapy
   - Psychology
   - Dentistry

### 9. **Information Technology**
   - Software Development
   - Data Science
   - Cybersecurity
   - Cloud Computing
   - AI/Machine Learning
   - Web Development

### 10. **Legal**
   - Law
   - Corporate Law
   - Criminal Law
   - Intellectual Property

### 11. **Manufacturing**
   - Industrial Engineering
   - Mechanical Engineering
   - Production Management
   - Quality Assurance

### 12. **Transportation**
   - Aeronautical Engineering
   - Automotive Engineering
   - Logistics Management
   - Supply Chain

### 13. **Communication**
   - Journalism
   - Public Relations
   - Mass Media
   - Broadcasting

### 14. **Environment**
   - Environmental Science
   - Environmental Engineering
   - Sustainability
   - Conservation

### 15. **Hospitality**
   - Hotel Management
   - Tourism Management
   - Event Management
   - Food Service

### 16. **Public Safety and Security**
   - Police Services
   - Military
   - Cybersecurity
   - Emergency Management

## Resource Types (For Each Career)

Each career path includes three types of resources:

### 1. **Professional Bodies**
   - Regulatory and certification organizations
   - Industry associations
   - Professional networks
   - Examples: www.actuariesindia.org, www.icai.org

### 2. **Top Universities**
   - Educational institutions offering programs
   - Colleges and universities
   - Training centers
   - Examples: www.amity.com, www.shiksha.com

### 3. **Scholarships**
   - Financial aid opportunities
   - Merit-based scholarships
   - Corporate-funded programs
   - Examples: www.buddy4study.com, www.vidyasaarathi.com

## Data Structure Example

```
Accounts and Finance

1. Websites for careers in Actuarial Science
Professional Bodies
 • www.actuariesindia.org – The statutory body for Indian actuarial certifications and exams.
 • www.insuranceinstituteofindia.com – Provides specialized insurance and risk management certifications.
 • www.theactuaryindia.com – Official resource for industry research and professional updates.

Top Universities
 • www.amity.com – Offers industry-aligned Actuarial Science degrees and training.
 • www.christuniversity.com – Renowned for comprehensive risk management and financial mathematics programs.
 • www.shiksha.com – Leading portal for Indian actuarial admission guides and rankings.

Scholarships
 • www.buddy4study.com – Aggregates merit-based scholarships for financial and actuarial students.
 • www.scholarshipsinindia.com – Extensive database for Indian professional course grants.
 • www.vidyasaarathi.com – Facilitates corporate-funded scholarships for specialized skill programs.
```

## Home Page Integration

The home page now displays a **Career Resources** section with:
- **6 Resource Category Cards** (Accounts & Finance, Agriculture, Architecture & Construction, Arts & Design, Business & Management, Technology & IT)
- **Each card shows 3 sub-categories** with brief descriptions
- **"View All" links** that direct to the full `/resources` page
- **No clicking required** - all information is visible at a glance
- **Responsive design** - adapts to mobile, tablet, and desktop screens
- **Professional icons** - color-coded by category for easy identification

## Fixes Applied

1. ✅ Fixed `&amp;` HTML entities → converted to `&`
2. ✅ Removed unused imports from home page
3. ✅ Added icons to DMIT and Psychometric sections
4. ✅ Created non-clickable Career Resources preview section
5. ✅ Maintained responsive design across all breakpoints
6. ✅ Build passes successfully (Exit Code: 0)

## Total Resources

- **16+ Main Career Categories**
- **100+ Specific Career Paths**
- **300+ Professional Bodies, Universities, and Scholarship Programs**
- **Comprehensive coverage** of Indian education and career landscape
