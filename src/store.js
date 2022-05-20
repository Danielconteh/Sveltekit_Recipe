import { writable } from 'svelte/store'

import { browser } from '$app/env'

export const paginatedStore = writable(
  (browser && localStorage.getItem('paginatedStore')) ||
    JSON.stringify({ currentPage: 1, pageSize: 9 })
)

paginatedStore.subscribe(
  (value) => browser && localStorage.setItem('paginatedStore', value)
)

// Set the stored value or a sane default.
export const store = writable(
  (browser && localStorage.getItem('recipe')) ||
    JSON.stringify({ name: 'carrot' })
)

// Anytime the store changes, update the local storage value.
store.subscribe((value) => browser && localStorage.setItem('recipe', value))

// CAROUSEL ROTATE ONLY WHEN IMAE HAS FINISH LOADING...
export const imgRotate = writable(
  (browser && localStorage.getItem('rotate')) ||
    JSON.stringify({ rotate: false })
)

// CAROUSEL ROTATE ONLY WHEN IMAE HAS FINISH LOADING...
imgRotate.subscribe((value) => browser && localStorage.setItem('rotate', value))

// initial page to rotate
export const initialPageNumber = writable(
  (browser && localStorage.getItem('page')) || JSON.stringify({ page: 0 })
)

// initial page to rotate...
initialPageNumber.subscribe(
  (value) => browser && localStorage.setItem('page', value)
)

// FILTER_BUTON
export let items = [
  'carrot',
  'broccoli',
  'asparagus',
  'cauliflower',
  'corn',
  'cucumber',
  'green_pepper',
  'lettuce',
  'mushrooms',
  'onion',
  'potato',
  'pumpkin',
  'red_pepper',
  'tomato',
  'beetroot',
  'brussel_sprouts',
  'peas',
  'zucchini',
  'radish',
  'sweet_potato',
  'artichoke',
  'leek',
  'cabbage',
  'celery',
  'chili',
  'garlic',
  'basil',
  'coriander',
  'parsley',
  'dill',
  'rosemary',
  'oregano',
  'cinnamon',
  'saffron',
  'green_bean',
  'bean',
  'chickpea',
  'lentil',
  'apple',
  'apricot',
  'avocado',
  'banana',
  'blackberry',
  'blackcurrant',
  'blueberry',
  'boysenberry',
  'cherry',
  'coconut',
  'fig',
  'grape',
  'grapefruit',
  'lemon',
  'lime',
  'lychee',
  'mandarin',
  'mango',
  'melon',
  'nectarine',
  'orange',
  'papaya',
  'passion_fruit',
  'peach',
  'pear',
  'pineapple',
  'plum',
  'pomegranate',
  'quince',
  'raspberry',
  'strawberry',
  'watermelon',
  'salad',
  'pizza',
  'pasta',
  'popcorn',
  'lobster',
  'steak',
  'bbq',
  'pudding',
  'hamburger',
  'pie',
  'cake',
  'sausage',
  'tacos',
  'kebab',
  'poutine',
  'seafood',
  'chips',
  'fries',
  'masala',
  'paella',
  'som_tam',
  'chicken',
  'toast',
  'marzipan',
  'tofu',
  'ketchup',
  'hummus',
  'chili',
  'maple_syrup',
  'parma_ham',
  'fajitas',
  'champ',
  'lasagna',
  'poke',
  'chocolate',
  'croissant',
  'arepas',
  'bunny_chow',
  'pierogi',
  'donuts',
  'rendang',
  'sushi',
  'ice_cream',
  'duck',
  'curry',
  'beef',
  'goat',
  'lamb',
  'turkey',
  'pork',
  'fish',
  'crab',
  'bacon',
  'ham',
  'pepperoni',
  'salami',
  'ribs',
]
