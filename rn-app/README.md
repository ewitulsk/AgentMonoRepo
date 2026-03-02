# rn-app - React Native + Expo

A React Native application built with Expo for cross-platform development.

## Features

- ✅ iOS support (bundle: com.evan.rnapp)
- ✅ Android support (emulator: test-android)
- ✅ Web support
- ✅ CI/CD pipeline with GitHub Actions
- ✅ EAS Build configuration

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Installation

```bash
cd rn-app
npm install
```

### Running the App

**Development Server:**
```bash
npm start
```

**iOS:**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

**Web:**
```bash
npm run web
```

### Testing

See [TESTING.md](./TESTING.md) for detailed testing instructions.

## CI/CD

The project includes GitHub Actions workflows for:
- Automated builds on push/PR
- Web export
- Android builds (on main branch)
- iOS builds (on main branch, macOS runner)

See `.github/workflows/expo-build.yml` for details.

## EAS Configuration

`eas.json` is configured with build profiles:
- `development`: For local development builds
- `preview`: For preview builds (TestFlight/Play Store internal)
- `production`: For production releases

## Project Structure

```
rn-app/
├── App.js              # Main application component
├── app.json            # Expo configuration
├── eas.json            # EAS Build configuration
├── package.json        # Dependencies
├── assets/             # Images and assets
├── .expo/              # Expo cache
└── README.md           # This file
```

## License

Private project - Evan Witulski
