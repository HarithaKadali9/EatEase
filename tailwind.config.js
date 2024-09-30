/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        cement: '#2B2B2B'  // Custom cement-like color (light grayish)
      },
      backgroundImage: { 'food-image': "url('assets/foodie.jpg')", 'food-image-2': "url('assets/bgfood.png')", 'food-image-3': "url('assets/productphotos/caesarsalad.jpg')", 'food-image-4': "url('assets/bgimage.jpg')"}
    },
  },
  plugins: [],
}

