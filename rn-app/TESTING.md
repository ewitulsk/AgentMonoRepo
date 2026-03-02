# Testing Instructions

## iOS Testing (iPhone)

### Prerequisites
1. Install **Expo Go** app from App Store on your iPhone
2. Ensure your iPhone and development machine are on the **same WiFi network**
3. Have a QR code scanner ready (built into iOS camera)

### Running the App
```bash
cd rn-app
npx expo start
```

1. Point your iPhone camera at the QR code in the terminal
2. The app will load in Expo Go
3. For hot reloading: Make changes to code, they'll update automatically

### For Native iOS Development (Optional)
If you need to test native modules or build for App Store:
```bash
npx expo prebuild --platform ios
# Requires Xcode and macOS
```

## Android Testing

### Option 1: Android Emulator (Recommended for Linux)
```bash
# Start Android emulator
emulator -avd <your-avd-name>

# Then run
npx expo start
```

### Option 2: Physical Android Device
1. Enable Developer Options on your Android device
2. Enable USB Debugging
3. Connect via USB
4. Run `npx expo start`

### Option 3: Android Studio Emulator
1. Install Android Studio
2. Create an AVD (Android Virtual Device)
3. Start the emulator
4. Run `npx expo start`

## Web Testing
```bash
npx expo start --web
```
Opens in browser for quick web testing.