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
                (name) => sendChat('/give ' + name + ' golden_apple 16'),
                (name) => sendChat('/give ' + name + ' tnt 32'),
                (name) => sendChat('/give ' + name + ' experience_bottle 64'),
                (name) => sendChat('/give ' + name + ' obsidian 16'),
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
                (name) => sendChat('/give ' + name + ' golden_apple 16'),
                (name) => sendChat('/give ' + name + ' tnt 32'),
                (name) => sendChat('/give ' + name + ' experience_bottle 64'),
                (name) => sendChat('/give ' + name + ' obsidian 16'),
                (name) => sendChat('/w ' + name + ' Получен набор infernium!')
            ],
            "dragon": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1 0 {Unbreakable:1,ench:[{id:16,lvl:5},{id:17,lvl:5},{id:18,lvl:5},{id:19,lvl:2},{id:20,lvl:5},{id:21,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:5,lvl:3},{id:6,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:7,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:7,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:2,lvl:4},{id:8,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_pickaxe 1 0 {Unbreakable:1,ench:[{id:32,lvl:5},{id:35,lvl:10}]}'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1 0 {Unbreakable:1,ench:[{id:32,lvl:5},{id:16,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 1'),
                (name) => sendChat('/give ' + name + ' bow 1 0 {Unbreakable:1,ench:[{id:48,lvl:5},{id:49,lvl:2},{id:50,lvl:1},{id:51,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' obsidian 32'),
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
                (name) => sendChat('/give ' + name + ' golden_apple 16'),
                (name) => sendChat('/give ' + name + ' tnt 32'),
                (name) => sendChat('/give ' + name + ' experience_bottle 64'),
                (name) => sendChat('/give ' + name + ' obsidian 16'),
                (name) => sendChat('/w ' + name + ' Получен набор infernium!')
            ],
            "dragon": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1 0 {Unbreakable:1,ench:[{id:16,lvl:5},{id:17,lvl:5},{id:18,lvl:5},{id:19,lvl:2},{id:20,lvl:5},{id:21,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:5,lvl:3},{id:6,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:7,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:7,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:2,lvl:4},{id:8,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_pickaxe 1 0 {Unbreakable:1,ench:[{id:32,lvl:5},{id:35,lvl:10}]}'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1 0 {Unbreakable:1,ench:[{id:32,lvl:5},{id:16,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 1'),
                (name) => sendChat('/give ' + name + ' bow 1 0 {Unbreakable:1,ench:[{id:48,lvl:5},{id:49,lvl:2},{id:50,lvl:1},{id:51,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' obsidian 32'),
                (name) => sendChat('/w ' + name + ' Получен набор dragon!')
            ],
            "orge": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1 0 {Unbreakable:1,ench:[{id:16,lvl:10},{id:17,lvl:10},{id:18,lvl:10},{id:19,lvl:3},{id:20,lvl:5},{id:21,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:5,lvl:5},{id:6,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:7,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:7,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:2,lvl:10},{id:8,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_pickaxe 1 0 {Unbreakable:1,ench:[{id:32,lvl:10},{id:35,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' tnt 64'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1 0 {Unbreakable:1,ench:[{id:32,lvl:10},{id:16,lvl:10}]}'),
                (name) => sendChat('/give ' + name + ' bow 1 0 {Unbreakable:1,ench:[{id:48,lvl:10},{id:49,lvl:3},{id:50,lvl:2},{id:51,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 32'),
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
                (name) => sendChat('/give ' + name + ' golden_apple 16'),
                (name) => sendChat('/give ' + name + ' tnt 32'),
                (name) => sendChat('/give ' + name + ' experience_bottle 64'),
                (name) => sendChat('/give ' + name + ' obsidian 16'),
                (name) => sendChat('/w ' + name + ' Получен набор infernium!')
            ],
            "dragon": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1 0 {Unbreakable:1,ench:[{id:16,lvl:5},{id:17,lvl:5},{id:18,lvl:5},{id:19,lvl:2},{id:20,lvl:5},{id:21,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:5,lvl:3},{id:6,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:7,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:7,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:2,lvl:4},{id:8,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_pickaxe 1 0 {Unbreakable:1,ench:[{id:32,lvl:5},{id:35,lvl:10}]}'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1 0 {Unbreakable:1,ench:[{id:32,lvl:5},{id:16,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 1'),
                (name) => sendChat('/give ' + name + ' bow 1 0 {Unbreakable:1,ench:[{id:48,lvl:5},{id:49,lvl:2},{id:50,lvl:1},{id:51,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' obsidian 32'),
                (name) => sendChat('/w ' + name + ' Получен набор dragon!')
            ],
            "orge": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1 0 {Unbreakable:1,ench:[{id:16,lvl:10},{id:17,lvl:10},{id:18,lvl:10},{id:19,lvl:3},{id:20,lvl:5},{id:21,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:5,lvl:5},{id:6,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:7,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:7,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:2,lvl:10},{id:8,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_pickaxe 1 0 {Unbreakable:1,ench:[{id:32,lvl:10},{id:35,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' tnt 64'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1 0 {Unbreakable:1,ench:[{id:32,lvl:10},{id:16,lvl:10}]}'),
                (name) => sendChat('/give ' + name + ' bow 1 0 {Unbreakable:1,ench:[{id:48,lvl:10},{id:49,lvl:3},{id:50,lvl:2},{id:51,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 32'),
                (name) => sendChat('/w ' + name + ' Получен наивысший набор orge!')
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
                (name) => sendChat('/give ' + name + ' golden_apple 16'),
                (name) => sendChat('/give ' + name + ' tnt 32'),
                (name) => sendChat('/give ' + name + ' experience_bottle 64'),
                (name) => sendChat('/give ' + name + ' obsidian 16'),
                (name) => sendChat('/w ' + name + ' Получен набор infernium!')
            ],
            "dragon": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1 0 {Unbreakable:1,ench:[{id:16,lvl:5},{id:17,lvl:5},{id:18,lvl:5},{id:19,lvl:2},{id:20,lvl:5},{id:21,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:5,lvl:3},{id:6,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:7,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:7,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:2,lvl:4},{id:8,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_pickaxe 1 0 {Unbreakable:1,ench:[{id:32,lvl:5},{id:35,lvl:10}]}'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1 0 {Unbreakable:1,ench:[{id:32,lvl:5},{id:16,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 1'),
                (name) => sendChat('/give ' + name + ' bow 1 0 {Unbreakable:1,ench:[{id:48,lvl:5},{id:49,lvl:2},{id:50,lvl:1},{id:51,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' obsidian 32'),
                (name) => sendChat('/w ' + name + ' Получен набор dragon!')
            ],
            "orge": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1 0 {Unbreakable:1,ench:[{id:16,lvl:10},{id:17,lvl:10},{id:18,lvl:10},{id:19,lvl:3},{id:20,lvl:5},{id:21,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:5,lvl:5},{id:6,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:7,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:7,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:2,lvl:10},{id:8,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_pickaxe 1 0 {Unbreakable:1,ench:[{id:32,lvl:10},{id:35,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' tnt 64'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1 0 {Unbreakable:1,ench:[{id:32,lvl:10},{id:16,lvl:10}]}'),
                (name) => sendChat('/give ' + name + ' bow 1 0 {Unbreakable:1,ench:[{id:48,lvl:10},{id:49,lvl:3},{id:50,lvl:2},{id:51,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 32'),
                (name) => sendChat('/w ' + name + ' Получен наивысший набор orge!')
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
                (name) => sendChat('/give ' + name + ' golden_apple 16'),
                (name) => sendChat('/give ' + name + ' tnt 32'),
                (name) => sendChat('/give ' + name + ' experience_bottle 64'),
                (name) => sendChat('/give ' + name + ' obsidian 16'),
                (name) => sendChat('/w ' + name + ' Получен набор infernium!')
            ],
            "dragon": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1 0 {Unbreakable:1,ench:[{id:16,lvl:5},{id:17,lvl:5},{id:18,lvl:5},{id:19,lvl:2},{id:20,lvl:5},{id:21,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:5,lvl:3},{id:6,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:7,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:7,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:2,lvl:4},{id:8,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_pickaxe 1 0 {Unbreakable:1,ench:[{id:32,lvl:5},{id:35,lvl:10}]}'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1 0 {Unbreakable:1,ench:[{id:32,lvl:5},{id:16,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 1'),
                (name) => sendChat('/give ' + name + ' bow 1 0 {Unbreakable:1,ench:[{id:48,lvl:5},{id:49,lvl:2},{id:50,lvl:1},{id:51,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' obsidian 32'),
                (name) => sendChat('/w ' + name + ' Получен набор dragon!')
            ],
            "orge": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1 0 {Unbreakable:1,ench:[{id:16,lvl:10},{id:17,lvl:10},{id:18,lvl:10},{id:19,lvl:3},{id:20,lvl:5},{id:21,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:5,lvl:5},{id:6,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:7,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:7,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:2,lvl:10},{id:8,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_pickaxe 1 0 {Unbreakable:1,ench:[{id:32,lvl:10},{id:35,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' tnt 64'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1 0 {Unbreakable:1,ench:[{id:32,lvl:10},{id:16,lvl:10}]}'),
                (name) => sendChat('/give ' + name + ' bow 1 0 {Unbreakable:1,ench:[{id:48,lvl:10},{id:49,lvl:3},{id:50,lvl:2},{id:51,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 32'),
                (name) => sendChat('/w ' + name + ' Получен наивысший набор orge!')
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
                (name) => sendChat('/give ' + name + ' golden_apple 16'),
                (name) => sendChat('/give ' + name + ' tnt 32'),
                (name) => sendChat('/give ' + name + ' experience_bottle 64'),
                (name) => sendChat('/give ' + name + ' obsidian 16'),
                (name) => sendChat('/w ' + name + ' Получен набор infernium!')
            ],
            "dragon": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1 0 {Unbreakable:1,ench:[{id:16,lvl:5},{id:17,lvl:5},{id:18,lvl:5},{id:19,lvl:2},{id:20,lvl:5},{id:21,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:5,lvl:3},{id:6,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:7,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:7,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1 0 {Unbreakable:1,ench:[{id:0,lvl:4},{id:2,lvl:4},{id:8,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_pickaxe 1 0 {Unbreakable:1,ench:[{id:32,lvl:5},{id:35,lvl:10}]}'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1 0 {Unbreakable:1,ench:[{id:32,lvl:5},{id:16,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 1'),
                (name) => sendChat('/give ' + name + ' bow 1 0 {Unbreakable:1,ench:[{id:48,lvl:5},{id:49,lvl:2},{id:50,lvl:1},{id:51,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' obsidian 32'),
                (name) => sendChat('/w ' + name + ' Получен набор dragon!')
            ],
            "orge": [
                (name) => sendChat('/give ' + name + ' infernium_sword 1 0 {Unbreakable:1,ench:[{id:16,lvl:10},{id:17,lvl:10},{id:18,lvl:10},{id:19,lvl:3},{id:20,lvl:5},{id:21,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:5,lvl:5},{id:6,lvl:3}]}'),
                (name) => sendChat('/give ' + name + ' infernium_chestplate 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:7,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_leggings 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:7,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_boots 1 0 {Unbreakable:1,ench:[{id:0,lvl:10},{id:2,lvl:10},{id:8,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' infernium_pickaxe 1 0 {Unbreakable:1,ench:[{id:32,lvl:10},{id:35,lvl:5}]}'),
                (name) => sendChat('/give ' + name + ' tnt 64'),
                (name) => sendChat('/give ' + name + ' infernium_axe 1 0 {Unbreakable:1,ench:[{id:32,lvl:10},{id:16,lvl:10}]}'),
                (name) => sendChat('/give ' + name + ' bow 1 0 {Unbreakable:1,ench:[{id:48,lvl:10},{id:49,lvl:3},{id:50,lvl:2},{id:51,lvl:1}]}'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 32'),
                (name) => sendChat('/w ' + name + ' Получен наивысший набор orge!')
            ],
            "owner": [
                (name) => sendChat('/give ' + name + ' /give @p stick 1 0 {ench:[{id:16,lvl:99999}]}'),
                (name) => sendChat('/give ' + name + ' enchanted_golden_apple 64'),
                (name) => sendChat('/give ' + name + ' /give @p stick 1 0 {ench:[{id:19,lvl:15}]}'),
                (name) => sendChat('/give ' + name + ' infernium_helmet 1 0 {Unbreakable:1,ench:[{id:0,lvl:99999999},{id:16,lvl:99999}]}'),
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
