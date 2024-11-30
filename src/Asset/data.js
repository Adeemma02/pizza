import img_1 from './images/focaccia.jpg'
import img_2 from './images/funghi.jpg'
import img_3 from './images/margherita.jpg'
import img_4 from './images/prosciutto.jpg'
import img_5 from './images/salamino.jpg'
import img_6 from './images/spinaci.jpg'
import img_7 from './images/sweet-chilli-chicken4177.png'
import img_8 from './images/peppe--veg7935.png'
import img_9 from './images/tandoori-chicken2551.png'
import img_10 from './images/bbq-chicken-and-macon5001.png'
import img_11 from './images/download.png'
import img_12 from './images/download (1).png'

const pizzaData = [
  {
    id:1,
    name: "Pizza Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: '8000',
    photoName: img_1,
    soldOut: false,
  },
  {
    id:2,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: '9000',
    photoName: img_3,
    soldOut: false,
  },
  {
    id:3,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: '8000',
    photoName: img_6,
    soldOut: false,
  },
  {
    id:4,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: '8500',
    photoName: img_2,
    soldOut: false,
  },
  {
    id:5,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: '7500',
    photoName: img_5,
    soldOut: true,
  },
  {
    id:6,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: '9000',
    photoName: img_4,
    soldOut: false,
  },
  {
    id:7,
    name: "Pizza Chilli Chicken",
    ingredients: "Sweet Chilli sauce, chicken",
    price: '10000',
    photoName: img_7,
    soldOut: false,
  },
  {
    id:8,
    name: "Pizza Peppe Veg",
    ingredients: "Peri Peri Sauce, veggie mix, Jalapenos, Peppadew",
    price: '8000',
    photoName: img_8,
    soldOut: false,
  },
  {
    id:9,
    name: "Pizza Tandoori Chicken",
    ingredients: "Tomato, pepperoni, Macon Slices, Cheese",
    price: '7800',
    photoName: img_9,
    soldOut: false,
  },
  {
    id:10,
    name: "Pizza Macon",
    ingredients: "Tomato, BBQ Sauce, Chicken, Diced Macon",
    price: '9500',
    photoName: img_10,
    soldOut: false,
  },
  {
    id:11,
    name: "Pizza Mexican Fiesta",
    ingredients: "Pepper, green chilli, Aragula, Mexician sauce",
    price: '10000',
    photoName: img_11,
    soldOut: false,
  },
  {
    id:12,
    name: "Pizza Tikka ",
    ingredients: "Onion, Sweet bell pepper, and tikka sauce",
    price: '9000',
    photoName: img_12,
    soldOut: false,
  },
];

export default pizzaData;