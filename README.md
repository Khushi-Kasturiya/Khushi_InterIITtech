
# Warehouse Management Portal

This application manages locations and items, allowing users to navigate through a hierarchical structure of locations and view the details of items stored within. It features a React frontend and an Express backend.

## Features

- **Location Tree View**: Navigate through hierarchical locations.
- **Item Management**: View details of items stored at each location.

## Tech Stack

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, CSS

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB

### Backend Setup

1. **Clone Repository**:
   ```bash
   git clone https://github.com/Khushi-Kasturiya/Khushi_InterIITtech.git
   cd Khushi_InterIITtech/backend
   ```

2. **Install & Configure**:
   ```bash
   npm install
   ```

3. **Create .env**:
   ```makefile
   PORT=5000
   MONGODB_URI=<your-mongodb-connection-string>
   ```

4. **Run Server**:
   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate & Install**:
    ```bash
    cd ../frontend
    npm install
    ```

2. **Configure API URL in src/services/api.js**

3. **Run Frontend**:
    ```bash
    npm start
    ```
## Backend Routes

| Method | Endpoint     | Description                |
|--------|--------------|----------------------------|
| GET    | `/`          | Glossary of available routes |
| GET    | `/locations` | Fetch all locations      |
| GET    | `/items`     | Returns a list of all items.|
| GET    | `/by-godown/:godown_id:`| Returns details of items in the specified godown |
