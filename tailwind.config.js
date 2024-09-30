/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        cement: '#2B2B2B'  // Custom cement-like color (light grayish)
      },
      backgroundImage: { 'food-image': "url('my_food_app/public/assets/foodie.jpg')", 'food-image-2': "url('my_food_app/public/assets/bgfood.png')", 'food-image-3': "url('my_food_app/public/assets/productphotos/caesarsalad.jpg')", 'food-image-4': "url('my_food_app/public//assets/bgimage.jpg')"}
    },
  },
  plugins: [],
}

