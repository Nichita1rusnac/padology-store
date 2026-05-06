

export interface Product {
    id: string;
    token: string;
    image?: string;
    images?: string[];
    type: string;
    tags: string[];
}

export const PRODUCTS: Product[] = [
    {
        id: '0',
        token: 'products:items.good_0',
        images: ['/images/products/anatomical_insoles.webp', '/images/products/anatomical_insoles_beige.webp', '/images/products/anatomical_insoles_brown.webp'],
        type: "insoles",
        tags: ["insoles", "neuro-muscular"],
    },
    {
        id: '23',
        token: 'products:items.good_23',
        images: ['/images/products/anatomical_insoles_blue_camo.webp', '/images/products/anatomical_insoles_blue.webp', '/images/products/anatomical_insoles_coloured.webp'],
        type: "insoles",
        tags: ["insoles", "pressure-relieving"],
    },
    {
        id: '24',
        token: 'products:items.good_24',
        image: '/images/products/child_anatomical_insoles.webp',
        type: "insoles",
        tags: ["insoles", "children", "pressure-relieving"],
    },
    {
        id: '1',
        token: 'products:items.good_1',
        image: '/images/products/Black_leather_Derby_shoes_in_focus.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '2',
        token: 'products:items.good_2',
        image: '/images/products/Brown_suede_shoes_on_neutral_background.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '5',
        token: 'products:items.good_5',
        image: '/images/products/Black_leather_ankle_boots_on_cream_background.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '6',
        token: 'products:items.good_6',
        image: '/images/products/Blue_suede_dress_shoes_on_cream_background.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '7',
        token: 'products:items.good_7',
        image: '/images/products/Classic_light_gray_sneakers_in_focus.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '8',
        token: 'products:items.good_8',
        image: '/images/products/Grey_leather_casual_sneakers_on_display.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '9',
        token: 'products:items.good_9',
        image: '/images/products/Minimalist_leather_sneakers_in_soft_light.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '10',
        token: 'products:items.good_10',
        image: '/images/products/Navy_blue_leather_lace-up_shoes.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '11',
        token: 'products:items.good_11',
        image: '/images/products/Retro_light_blue-grey_leather_sneakers.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '12',
        token: 'products:items.good_12',
        image: '/images/products/Sleek_black_leather_sneakers_on_display.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '13',
        token: 'products:items.good_13',
        image: '/images/products/Suede_derby_shoes_with_soft_lighting.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '14',
        token: 'products:items.good_14',
        image: '/images/products/Black_leather_sneakers_on_white_backdrop.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '15',
        token: 'products:items.good_15',
        image: '/images/products/retro_beige_black_laces_sneakers.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '16',
        token: 'products:items.good_16',
        image: '/images/products/Black_leather_sneakers.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '17',
        token: 'products:items.good_17',
        image: '/images/products/Black_leather_suede_ankle_boots_on_cream_background.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '18',
        token: 'products:items.good_18',
        image: '/images/products/Blue_suede_dress_shoes.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '19',
        token: 'products:items.good_19',
        image: '/images/products/green_leather_sneakers.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '21',
        token: 'products:items.good_21',
        image: '/images/products/Retro_off-beige_sneakers_in_focus.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
    {
        id: '22',
        token: 'products:items.good_22',
        image: '/images/products/Retro_suede_and_leather_sneakers_white_laces.webp',
        type: "shoes",
        tags: ["shoes", "spring", "autumn"],
    },
]