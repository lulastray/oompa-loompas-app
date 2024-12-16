# Oompa Loompa Directory


## Description
This project is a directory of Oompa Loompas, allowing users to search, filter, and explore information about Willy Wonka's workers. Features include:

- **Paginated Loading**: Retrieves Oompa Loompas page by page to optimize performance.
- **Search and Filter**: Find Oompa Loompas by first name, last name, or profession.
- **Navigation**: View detailed information about each Oompa Loompa by clicking on them.

This project uses **React**, **Redux Toolkit**, and **TypeScript** to ensure clean, scalable, and efficient code.

---

## Technologies Used

- **React**: Library for building user interfaces.
- **Redux Toolkit**: For global state management.
- **TypeScript**: Static typing to enhance code robustness.
- **Material-UI**: Modern and customizable UI components.

---

## Key Features

### 1. Infinite Pagination
Infinite scrolling loads data in small batches to optimize user experience.

### 2. Search and Filter
You can search Oompa Loompas by:
- First Name
- Last Name
- Professions

### 3. Individual Details
Click on any Oompa Loompa to view detailed information such as:
- Full Name
- Professions
- Description

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lulastray/oompa-loompas-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd oompa-loompa-directory
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

1. Scroll down to load more Oompa Loompas.
2. Use the search field to find an Oompa Loompa by name, last name, or profession.
3. Click on an Oompa Loompa to view individual details.

---

## Project Structure

```
.
├── public/          # Static files
├── src/
│   ├── components/  # Reusable components
│   ├── hooks/       # Custom hooks
│   ├── services/    # API calls
│   ├── store/       # Redux setup
│   ├── types/       # TypeScript definitions
│   └── utils/       # Shared utilities
└── README.md        # Project documentation
```

---


