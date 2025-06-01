export default function About() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>About This App</h2>
      <p style={styles.description}>
        This is a demo React.. app featuring routing, lazy loading, list virtualization, and performance measurement.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "3rem auto",
    padding: "2rem",
    backgroundColor: "#f0f4f8",
    borderRadius: 8,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    textAlign: "center",
  },
  title: {
    marginBottom: 16,
    color: "#2a9d8f",
    fontSize: "2rem",
  },
  description: {
    fontSize: "1.1rem",
    lineHeight: 1.6,
  },
};
