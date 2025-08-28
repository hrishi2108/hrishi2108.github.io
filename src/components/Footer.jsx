export default function Footer() {
  return (
    <footer style={{ 
      textAlign: "center", 
      padding: "1rem", 
      background: "#8B5E3C",   // beige
      color: "#333",
      marginTop: "2rem"
    }}>
      <p>© {new Date().getFullYear()} Hrishi Yadav. All rights reserved.</p>
    </footer>
  );
}
