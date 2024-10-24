import { createSlice } from "@reduxjs/toolkit";

import chair_1 from "../../assets/chair-1.webp";
import chair_2 from "../../assets/chair-2.webp";
import chair_3 from "../../assets/chair-3.webp";
import chair_4 from "../../assets/chair-4.webp";
import chair_5 from "../../assets/chair-5.webp";
import chair_6 from "../../assets/chair-6.webp";

export type TProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  options: {
    size: string[];
    color: string[];
  };
};

interface ProductState {
  products: TProduct[];
}

const initialState: ProductState = {
  products: [
    {
      id: 1,
      name: "Ergo Flex Chair",
      description: `
        The Ergo Flex Chair is designed for those who prioritize comfort and functionality. 
        With its ergonomic backrest and adjustable height, it offers perfect support for long hours of work or study.
        Made with breathable mesh and a sleek metal frame, it’s the ideal choice for modern workspaces.
      `,
      price: 350,
      images: [chair_3, chair_1, chair_2],
      options: {
        size: ["Small", "Medium", "Large"],
        color: ["Black", "Gray", "Blue"],
      },
    },
    {
      id: 2,
      name: "Urban Lounge Chair",
      description: `
        The Urban Lounge Chair combines style and relaxation with its soft cushions and modern aesthetic. 
        Perfect for adding comfort to your living space, this chair is a statement piece for contemporary interiors.
      `,
      price: 199,
      images: [chair_4, chair_5, chair_6],
      options: {
        size: ["Medium", "Large"],
        color: ["Black", "Beige", "Orange"],
      },
    },
    {
      id: 3,
      name: "Scandi Comfort Chair",
      description: `
        The Scandi Comfort Chair offers a simple yet elegant design inspired by Scandinavian aesthetics.
        Crafted from sustainable wood with a fabric seat, it’s perfect for dining spaces or cozy corners.
      `,
      price: 250,
      images: [chair_1, chair_5],
      options: {
        size: ["Large"],
        color: ["White", "Light Green", "Pink"],
      },
    },
    {
      id: 4,
      name: "Vintage Club Chair",
      description: `
        The Vintage Club Chair is perfect for lovers of retro aesthetics. 
        With rich leather upholstery and a timeless design, it adds warmth and charm to any room.
      `,
      price: 320,
      images: [chair_2, chair_4],
      options: {
        size: ["Large"],
        color: ["Brown", "Black"],
      },
    },
    {
      id: 5,
      name: "Contemporary Armchair",
      description: `
        A bold yet refined armchair for modern interiors, featuring a wide seat and angular frame.
        This chair offers a blend of style and function, perfect for both living rooms and offices.
      `,
      price: 500,
      images: [chair_6, chair_5],
      options: {
        size: ["Small", "Medium"],
        color: ["Gray", "Black", "Teal"],
      },
    },
    {
      id: 6,
      name: "Soft Fabric Chair",
      description: `
        Designed for comfort, the Soft Fabric Chair provides a plush seat and supportive armrests, 
        making it perfect for relaxing after a long day. Its lightweight frame makes it easy to move.
      `,
      price: 120,
      images: [chair_3, chair_1, chair_4],
      options: {
        size: ["One Size"],
        color: ["Light Blue", "White"],
      },
    },
    {
      id: 7,
      name: "Boho Rattan Chair",
      description: `
        The Boho Rattan Chair brings natural vibes to your home with its handcrafted rattan frame.
        Perfect for adding a touch of bohemian style to sunrooms or cozy corners.
      `,
      price: 220,
      images: [chair_5, chair_6, chair_2],
      options: {
        size: ["Standard"],
        color: ["Natural", "White"],
      },
    },
    {
      id: 8,
      name: "Minimalist Floor Chair",
      description: `
        The Minimalist Floor Chair offers low seating with plush cushioning, 
        ideal for meditation rooms or casual living spaces. It’s lightweight and easy to store.
      `,
      price: 80,
      images: [chair_1, chair_5],
      options: {
        size: ["Small", "Medium"],
        color: ["Beige", "Gray"],
      },
    },
    {
      id: 9,
      name: "Futuristic Plastic Chair",
      description: `
        With its sleek curves and glossy finish, the Futuristic Plastic Chair is a bold statement piece.
        Designed with modern materials, it’s ideal for office spaces or modern dining rooms.
      `,
      price: 180,
      images: [chair_3, chair_4, chair_6],
      options: {
        size: ["Standard"],
        color: ["Black", "White", "Red"],
      },
    },
    {
      id: 10,
      name: "Wooden Rocking Chair",
      description: `
        The Wooden Rocking Chair combines a timeless rocking design with a sturdy wooden frame.
        Its ergonomic seat offers comfort, making it ideal for relaxing evenings or nurseries.
      `,
      price: 280,
      images: [chair_2, chair_5],
      options: {
        size: ["Large"],
        color: ["Oak", "Walnut"],
      },
    },
    {
      id: 11,
      name: "Luxury Recliner",
      description: `
        The Luxury Recliner offers the ultimate relaxation with its adjustable backrest and footrest.
        Upholstered in premium leather, it’s perfect for home theaters and living rooms.
      `,
      price: 600,
      images: [chair_1, chair_3, chair_4, chair_6, chair_5],
      options: {
        size: ["One Size"],
        color: ["Black", "Brown"],
      },
    },
    {
      id: 12,
      name: "Eco-Friendly Bamboo Chair",
      description: `
        Crafted from sustainable bamboo, this chair provides eco-friendly seating without compromising on style.
        It’s lightweight, durable, and adds a natural touch to any space.
      `,
      price: 90,
      images: [chair_6, chair_5],
      options: {
        size: ["Standard"],
        color: ["Natural", "Brown"],
      },
    },
    {
      id: 13,
      name: "Classic Dining Chair",
      description: `
        The Classic Dining Chair combines tradition with comfort, featuring a padded seat and solid wood frame.
        It’s a great addition to both formal and casual dining rooms.
      `,
      price: 150,
      images: [chair_2, chair_4],
      options: {
        size: ["Standard"],
        color: ["Cherry", "White"],
      },
    },
    {
      id: 14,
      name: "Swivel Office Chair",
      description: `
        Perfect for workspaces, the Swivel Office Chair offers 360-degree rotation and adjustable height for added convenience.
        Its cushioned seat and breathable backrest ensure long-lasting comfort.
      `,
      price: 200,
      images: [chair_3, chair_5],
      options: {
        size: ["One Size"],
        color: ["Black", "Gray"],
      },
    },
    {
      id: 15,
      name: "Industrial Metal Chair",
      description: `
        The Industrial Metal Chair brings raw, urban style to your space with its all-metal construction and sleek finish.
        Ideal for lofts, cafes, or industrial-themed interiors.
      `,
      price: 140,
      images: [chair_4, chair_2],
      options: {
        size: ["One Size"],
        color: ["Black", "Steel", "Copper"],
      },
    },
    {
      id: 16,
      name: "Accent Lounge Chair",
      description: `
          The Accent Lounge Chair features bold colors and curved lines, making it the perfect statement piece for any room.
          With its soft upholstery and deep seating, it provides both comfort and style for modern interiors.
        `,
      price: 270,
      images: [chair_1, chair_6, chair_3],
      options: {
        size: ["Medium", "Large"],
        color: ["Red", "Black", "White"],
      },
    },
    {
      id: 17,
      name: "Ergonomic Task Chair",
      description: `
          Designed for productivity, the Ergonomic Task Chair offers lumbar support and breathable mesh backing.
          Its adjustable seat and armrests provide personalized comfort for long working hours.
        `,
      price: 180,
      images: [chair_2, chair_4],
      options: {
        size: ["One Size"],
        color: ["Gray", "Black", "Blue"],
      },
    },
    {
      id: 18,
      name: "Retro Diner Chair",
      description: `
          Inspired by classic diner aesthetics, the Retro Diner Chair adds a nostalgic feel to kitchens and dining spaces.
          With its vinyl seat and chrome legs, it brings vintage charm into any room.
        `,
      price: 130,
      images: [chair_4, chair_5, chair_6],
      options: {
        size: ["Standard"],
        color: ["Red", "White", "Black"],
      },
    },
    {
      id: 19,
      name: "Compact Office Stool",
      description: `
          The Compact Office Stool is perfect for small spaces. Its swivel base and height adjustability make it versatile for desks or counters.
          Designed with lightweight materials, it's easy to move and store.
        `,
      price: 90,
      images: [chair_1, chair_2, chair_3],
      options: {
        size: ["Adjustable"],
        color: ["Black", "Gray"],
      },
    },
    {
      id: 20,
      name: "Mid-Century Armchair",
      description: `
          The Mid-Century Armchair features a vintage-inspired design with wooden arms and a low-profile seat.
          Upholstered with durable fabric, it adds a sophisticated touch to living spaces.
        `,
      price: 340,
      images: [chair_5, chair_6],
      options: {
        size: ["Medium", "Large"],
        color: ["Teal", "Beige", "Brown"],
      },
    },
    {
      id: 21,
      name: "Outdoor Wicker Chair",
      description: `
          The Outdoor Wicker Chair combines a durable metal frame with weather-resistant wicker for outdoor seating.
          It offers a natural aesthetic perfect for patios, gardens, and poolside areas.
        `,
      price: 210,
      images: [chair_2, chair_3, chair_4],
      options: {
        size: ["Standard"],
        color: ["Natural", "Black", "Gray"],
      },
    },
    {
      id: 22,
      name: "Modern Reclining Chair",
      description: `
          The Modern Reclining Chair offers adjustable backrests and footrests, perfect for unwinding at the end of the day.
          Its contemporary design fits seamlessly into living rooms or home theaters.
        `,
      price: 420,
      images: [chair_6, chair_1],
      options: {
        size: ["One Size"],
        color: ["Black", "Gray", "White"],
      },
    },
    {
      id: 23,
      name: "Foldable Camping Chair",
      description: `
          Lightweight and easy to carry, the Foldable Camping Chair is designed for outdoor adventures.
          Its compact foldable frame and cup holder make it ideal for camping, picnics, or outdoor events.
        `,
      price: 60,
      images: [chair_3, chair_5],
      options: {
        size: ["One Size"],
        color: ["Green", "Navy", "Black"],
      },
    },
    {
      id: 24,
      name: "Sculptural Metal Chair",
      description: `
          The Sculptural Metal Chair is a modern art piece, combining comfort with an artistic, geometric design.
          Perfect for minimalist interiors, this chair adds a unique visual element to any space.
        `,
      price: 310,
      images: [chair_1, chair_2, chair_4],
      options: {
        size: ["Standard"],
        color: ["Black", "White", "Gold"],
      },
    },
    {
      id: 25,
      name: "Luxury Lounge Chair",
      description: `
          The Luxury Lounge Chair features soft leather upholstery and an elegant frame, perfect for sophisticated interiors.
          It offers ultimate comfort for reading corners or relaxation spaces.
        `,
      price: 550,
      images: [chair_5, chair_6, chair_3],
      options: {
        size: ["Large"],
        color: ["Black", "Brown", "Navy"],
      },
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
