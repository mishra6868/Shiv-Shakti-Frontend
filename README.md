

---

# Shiv Shakti Fabrics Website

A full‑stack web application for showcasing fabrics, handling customer requests, and managing specifications.  
Built with React.js (frontend), Ant Design (UI forms), Node.js/Express (backend), and MongoDB Atlas (cloud database).  
Deployed on Netlify (frontend) and Render (backend).

Live Demo: [https://shivshaktifabrics.netlify.app](https://shivshaktifabrics.netlify.app)

---

## Features

- Fabric Catalog: Browse fabrics like Polyester, Cotton, etc. Each fabric has subtype buttons fetched via GET requests.  
- Specifications Box: Clicking a subtype dynamically loads specifications from the backend.  
- Authentication: Secure login & signup forms using Ant Design, with POST requests to backend.  
- Request Quote: Customers can submit quote requests via a form (POST request).  
- Cloud Database: All user and fabric data stored in MongoDB Atlas.  
- Responsive UI: Built with Ant Design for a clean, professional look.  

---

## Getting Started (For Developers)

This project was bootstrapped with Create React App.

### Prerequisites
- Node.js (>= 14.x)  
- npm or yarn  
- MongoDB Atlas account (for backend setup)  

### Installation

```
git clone https://github.com/mishra6868/Shiv-Shakti-Frontend.git
cd Shiv-Shakti-Frontend
npm install
```

### Running Locally

```
npm start
```

Frontend runs at http://localhost:3000  

Backend runs separately (deployed on Render). If running locally, navigate to backend repo:  
[https://github.com/mishra6868/Shiv-Shakti-Backend](https://github.com/mishra6868/Shiv-Shakti-Backend)  
and start server with:

```
npm run dev
```

---

## Tech Stack

Frontend: React.js, Ant Design  
Backend: Node.js + Express, REST API (GET/POST)  
Database: MongoDB Atlas  
Deployment: Netlify (frontend), Render (backend)  

---

## Project Structure

```
shiv-shakti-frontend/
│── public/            # Static assets
│── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── services/      # API calls (axios/fetch)
│   └── App.js         # Main app entry
│── package.json
```

---

## For Users

- Visit the live site: [https://shivshaktifabrics.netlify.app](https://shivshaktifabrics.netlify.app)  
- Sign up or log in to access features.  
- Browse fabrics and request quotes easily.  

---

## Contributing

Contributions are welcome!  
1. Fork the repo  
2. Create a new branch (feature/your-feature)  
3. Commit changes  
4. Push and open a Pull Request  

---

## Contact

Organization: Shiv Shakti Fabrics  
Email: hm48031032@gmail.com  
Phone: +91-6280759713  

---

