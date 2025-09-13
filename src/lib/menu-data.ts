
export type MenuItem = {
    id: string;
    name: string;
    price: string;
    description: string;
    imageUrl: string;
    tags: string[];
};

export const menuItems: MenuItem[] = [
    {
        id: "menu-americano",
        name: "Americano",
        price: "Rp 30.000",
        description: "A rich and intense shot of espresso, diluted with hot water.",
        imageUrl: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxhbWVyaWNhbm98ZW58MHx8fHwxNzU3NzQ4MjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["coffee"]
    },
    {
        id: "menu-latte",
        name: "Latte",
        price: "Rp 35.000",
        description: "Smooth espresso with steamed milk, topped with a light layer of foam.",
        imageUrl: "https://images.unsplash.com/photo-1497636577773-f1231844b336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8bGF0dGV8ZW58MHx8fHwxNzU3NzQ4Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["coffee", "recommended"]
    },
    {
        id: 'menu-cappuccino',
        name: 'Cappuccino',
        price: 'Rp 35.000',
        description: "A classic blend of espresso, steamed milk, and a thick layer of creamy foam.",
        imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a65343d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjYXBwdWNjaW5vfGVufDB8fHx8MTc1Nzc0ODI5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["coffee"]
    },
    {
        id: "menu-espresso",
        name: "Espresso",
        price: "Rp 25.000",
        description: "A concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.",
        imageUrl: "https://images.unsplash.com/photo-1596707833141-547a4b3b2a2e?q=80&w=1287&auto=format&fit=crop",
        tags: ["coffee"]
    },
    {
        id: "menu-macchiato",
        name: "Macchiato",
        price: "Rp 32.000",
        description: "An espresso coffee drink with a small amount of milk, usually foamed.",
        imageUrl: "https://images.unsplash.com/photo-1571224230846-9636b1511059?q=80&w=1287&auto=format&fit=crop",
        tags: ["coffee"]
    },
    {
        id: "menu-mocha",
        name: "Mocha",
        price: "Rp 38.000",
        description: "A delightful blend of espresso, chocolate, and steamed milk.",
        imageUrl: "https://images.unsplash.com/photo-1542990253-a7814f27a22c?q=80&w=1287&auto=format&fit=crop",
        tags: ["coffee", "recommended"]
    },
    {
        id: "menu-flatwhite",
        name: "Flat White",
        price: "Rp 35.000",
        description: "Espresso with steamed milk, consisting of a thin layer of microfoam.",
        imageUrl: "https://images.unsplash.com/photo-1561882468-91866540424d?q=80&w=1287&auto=format&fit=crop",
        tags: ["coffee"]
    },
    {
        id: "menu-croissant",
        name: "Croissant",
        price: "Rp 25.000",
        description: "A buttery, flaky, and golden-brown pastry, perfect with coffee.",
        imageUrl: "https://images.unsplash.com/photo-1599940778173-e276d4acb2bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjcm9pc3NhbnR8ZW58MHx8fHwxNzU3NzQ4NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["snack & desserts"]
    },
    {
        id: "menu-avocadotoast",
        name: "Avocado Toast",
        price: "Rp 55.000",
        description: "Smashed avocado on toasted sourdough, with a sprinkle of chili flakes.",
        imageUrl: "https://images.unsplash.com/photo-1628556820645-63ba5f90e6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxhdm9jYWRvJTIwdG9hc3R8ZW58MHx8fHwxNzU3NzQ4NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["eatery", "recommended"]
    },
    {
        id: 'menu-matchalatte',
        name: 'Matcha Latte',
        price: 'Rp 40.000',
        description: "Earthy Japanese green tea powder whisked with frothy steamed milk.",
        imageUrl: "https://images.unsplash.com/photo-1563822552-3200133AC489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtYXRjaGElMjBsYXR0ZXxlbnwwfHx8fDE3NTc3NDg0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["non-coffee", "recommended"]
    },
    {
        id: 'menu-icedchocolate',
        name: 'Iced Chocolate',
        price: 'Rp 38.000',
        description: "Rich, decadent chocolate chilled with milk and ice. A refreshing treat.",
        imageUrl: "https://images.unsplash.com/photo-1562228122-29135a585f83?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["non-coffee"]
    },
    {
        id: 'menu-icedtea',
        name: 'Iced Tea',
        price: 'Rp 25.000',
        description: "Freshly brewed tea, served chilled over ice with a slice of lemon.",
        imageUrl: "https://images.unsplash.com/photo-1556745753-1f3c5fbe6b3c?q=80&w=1287&auto=format&fit=crop",
        tags: ["non-coffee"]
    },
    {
        id: 'menu-fruitsmoothie',
        name: 'Fruit Smoothie',
        price: 'Rp 45.000',
        description: "A refreshing blend of mixed berries, banana, and yogurt.",
        imageUrl: "https://images.unsplash.com/photo-1610970881699-44a5c8a23486?q=80&w=1287&auto=format&fit=crop",
        tags: ["non-coffee"]
    },
    {
        id: 'menu-artisan tea',
        name: 'Artisan Tea',
        price: 'Rp 28.000',
        description: "A selection of hand-picked, loose-leaf teas with unique flavor profiles.",
        imageUrl: "https://images.unsplash.com/photo-1563822552-3200133AC489?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["non-coffee"]
    },
    {
        id: 'menu-quinoasalad',
        name: 'Quinoa Salad',
        price: 'Rp 65.000',
        description: "A healthy and vibrant mix of quinoa, fresh vegetables, and a lemon vinaigrette.",
        imageUrl: "https://images.unsplash.com/photo-1551248429-4097c682c478?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["eatery"]
    },
    {
        id: 'menu-clubsandwich',
        name: 'Club Sandwich',
        price: 'Rp 75.000',
        description: "A triple-decker sandwich with grilled chicken, bacon, lettuce, tomato, and mayo.",
        imageUrl: "https://images.unsplash.com/photo-1592415486699-8d5a71727349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjbHViJTIwc2FuZHdpY2h8ZW58MHx8fHwxNzU3NzQ4NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["eatery", "recommended"]
    },
    {
        id: 'menu-cheesecakeslice',
        name: 'Cheesecake Slice',
        price: 'Rp 45.000',
        description: "Creamy, rich, and decadent New York-style cheesecake with a graham cracker crust.",
        imageUrl: "https://images.unsplash.com/photo-1565792595381-32547a4635ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjaGVlc2VjYWtlJTIwc2xpY2V8ZW58MHx8fHwxNzU3NzQ4NjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["snack & desserts", "recommended"]
    },
    {
        id: 'menu-giantchococookie',
        name: 'Giant Choco Cookie',
        price: 'Rp 30.000',
        description: "A warm, soft-baked giant cookie loaded with gooey chocolate chips.",
        imageUrl: "https://images.unsplash.com/photo-1598839958373-c15496a76e93?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["snack & desserts"]
    },
];

    
