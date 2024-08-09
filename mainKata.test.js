import { test, expect } from "vitest"; // Importing test functions from Vitest framework
import { emojiConverter } from "./mainKata"; // Importing the emojiConverter function from the mainKata file

// First test block to test the emojiConverter with the default emoji dictionary
test('test', () => {
    // Create an object to store the emoji mappings (the dictionary)
    const emojiDict = {
        "smile": "😊",
        "sad": "😢",
        "angry": "😡",
        "laugh": "😂",
        "love": "❤️",
        "heart": "💖",
        "star": "⭐",
        "sun": "☀️",
        "moon": "🌙",
        "cloud": "☁️",
        "rain": "🌧️",
        "fire": "🔥",
        "ice": "🧊",
        "tree": "🌳",
        "flower": "🌸",
        "bird": "🐦",
        "dog": "🐶",
        "cat": "🐱",
        "fish": "🐟",
        "bear": "🐻",
        "lion": "🦁",
        "tiger": "🐯",
        "elephant": "🐘",
        "cats": "🐱", // Plural form to handle "cats"
        "dogs": "🐶"  // Plural form to handle "dogs"
    };

    // Test cases:
    expect(emojiConverter('smile', emojiDict)).toBe('😊'); // Single word conversion
    expect(emojiConverter('I am sad', emojiDict)).toBe('I am 😢'); // Sentence with one word replaced
    expect(emojiConverter('I love cats !', emojiDict)).toBe('I ❤️ 🐱 !'); // Sentence with multiple words replaced and punctuation
    expect(emojiConverter('I am angry', emojiDict)).toBe('I am 😡'); // Sentence with one word replaced
    expect(emojiConverter('I love cats and dogs', emojiDict)).toBe('I ❤️ 🐱 and 🐶'); // Sentence with multiple emoji replacements
    expect(emojiConverter('This text has no emoji', emojiDict)).toBe('This text has no emoji'); // No matching words in the dictionary
    expect(emojiConverter('I LOVE CATS', emojiDict)).toBe('I LOVE CATS'); // Case sensitivity test (uppercase input should not match)
    expect(emojiConverter('', emojiDict)).toBe(''); // Empty string input test
});

// Second test block to test the emojiConverter with a custom dictionary
test('emojiConverter replaces words with emojis using custom dictionary', () => {
    const customDictionary = {
        target: '🎯', // Custom dictionary mapping for the word "target"
        goal: '🥅',
    };
    expect(emojiConverter('I seek target and goal', customDictionary)).toBe('I seek 🎯 and 🥅'); // Test with a custom dictionary
});
