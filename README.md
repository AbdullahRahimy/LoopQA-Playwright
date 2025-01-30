# LoopQA: Playwright Test Suite

## Project Overview
LoopQA is a Playwright-driven test suite designed to automate the testing of a demo web application. The suite utilizes data-driven techniques to minimize code duplication and improve scalability by driving test scenarios from a JSON object. This approach ensures a clean and maintainable structure as new test cases are added.

## Project Setup
### Prerequisites
- Node.js (version 14 or higher)
- Playwright (installed via npm)

### Installation
1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd LoopQA-Playwright
    ```

2. **Initialize the project**:
    ```bash
    npm init -y
    ```

3. **Install Playwright and its dependencies**:
    ```bash
    npm install @playwright/test
    npx playwright install
    ```

## Running the Tests
### How to Execute Tests
1. **Navigate to the project directory**:
    ```bash
    cd LoopQA
    ```

2. **Run the data-driven tests**:
    ```bash
    npx playwright test tests/dataDrivenTests.test.js
    ```

## Project Structure
- `tests/`: Contains all the test files.
  - `login.test.js`: Script for login automation.
  - `dataDrivenTests.test.js`: Script for data-driven test scenarios.
- `testData.json`: JSON file containing the test data.

## Test Scenarios
### Login Automation
- **Demo App**: https://animated-gingersnap-8cf7f2.netlify.app/
- **Credentials**:
  - Email: `admin`
  - Password: `password123`

### Test Cases
1. **Test Case 1**: Verify task "Implement user authentication" in "To Do" column with tags "Feature" and "High Priority" in "Web Application."
2. **Test Case 2**: Verify task "Fix navigation bug" in "To Do" column with tag "Bug" in "Web Application."
3. **Test Case 3**: Verify task "Design system updates" in "In Progress" column with tag "Design" in "Web Application."
4. **Test Case 4**: Verify task "Push notification system" in "To Do" column with tag "Feature" in "Mobile Application."
5. **Test Case 5**: Verify task "Offline mode" in "In Progress" column with tags "Feature" and "High Priority" in "Mobile Application."
6. **Test Case 6**: Verify task "App icon design" in "Done" column with tag "Design" in "Mobile Application."

## Dependencies
- Node.js
- Playwright
