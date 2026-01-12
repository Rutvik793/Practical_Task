# Items Management App

A simple React Native application for managing items with Redux state management.

## Features

- Add new items with validation
- View all items in a list
- Delete items with confirmation
- Redux state management
- Clean and simple UI

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

```bash
cd ReactNativeTakehome
npm install
```

## Install Navigation Dependencies

```bash
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

## Steps to Run the App

### 1. Start the Metro Bundler

```bash
npm start
```

### 2. Run on iOS (Mac only)

```bash
npm run ios
```

### 3. Run on Android

```bash
npm run android
```

## How to Use

1. **Add Item** - Click "+ Add New Item" button, enter item name (2-50 characters), click "Add Item"
2. **View Items** - All items are displayed in a list below the form
3. **Delete Item** - Click the "✕" button on any item and confirm deletion

## Project Structure

```
src/
├── navigation/
│   └── RootNavigator.js
├── screens/
│   └── items/ItemsScreen.js
├── redux/
│   ├── store.js
│   ├── slices/itemsSlice.js
│   └── selectors/itemsSelectors.js
├── components/
│   ├── common/
│   │   ├── Button.js
│   │   └── Input.js
│   └── headers/AppHeader.js
├── theme/
│   ├── colors.js
│   └── spacing.js
└── App.js
```

## Troubleshooting

**Issue: Module not found errors**

- Make sure all files exist in `src/` folder
- Check file paths in imports

**Issue: Redux context error**

- Ensure `App.js` wraps the app with `<Provider store={store}>`

**Issue: Navigation not working**

- Run: `npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context`

**Clear cache and reinstall:**

```bash
npm start -- --reset-cache
```

## License

MIT
