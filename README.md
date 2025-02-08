# Keyche - The Ultimate Cache Browser


[](#)


[](#)

**Keyche** is a powerful and intuitive cache browser designed to simplify managing and exploring your KeyDB and Redis caches. With an easy-to-use interface and advanced features, Keyche ensures developers and database administrators can efficiently debug, analyze, and manage their caching layers.

----------

## 🎯 Features

-   **Real-time Cache Browsing**  
    Navigate and explore your KeyDB and Redis keys in real-time.
-   **Search and Filter**  
    Quickly find keys using advanced search filters and regular expressions.
-   **Key Insights**  
    View metadata, TTL (time-to-live), and value details for each key.
-   **Data Editing**  
    Edit, delete, or add new keys seamlessly.
-   **Multi-Connection Support**  
    Manage multiple cache instances from a single interface.
-   **Secure Access**  
    Supports SSL/TLS and authentication for secure connections.

----------

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

-   **KeyDB** or **Redis**
-   **Node.js** (version 16+ recommended)
-   **npm** or **yarn**

### Installation

Clone the repository:

bash

CopyEdit

`git clone https://github.com/Keyche/keyche.git  
cd keyche`

Install dependencies:

bash

CopyEdit

`npm install`

Run the app:

bash

CopyEdit

`npm start`

Visit `http://localhost:5173` in your browser to start using Keyche!

----------

## 🛠️ Configuration

Keyche requires minimal configuration:

1.  **Environment Variables**  
    Create a `.env` file in the project root and add your cache server details:

    env

    CopyEdit

    `CACHE_HOST=127.0.0.1  
    CACHE_PORT=6379  
    CACHE_PASSWORD=yourpassword`

2.  **Connecting to Multiple Instances**  
    Edit the `config.json` file to define multiple cache servers.


----------

## 📦 Key Formats Supported

-   Strings
-   Hashes
-   Lists
-   Sets
-   Sorted Sets
-   Streams

----------

## 🤝 Contributing

We welcome contributions from the community! To contribute:

1.  Fork the repository
2.  Create a feature branch:

    bash

    CopyEdit

    `git checkout -b feature/new-feature`

3.  Commit your changes:

    bash

    CopyEdit

    `git commit -m "Add new feature"`

4.  Push to your branch and submit a pull request

----------

## 💡 Why Use Keyche?

Keyche bridges the gap between powerful caching systems like KeyDB and Redis and developers who need intuitive tools to interact with these systems. Whether you're debugging or optimizing performance, Keyche saves time and enhances productivity.

----------

## 🔗 Useful Links

-   KeyDB Official Documentation
-   Redis Official Documentation
-   [Keyche Issues](https://github.com/your-username/keyche/issues)

----------

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

----------

## ⭐ Show Your Support

If you find Keyche helpful, give us a star ⭐ on GitHub!

----------

### Keywords for SEO:

KeyDB Browser, Redis Browser, Cache Management Tool, KeyDB Explorer, Redis Explorer, Keyche Cache Browser, KeyDB Debugging, Cache Debugging Tool, Key Insights, Cache Optimization.
