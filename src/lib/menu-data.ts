
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
        imageUrl: "https://images.pexels.com/photos/1684177/pexels-photo-1684177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["coffee"]
    },
    {
        id: "menu-latte",
        name: "Latte",
        price: "Rp 35.000",
        description: "Smooth espresso with steamed milk, topped with a light layer of foam.",
        imageUrl: "https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg",
        tags: ["coffee", "recommended"]
    },
    {
        id: 'menu-cappuccino',
        name: 'Cappuccino',
        price: 'Rp 35.000',
        description: "A classic blend of espresso, steamed milk, and a thick layer of creamy foam.",
        imageUrl: "https://images.pexels.com/photos/1727123/pexels-photo-1727123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["coffee"]
    },
    {
        id: "menu-espresso",
        name: "Espresso",
        price: "Rp 25.000",
        description: "A concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.",
        imageUrl: "https://images.pexels.com/photos/4109848/pexels-photo-4109848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["coffee"]
    },
    {
        id: "menu-macchiato",
        name: "Macchiato",
        price: "Rp 32.000",
        description: "An espresso coffee drink with a small amount of milk, usually foamed.",
        imageUrl: "https://images.pexels.com/photos/324030/pexels-photo-324030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["coffee"]
    },
    {
        id: "menu-mocha",
        name: "Mocha",
        price: "Rp 38.000",
        description: "A delightful blend of espresso, chocolate, and steamed milk.",
        imageUrl: "https://images.pexels.com/photos/357283/pexels-photo-357283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["coffee", "recommended"]
    },
    {
        id: "menu-flatwhite",
        name: "Flat White",
        price: "Rp 35.000",
        description: "Espresso with steamed milk, consisting of a thin layer of microfoam.",
        imageUrl: "https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["coffee"]
    },
    {
        id: "menu-croissant",
        name: "Croissant",
        price: "Rp 25.000",
        description: "A buttery, flaky, and golden-brown pastry, perfect with coffee.",
        imageUrl: "https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["snack & desserts"]
    },
    {
        id: "menu-avocadotoast",
        name: "Avocado Toast",
        price: "Rp 55.000",
        description: "Smashed avocado on toasted sourdough, with a sprinkle of chili flakes.",
        imageUrl: "https://images.pexels.com/photos/6622177/pexels-photo-6622177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["eatery", "recommended"]
    },
    {
        id: 'menu-matchalatte',
        name: 'Matcha Latte',
        price: 'Rp 40.000',
        description: "Earthy Japanese green tea powder whisked with frothy steamed milk.",
        imageUrl: "https://images.pexels.com/photos/2332686/pexels-photo-2332686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["non-coffee", "recommended"]
    },
    {
        id: 'menu-icedchocolate',
        name: 'Iced Chocolate',
        price: 'Rp 38.000',
        description: "Rich, decadent chocolate chilled with milk and ice. A refreshing treat.",
        imageUrl: "https://images.pexels.com/photos/1342468/pexels-photo-1342468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["non-coffee"]
    },
    {
        id: 'menu-icedtea',
        name: 'Iced Tea',
        price: 'Rp 25.000',
        description: "Freshly brewed tea, served chilled over ice with a slice of lemon.",
        imageUrl: "https://images.pexels.com/photos/141014/pexels-photo-141014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["non-coffee"]
    },
    {
        id: 'menu-fruitsmoothie',
        name: 'Fruit Smoothie',
        price: 'Rp 45.000',
        description: "A refreshing blend of mixed berries, banana, and yogurt.",
        imageUrl: "https://images.pexels.com/photos/4112863/pexels-photo-4112863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["non-coffee"]
    },
    {
        id: 'menu-artisan tea',
        name: 'Artisan Tea',
        price: 'Rp 28.000',
        description: "A selection of hand-picked, loose-leaf teas with unique flavor profiles.",
        imageUrl: "https://images.pexels.com/photos/39347/tea-tea-leaves-herbal-tea-flavor-39347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["non-coffee"]
    },
    {
        id: 'menu-quinoasalad',
        name: 'Quinoa Salad',
        price: 'Rp 65.000',
        description: "A healthy and vibrant mix of quinoa, fresh vegetables, and a lemon vinaigrette.",
        imageUrl: "https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["eatery"]
    },
    {
        id: 'menu-clubsandwich',
        name: 'Club Sandwich',
        price: 'Rp 75.000',
        description: "A triple-decker sandwich with grilled chicken, bacon, lettuce, tomato, and mayo.",
        imageUrl: "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["eatery", "recommended"]
    },
    {
        id: 'menu-cheesecakeslice',
        name: 'Cheesecake Slice',
        price: 'Rp 45.000',
        description: "Creamy, rich, and decadent New York-style cheesecake with a graham cracker crust.",
        imageUrl: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["snack & desserts", "recommended"]
    },
    {
        id: 'menu-giantchococookie',
        name: 'Giant Choco Cookie',
        price: 'Rp 30.000',
        description: "A warm, soft-baked giant cookie loaded with gooey chocolate chips.",
        imageUrl: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["snack & desserts"]
    },
];
