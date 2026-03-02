# TODO - AgentMonoRepo

## Current Task
Setup React Native pipeline with Expo for iOS testing on iPhone and Android VM for testing

## Tasks
- [x] Initialize React Native project with Expo
- [x] Configure Expo for local iOS testing on iPhone
  - [x] Add iOS bundle identifier
  - [x] Document iOS testing instructions
- [x] Set up Android emulator/VM for testing
  - [x] Install Android SDK command-line tools
  - [x] Install Java JDK 17
  - [x] Install platform-tools and build-tools
  - [x] Create Android emulator (test-android, Pixel 6, Android 14)
- [ ] Configure CI/CD pipeline structure
- [ ] Create initial app structure and test run

## Completed
- Initialized React Native project with Expo (blank template)
- Created `rn-app` directory with all dependencies installed
- Committed and pushed to remote
- Configured iOS bundle identifier (com.evan.rnapp)
- Created TESTING.md with iOS and Android testing instructions
- Set up Android SDK environment:
  - Installed Java JDK 17
  - Installed Android command-line tools
  - Installed platform-tools, build-tools, and Android 14 platform
  - Created "test-android" AVD (Pixel 6, Android 14, x86_64)
- Android emulator ready to start with: `emulator -avd test-android`

---
*Last updated: 2026-03-02*