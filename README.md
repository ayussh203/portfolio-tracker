# Portfolio Tracker

A simple, responsive web application to manage and track your stock portfolio in real time. Built with a Spring Boot (Java) backend and a Next.js frontend.

---

##  Features

- **User Authentication**  
  Sign up / log in via Google OAuth.

- **Portfolio Management**  
  - Add, edit, and delete stock holdings  
  - View a list/table of your current holdings

- **Real-Time Pricing**  
  - Integrates with a free stock price API (e.g., Alpha Vantage)  
  - Dynamically calculates total portfolio value (quantity = 1 per stock)  

- **Dashboard & Metrics**  
  - Total portfolio value  
  - Top-performing stock  
  - Allocation distribution chart  

- **Responsive Design**  
  Works on desktop, tablet, and mobile.

---

## 📦 Tech Stack

- **Frontend**:  
  - Next.js  
  - React Hooks & Context  
  - Tailwind CSS  

- **Backend**:  
  - Java 17 & Spring Boot  
  - Spring Security (Google OAuth)  
  - Spring Data JPA & Hibernate  
  - MySQL  

- **DevOps & Deployment**:  
  - Backend deployed to Heroku / AWS / Render  
  - Frontend deployed to Vercel / Netlify  
  - CI/CD via GitHub Actions  

- **APIs & Libraries**:  
  - Alpha Vantage / Yahoo Finance / Finnhub API  
  - Lombok, MapStruct  
  - Swagger/OpenAPI  

---

## 📁 Repository Structure

```text
├── backend/                    # Spring Boot application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/           # Controllers, Services, Repositories, Entities
│   │   │   └── resources/      # application.yml, static files
│   └── pom.xml
├── frontend/                   # Next.js application
│   ├── components/             # React components
│   ├── pages/                  # Next.js pages (/, /waitlist, /profile)
│   └── package.json
└── README.md
