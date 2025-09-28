# Parser Game

An interactive web-based game to learn sentence parsing and grammatical analysis. Challenge yourself to identify verbs, nouns, subjects, predicates, and adjectives in sentences across three languages: English, German, and Dutch.

## 🎮 Play the Game

[Play Parser Game on GitHub Pages](https://commjoen.github.io/parsergame/)

## 🌟 Features

- **Multi-language Support**: Play in English, German, or Dutch
- **250+ Sentences**: Each language has over 250 unique sentences (8-50 words each)
- **5 Challenge Types**:
  - Select all verbs in a sentence
  - Select all nouns in a sentence  
  - Select the subject of a sentence
  - Select the predicate of a sentence
  - Select all adjectives in a sentence
- **Interactive UI**: Click on words to select them
- **Real-time Feedback**: Immediate visual feedback on correct/incorrect selections
- **Score Tracking**: Points awarded for correct identifications
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Play Online
Visit [https://commjoen.github.io/parsergame/](https://commjoen.github.io/parsergame/) to play immediately.

### Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/commjoen/parsergame.git
   cd parsergame
   ```

2. Open `index.html` in your web browser
   ```bash
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

3. Or serve with a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 🧪 Testing

Run the test suite by opening `test.html` in your browser. The tests verify:
- Sentence database integrity
- Translation completeness
- Game logic functionality
- Word count validation (8-50 words per sentence)

## 📁 File Structure

```
parsergame/
├── index.html          # Main game interface
├── styles.css          # Game styling and responsive design
├── game.js            # Core game logic and interactions
├── sentences.js       # Sentence database (250+ per language)
├── translations.js    # Multi-language UI translations
├── test.html          # Test suite for validation
├── README.md          # Project documentation
├── LICENSE            # GPL-3.0 license
└── .gitignore         # Git ignore rules
```

## 🎯 How to Play

1. **Select Language**: Choose from English, German, or Dutch
2. **Choose Challenge**: Pick what grammatical element to identify
3. **Read the Sentence**: A sentence will be displayed with clickable words
4. **Make Selections**: Click on words you think match the challenge
5. **Check Answer**: Click "Check Answer" to see results
6. **Learn from Feedback**: Green = correct, Red = incorrect, Orange = missed
7. **Continue**: Move to the next question and improve your score

## 🏆 Scoring

- **Perfect Answer**: 10 points
- **Partial Answer**: 1-9 points based on accuracy
- **Wrong Answer**: 0 points

## 🌍 Languages Supported

### User Interface Languages
- **English**: Full interface translation
- **German (Deutsch)**: Complete German interface
- **Dutch (Nederlands)**: Complete Dutch interface

### Sentence Languages  
Each language contains 250+ unique sentences covering various topics and grammatical structures.

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript**: No frameworks or build tools required
- **Responsive Design**: CSS Grid and Flexbox for all screen sizes
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Cross-browser Compatible**: Works in all modern web browsers

## 🤝 Contributing

Contributions are welcome! Here are ways to help:

1. **Add More Sentences**: Expand the sentence database
2. **Improve Translations**: Enhance language support
3. **Fix Bugs**: Report and fix issues
4. **Add Features**: Suggest and implement new game modes

### Development Setup
1. Fork the repository
2. Make your changes
3. Test with `test.html`
4. Submit a pull request

## 📝 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Sentence examples inspired by common grammatical patterns
- Multi-language support for educational accessibility
- Open source educational tools community

---

**Educational Purpose**: This game is designed as a learning tool for grammar and sentence structure. It's suitable for students, teachers, and anyone interested in improving their grammatical analysis skills.
