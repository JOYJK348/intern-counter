import { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage:
        "linear-gradient(rgba(55, 83, 150, 0.8), rgba(15,23,42,0.8)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#ffffff",
      fontFamily: "Segoe UI, sans-serif",
    },

    card: {
      background: "rgba(255,255,255,0.08)",
      padding: "40px 50px",
      borderRadius: "20px",
      backdropFilter: "blur(12px)",
      boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
      textAlign: "center",
    },

    title: {
      fontSize: "28px",
      marginBottom: "20px",
      letterSpacing: "1px",
    },

    count: {
      fontSize: "72px",
      fontWeight: "700",
      marginBottom: "30px",
      transition: "transform 0.3s ease",
    },

    btnGroup: {
      display: "flex",
      gap: "18px",
      justifyContent: "center",
    },

    button: {
      position: "relative",
      padding: "14px 28px",
      fontSize: "15px",
      fontWeight: "600",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      overflow: "hidden",
      transition: "all 0.3s ease",
    },

    incBtn: {
      background: "linear-gradient(135deg, #22c55e, #4ade80)",
      color: "#062e14",
    },

    decBtn: {
      background: "linear-gradient(135deg, #ef4444, #f87171)",
      color: "#fff",
    },

    resetBtn: {
      background: "linear-gradient(135deg, #38bdf8, #7dd3fc)",
      color: "#002b3d",
    },
  };

  const handleHover = (e, scale = 1.1) => {
    e.currentTarget.style.transform = `scale(${scale})`;
    e.currentTarget.style.boxShadow =
      "0 0 25px rgba(46, 203, 231, 0.96)";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Count the Number</h2>

        <div
          style={styles.count}
          key={count} // zoom animation on change
        >
          {count}
        </div>

        <div style={styles.btnGroup}>
          <button
            style={{ ...styles.button, ...styles.incBtn }}
            onClick={() => setCount(count + 1)}
            onMouseEnter={(e) => handleHover(e)}
            onMouseLeave={handleLeave}
          >
            Increment
          </button>
                                                                                                                                            
          <button
            style={{ ...styles.button, ...styles.decBtn }}
            onClick={() => setCount(count - 1)}
            onMouseEnter={(e) => handleHover(e)}
            onMouseLeave={handleLeave}
          >
            Decrement
          </button>

          <button
            style={{ ...styles.button, ...styles.resetBtn }}
            onClick={() => setCount(0)}
            onMouseEnter={(e) => handleHover(e)}
            onMouseLeave={handleLeave}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
