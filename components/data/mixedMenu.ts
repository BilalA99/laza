const mixedMenu = [
    // Crepes
    {
        id: 1,
        title: "Oreo Crepe",
        description: "Nutella / Oreo / Banana White Chocolate",
        price: 11,
        imageSrc: "/desserts/oreocrepe.png",
        category: "Crepes",
        modifiers: [
            { name: "Chocolate & Spread's", options: ["Nutella", "White Chocolate", "Lotus"] },
            { name: "Nuts", options: ["Pistachio", "Almonds", "Hazelnuts"] },
            { name: "Toppings", options: ["Strawberries", "Banana", "Oreo"] },
        ],
    },
    // Kunafa
    {
        id: 2,
        title: "Ocky Way Special Kunafa",
        description: "Ocky Way chocolate bars with crispy kunafa and creamy filling",
        price: 13.79,
        imageSrc: "/desserts/ockywayspecialkunafa.png",
        category: "Kunafa",
        modifiers: [
            { name: "Toppings", options: ["Extra Chocolate", "Pistachio", "Ice Cream"] },
            { name: "Temperature", options: ["Hot", "Room Temperature"] },
        ],
    },
    // Drinks
    {
        id: 3,
        title: "Ferro Shake",
        description: "Rich chocolate milkshake with Ferrero Rocher pieces",
        price: 8.50,
        imageSrc: "/drinks/ferroshake.jpg",
        category: "Drinks",
        modifiers: [
            { name: "Size", options: ["Small", "Medium", "Large"] },
            { name: "Add-ons", options: ["Extra Whipped Cream", "Chocolate Drizzle", "Nuts"] },
        ],
    },
    // Waffles
    {
        id: 4,
        title: "Kinder Waffle",
        description: "Belgian waffle with Kinder chocolate and hazelnut spread",
        price: 12.50,
        imageSrc: "/desserts/kinderwaffle.jpg",
        category: "Waffles",
        modifiers: [
            { name: "Chocolate & Spread's", options: ["Nutella", "White Chocolate", "Lotus"] },
            { name: "Toppings", options: ["Strawberries", "Banana", "Ice Cream"] },
        ],
    },
    // Specialty Drinks
    {
        id: 5,
        title: "Dubai Strawberry Cup",
        description: "Premium strawberry dessert cup with chocolate coating",
        price: 15.99,
        imageSrc: "/drinks/dubai-strawberry-cup.jpg",
        category: "Specialty",
        modifiers: [
            { name: "Size", options: ["Regular", "Large"] },
            { name: "Extra Toppings", options: ["Gold Flakes", "Nuts", "Extra Strawberries"] },
        ],
    },
    // More Kunafa
    {
        id: 6,
        title: "Pistachio Kunafa",
        description: "Traditional kunafa with premium pistachio and sweet syrup",
        price: 12.64,
        imageSrc: "/desserts/pistachiokunafa.png",
        category: "Kunafa",
        modifiers: [
            { name: "Nuts", options: ["Extra Pistachio", "Mixed Nuts", "Almonds"] },
            { name: "Sweetness", options: ["Regular", "Less Sweet", "Extra Sweet"] },
        ],
    },
    // Coffee/Latte
    {
        id: 7,
        title: "Laza Latte",
        description: "Our signature coffee blend with steamed milk and special spices",
        price: 6.75,
        imageSrc: "/drinks/lazalatte.jpg",
        category: "Coffee",
        modifiers: [
            { name: "Size", options: ["Small", "Medium", "Large"] },
            { name: "Milk", options: ["Regular", "Oat", "Almond", "Coconut"] },
            { name: "Sweetness", options: ["No Sugar", "Regular", "Extra Sweet"] },
        ],
    },
    // Dessert Cup
    {
        id: 8,
        title: "Strawberry Cup",
        description: "Fresh strawberries with cream and chocolate pieces",
        price: 9.25,
        imageSrc: "/desserts/straweberrycup.jpg",
        category: "Cups",
        modifiers: [
            { name: "Size", options: ["Small", "Large"] },
            { name: "Add-ons", options: ["Extra Cream", "Chocolate Chips", "Nuts"] },
        ],
    },
    // More Waffles
    {
        id: 9,
        title: "Lotus Waffle",
        description: "Crispy waffle with Lotus Biscoff spread and caramelized biscuits",
        price: 11.75,
        imageSrc: "/desserts/lotuswaffle.jpg",
        category: "Waffles",
        modifiers: [
            { name: "Spread", options: ["Lotus", "Nutella", "White Chocolate"] },
            { name: "Toppings", options: ["Ice Cream", "Fresh Fruits", "Extra Biscuits"] },
        ],
    },
    // Milkshakes
    {
        id: 10,
        title: "Brownie Shake",
        description: "Chocolate milkshake blended with brownie pieces",
        price: 9.50,
        imageSrc: "/drinks/brownieshake.png",
        category: "Shakes",
        modifiers: [
            { name: "Size", options: ["Medium", "Large"] },
            { name: "Add-ons", options: ["Extra Brownie", "Whipped Cream", "Chocolate Sauce"] },
        ],
    },
];

// Function to get random items from all menu categories
export function getRandomMenuItems(limit: number = 7) {
    // Combine all menu categories
    const allItems = [
        // Crepes
        // {
        //     id: 1,
        //     title: "Oreo Crepe",
        //     description: "Nutella / Oreo / Banana White Chocolate",
        //     price: 11,
        //     imageSrc: "/desserts/oreocrepe.png",
        //     category: "Crepes",
        //     modifiers: [
        //         { name: "Chocolate & Spread's", options: ["Nutella", "White Chocolate", "Lotus"] },
        //         { name: "Nuts", options: ["Pistachio", "Almonds", "Hazelnuts"] },
        //         { name: "Toppings", options: ["Strawberries", "Banana", "Oreo"] },
        //     ],
        // },
        // Kunafa
        {
            id: 2,
            title: "Ocky Way Special Kunafa",
            description: "Ocky Way chocolate bars with crispy kunafa and creamy filling",
            price: 13.79,
            imageSrc: "/desserts/ockywayspecialkunafa.png",
            category: "Kunafa",
            modifiers: [
                { name: "Toppings", options: ["Extra Chocolate", "Pistachio", "Ice Cream"] },
                { name: "Temperature", options: ["Hot", "Room Temperature"] },
            ],
        },
        // Drinks
        {
            id: 3,
            title: "Ferro Shake",
            description: "Rich chocolate milkshake with Ferrero Rocher pieces",
            price: 8.50,
            imageSrc: "/drinks/ferroshake.jpg",
            category: "Drinks",
            modifiers: [
                { name: "Size", options: ["Small", "Medium", "Large"] },
                { name: "Add-ons", options: ["Extra Whipped Cream", "Chocolate Drizzle", "Nuts"] },
            ],
        },
        // Waffles
        {
            id: 4,
            title: "Kinder Waffle",
            description: "Belgian waffle with Kinder chocolate and hazelnut spread",
            price: 12.50,
            imageSrc: "/desserts/kinderwaffle.jpg",
            category: "Waffles",
            modifiers: [
                { name: "Chocolate & Spread's", options: ["Nutella", "White Chocolate", "Lotus"] },
                { name: "Toppings", options: ["Strawberries", "Banana", "Ice Cream"] },
            ],
        },
        // Specialty Drinks
        {
            id: 5,
            title: "Dubai Strawberry Cup",
            description: "Premium strawberry dessert cup with chocolate coating",
            price: 15.99,
            imageSrc: "/drinks/dubai-strawberry-cup.jpg",
            category: "Specialty",
            modifiers: [
                { name: "Size", options: ["Regular", "Large"] },
                { name: "Extra Toppings", options: ["Gold Flakes", "Nuts", "Extra Strawberries"] },
            ],
        },
        // More Kunafa
        {
            id: 6,
            title: "Pistachio Kunafa",
            description: "Traditional kunafa with premium pistachio and sweet syrup",
            price: 12.64,
            imageSrc: "/desserts/pistachiokunafa.png",
            category: "Kunafa",
            modifiers: [
                { name: "Nuts", options: ["Extra Pistachio", "Mixed Nuts", "Almonds"] },
                { name: "Sweetness", options: ["Regular", "Less Sweet", "Extra Sweet"] },
            ],
        },
        // Coffee/Latte
        {
            id: 7,
            title: "Laza Latte",
            description: "Our signature coffee blend with steamed milk and special spices",
            price: 6.75,
            imageSrc: "/drinks/lazalatte.jpg",
            category: "Coffee",
            modifiers: [
                { name: "Size", options: ["Small", "Medium", "Large"] },
                { name: "Milk", options: ["Regular", "Oat", "Almond", "Coconut"] },
                { name: "Sweetness", options: ["No Sugar", "Regular", "Extra Sweet"] },
            ],
        },
        // Dessert Cup
        {
            id: 8,
            title: "Strawberry Cup",
            description: "Fresh strawberries with cream and chocolate pieces",
            price: 9.25,
            imageSrc: "/desserts/straweberrycup.jpg",
            category: "Cups",
            modifiers: [
                { name: "Size", options: ["Small", "Large"] },
                { name: "Add-ons", options: ["Extra Cream", "Chocolate Chips", "Nuts"] },
            ],
        },
        // More Waffles
        {
            id: 9,
            title: "Lotus Waffle",
            description: "Crispy waffle with Lotus Biscoff spread and caramelized biscuits",
            price: 11.75,
            imageSrc: "/desserts/lotuswaffle.jpg",
            category: "Waffles",
            modifiers: [
                { name: "Spread", options: ["Lotus", "Nutella", "White Chocolate"] },
                { name: "Toppings", options: ["Ice Cream", "Fresh Fruits", "Extra Biscuits"] },
            ],
        },
        // Milkshakes
        // {
        //     id: 10,
        //     title: "Brownie Shake",
        //     description: "Chocolate milkshake blended with brownie pieces",
        //     price: 9.50,
        //     imageSrc: "/drinks/brownieshake.png",
        //     category: "Shakes",
        //     modifiers: [
        //         { name: "Size", options: ["Medium", "Large"] },
        //         { name: "Add-ons", options: ["Extra Brownie", "Whipped Cream", "Chocolate Sauce"] },
        //     ],
        // },
        // Additional items from MenuCategories.tsx
        // Waffles
        {
            id: 11,
            title: "Strawberry Banana Waffle",
            description: "Strawberries / Banana / White Chocolate",
            price: 11,
            imageSrc: "/desserts/strawberrybannanawaffle.jpg",
            category: "Waffles",
            modifiers: [
                { name: "Chocolate & Spread's", options: ["Nutella", "White Chocolate", "Lotus"] }
            ]
        },
        {
            id: 12,
            title: "Red Velvet Waffle",
            description: "Red Velvet Cake Crumbles / Nutella / White Chocolate",
            price: 13,
            imageSrc: "/desserts/redvelvet.jpg",
            category: "Waffles",
            modifiers: [
                { name: "Chocolate & Spread's", options: ["Nutella", "White Chocolate", "Lotus"] },
                { name: "Nuts", options: ["Pistachio", "Almonds", "Hazelnuts"] },
                { name: "Toppings", options: ["Strawberries", "Banana", "Oreo"] },
            ],
        },
        {
            id: 13,
            title: "Ferrero Waffle",
            description: "Nutella / Ferrero Rocher /Strawberries",
            price: 13,
            imageSrc: "/desserts/ferrowaffle.jpg",
            category: "Waffles",
            modifiers: [
                { name: "Chocolate & Spread's", options: ["Nutella", "White Chocolate", "Lotus"] }
            ]
        },
        {
            id: 14,
            title: "Laza Waffle",
            description: "Nutella / Lotus Butter / Milk Chocolate / Pistachio / Banana",
            price: 16,
            imageSrc: "/desserts/lazawaffle.jpg",
            category: "Waffles",
            modifiers: [
                { name: "Chocolate & Spread's", options: ["Nutella", "White Chocolate", "Lotus"] }
            ]
        },
        // Kunafa
        {
            id: 15,
            title: "Laza Special Kunafa",
            description: "Lotus Butter / Biscoff / Pistachio Butter Crushed Pistachio / Crushed Oreo / Chocolate",
            price: 13,
            imageSrc: "/desserts/ockywayspecialkunafa.png",
            category: "Kunafa",
            modifiers: [
                {
                    name: "Ice Cream",
                    options: ["Vanilla", "Pistachio", "No Ice Cream"]
                },
                {
                    name: "Extra Toppings",
                    options: ["Extra Pistachio", "Extra Lotus", "Extra Chocolate"]
                }
            ]
        },
        {
            id: 16,
            title: "Laza Special W/ Ice Cream",
            description: "Lotus Butter / Biscoff / Pistachio Butter Crushed Pistachio / Crushed Oreo / Chocolate with Ice Cream",
            price: 15,
            imageSrc: "/desserts/ockywaykunafaicecream.png",
            category: "Kunafa",
            modifiers: [
                {
                    name: "Ice Cream Flavor",
                    options: ["Vanilla", "Pistachio", "Chocolate"]
                },
                {
                    name: "Sauce",
                    options: ["Chocolate", "Lotus", "Caramel"]
                }
            ]
        },
        {
            id: 17,
            title: "Biscoff Kunafa",
            description: "Lotus Butter / Lotus Biscoff",
            price: 11,
            imageSrc: "/desserts/lotuskunafa.png",
            category: "Kunafa",
            modifiers: [
                {
                    name: "Toppings",
                    options: ["Extra Biscoff", "Crushed Lotus Cookies"]
                }
            ]
        },
        {
            id: 18,
            title: "Triple Chocolate Kunafa",
            description: "Milk Chocolate / White Chocolate Dark Chocolate",
            price: 11,
            imageSrc: "/desserts/triplechocolatekunafa.png",
            category: "Kunafa",
            modifiers: [
                {
                    name: "Chocolate Type",
                    options: ["Milk Chocolate", "White Chocolate", "Dark Chocolate"]
                }
            ]
        },
        // Drinks
        {
            id: 19,
            title: "Pistachio Latte",
            description: "Rich pistachio flavor with steamed milk",
            price: 8,
            imageSrc: "/drinks/pistachiolatte.jpg",
            category: "Coffee",
            modifiers: [
                {
                    name: "Milk Type",
                    options: ["Whole Milk", "Oat Milk", "Almond Milk"]
                },
                {
                    name: "Sweetness",
                    options: ["Regular", "Less Sweet", "Extra Sweet"]
                }
            ]
        },
        {
            id: 20,
            title: "Caramel Latte",
            description: "Smooth caramel with espresso and milk",
            price: 7,
            imageSrc: "/drinks/caramellatte.jpg",
            category: "Coffee",
            modifiers: [
                {
                    name: "Milk Type",
                    options: ["Whole Milk", "Oat Milk", "Almond Milk"]
                },
                {
                    name: "Size",
                    options: ["Small", "Medium", "Large"]
                }
            ]
        },
        {
            id: 21,
            title: "Matcha Latte",
            description: "Premium Japanese matcha with steamed milk",
            price: 7,
            imageSrc: "/drinks/matcha.jpg",
            category: "Coffee",
            modifiers: [
                {
                    name: "Milk Type",
                    options: ["Whole Milk", "Oat Milk", "Almond Milk"]
                },
                {
                    name: "Sweetness",
                    options: ["Regular", "Less Sweet", "Extra Sweet"]
                }
            ]
        },
        // Shakes
        {
            id: 22,
            title: "Biscoff Shake",
            description: "Vanilla Ice Cream / Lotus Butter / Lotus Cookies",
            price: 10,
            imageSrc: "/drinks/biscofflatte.jpg",
            category: "Shakes",
            modifiers: [
                {
                    name: "Toppings",
                    options: ["Extra Lotus", "Crushed Lotus Cookies", "Caramel Sauce"]
                }
            ]
        },
        {
            id: 23,
            title: "Oreo Shake",
            description: "Vanilla Ice Cream / Oreos",
            price: 11,
            imageSrc: "/drinks/oreoshake.jpg",
            category: "Shakes",
            modifiers: [
                {
                    name: "Toppings",
                    options: ["Extra Oreo", "Chocolate Sauce", "Whipped Cream"]
                }
            ]
        },
        {
            id: 24,
            title: "Kinder Shake",
            description: "Vanilla Ice Cream / Nutella / Kinder",
            price: 11,
            imageSrc: "/drinks/kinderlatte.jpg",
            category: "Shakes",
            modifiers: [
                {
                    name: "Toppings",
                    options: ["Extra Kinder", "Nutella Drizzle"]
                }
            ]
        },
        // Refreshers
        {
            id: 25,
            title: "Redberry Refresher",
            description: "Strawberry / Raspberry",
            price: 7,
            imageSrc: "/drinks/redberryrefresher.jpg",
            category: "Refreshers",
            modifiers: [
                {
                    name: "Size",
                    options: ["Regular", "Large"]
                },
                {
                    name: "Add-ons",
                    options: ["Mint", "Lemon", "Extra Berries"]
                }
            ]
        },
        {
            id: 26,
            title: "Piña Colada Refresher",
            description: "Coconut / Pineapple",
            price: 7,
            imageSrc: "/drinks/pinacoladarefresher.jpg",
            category: "Refreshers",
            modifiers: [
                {
                    name: "Size",
                    options: ["Regular", "Large"]
                },
                {
                    name: "Add-ons",
                    options: ["Mint", "Pineapple Chunks"]
                }
            ]
        },
        {
            id: 27,
            title: "Blue Raspberry Refresher",
            description: "Blue Raspberry",
            price: 7,
            imageSrc: "/drinks/blueraspberry.jpg",
            category: "Refreshers",
            modifiers: [
                {
                    name: "Size",
                    options: ["Regular", "Large"]
                },
                {
                    name: "Add-ons",
                    options: ["Mint", "Lemon"]
                }
            ]
        }
    ];

    // Shuffle the array using Fisher-Yates algorithm
    const shuffled = [...allItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Return the first 'limit' items
    return shuffled.slice(0, limit);
}

export default mixedMenu;
