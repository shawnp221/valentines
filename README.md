# Valentine's Day Proposal Website 💖

A fancy, interactive Valentine's Day proposal website built with React. Features a playful interface where the "Yes" button grows and the "No" button shrinks with each click!

## Features

- 💖 Beautiful gradient backgrounds with floating hearts and sparkles
- 📱 Fully responsive design (mobile, tablet, and desktop)
- 🎯 Interactive button mechanics (Yes grows, No shrinks)
- 💬 Special message on first "Yes" click
- ✨ Floating words of affirmation
- 🎊 Celebratory animation on acceptance
- 💝 Playful encouragement messages

## Project Structure

```
valentine-proposal/
├── src/
│   ├── components/
│   │   ├── AcceptedView.jsx       # Success view when they say yes
│   │   ├── AffirmationBadges.jsx  # Floating affirmation messages
│   │   ├── FirstYesMessage.jsx    # Popup for first yes click
│   │   └── FloatingDecorations.jsx # Background sparkles and hearts
│   ├── styles/
│   │   ├── ValentineProposal.css  # Main component styles
│   │   ├── AcceptedView.css       # Success view styles
│   │   ├── AffirmationBadges.css  # Affirmation badge styles
│   │   ├── FirstYesMessage.css    # Popup message styles
│   │   └── FloatingDecorations.css # Decoration styles
│   ├── ValentineProposal.jsx      # Main component
│   └── constants.js               # Affirmations and constants
└── package.json
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Usage

Import the main component in your app:

```jsx
import ValentineProposal from './src/ValentineProposal';

function App() {
  return <ValentineProposal />;
}
```

## Customization

### Changing Affirmations

Edit the `src/constants.js` file to modify the affirmation messages:

```javascript
export const affirmations = [
  "Your custom message here",
  // Add more...
];
```

### Adjusting Button Growth

In `src/ValentineProposal.jsx`, modify the growth rates:

```javascript
const getYesButtonSize = () => {
  const baseSize = 120;
  const growth = noClickCount * 40; // Change growth rate here
  return Math.min(baseSize + growth, 500);
};
```

### Styling

All styles are modular and can be found in the `src/styles/` directory. Each component has its own CSS file for easy customization.

## Technologies Used

- React 18
- Lucide React (for icons)
- CSS3 (with animations and responsive design)
- Vite (build tool)

## Browser Support

Works on all modern browsers and is fully responsive across:
- Mobile phones
- Tablets
- Desktop computers

## License

MIT License - feel free to use this for your own Valentine's proposal! 💕