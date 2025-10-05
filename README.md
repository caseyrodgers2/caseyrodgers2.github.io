# portfolio-website

This is a portfolio website project that showcases the work and skills of the website owner. It includes sections for a portfolio and an "About Me" page.

## Project Structure

```
portfolio-website
├── public
│   └── index.html          # Main HTML file for the portfolio website
├── src
│   ├── components
│   │   ├── AboutMe.tsx     # Component displaying information about the website owner
│   │   ├── Portfolio
│   │   │   ├── PortfolioItem.tsx  # Component for rendering a single portfolio item
│   │   │   └── PortfolioList.tsx  # Component for rendering a list of portfolio items
│   ├── data
│   │   └── portfolioItems.ts      # Data file containing portfolio items
│   ├── App.tsx            # Main application component
│   └── index.tsx         # Entry point for the React application
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
└── README.md              # Project documentation
```

## Features

- **Portfolio Section**: Displays a list of projects with images, titles, descriptions, and tags for the technologies used.
- **About Me Section**: Provides a brief biography and highlights relevant skills.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Usage

- The website can be accessed at `http://localhost:3000` after starting the development server.
- Modify the `portfolioItems.ts` file to update the portfolio items displayed on the website.
- Customize the `AboutMe.tsx` component to update the biography and skills information.