
# CTypeHub Test Suite README

### Introduction
This document provides guidelines for setting up and running the automated test suite for CTypeHub, utilizing Playwright for end-to-end testing and TypeScript for scripting. CTypeHub facilitates the management of digital credentials on the blockchain.

## Technical Requirements

### Development Environment
- **Node.js:** Version 14.x or higher.
- **Package Manager:** npm is used to manage project dependencies.

### Testing Framework
- **TypeScript:** All tests are written in TypeScript 4.x, leveraging its type-safe capabilities to enhance test reliability.

## Setup Instructions
1. **Node.js Installation:** Ensure Node.js (14.x or higher) is installed. Download from Node.js official website.
2. **Clone the Repository:**
```bash
git clone https://github.com/enozen/CTypeHub.git
```
3. **Install Dependencies:** Navigate to the cloned directory and install dependencies:
```Copy code
npm install
```
4. **Playwright Setup:** Follow the Playwright setup instructions to ensure browsers are correctly installed for testing:
```Copy code
npx playwright install
```

## Running Tests

- Execute the entire test suite with:
```bash
npx playwright test
```
- To run a specific test file:
```bash
npx playwright test path/to/test/file.spec.ts
```











