import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome to the Home Page</h2>
      <p style={styles.subtitle}>Navigate to:</p>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link style={styles.link} to="/about">About</Link>
        </li>
        <li style={styles.navItem}>
          <Link style={styles.link} to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 500,
    margin: "3rem auto",
    padding: "2rem",
    backgroundColor: "#f5f7fa",
    borderRadius: 8,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    color: "#333",
    marginBottom: 12,
  },
  subtitle: {
    color: "#666",
    marginBottom: 20,
  },
  navList: {
    listStyleType: "none",
    paddingLeft: 0,
  },
  navItem: {
    marginBottom: 15,
  },
  link: {
    color: "#2a9d8f",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1.1rem",
    padding: "8px 16px",
    borderRadius: 4,
    border: "2px solid transparent",
    transition: "all 0.3s ease",
  },
  linkHover: {
    color: "#fff",
    backgroundColor: "#2a9d8f",
    borderColor: "#2a9d8f",
  }
};
