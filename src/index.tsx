import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
app.use(renderer)

// Home Page
app.get('/', (c) => {
  return c.render(
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-6">
          <h1 class="text-3xl md:text-4xl font-bold text-indigo-600 text-center">
            <i class="fas fa-tshirt mr-2"></i>
            Malachi Stitch and Print
          </h1>
          <p class="text-center text-gray-600 mt-2">Your One-Stop Shop for Custom Garments & Printing</p>
        </div>
      </header>

      {/* Main Content */}
      <main class="container mx-auto px-4 py-12">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Browse Our Catalog</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Swipe through our products and services. Need assistance? Ask our staff for help!
          </p>
        </div>

        {/* Category Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Plain Garments */}
          <a href="/plain-garments" class="category-card group">
            <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6">
              <div class="text-center">
                <div class="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <i class="fas fa-tshirt text-4xl text-blue-600"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">Plain Garments</h3>
                <p class="text-gray-600 text-sm">T-shirts, hoodies, and more</p>
              </div>
            </div>
          </a>

          {/* 3D Printing */}
          <a href="/3d-printing" class="category-card group">
            <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6">
              <div class="text-center">
                <div class="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <i class="fas fa-cube text-4xl text-purple-600"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">3D Printing</h3>
                <p class="text-gray-600 text-sm">Custom 3D printed items</p>
              </div>
            </div>
          </a>

          {/* DTF Prints */}
          <a href="/dtf-prints" class="category-card group">
            <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6">
              <div class="text-center">
                <div class="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <i class="fas fa-print text-4xl text-green-600"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">DTF Prints</h3>
                <p class="text-gray-600 text-sm">Direct to film printing</p>
              </div>
            </div>
          </a>

          {/* Embroidery */}
          <a href="/embroidery" class="category-card group">
            <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6">
              <div class="text-center">
                <div class="w-20 h-20 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <i class="fas fa-sewing-machine text-4xl text-pink-600"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">Embroidery</h3>
                <p class="text-gray-600 text-sm">Custom embroidered designs</p>
              </div>
            </div>
          </a>
        </div>

        {/* Contact Section */}
        <div class="mt-16 text-center">
          <div class="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              <i class="fas fa-headset mr-2 text-indigo-600"></i>
              Need Assistance?
            </h3>
            <p class="text-gray-600 mb-6">Our staff is ready to help you find exactly what you need!</p>
            <a href="/contact" class="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer class="bg-gray-800 text-white mt-16 py-8">
        <div class="container mx-auto px-4 text-center">
          <p>&copy; 2024 Malachi Stitch and Print. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
})

// Plain Garments Page
app.get('/plain-garments', (c) => {
  const products = [
    { id: 1, name: 'Cotton T-Shirt', price: '$15', image: '👕', description: 'Comfortable 100% cotton' },
    { id: 2, name: 'Polo Shirt', price: '$25', image: '👔', description: 'Premium polo shirts' },
    { id: 3, name: 'Hoodie', price: '$35', image: '🧥', description: 'Warm and cozy hoodies' },
    { id: 4, name: 'Tank Top', price: '$12', image: '🎽', description: 'Perfect for summer' },
    { id: 5, name: 'Long Sleeve', price: '$20', image: '👕', description: 'All-season wear' },
    { id: 6, name: 'Sweatshirt', price: '$30', image: '🧥', description: 'Comfortable fleece' }
  ]

  return c.render(
    <div class="min-h-screen bg-gray-50">
      <header class="bg-blue-600 text-white py-6 shadow-md">
        <div class="container mx-auto px-4">
          <a href="/" class="text-white hover:text-blue-200 mb-4 inline-block">
            <i class="fas fa-arrow-left mr-2"></i>Back to Home
          </a>
          <h1 class="text-3xl font-bold text-center">
            <i class="fas fa-tshirt mr-2"></i>Plain Garments
          </h1>
        </div>
      </header>

      <main class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <div class="text-center">
                <div class="text-6xl mb-4">{product.image}</div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p class="text-gray-600 mb-2">{product.description}</p>
                <p class="text-2xl font-bold text-blue-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
})

// 3D Printing Page
app.get('/3d-printing', (c) => {
  const products = [
    { id: 1, name: 'Custom Figurines', price: '$20+', image: '🎭', description: 'Personalized 3D models' },
    { id: 2, name: 'Keychains', price: '$5', image: '🔑', description: 'Custom keychains' },
    { id: 3, name: 'Phone Cases', price: '$15', image: '📱', description: 'Unique phone protection' },
    { id: 4, name: 'Decorations', price: '$10+', image: '🎨', description: 'Home & office decor' },
    { id: 5, name: 'Jewelry', price: '$12+', image: '💍', description: 'Custom jewelry pieces' },
    { id: 6, name: 'Toys', price: '$15+', image: '🎮', description: 'Fun printed toys' }
  ]

  return c.render(
    <div class="min-h-screen bg-gray-50">
      <header class="bg-purple-600 text-white py-6 shadow-md">
        <div class="container mx-auto px-4">
          <a href="/" class="text-white hover:text-purple-200 mb-4 inline-block">
            <i class="fas fa-arrow-left mr-2"></i>Back to Home
          </a>
          <h1 class="text-3xl font-bold text-center">
            <i class="fas fa-cube mr-2"></i>3D Printing
          </h1>
        </div>
      </header>

      <main class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <div class="text-center">
                <div class="text-6xl mb-4">{product.image}</div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p class="text-gray-600 mb-2">{product.description}</p>
                <p class="text-2xl font-bold text-purple-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
})

// DTF Prints Page
app.get('/dtf-prints', (c) => {
  const products = [
    { id: 1, name: 'Custom Designs', price: '$8+', image: '🎨', description: 'Your design on fabric' },
    { id: 2, name: 'Logo Printing', price: '$10+', image: '🏢', description: 'Business logos' },
    { id: 3, name: 'Photo Prints', price: '$12+', image: '📸', description: 'Photo to fabric' },
    { id: 4, name: 'Text Designs', price: '$6+', image: '📝', description: 'Custom text prints' },
    { id: 5, name: 'Artwork', price: '$15+', image: '🖼️', description: 'Artistic prints' },
    { id: 6, name: 'Batch Orders', price: 'Quote', image: '📦', description: 'Bulk printing' }
  ]

  return c.render(
    <div class="min-h-screen bg-gray-50">
      <header class="bg-green-600 text-white py-6 shadow-md">
        <div class="container mx-auto px-4">
          <a href="/" class="text-white hover:text-green-200 mb-4 inline-block">
            <i class="fas fa-arrow-left mr-2"></i>Back to Home
          </a>
          <h1 class="text-3xl font-bold text-center">
            <i class="fas fa-print mr-2"></i>DTF Prints
          </h1>
        </div>
      </header>

      <main class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <div class="text-center">
                <div class="text-6xl mb-4">{product.image}</div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p class="text-gray-600 mb-2">{product.description}</p>
                <p class="text-2xl font-bold text-green-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
})

// Embroidery Page
app.get('/embroidery', (c) => {
  const products = [
    { id: 1, name: 'Logo Embroidery', price: '$15+', image: '🏷️', description: 'Company logos' },
    { id: 2, name: 'Name Embroidery', price: '$8+', image: '✍️', description: 'Personalized names' },
    { id: 3, name: 'Patches', price: '$10+', image: '🎖️', description: 'Custom patches' },
    { id: 4, name: 'Monograms', price: '$12+', image: '🔤', description: 'Classic monograms' },
    { id: 5, name: 'Designs', price: '$20+', image: '🌟', description: 'Custom embroidery' },
    { id: 6, name: 'Bulk Orders', price: 'Quote', image: '📋', description: 'Large quantities' }
  ]

  return c.render(
    <div class="min-h-screen bg-gray-50">
      <header class="bg-pink-600 text-white py-6 shadow-md">
        <div class="container mx-auto px-4">
          <a href="/" class="text-white hover:text-pink-200 mb-4 inline-block">
            <i class="fas fa-arrow-left mr-2"></i>Back to Home
          </a>
          <h1 class="text-3xl font-bold text-center">
            <i class="fas fa-sewing-machine mr-2"></i>Embroidery
          </h1>
        </div>
      </header>

      <main class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <div class="text-center">
                <div class="text-6xl mb-4">{product.image}</div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p class="text-gray-600 mb-2">{product.description}</p>
                <p class="text-2xl font-bold text-pink-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
})

// Contact Page
app.get('/contact', (c) => {
  return c.render(
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header class="bg-indigo-600 text-white py-6 shadow-md">
        <div class="container mx-auto px-4">
          <a href="/" class="text-white hover:text-indigo-200 mb-4 inline-block">
            <i class="fas fa-arrow-left mr-2"></i>Back to Home
          </a>
          <h1 class="text-3xl font-bold text-center">
            <i class="fas fa-envelope mr-2"></i>Contact Us
          </h1>
        </div>
      </header>

      <main class="container mx-auto px-4 py-12">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div class="text-center p-6 bg-blue-50 rounded-lg">
                <i class="fas fa-phone text-4xl text-blue-600 mb-4"></i>
                <h3 class="font-semibold text-gray-800 mb-2">Phone</h3>
                <p class="text-gray-600">+1 (555) 123-4567</p>
              </div>
              
              <div class="text-center p-6 bg-green-50 rounded-lg">
                <i class="fas fa-envelope text-4xl text-green-600 mb-4"></i>
                <h3 class="font-semibold text-gray-800 mb-2">Email</h3>
                <p class="text-gray-600">info@malachiprint.com</p>
              </div>
              
              <div class="text-center p-6 bg-purple-50 rounded-lg">
                <i class="fas fa-map-marker-alt text-4xl text-purple-600 mb-4"></i>
                <h3 class="font-semibold text-gray-800 mb-2">Location</h3>
                <p class="text-gray-600">123 Print Street, City, State</p>
              </div>
              
              <div class="text-center p-6 bg-pink-50 rounded-lg">
                <i class="fas fa-clock text-4xl text-pink-600 mb-4"></i>
                <h3 class="font-semibold text-gray-800 mb-2">Hours</h3>
                <p class="text-gray-600">Mon-Fri: 9AM-6PM</p>
              </div>
            </div>

            <div class="text-center">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Need a Quote?</h3>
              <p class="text-gray-600 mb-6">Contact our staff for custom pricing and bulk orders</p>
              <button class="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
})

export default app
