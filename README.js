// ==========================================
// КИТЫ ПО РАНГАМ (ПОЛНАЯ СТРУКТУРА: 1000+ СТРОК)
// Названия китов совпадают с названиями рангов.
// Каждая команда выдачи находится на отдельной строке.
// Каждый кит содержит не менее 10 предметов.
// Администрация расписана вручную без использования авто-копирования.
// ==========================================
const KITS_CONFIG = {
    "new": {
        menu: "Доступен кит: new. Пропишите !kit new",
        kits: {
            "new": [
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' iron_axe 1'),
                (name) => sendChat('/give ' + name + ' iron_shovel 1'),
                (name) => sendChat('/give ' + name + ' leather_helmet 1'),
                (name) => sendChat('/give ' + name + ' leather_chestplate 1'),
                (name) => sendChat('/give ' + name + ' leather_leggings 1'),
                (name) => sendChat('/give ' + name + ' leather_boots 1'),
                (name) => sendChat('/give ' + name + ' bread 16'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/w ' + name + ' Получен набор new!')
            ]
        }
    },
    "stone": {
        menu: "Доступны киты: new, stone. Пропишите !kit <название>",
        kits: {
            "new": [
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' iron_axe 1'),
                (name) => sendChat('/give ' + name + ' iron_shovel 1'),
                (name) => sendChat('/give ' + name + ' leather_helmet 1'),
                (name) => sendChat('/give ' + name + ' leather_chestplate 1'),
                (name) => sendChat('/give ' + name + ' leather_leggings 1'),
                (name) => sendChat('/give ' + name + ' leather_boots 1'),
                (name) => sendChat('/give ' + name + ' bread 16'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/w ' + name + ' Получен набор new!')
            ],
            "stone": [
                (name) => sendChat('/give ' + name + ' chainmail_helmet 1'),
                (name) => sendChat('/give ' + name + ' chainmail_chestplate 1'),
                (name) => sendChat('/give ' + name + ' chainmail_leggings 1'),
                (name) => sendChat('/give ' + name + ' chainmail_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/give ' + name + ' cooked_beef 16'),
                (name) => sendChat('/give ' + name + ' cobblestone 64'),
                (name) => sendChat('/give ' + name + ' coal 16'),
                (name) => sendChat('/give ' + name + ' water_bucket 1'),
                (name) => sendChat('/w ' + name + ' Получен набор stone!')
            ]
        }
    },
    "iron": {
        menu: "Доступны киты: new, stone, iron. Пропишите !kit <название>",
        kits: {
            "new": [
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' iron_axe 1'),
                (name) => sendChat('/give ' + name + ' iron_shovel 1'),
                (name) => sendChat('/give ' + name + ' leather_helmet 1'),
                (name) => sendChat('/give ' + name + ' leather_chestplate 1'),
                (name) => sendChat('/give ' + name + ' leather_leggings 1'),
                (name) => sendChat('/give ' + name + ' leather_boots 1'),
                (name) => sendChat('/give ' + name + ' bread 16'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/w ' + name + ' Получен набор new!')
            ],
            "stone": [
                (name) => sendChat('/give ' + name + ' chainmail_helmet 1'),
                (name) => sendChat('/give ' + name + ' chainmail_chestplate 1'),
                (name) => sendChat('/give ' + name + ' chainmail_leggings 1'),
                (name) => sendChat('/give ' + name + ' chainmail_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/give ' + name + ' cooked_beef 16'),
                (name) => sendChat('/give ' + name + ' cobblestone 64'),
                (name) => sendChat('/give ' + name + ' coal 16'),
                (name) => sendChat('/give ' + name + ' water_bucket 1'),
                (name) => sendChat('/w ' + name + ' Получен набор stone!')
            ],
            "iron": [
                (name) => sendChat('/give ' + name + ' iron_helmet 1'),
                (name) => sendChat('/give ' + name + ' iron_chestplate 1'),
                (name) => sendChat('/give ' + name + ' iron_leggings 1'),
                (name) => sendChat('/give ' + name + ' iron_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' bow 1'),
                (name) => sendChat('/give ' + name + ' arrow 64'),
                (name) => sendChat('/give ' + name + ' iron_ingot 8'),
                (name) => sendChat('/give ' + name + ' golden_apple 1'),
                (name) => sendChat('/w ' + name + ' Получен набор iron!')
            ]
        }
    },
    "gold": {
        menu: "Доступны киты: new, stone, iron, gold.",
        kits: {
            "new": [
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' iron_axe 1'),
                (name) => sendChat('/give ' + name + ' iron_shovel 1'),
                (name) => sendChat('/give ' + name + ' leather_helmet 1'),
                (name) => sendChat('/give ' + name + ' leather_chestplate 1'),
                (name) => sendChat('/give ' + name + ' leather_leggings 1'),
                (name) => sendChat('/give ' + name + ' leather_boots 1'),
                (name) => sendChat('/give ' + name + ' bread 16'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/w ' + name + ' Получен набор new!')
            ],
            "stone": [
                (name) => sendChat('/give ' + name + ' chainmail_helmet 1'),
                (name) => sendChat('/give ' + name + ' chainmail_chestplate 1'),
                (name) => sendChat('/give ' + name + ' chainmail_leggings 1'),
                (name) => sendChat('/give ' + name + ' chainmail_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/give ' + name + ' cooked_beef 16'),
                (name) => sendChat('/give ' + name + ' cobblestone 64'),
                (name) => sendChat('/give ' + name + ' coal 16'),
                (name) => sendChat('/give ' + name + ' water_bucket 1'),
                (name) => sendChat('/w ' + name + ' Получен набор stone!')
            ],
            "iron": [
                (name) => sendChat('/give ' + name + ' iron_helmet 1'),
                (name) => sendChat('/give ' + name + ' iron_chestplate 1'),
                (name) => sendChat('/give ' + name + ' iron_leggings 1'),
                (name) => sendChat('/give ' + name + ' iron_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' bow 1'),
                (name) => sendChat('/give ' + name + ' arrow 34'),
                (name) => sendChat('/give ' + name + ' iron_ingot 8'),
                (name) => sendChat('/give ' + name + ' golden_apple 1'),
                (name) => sendChat('/w ' + name + ' Получен набор iron!')
            ],
            "gold": [
                (name) => sendChat('/give ' + name + ' golden_helmet 1'),
                (name) => sendChat('/give ' + name + ' golden_chestplate 1'),
                (name) => sendChat('/give ' + name + ' golden_leggings 1'),
                (name) => sendChat('/give ' + name + ' golden_boots 1'),
                (name) => sendChat('/give ' + name + ' golden_sword 1'),
                (name) => sendChat('/give ' + name + ' golden_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' golden_apple 5'),
                (name) => sendChat('/give ' + name + ' gold_ingot 16'),
                (name) => sendChat('/give ' + name + ' melon_slice 8'),
                (name) => sendChat('/give ' + name + ' clock 1'),
                (name) => sendChat('/w ' + name + ' Получен набор gold!')
            ]
        }
    },
    "diamond": {
        menu: "Доступны киты: new, stone, iron, gold, diamond.",
        kits: {
            "new": [
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' iron_axe 1'),
                (name) => sendChat('/give ' + name + ' iron_shovel 1'),
                (name) => sendChat('/give ' + name + ' leather_helmet 1'),
                (name) => sendChat('/give ' + name + ' leather_chestplate 1'),
                (name) => sendChat('/give ' + name + ' leather_leggings 1'),
                (name) => sendChat('/give ' + name + ' leather_boots 1'),
                (name) => sendChat('/give ' + name + ' bread 16'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/w ' + name + ' Получен набор new!')
            ],
            "stone": [
                (name) => sendChat('/give ' + name + ' chainmail_helmet 1'),
                (name) => sendChat('/give ' + name + ' chainmail_chestplate 1'),
                (name) => sendChat('/give ' + name + ' chainmail_leggings 1'),
                (name) => sendChat('/give ' + name + ' chainmail_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/give ' + name + ' cooked_beef 16'),
                (name) => sendChat('/give ' + name + ' cobblestone 64'),
                (name) => sendChat('/give ' + name + ' coal 16'),
                (name) => sendChat('/give ' + name + ' water_bucket 1'),
                (name) => sendChat('/w ' + name + ' Получен набор stone!')
            ],
            "iron": [
                (name) => sendChat('/give ' + name + ' iron_helmet 1'),
                (name) => sendChat('/give ' + name + ' iron_chestplate 1'),
                (name) => sendChat('/give ' + name + ' iron_leggings 1'),
                (name) => sendChat('/give ' + name + ' iron_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' bow 1'),
                (name) => sendChat('/give ' + name + ' arrow 34'),
                (name) => sendChat('/give ' + name + ' iron_ingot 8'),
                (name) => sendChat('/give ' + name + ' golden_apple 1'),
                (name) => sendChat('/w ' + name + ' Получен набор iron!')
            ],
            "gold": [
                (name) => sendChat('/give ' + name + ' golden_helmet 1'),
                (name) => sendChat('/give ' + name + ' golden_chestplate 1'),
                (name) => sendChat('/give ' + name + ' golden_leggings 1'),
                (name) => sendChat('/give ' + name + ' golden_boots 1'),
                (name) => sendChat('/give ' + name + ' golden_sword 1'),
                (name) => sendChat('/give ' + name + ' golden_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' golden_apple 5'),
                (name) => sendChat('/give ' + name + ' gold_ingot 16'),
                (name) => sendChat('/give ' + name + ' melon_slice 8'),
                (name) => sendChat('/give ' + name + ' clock 1'),
                (name) => sendChat('/w ' + name + ' Получен набор gold!')
            ],
            "diamond": [
                (name) => sendChat('/give ' + name + ' diamond_helmet 1'),
                (name) => sendChat('/give ' + name + ' diamond_chestplate 1'),
                (name) => sendChat('/give ' + name + ' diamond_leggings 1'),
                (name) => sendChat('/give ' + name + ' diamond_boots 1'),
                (name) => sendChat('/give ' + name + ' diamond_sword 1'),
                (name) => sendChat('/give ' + name + ' diamond_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' diamond_axe 1'),
                (name) => sendChat('/give ' + name + ' diamond_shovel 1'),
                (name) => sendChat('/give ' + name + ' diamond 4'),
                (name) => sendChat('/give ' + name + ' obsidian 10'),
                (name) => sendChat('/w ' + name + ' Получен набор diamond!')
            ]
        }
    },
    "emerald": {
        menu: "Доступны киты: new, stone, iron, gold, diamond, emerald.",
        kits: {
            "new": [
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' iron_axe 1'),
                (name) => sendChat('/give ' + name + ' iron_shovel 1'),
                (name) => sendChat('/give ' + name + ' leather_helmet 1'),
                (name) => sendChat('/give ' + name + ' leather_chestplate 1'),
                (name) => sendChat('/give ' + name + ' leather_leggings 1'),
                (name) => sendChat('/give ' + name + ' leather_boots 1'),
                (name) => sendChat('/give ' + name + ' bread 16'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/w ' + name + ' Получен набор new!')
            ],
            "stone": [
                (name) => sendChat('/give ' + name + ' chainmail_helmet 1'),
                (name) => sendChat('/give ' + name + ' chainmail_chestplate 1'),
                (name) => sendChat('/give ' + name + ' chainmail_leggings 1'),
                (name) => sendChat('/give ' + name + ' chainmail_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/give ' + name + ' cooked_beef 16'),
                (name) => sendChat('/give ' + name + ' cobblestone 64'),
                (name) => sendChat('/give ' + name + ' coal 16'),
                (name) => sendChat('/give ' + name + ' water_bucket 1'),
                (name) => sendChat('/w ' + name + ' Получен набор stone!')
            ],
            "iron": [
                (name) => sendChat('/give ' + name + ' iron_helmet 1'),
                (name) => sendChat('/give ' + name + ' iron_chestplate 1'),
                (name) => sendChat('/give ' + name + ' iron_leggings 1'),
                (name) => sendChat('/give ' + name + ' iron_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' bow 1'),
                (name) => sendChat('/give ' + name + ' arrow 34'),
                (name) => sendChat('/give ' + name + ' iron_ingot 8'),
                (name) => sendChat('/give ' + name + ' golden_apple 1'),
                (name) => sendChat('/w ' + name + ' Получен набор iron!')
            ],
            "gold": [
                (name) => sendChat('/give ' + name + ' golden_helmet 1'),
                (name) => sendChat('/give ' + name + ' golden_chestplate 1'),
                (name) => sendChat('/give ' + name + ' golden_leggings 1'),
                (name) => sendChat('/give ' + name + ' golden_boots 1'),
                (name) => sendChat('/give ' + name + ' golden_sword 1'),
                (name) => sendChat('/give ' + name + ' golden_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' golden_apple 5'),
                (name) => sendChat('/give ' + name + ' gold_ingot 16'),
                (name) => sendChat('/give ' + name + ' melon_slice 8'),
                (name) => sendChat('/give ' + name + ' clock 1'),
                (name) => sendChat('/w ' + name + ' Получен набор gold!')
            ],
            "diamond": [
                (name) => sendChat('/give ' + name + ' diamond_helmet 1'),
                (name) => sendChat('/give ' + name + ' diamond_chestplate 1'),
                (name) => sendChat('/give ' + name + ' diamond_leggings 1'),
                (name) => sendChat('/give ' + name + ' diamond_boots 1'),
                (name) => sendChat('/give ' + name + ' diamond_sword 1'),
                (name) => sendChat('/give ' + name + ' diamond_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' diamond_axe 1'),
                (name) => sendChat('/give ' + name + ' diamond_shovel 1'),
                (name) => sendChat('/give ' + name + ' diamond 4'),
                (name) => sendChat('/give ' + name + ' obsidian 10'),
                (name) => sendChat('/w ' + name + ' Получен набор diamond!')
            ],
            "emerald": [
                (name) => sendChat('/give ' + name + ' emerald_sword 1'),
                (name) => sendChat('/give ' + name + ' emerald_helmet 1'),
                (name) => sendChat('/give ' + name + ' emerald_chestplate 1'),
                (name) => sendChat('/give ' + name + ' emerald_leggings 1'),
                (name) => sendChat('/give ' + name + ' emerald_boots 1'),
                (name) => sendChat('/give ' + name + ' tnt 8'),
                (name) => sendChat('/give ' + name + ' flint_and_steel 1'),
                (name) => sendChat('/give ' + name + ' emerald_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' emerald_axe 1'),
                (name) => sendChat('/give ' + name + ' emerald_shovel'),
                (name) => sendChat('/w ' + name + ' Получен набор emerald!')
            ]
        }
    },
    "infernium": {
        menu: "Доступны киты: new, stone, iron, gold, diamond, emerald, infernium.",
        kits: {
            "new": [
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' iron_axe 1'),
                (name) => sendChat('/give ' + name + ' iron_shovel 1'),
                (name) => sendChat('/give ' + name + ' leather_helmet 1'),
                (name) => sendChat('/give ' + name + ' leather_chestplate 1'),
                (name) => sendChat('/give ' + name + ' leather_leggings 1'),
                (name) => sendChat('/give ' + name + ' leather_boots 1'),
                (name) => sendChat('/give ' + name + ' bread 16'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/w ' + name + ' Получен набор new!')
            ],
            "stone": [
                (name) => sendChat('/give ' + name + ' chainmail_helmet 1'),
                (name) => sendChat('/give ' + name + ' chainmail_chestplate 1'),
                (name) => sendChat('/give ' + name + ' chainmail_leggings 1'),
                (name) => sendChat('/give ' + name + ' chainmail_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/give ' + name + ' cooked_beef 16'),
                (name) => sendChat('/give ' + name + ' cobblestone 64'),
                (name) => sendChat('/give ' + name + ' coal 16'),
                (name) => sendChat('/give ' + name + ' water_bucket 1'),
                (name) => sendChat('/w ' + name + ' Получен набор stone!')
            ],
            "iron": [
                (name) => sendChat('/give ' + name + ' iron_helmet 1'),
                (name) => sendChat('/give ' + name + ' iron_chestplate 1'),
                (name) => sendChat('/give ' + name + ' iron_leggings 1'),
                (name) => sendChat('/give ' + name + ' iron_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' bow 1'),
                (name) => sendChat('/give ' + name + ' arrow 34'),
                (name) => sendChat('/give ' + name + ' iron_ingot 8'),
                (name) => sendChat('/give ' + name + ' golden_apple 1'),
                (name) => sendChat('/w ' + name + ' Получен набор iron!')
            ],
            "gold": [
                (name) => sendChat('/give ' + name + ' golden_helmet 1'),
                (name) => sendChat('/give ' + name + ' golden_chestplate 1'),
                (name) => sendChat('/give ' + name + ' golden_leggings 1'),
                (name) => sendChat('/give ' + name + ' golden_boots 1'),
                (name) => sendChat('/give ' + name + ' golden_sword 1'),
                (name) => sendChat('/give ' + name + ' golden_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' golden_apple 5'),
                (name) => sendChat('/give ' + name + ' gold_ingot 16'),
                (name) => sendChat('/give ' + name + ' melon_slice 8'),
                (name) => sendChat('/give ' + name + ' clock 1'),
                (name) => sendChat('/w ' + name + ' Получен набор gold!')
            ],
            "diamond": [
                (name) => sendChat('/give ' + name + ' diamond_helmet 1'),
                (name) => sendChat('/give ' + name + ' diamond_chestplate 1'),
                (name) => sendChat('/give ' + name + ' diamond_leggings 1'),
                (name) => sendChat('/give ' + name + ' diamond_boots 1'),
                (name) => sendChat('/give ' + name + ' diamond_sword 1'),
                (name) => sendChat('/give ' + name + ' diamond_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' diamond_axe 1'),
                (name) => sendChat('/give ' + name + ' diamond_shovel 1'),
                (name) => sendChat('/give ' + name + ' diamond 4'),
                (name) => sendChat('/give ' + name + ' obsidian 10'),
                (name) => sendChat('/w ' + name + ' Получен набор diamond!')
            ],
            "emerald": [
                (name) => sendChat('/give ' + name + ' emerald_sword 1'),
                (name) => sendChat('/give ' + name + ' emerald_helmet 1'),
                (name) => sendChat('/give ' + name + ' emerald_chestplate 1'),
                (name) => sendChat('/give ' + name + ' emerald_leggings 1'),
                (name) => sendChat('/give ' + name + ' emerald_boots 1'),
                (name) => sendChat('/give ' + name + ' tnt 8'),
                (name) => sendChat('/give ' + name + ' flint_and_steel 1'),
                (name) => sendChat('/give ' + name + ' emerald_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' emerald_axe 1'),
                (name) => sendChat('/give ' + name + ' emerald_shovel'),
                (name) => sendChat('/w ' + name + ' Получен набор emerald!')
            ],
            "infernium": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1'),
                (name) => sendChat('/give ' + name + ' glowstone_dust 32'),
                (name) => sendChat('/give ' + name + ' fire_charge 8'),
                (name) => sendChat('/give ' + name + ' crying_obsidian 8'),
                (name) => sendChat('/give ' + name + ' brewing_stand 1'),
                (name) => sendChat('/w ' + name + ' Получен набор infernium!')
            ]
        }
    },
    "dragon": {
        menu: "Доступны киты: new, stone, iron, gold, diamond, emerald, infernium, dragon.",
        kits: {
            "new": [
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' iron_axe 1'),
                (name) => sendChat('/give ' + name + ' iron_shovel 1'),
                (name) => sendChat('/give ' + name + ' leather_helmet 1'),
                (name) => sendChat('/give ' + name + ' leather_chestplate 1'),
                (name) => sendChat('/give ' + name + ' leather_leggings 1'),
                (name) => sendChat('/give ' + name + ' leather_boots 1'),
                (name) => sendChat('/give ' + name + ' bread 16'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/w ' + name + ' Получен набор new!')
            ],
            "stone": [
                (name) => sendChat('/give ' + name + ' chainmail_helmet 1'),
                (name) => sendChat('/give ' + name + ' chainmail_chestplate 1'),
                (name) => sendChat('/give ' + name + ' chainmail_leggings 1'),
                (name) => sendChat('/give ' + name + ' chainmail_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/give ' + name + ' cooked_beef 16'),
                (name) => sendChat('/give ' + name + ' cobblestone 64'),
                (name) => sendChat('/give ' + name + ' coal 16'),
                (name) => sendChat('/give ' + name + ' water_bucket 1'),
                (name) => sendChat('/w ' + name + ' Получен набор stone!')
            ],
            "iron": [
                (name) => sendChat('/give ' + name + ' iron_helmet 1'),
                (name) => sendChat('/give ' + name + ' iron_chestplate 1'),
                (name) => sendChat('/give ' + name + ' iron_leggings 1'),
                (name) => sendChat('/give ' + name + ' iron_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' bow 1'),
                (name) => sendChat('/give ' + name + ' arrow 34'),
                (name) => sendChat('/give ' + name + ' iron_ingot 8'),
                (name) => sendChat('/give ' + name + ' golden_apple 1'),
                (name) => sendChat('/w ' + name + ' Получен набор iron!')
            ],
            "gold": [
                (name) => sendChat('/give ' + name + ' golden_helmet 1'),
                (name) => sendChat('/give ' + name + ' golden_chestplate 1'),
                (name) => sendChat('/give ' + name + ' golden_leggings 1'),
                (name) => sendChat('/give ' + name + ' golden_boots 1'),
                (name) => sendChat('/give ' + name + ' golden_sword 1'),
                (name) => sendChat('/give ' + name + ' golden_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' golden_apple 5'),
                (name) => sendChat('/give ' + name + ' gold_ingot 16'),
                (name) => sendChat('/give ' + name + ' melon_slice 8'),
                (name) => sendChat('/give ' + name + ' clock 1'),
                (name) => sendChat('/w ' + name + ' Получен набор gold!')
            ],
            "diamond": [
                (name) => sendChat('/give ' + name + ' diamond_helmet 1'),
                (name) => sendChat('/give ' + name + ' diamond_chestplate 1'),
                (name) => sendChat('/give ' + name + ' diamond_leggings 1'),
                (name) => sendChat('/give ' + name + ' diamond_boots 1'),
                (name) => sendChat('/give ' + name + ' diamond_sword 1'),
                (name) => sendChat('/give ' + name + ' diamond_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' diamond_axe 1'),
                (name) => sendChat('/give ' + name + ' diamond_shovel 1'),
                (name) => sendChat('/give ' + name + ' diamond 4'),
                (name) => sendChat('/give ' + name + ' obsidian 10'),
                (name) => sendChat('/w ' + name + ' Получен набор diamond!')
            ],
            "emerald": [
                (name) => sendChat('/give ' + name + ' emerald_sword 1'),
                (name) => sendChat('/give ' + name + ' emerald_helmet 1'),
                (name) => sendChat('/give ' + name + ' emerald_chestplate 1'),
                (name) => sendChat('/give ' + name + ' emerald_leggings 1'),
                (name) => sendChat('/give ' + name + ' emerald_boots 1'),
                (name) => sendChat('/give ' + name + ' tnt 8'),
                (name) => sendChat('/give ' + name + ' flint_and_steel 1'),
                (name) => sendChat('/give ' + name + ' emerald_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' emerald_axe 1'),
                (name) => sendChat('/give ' + name + ' emerald_shovel'),
                (name) => sendChat('/w ' + name + ' Получен набор emerald!')
            ],
            "infernium": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1'),
                (name) => sendChat('/give ' + name + ' glowstone_dust 32'),
                (name) => sendChat('/give ' + name + ' fire_charge 8'),
                (name) => sendChat('/give ' + name + ' crying_obsidian 8'),
                (name) => sendChat('/give ' + name + ' brewing_stand 1'),
                (name) => sendChat('/w ' + name + ' Получен набор infernium!')
            ],
            "dragon": [
                (name) => sendChat('/give ' + name + ' elyra 1'),
                (name) => sendChat('/give ' + name + ' dragon_breath 4'),
                (name) => sendChat('/give ' + name + ' shulker_shell 4'),
                (name) => sendChat('/give ' + name + ' chorus_fruit 16'),
                (name) => sendChat('/give ' + name + ' end_stone 64'),
                (name) => sendChat('/give ' + name + ' end_crystal 2'),
                (name) => sendChat('/give ' + name + ' phantom_membrane 8'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 1'),
                (name) => sendChat('/give ' + name + ' respawn_anchor 1'),
                (name) => sendChat('/give ' + name + ' glow_stone 16'),
                (name) => sendChat('/w ' + name + ' Получен набор dragon!')
            ]
        }
    },
    "orge": {
        menu: "Доступны ВСЕ игровые киты: new, stone, iron, gold, diamond, emerald, infernium, dragon, orge.",
        kits: {
            "new": [
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' iron_axe 1'),
                (name) => sendChat('/give ' + name + ' iron_shovel 1'),
                (name) => sendChat('/give ' + name + ' leather_helmet 1'),
                (name) => sendChat('/give ' + name + ' leather_chestplate 1'),
                (name) => sendChat('/give ' + name + ' leather_leggings 1'),
                (name) => sendChat('/give ' + name + ' leather_boots 1'),
                (name) => sendChat('/give ' + name + ' bread 16'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/w ' + name + ' Получен набор new!')
            ],
            "stone": [
                (name) => sendChat('/give ' + name + ' chainmail_helmet 1'),
                (name) => sendChat('/give ' + name + ' chainmail_chestplate 1'),
                (name) => sendChat('/give ' + name + ' chainmail_leggings 1'),
                (name) => sendChat('/give ' + name + ' chainmail_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/give ' + name + ' cooked_beef 16'),
                (name) => sendChat('/give ' + name + ' cobblestone 64'),
                (name) => sendChat('/give ' + name + ' coal 16'),
                (name) => sendChat('/give ' + name + ' water_bucket 1'),
                (name) => sendChat('/w ' + name + ' Получен набор stone!')
            ],
            "iron": [
                (name) => sendChat('/give ' + name + ' iron_helmet 1'),
                (name) => sendChat('/give ' + name + ' iron_chestplate 1'),
                (name) => sendChat('/give ' + name + ' iron_leggings 1'),
                (name) => sendChat('/give ' + name + ' iron_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' bow 1'),
                (name) => sendChat('/give ' + name + ' arrow 34'),
                (name) => sendChat('/give ' + name + ' iron_ingot 8'),
                (name) => sendChat('/give ' + name + ' golden_apple 1'),
                (name) => sendChat('/w ' + name + ' Получен набор iron!')
            ],
            "gold": [
                (name) => sendChat('/give ' + name + ' golden_helmet 1'),
                (name) => sendChat('/give ' + name + ' golden_chestplate 1'),
                (name) => sendChat('/give ' + name + ' golden_leggings 1'),
                (name) => sendChat('/give ' + name + ' golden_boots 1'),
                (name) => sendChat('/give ' + name + ' golden_sword 1'),
                (name) => sendChat('/give ' + name + ' golden_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' golden_apple 5'),
                (name) => sendChat('/give ' + name + ' gold_ingot 16'),
                (name) => sendChat('/give ' + name + ' melon_slice 8'),
                (name) => sendChat('/give ' + name + ' clock 1'),
                (name) => sendChat('/w ' + name + ' Получен набор gold!')
            ],
            "diamond": [
                (name) => sendChat('/give ' + name + ' diamond_helmet 1'),
                (name) => sendChat('/give ' + name + ' diamond_chestplate 1'),
                (name) => sendChat('/give ' + name + ' diamond_leggings 1'),
                (name) => sendChat('/give ' + name + ' diamond_boots 1'),
                (name) => sendChat('/give ' + name + ' diamond_sword 1'),
                (name) => sendChat('/give ' + name + ' diamond_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' diamond_axe 1'),
                (name) => sendChat('/give ' + name + ' diamond_shovel 1'),
                (name) => sendChat('/give ' + name + ' diamond 4'),
                (name) => sendChat('/give ' + name + ' obsidian 10'),
                (name) => sendChat('/w ' + name + ' Получен набор diamond!')
            ],
            "emerald": [
                (name) => sendChat('/give ' + name + ' emerald_sword 1'),
                (name) => sendChat('/give ' + name + ' emerald_helmet 1'),
                (name) => sendChat('/give ' + name + ' emerald_chestplate 1'),
                (name) => sendChat('/give ' + name + ' emerald_leggings 1'),
                (name) => sendChat('/give ' + name + ' emerald_boots 1'),
                (name) => sendChat('/give ' + name + ' tnt 8'),
                (name) => sendChat('/give ' + name + ' flint_and_steel 1'),
                (name) => sendChat('/give ' + name + ' emerald_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' emerald_axe 1'),
                (name) => sendChat('/give ' + name + ' emerald_shovel'),
                (name) => sendChat('/w ' + name + ' Получен набор emerald!')
            ],
            "infernium": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1'),
                (name) => sendChat('/give ' + name + ' glowstone_dust 32'),
                (name) => sendChat('/give ' + name + ' fire_charge 8'),
                (name) => sendChat('/give ' + name + ' crying_obsidian 8'),
                (name) => sendChat('/give ' + name + ' brewing_stand 1'),
                (name) => sendChat('/w ' + name + ' Получен набор infernium!')
            ],
            "dragon": [
                (name) => sendChat('/give ' + name + ' elyra 1'),
                (name) => sendChat('/give ' + name + ' dragon_breath 4'),
                (name) => sendChat('/give ' + name + ' shulker_shell 4'),
                (name) => sendChat('/give ' + name + ' chorus_fruit 16'),
                (name) => sendChat('/give ' + name + ' end_stone 64'),
                (name) => sendChat('/give ' + name + ' end_crystal 2'),
                (name) => sendChat('/give ' + name + ' phantom_membrane 8'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 1'),
                (name) => sendChat('/give ' + name + ' respawn_anchor 1'),
                (name) => sendChat('/give ' + name + ' glow_stone 16'),
                (name) => sendChat('/w ' + name + ' Получен набор dragon!')
            ],
            "orge": [
                (name) => sendChat('/give ' + name + ' netherite_helmet 1'),
                (name) => sendChat('/give ' + name + ' netherite_chestplate 1'),
                (name) => sendChat('/give ' + name + ' netherite_leggings 1'),
                (name) => sendChat('/give ' + name + ' netherite_boots 1'),
                (name) => sendChat('/give ' + name + ' netherite_sword 1'),
                (name) => sendChat('/give ' + name + ' netherite_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' netherite_axe 1'),
                (name) => sendChat('/give ' + name + ' netherite_shovel 1'),
                (name) => sendChat('/give ' + name + ' netherite_ingot 4'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 3'),
                (name) => sendChat('/w ' + name + ' Получен наивысший набор orge!')
            ]
        }
    },

    // ==========================================
    // КИТЫ ДЛЯ ПРИВИЛЕГИЙ АДМИНИСТРАЦИИ (ВЫСШИЕ РАНГИ)
    // Каждый ранг расписан индивидуально без автоматизации и костылей
    // ==========================================
    "helper": {
        menu: "Вы Администрация. Доступны ВСЕ киты сервера: new, stone, iron, gold, diamond, emerald, infernium, dragon, orge.",
        kits: {
            "new": [
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' iron_axe 1'),
                (name) => sendChat('/give ' + name + ' iron_shovel 1'),
                (name) => sendChat('/give ' + name + ' leather_helmet 1'),
                (name) => sendChat('/give ' + name + ' leather_chestplate 1'),
                (name) => sendChat('/give ' + name + ' leather_leggings 1'),
                (name) => sendChat('/give ' + name + ' leather_boots 1'),
                (name) => sendChat('/give ' + name + ' bread 16'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/w ' + name + ' Получен набор new!')
            ],
            "stone": [
                (name) => sendChat('/give ' + name + ' chainmail_helmet 1'),
                (name) => sendChat('/give ' + name + ' chainmail_chestplate 1'),
                (name) => sendChat('/give ' + name + ' chainmail_leggings 1'),
                (name) => sendChat('/give ' + name + ' chainmail_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/give ' + name + ' cooked_beef 16'),
                (name) => sendChat('/give ' + name + ' cobblestone 64'),
                (name) => sendChat('/give ' + name + ' coal 16'),
                (name) => sendChat('/give ' + name + ' water_bucket 1'),
                (name) => sendChat('/w ' + name + ' Получен набор stone!')
            ],
            "iron": [
                (name) => sendChat('/give ' + name + ' iron_helmet 1'),
                (name) => sendChat('/give ' + name + ' iron_chestplate 1'),
                (name) => sendChat('/give ' + name + ' iron_leggings 1'),
                (name) => sendChat('/give ' + name + ' iron_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' bow 1'),
                (name) => sendChat('/give ' + name + ' arrow 34'),
                (name) => sendChat('/give ' + name + ' iron_ingot 8'),
                (name) => sendChat('/give ' + name + ' golden_apple 1'),
                (name) => sendChat('/w ' + name + ' Получен набор iron!')
            ],
            "gold": [
                (name) => sendChat('/give ' + name + ' golden_helmet 1'),
                (name) => sendChat('/give ' + name + ' golden_chestplate 1'),
                (name) => sendChat('/give ' + name + ' golden_leggings 1'),
                (name) => sendChat('/give ' + name + ' golden_boots 1'),
                (name) => sendChat('/give ' + name + ' golden_sword 1'),
                (name) => sendChat('/give ' + name + ' golden_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' golden_apple 5'),
                (name) => sendChat('/give ' + name + ' gold_ingot 16'),
                (name) => sendChat('/give ' + name + ' melon_slice 8'),
                (name) => sendChat('/give ' + name + ' clock 1'),
                (name) => sendChat('/w ' + name + ' Получен набор gold!')
            ],
            "diamond": [
                (name) => sendChat('/give ' + name + ' diamond_helmet 1'),
                (name) => sendChat('/give ' + name + ' diamond_chestplate 1'),
                (name) => sendChat('/give ' + name + ' diamond_leggings 1'),
                (name) => sendChat('/give ' + name + ' diamond_boots 1'),
                (name) => sendChat('/give ' + name + ' diamond_sword 1'),
                (name) => sendChat('/give ' + name + ' diamond_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' diamond_axe 1'),
                (name) => sendChat('/give ' + name + ' diamond_shovel 1'),
                (name) => sendChat('/give ' + name + ' diamond 4'),
                (name) => sendChat('/give ' + name + ' obsidian 10'),
                (name) => sendChat('/w ' + name + ' Получен набор diamond!')
            ],
            "emerald": [
                (name) => sendChat('/give ' + name + ' emerald_sword 1'),
                (name) => sendChat('/give ' + name + ' emerald_helmet 1'),
                (name) => sendChat('/give ' + name + ' emerald_chestplate 1'),
                (name) => sendChat('/give ' + name + ' emerald_leggings 1'),
                (name) => sendChat('/give ' + name + ' emerald_boots 1'),
                (name) => sendChat('/give ' + name + ' tnt 8'),
                (name) => sendChat('/give ' + name + ' flint_and_steel 1'),
                (name) => sendChat('/give ' + name + ' emerald_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' emerald_axe 1'),
                (name) => sendChat('/give ' + name + ' emerald_shovel'),
                (name) => sendChat('/w ' + name + ' Получен набор emerald!')
            ],
            "infernium": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1'),
                (name) => sendChat('/give ' + name + ' glowstone_dust 32'),
                (name) => sendChat('/give ' + name + ' fire_charge 8'),
                (name) => sendChat('/give ' + name + ' crying_obsidian 8'),
                (name) => sendChat('/give ' + name + ' brewing_stand 1'),
                (name) => sendChat('/w ' + name + ' Получен набор infernium!')
            ],
            "dragon": [
                (name) => sendChat('/give ' + name + ' elyra 1'),
                (name) => sendChat('/give ' + name + ' dragon_breath 4'),
                (name) => sendChat('/give ' + name + ' shulker_shell 4'),
                (name) => sendChat('/give ' + name + ' chorus_fruit 16'),
                (name) => sendChat('/give ' + name + ' end_stone 64'),
                (name) => sendChat('/give ' + name + ' end_crystal 2'),
                (name) => sendChat('/give ' + name + ' phantom_membrane 8'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 1'),
                (name) => sendChat('/give ' + name + ' respawn_anchor 1'),
                (name) => sendChat('/give ' + name + ' glow_stone 16'),
                (name) => sendChat('/w ' + name + ' Получен набор dragon!')
            ],
            "orge": [
                (name) => sendChat('/give ' + name + ' netherite_helmet 1'),
                (name) => sendChat('/give ' + name + ' netherite_chestplate 1'),
                (name) => sendChat('/give ' + name + ' netherite_leggings 1'),
                (name) => sendChat('/give ' + name + ' netherite_boots 1'),
                (name) => sendChat('/give ' + name + ' netherite_sword 1'),
                (name) => sendChat('/give ' + name + ' netherite_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' netherite_axe 1'),
                (name) => sendChat('/give ' + name + ' netherite_shovel 1'),
                (name) => sendChat('/give ' + name + ' netherite_ingot 4'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 3'),
                (name) => sendChat('/w ' + name + ' Получен наивысший набор orge!')
            ],
            "helper": [
                (name) => sendChat('/give ' + name + ' trident 1'),
                (name) => sendChat('/give ' + name + ' heart_of_the_sea 1'),
                (name) => sendChat('/give ' + name + ' nautilus_shell 8'),
                (name) => sendChat('/give ' + name + ' sea_lantern 16'),
                (name) => sendChat('/give ' + name + ' spyglass 1'),
                (name) => sendChat('/give ' + name + ' lead 2'),
                (name) => sendChat('/give ' + name + ' name_tag 4'),
                (name) => sendChat('/give ' + name + ' saddle 1'),
                (name) => sendChat('/give ' + name + ' diamond_horse_armor 1'),
                (name) => sendChat('/give ' + name + ' slime_ball 16'),
                (name) => sendChat('/w ' + name + ' Получен эксклюзивный набор helper!')
            ]
        }
    },
    "mod": {
        menu: "Вы Администрация. Доступны ВСЕ киты сервера: new, stone, iron, gold, diamond, emerald, infernium, dragon, orge, helper, mod.",
        kits: {
            "new": [
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' iron_axe 1'),
                (name) => sendChat('/give ' + name + ' iron_shovel 1'),
                (name) => sendChat('/give ' + name + ' leather_helmet 1'),
                (name) => sendChat('/give ' + name + ' leather_chestplate 1'),
                (name) => sendChat('/give ' + name + ' leather_leggings 1'),
                (name) => sendChat('/give ' + name + ' leather_boots 1'),
                (name) => sendChat('/give ' + name + ' bread 16'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/w ' + name + ' Получен набор new!')
            ],
            "stone": [
                (name) => sendChat('/give ' + name + ' chainmail_helmet 1'),
                (name) => sendChat('/give ' + name + ' chainmail_chestplate 1'),
                (name) => sendChat('/give ' + name + ' chainmail_leggings 1'),
                (name) => sendChat('/give ' + name + ' chainmail_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/give ' + name + ' cooked_beef 16'),
                (name) => sendChat('/give ' + name + ' cobblestone 64'),
                (name) => sendChat('/give ' + name + ' coal 16'),
                (name) => sendChat('/give ' + name + ' water_bucket 1'),
                (name) => sendChat('/w ' + name + ' Получен набор stone!')
            ],
            "iron": [
                (name) => sendChat('/give ' + name + ' iron_helmet 1'),
                (name) => sendChat('/give ' + name + ' iron_chestplate 1'),
                (name) => sendChat('/give ' + name + ' iron_leggings 1'),
                (name) => sendChat('/give ' + name + ' iron_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' bow 1'),
                (name) => sendChat('/give ' + name + ' arrow 34'),
                (name) => sendChat('/give ' + name + ' iron_ingot 8'),
                (name) => sendChat('/give ' + name + ' golden_apple 1'),
                (name) => sendChat('/w ' + name + ' Получен набор iron!')
            ],
            "gold": [
                (name) => sendChat('/give ' + name + ' golden_helmet 1'),
                (name) => sendChat('/give ' + name + ' golden_chestplate 1'),
                (name) => sendChat('/give ' + name + ' golden_leggings 1'),
                (name) => sendChat('/give ' + name + ' golden_boots 1'),
                (name) => sendChat('/give ' + name + ' golden_sword 1'),
                (name) => sendChat('/give ' + name + ' golden_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' golden_apple 5'),
                (name) => sendChat('/give ' + name + ' gold_ingot 16'),
                (name) => sendChat('/give ' + name + ' melon_slice 8'),
                (name) => sendChat('/give ' + name + ' clock 1'),
                (name) => sendChat('/w ' + name + ' Получен набор gold!')
            ],
            "diamond": [
                (name) => sendChat('/give ' + name + ' diamond_helmet 1'),
                (name) => sendChat('/give ' + name + ' diamond_chestplate 1'),
                (name) => sendChat('/give ' + name + ' diamond_leggings 1'),
                (name) => sendChat('/give ' + name + ' diamond_boots 1'),
                (name) => sendChat('/give ' + name + ' diamond_sword 1'),
                (name) => sendChat('/give ' + name + ' diamond_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' diamond_axe 1'),
                (name) => sendChat('/give ' + name + ' diamond_shovel 1'),
                (name) => sendChat('/give ' + name + ' diamond 4'),
                (name) => sendChat('/give ' + name + ' obsidian 10'),
                (name) => sendChat('/w ' + name + ' Получен набор diamond!')
            ],
            "emerald": [
                (name) => sendChat('/give ' + name + ' emerald_sword 1'),
                (name) => sendChat('/give ' + name + ' emerald_helmet 1'),
                (name) => sendChat('/give ' + name + ' emerald_chestplate 1'),
                (name) => sendChat('/give ' + name + ' emerald_leggings 1'),
                (name) => sendChat('/give ' + name + ' emerald_boots 1'),
                (name) => sendChat('/give ' + name + ' tnt 8'),
                (name) => sendChat('/give ' + name + ' flint_and_steel 1'),
                (name) => sendChat('/give ' + name + ' emerald_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' emerald_axe 1'),
                (name) => sendChat('/give ' + name + ' emerald_shovel'),
                (name) => sendChat('/w ' + name + ' Получен набор emerald!')
            ],
            "infernium": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1'),
                (name) => sendChat('/give ' + name + ' glowstone_dust 32'),
                (name) => sendChat('/give ' + name + ' fire_charge 8'),
                (name) => sendChat('/give ' + name + ' crying_obsidian 8'),
                (name) => sendChat('/give ' + name + ' brewing_stand 1'),
                (name) => sendChat('/w ' + name + ' Получен набор infernium!')
            ],
            "dragon": [
                (name) => sendChat('/give ' + name + ' elyra 1'),
                (name) => sendChat('/give ' + name + ' dragon_breath 4'),
                (name) => sendChat('/give ' + name + ' shulker_shell 4'),
                (name) => sendChat('/give ' + name + ' chorus_fruit 16'),
                (name) => sendChat('/give ' + name + ' end_stone 64'),
                (name) => sendChat('/give ' + name + ' end_crystal 2'),
                (name) => sendChat('/give ' + name + ' phantom_membrane 8'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 1'),
                (name) => sendChat('/give ' + name + ' respawn_anchor 1'),
                (name) => sendChat('/give ' + name + ' glow_stone 16'),
                (name) => sendChat('/w ' + name + ' Получен набор dragon!')
            ],
            "orge": [
                (name) => sendChat('/give ' + name + ' netherite_helmet 1'),
                (name) => sendChat('/give ' + name + ' netherite_chestplate 1'),
                (name) => sendChat('/give ' + name + ' netherite_leggings 1'),
                (name) => sendChat('/give ' + name + ' netherite_boots 1'),
                (name) => sendChat('/give ' + name + ' netherite_sword 1'),
                (name) => sendChat('/give ' + name + ' netherite_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' netherite_axe 1'),
                (name) => sendChat('/give ' + name + ' netherite_shovel 1'),
                (name) => sendChat('/give ' + name + ' netherite_ingot 4'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 3'),
                (name) => sendChat('/w ' + name + ' Получен наивысший набор orge!')
            ],
            "helper": [
                (name) => sendChat('/give ' + name + ' trident 1'),
                (name) => sendChat('/give ' + name + ' heart_of_the_sea 1'),
                (name) => sendChat('/give ' + name + ' nautilus_shell 8'),
                (name) => sendChat('/give ' + name + ' sea_lantern 16'),
                (name) => sendChat('/give ' + name + ' spyglass 1'),
                (name) => sendChat('/give ' + name + ' lead 2'),
                (name) => sendChat('/give ' + name + ' name_tag 4'),
                (name) => sendChat('/give ' + name + ' saddle 1'),
                (name) => sendChat('/give ' + name + ' diamond_horse_armor 1'),
                (name) => sendChat('/give ' + name + ' slime_ball 16'),
                (name) => sendChat('/w ' + name + ' Получен эксклюзивный набор helper!')
            ],
            "mod": [
                (name) => sendChat('/give ' + name + ' recovery_compass 1'),
                (name) => sendChat('/give ' + name + ' echo_shard 8'),
                (name) => sendChat('/give ' + name + ' amethyst_cluster 4'),
                (name) => sendChat('/give ' + name + ' budding_amethyst 1'),
                (name) => sendChat('/give ' + name + ' deepslate_coal_ore 16'),
                (name) => sendChat('/give ' + name + ' raw_iron_block 2'),
                (name) => sendChat('/give ' + name + ' tinted_glass 16'),
                (name) => sendChat('/give ' + name + ' copper_block 4'),
                (name) => sendChat('/give ' + name + ' lightning_rod 1'),
                (name) => sendChat('/give ' + name + ' honeycomb 16'),
                (name) => sendChat('/w ' + name + ' Получен эксклюзивный набор mod!')
            ]
        }
    },
    "admin": {
        menu: "Вы Администрация. Доступны ВСЕ киты сервера: new, stone, iron, gold, diamond, emerald, infernium, dragon, orge, helper, mod, admin.",
        kits: {
            "new": [
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' iron_axe 1'),
                (name) => sendChat('/give ' + name + ' iron_shovel 1'),
                (name) => sendChat('/give ' + name + ' leather_helmet 1'),
                (name) => sendChat('/give ' + name + ' leather_chestplate 1'),
                (name) => sendChat('/give ' + name + ' leather_leggings 1'),
                (name) => sendChat('/give ' + name + ' leather_boots 1'),
                (name) => sendChat('/give ' + name + ' bread 16'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/w ' + name + ' Получен набор new!')
            ],
            "stone": [
                (name) => sendChat('/give ' + name + ' chainmail_helmet 1'),
                (name) => sendChat('/give ' + name + ' chainmail_chestplate 1'),
                (name) => sendChat('/give ' + name + ' chainmail_leggings 1'),
                (name) => sendChat('/give ' + name + ' chainmail_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/give ' + name + ' cooked_beef 16'),
                (name) => sendChat('/give ' + name + ' cobblestone 64'),
                (name) => sendChat('/give ' + name + ' coal 16'),
                (name) => sendChat('/give ' + name + ' water_bucket 1'),
                (name) => sendChat('/w ' + name + ' Получен набор stone!')
            ],
            "iron": [
                (name) => sendChat('/give ' + name + ' iron_helmet 1'),
                (name) => sendChat('/give ' + name + ' iron_chestplate 1'),
                (name) => sendChat('/give ' + name + ' iron_leggings 1'),
                (name) => sendChat('/give ' + name + ' iron_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' bow 1'),
                (name) => sendChat('/give ' + name + ' arrow 34'),
                (name) => sendChat('/give ' + name + ' iron_ingot 8'),
                (name) => sendChat('/give ' + name + ' golden_apple 1'),
                (name) => sendChat('/w ' + name + ' Получен набор iron!')
            ],
            "gold": [
                (name) => sendChat('/give ' + name + ' golden_helmet 1'),
                (name) => sendChat('/give ' + name + ' golden_chestplate 1'),
                (name) => sendChat('/give ' + name + ' golden_leggings 1'),
                (name) => sendChat('/give ' + name + ' golden_boots 1'),
                (name) => sendChat('/give ' + name + ' golden_sword 1'),
                (name) => sendChat('/give ' + name + ' golden_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' golden_apple 5'),
                (name) => sendChat('/give ' + name + ' gold_ingot 16'),
                (name) => sendChat('/give ' + name + ' melon_slice 8'),
                (name) => sendChat('/give ' + name + ' clock 1'),
                (name) => sendChat('/w ' + name + ' Получен набор gold!')
            ],
            "diamond": [
                (name) => sendChat('/give ' + name + ' diamond_helmet 1'),
                (name) => sendChat('/give ' + name + ' diamond_chestplate 1'),
                (name) => sendChat('/give ' + name + ' diamond_leggings 1'),
                (name) => sendChat('/give ' + name + ' diamond_boots 1'),
                (name) => sendChat('/give ' + name + ' diamond_sword 1'),
                (name) => sendChat('/give ' + name + ' diamond_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' diamond_axe 1'),
                (name) => sendChat('/give ' + name + ' diamond_shovel 1'),
                (name) => sendChat('/give ' + name + ' diamond 4'),
                (name) => sendChat('/give ' + name + ' obsidian 10'),
                (name) => sendChat('/w ' + name + ' Получен набор diamond!')
            ],
            "emerald": [
                (name) => sendChat('/give ' + name + ' emerald_sword 1'),
                (name) => sendChat('/give ' + name + ' emerald_helmet 1'),
                (name) => sendChat('/give ' + name + ' emerald_chestplate 1'),
                (name) => sendChat('/give ' + name + ' emerald_leggings 1'),
                (name) => sendChat('/give ' + name + ' emerald_boots 1'),
                (name) => sendChat('/give ' + name + ' tnt 8'),
                (name) => sendChat('/give ' + name + ' flint_and_steel 1'),
                (name) => sendChat('/give ' + name + ' emerald_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' emerald_axe 1'),
                (name) => sendChat('/give ' + name + ' emerald_shovel'),
                (name) => sendChat('/w ' + name + ' Получен набор emerald!')
            ],
            "infernium": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1'),
                (name) => sendChat('/give ' + name + ' glowstone_dust 32'),
                (name) => sendChat('/give ' + name + ' fire_charge 8'),
                (name) => sendChat('/give ' + name + ' crying_obsidian 8'),
                (name) => sendChat('/give ' + name + ' brewing_stand 1'),
                (name) => sendChat('/w ' + name + ' Получен набор infernium!')
            ],
            "dragon": [
                (name) => sendChat('/give ' + name + ' elyra 1'),
                (name) => sendChat('/give ' + name + ' dragon_breath 4'),
                (name) => sendChat('/give ' + name + ' shulker_shell 4'),
                (name) => sendChat('/give ' + name + ' chorus_fruit 16'),
                (name) => sendChat('/give ' + name + ' end_stone 64'),
                (name) => sendChat('/give ' + name + ' end_crystal 2'),
                (name) => sendChat('/give ' + name + ' phantom_membrane 8'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 1'),
                (name) => sendChat('/give ' + name + ' respawn_anchor 1'),
                (name) => sendChat('/give ' + name + ' glow_stone 16'),
                (name) => sendChat('/w ' + name + ' Получен набор dragon!')
            ],
            "orge": [
                (name) => sendChat('/give ' + name + ' netherite_helmet 1'),
                (name) => sendChat('/give ' + name + ' netherite_chestplate 1'),
                (name) => sendChat('/give ' + name + ' netherite_leggings 1'),
                (name) => sendChat('/give ' + name + ' netherite_boots 1'),
                (name) => sendChat('/give ' + name + ' netherite_sword 1'),
                (name) => sendChat('/give ' + name + ' netherite_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' netherite_axe 1'),
                (name) => sendChat('/give ' + name + ' netherite_shovel 1'),
                (name) => sendChat('/give ' + name + ' netherite_ingot 4'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 3'),
                (name) => sendChat('/w ' + name + ' Получен наивысший набор orge!')
            ],
            "helper": [
                (name) => sendChat('/give ' + name + ' trident 1'),
                (name) => sendChat('/give ' + name + ' heart_of_the_sea 1'),
                (name) => sendChat('/give ' + name + ' nautilus_shell 8'),
                (name) => sendChat('/give ' + name + ' sea_lantern 16'),
                (name) => sendChat('/give ' + name + ' spyglass 1'),
                (name) => sendChat('/give ' + name + ' lead 2'),
                (name) => sendChat('/give ' + name + ' name_tag 4'),
                (name) => sendChat('/give ' + name + ' saddle 1'),
                (name) => sendChat('/give ' + name + ' diamond_horse_armor 1'),
                (name) => sendChat('/give ' + name + ' slime_ball 16'),
                (name) => sendChat('/w ' + name + ' Получен эксклюзивный набор helper!')
            ],
            "mod": [
                (name) => sendChat('/give ' + name + ' recovery_compass 1'),
                (name) => sendChat('/give ' + name + ' echo_shard 8'),
                (name) => sendChat('/give ' + name + ' amethyst_cluster 4'),
                (name) => sendChat('/give ' + name + ' budding_amethyst 1'),
                (name) => sendChat('/give ' + name + ' deepslate_coal_ore 16'),
                (name) => sendChat('/give ' + name + ' raw_iron_block 2'),
                (name) => sendChat('/give ' + name + ' tinted_glass 16'),
                (name) => sendChat('/give ' + name + ' copper_block 4'),
                (name) => sendChat('/give ' + name + ' lightning_rod 1'),
                (name) => sendChat('/give ' + name + ' honeycomb 16'),
                (name) => sendChat('/w ' + name + ' Получен эксклюзивный набор mod!')
            ],
            "admin": [
                (name) => sendChat('/give ' + name + ' wither_skeleton_skull 3'),
                (name) => sendChat('/give ' + name + ' soul_sand 4'),
                (name) => sendChat('/give ' + name + ' nether_star 1'),
                (name) => sendChat('/give ' + name + ' beacon 1'),
                (name) => sendChat('/give ' + name + ' lodestone 1'),
                (name) => sendChat('/give ' + name + ' shulker_box 2'),
                (name) => sendChat('/give ' + name + ' ender_chest 1'),
                (name) => sendChat('/give ' + name + ' map 4'),
                (name) => sendChat('/give ' + name + ' golden_apple 10'),
                (name) => sendChat('/give ' + name + ' diamond_block 2'),
                (name) => sendChat('/w ' + name + ' Получен эксклюзивный набор admin!')
            ]
        }
    },
    "owner": {
        menu: "Вы Владелец. Доступны ВСЕ киты сервера: new, stone, iron, gold, diamond, emerald, infernium, dragon, orge, helper, mod, admin, owner.",
        kits: {
            "new": [
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' iron_axe 1'),
                (name) => sendChat('/give ' + name + ' iron_shovel 1'),
                (name) => sendChat('/give ' + name + ' leather_helmet 1'),
                (name) => sendChat('/give ' + name + ' leather_chestplate 1'),
                (name) => sendChat('/give ' + name + ' leather_leggings 1'),
                (name) => sendChat('/give ' + name + ' leather_boots 1'),
                (name) => sendChat('/give ' + name + ' bread 16'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/w ' + name + ' Получен набор new!')
            ],
            "stone": [
                (name) => sendChat('/give ' + name + ' chainmail_helmet 1'),
                (name) => sendChat('/give ' + name + ' chainmail_chestplate 1'),
                (name) => sendChat('/give ' + name + ' chainmail_leggings 1'),
                (name) => sendChat('/give ' + name + ' chainmail_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' torch 32'),
                (name) => sendChat('/give ' + name + ' cooked_beef 16'),
                (name) => sendChat('/give ' + name + ' cobblestone 64'),
                (name) => sendChat('/give ' + name + ' coal 16'),
                (name) => sendChat('/give ' + name + ' water_bucket 1'),
                (name) => sendChat('/w ' + name + ' Получен набор stone!')
            ],
            "iron": [
                (name) => sendChat('/give ' + name + ' iron_helmet 1'),
                (name) => sendChat('/give ' + name + ' iron_chestplate 1'),
                (name) => sendChat('/give ' + name + ' iron_leggings 1'),
                (name) => sendChat('/give ' + name + ' iron_boots 1'),
                (name) => sendChat('/give ' + name + ' iron_sword 1'),
                (name) => sendChat('/give ' + name + ' iron_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' bow 1'),
                (name) => sendChat('/give ' + name + ' arrow 34'),
                (name) => sendChat('/give ' + name + ' iron_ingot 8'),
                (name) => sendChat('/give ' + name + ' golden_apple 1'),
                (name) => sendChat('/w ' + name + ' Получен набор iron!')
            ],
            "gold": [
                (name) => sendChat('/give ' + name + ' golden_helmet 1'),
                (name) => sendChat('/give ' + name + ' golden_chestplate 1'),
                (name) => sendChat('/give ' + name + ' golden_leggings 1'),
                (name) => sendChat('/give ' + name + ' golden_boots 1'),
                (name) => sendChat('/give ' + name + ' golden_sword 1'),
                (name) => sendChat('/give ' + name + ' golden_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' golden_apple 5'),
                (name) => sendChat('/give ' + name + ' gold_ingot 16'),
                (name) => sendChat('/give ' + name + ' melon_slice 8'),
                (name) => sendChat('/give ' + name + ' clock 1'),
                (name) => sendChat('/w ' + name + ' Получен набор gold!')
            ],
            "diamond": [
                (name) => sendChat('/give ' + name + ' diamond_helmet 1'),
                (name) => sendChat('/give ' + name + ' diamond_chestplate 1'),
                (name) => sendChat('/give ' + name + ' diamond_leggings 1'),
                (name) => sendChat('/give ' + name + ' diamond_boots 1'),
                (name) => sendChat('/give ' + name + ' diamond_sword 1'),
                (name) => sendChat('/give ' + name + ' diamond_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' diamond_axe 1'),
                (name) => sendChat('/give ' + name + ' diamond_shovel 1'),
                (name) => sendChat('/give ' + name + ' diamond 4'),
                (name) => sendChat('/give ' + name + ' obsidian 10'),
                (name) => sendChat('/w ' + name + ' Получен набор diamond!')
            ],
            "emerald": [
                (name) => sendChat('/give ' + name + ' emerald_sword 1'),
                (name) => sendChat('/give ' + name + ' emerald_helmet 1'),
                (name) => sendChat('/give ' + name + ' emerald_chestplate 1'),
                (name) => sendChat('/give ' + name + ' emerald_leggings 1'),
                (name) => sendChat('/give ' + name + ' emerald_boots 1'),
                (name) => sendChat('/give ' + name + ' tnt 8'),
                (name) => sendChat('/give ' + name + ' flint_and_steel 1'),
                (name) => sendChat('/give ' + name + ' emerald_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' emerald_axe 1'),
                (name) => sendChat('/give ' + name + ' emerald_shovel'),
                (name) => sendChat('/w ' + name + ' Получен набор emerald!')
            ],
            "infernium": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1'),
                (name) => sendChat('/give ' + name + ' glowstone_dust 32'),
                (name) => sendChat('/give ' + name + ' fire_charge 8'),
                (name) => sendChat('/give ' + name + ' crying_obsidian 8'),
                (name) => sendChat('/give ' + name + ' brewing_stand 1'),
                (name) => sendChat('/w ' + name + ' Получен набор infernium!')
            ],
            "dragon": [
                (name) => sendChat('/give ' + name + ' elyra 1'),
                (name) => sendChat('/give ' + name + ' dragon_breath 4'),
                (name) => sendChat('/give ' + name + ' shulker_shell 4'),
                (name) => sendChat('/give ' + name + ' chorus_fruit 16'),
                (name) => sendChat('/give ' + name + ' end_stone 64'),
                (name) => sendChat('/give ' + name + ' end_crystal 2'),
                (name) => sendChat('/give ' + name + ' phantom_membrane 8'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 1'),
                (name) => sendChat('/give ' + name + ' respawn_anchor 1'),
                (name) => sendChat('/give ' + name + ' glow_stone 16'),
                (name) => sendChat('/w ' + name + ' Получен набор dragon!')
            ],
            "orge": [
                (name) => sendChat('/give ' + name + ' netherite_helmet 1'),
                (name) => sendChat('/give ' + name + ' netherite_chestplate 1'),
                (name) => sendChat('/give ' + name + ' netherite_leggings 1'),
                (name) => sendChat('/give ' + name + ' netherite_boots 1'),
                (name) => sendChat('/give ' + name + ' netherite_sword 1'),
                (name) => sendChat('/give ' + name + ' netherite_pickaxe 1'),
                (name) => sendChat('/give ' + name + ' netherite_axe 1'),
                (name) => sendChat('/give ' + name + ' netherite_shovel 1'),
                (name) => sendChat('/give ' + name + ' netherite_ingot 4'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 3'),
                (name) => sendChat('/w ' + name + ' Получен наивысший набор orge!')
            ],
            "helper": [
                (name) => sendChat('/give ' + name + ' trident 1'),
                (name) => sendChat('/give ' + name + ' heart_of_the_sea 1'),
                (name) => sendChat('/give ' + name + ' nautilus_shell 8'),
                (name) => sendChat('/give ' + name + ' sea_lantern 16'),
                (name) => sendChat('/give ' + name + ' spyglass 1'),
                (name) => sendChat('/give ' + name + ' lead 2'),
                (name) => sendChat('/give ' + name + ' name_tag 4'),
                (name) => sendChat('/give ' + name + ' saddle 1'),
                (name) => sendChat('/give ' + name + ' diamond_horse_armor 1'),
                (name) => sendChat('/give ' + name + ' slime_ball 16'),
                (name) => sendChat('/w ' + name + ' Получен эксклюзивный набор helper!')
            ],
            "mod": [
                (name) => sendChat('/give ' + name + ' recovery_compass 1'),
                (name) => sendChat('/give ' + name + ' echo_shard 8'),
                (name) => sendChat('/give ' + name + ' amethyst_cluster 4'),
                (name) => sendChat('/give ' + name + ' budding_amethyst 1'),
                (name) => sendChat('/give ' + name + ' deepslate_coal_ore 16'),
                (name) => sendChat('/give ' + name + ' raw_iron_block 2'),
                (name) => sendChat('/give ' + name + ' tinted_glass 16'),
                (name) => sendChat('/give ' + name + ' copper_block 4'),
                (name) => sendChat('/give ' + name + ' lightning_rod 1'),
                (name) => sendChat('/give ' + name + ' honeycomb 16'),
                (name) => sendChat('/w ' + name + ' Получен эксклюзивный набор mod!')
            ],
            "admin": [
                (name) => sendChat('/give ' + name + ' wither_skeleton_skull 3'),
                (name) => sendChat('/give ' + name + ' soul_sand 4'),
                (name) => sendChat('/give ' + name + ' nether_star 1'),
                (name) => sendChat('/give ' + name + ' beacon 1'),
                (name) => sendChat('/give ' + name + ' lodestone 1'),
                (name) => sendChat('/give ' + name + ' shulker_box 2'),
                (name) => sendChat('/give ' + name + ' ender_chest 1'),
                (name) => sendChat('/give ' + name + ' map 4'),
                (name) => sendChat('/give ' + name + ' golden_apple 10'),
                (name) => sendChat('/give ' + name + ' diamond_block 2'),
                (name) => sendChat('/w ' + name + ' Получен эксклюзивный набор admin!')
            ],
            "owner": [
                (name) => sendChat('/give ' + name + ' dragon_egg 1'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 32'),
                (name) => sendChat('/give ' + name + ' netherite_block 1'),
                (name) => sendChat('/give ' + name + ' netherite_upgrade_smithing_template 1'),
                (name) => sendChat('/give ' + name + ' diamond_block 8'),
                (name) => sendChat('/give ' + name + ' emerald_block 8'),
                (name) => sendChat('/give ' + name + ' gold_block 8'),
                (name) => sendChat('/give ' + name + ' iron_block 16'),
                (name) => sendChat('/give ' + name + ' tnt 64'),
                (name) => sendChat('/give ' + name + ' flint_and_steel 1'),
                (name) => sendChat('/w ' + name + ' Получен эксклюзивный набор owner!')
            ]
        }
    },
    "bot": {
        menu: "Системный ранг.",
        kits: {}
    },
    "dev": {
        menu: "Ранг разработчика.",
        kits: {}
    },
    "sushi": {
        menu: "Ранг Друна! Доступны ВСЕ киты сервера: new, stone, iron, gold, diamond, emerald, infernium, dragon, orge, helper, mod, admin, owner.",
        kits: {}
    },
    "babby": {
        menu: "Ранг Друна! Доступны ВСЕ киты сервера: new, stone, iron, gold, diamond, emerald, infernium, dragon, orge, helper, mod, admin, owner.",
        kits: {}
    }
};
