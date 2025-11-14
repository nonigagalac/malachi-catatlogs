# Malachi Stitch and Print - Digital Catalog

## Project Overview
- **Name**: Malachi Stitch and Print Digital Catalog
- **Goal**: A digital catalog website for a garment printing and customization business
- **Features**: 
  - Browse plain garments (t-shirts, hoodies, etc.)
  - Explore 3D printing services
  - View DTF (Direct to Film) printing options
  - Check embroidery services
  - Contact information and assistance

## Currently Completed Features
✅ Home page with category navigation  
✅ Plain Garments catalog page  
✅ 3D Printing services page  
✅ DTF Prints catalog page  
✅ Embroidery services page  
✅ Contact page with business information  
✅ Responsive design for mobile and desktop  
✅ Modern UI with TailwindCSS and Font Awesome icons  

## Functional Entry URIs
- **Home**: `/` - Main landing page with all categories
- **Plain Garments**: `/plain-garments` - Browse plain clothing items
- **3D Printing**: `/3d-printing` - View 3D printing services
- **DTF Prints**: `/dtf-prints` - Explore direct-to-film printing
- **Embroidery**: `/embroidery` - Check embroidery options
- **Contact**: `/contact` - Get in touch with the business

## Features Not Yet Implemented
- Shopping cart functionality
- User authentication/accounts
- Order management system
- Image gallery with actual product photos
- Payment processing
- Admin panel for managing products
- Search functionality
- Product filtering/sorting
- Customer reviews

## Recommended Next Steps
1. Add actual product images to replace emoji placeholders
2. Implement a simple contact form with email integration
3. Add more detailed product information (sizes, colors, materials)
4. Create a quote request system for custom orders
5. Integrate with a backend database (Cloudflare D1) for dynamic product management
6. Add testimonials/reviews section
7. Implement WhatsApp or live chat integration for customer support

## URLs
- **Production**: Not yet deployed
- **Local Development**: http://localhost:3000
- **GitHub**: Will be set up

## Data Architecture
- **Data Models**: Currently using static product data in TypeScript
- **Storage Services**: None (static data only)
- **Future**: Can integrate Cloudflare D1 for dynamic product management

## Tech Stack
- **Framework**: Hono (lightweight web framework)
- **Runtime**: Cloudflare Workers/Pages
- **Frontend**: TailwindCSS + Font Awesome
- **Language**: TypeScript
- **Build Tool**: Vite

## User Guide
1. Visit the home page to see all service categories
2. Click on any category card to view products/services
3. Browse through the items in each category
4. Use the contact page to reach out to the business
5. Click "Back to Home" to return to the main page

## Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start development server
npm run dev:sandbox

# Or use PM2
pm2 start ecosystem.config.cjs
```

### Test the application
```bash
curl http://localhost:3000
```

## Deployment

### Deploy to Cloudflare Pages
```bash
# Build and deploy
npm run deploy:prod

# Or manually
npm run build
npx wrangler pages deploy dist --project-name malachi-catalog
```

## Project Structure
```
webapp/
├── src/
│   ├── index.tsx       # Main application with all routes
│   └── renderer.tsx    # HTML layout renderer
├── public/
│   └── static/
│       └── style.css   # Custom CSS styles
├── ecosystem.config.cjs # PM2 configuration
├── wrangler.jsonc      # Cloudflare configuration
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Deployment Status
- **Platform**: Cloudflare Pages
- **Status**: ❌ Not yet deployed (ready for deployment)
- **Last Updated**: 2024-11-14

## License
Copyright © 2024 Malachi Stitch and Print. All rights reserved.
