import { useRef, useEffect } from "react";

const AppShowcase = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrame;
    let scrollAmount = 0;

    const scroll = () => {
      if (!container) return;

      scrollAmount += 0.4;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }

      container.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const cardStyle = {
    position: "relative",
    width: "540px",
    height: "520px",
    borderRadius: "1.5rem",
    overflow: "hidden",
    flexShrink: 0,
    cursor: "pointer",
    transition: "transform 0.4s ease",
  };

  const handleEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  const overlayStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "2rem",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3), transparent)",
    color: "white",
  };

  return (
    <div id="work" style={{ marginTop: "140px", marginBottom: "140px" }}>
      <div style={{ width: "90%", margin: "0 auto", overflow: "hidden" }}>
        <div
          ref={scrollRef}
          style={{ display: "flex", gap: "2.5rem", overflow: "hidden" }}
        >
          {[...Array(2)].map((_, i) => (
            <>
              {/* AYUSH */}
              <div
                key={"ayush" + i}
                style={cardStyle}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onClick={() => window.open("http://3.109.203.114", "_blank")}
              >
                <img
                  src="images/—Pngtree—international day of yoga greeting_6288713.png"
                  alt="AYUSH"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={overlayStyle}>
                  <h2>AYUSH Portal</h2>
                  <p>Government healthcare digitization platform.</p>
                </div>
              </div>

              {/* TreeSense */}
              <div
                key={"tree" + i}
                style={cardStyle}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onClick={() =>
                  window.open(
                    "https://github.com/SaumyaJoshi675/tree-counting-system",
                    "_blank"
                  )
                }
              >
                <img
                  src="/images/home.png"
                  alt="TreeSense"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={overlayStyle}>
                  <h2>TreeSense</h2>
                  <p>Green cover estimation using remote sensing.</p>
                </div>
              </div>

              {/* Hyperspectral */}
              <div
                key={"hyper" + i}
                style={cardStyle}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onClick={() =>
                  window.open(
                    "https://github.com/SaumyaJoshi675/hyperspectral-mineral-classification-3dcnn",
                    "_blank"
                  )
                }
              >
                <img
                  src="https://www.imechyperspectral.com/_next/image?url=https://drupal.imechyperspectral.com/sites/default/files/2025-11/IPERLITE%20imec%20hyperspectral.jpg&w=3840&q=75"
                  alt="Hyperspectral"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={overlayStyle}>
                  <h2>Hyperspectral Imaging</h2>
                  <p>Mineral detection using spectral data.</p>
                </div>
              </div>

              {/* SAR */}
              <div
                key={"sar" + i}
                style={cardStyle}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onClick={() =>
                  window.open(
                    "https://github.com/Kriti-Joshi1/sih",
                    "_blank"
                  )
                }
              >
                <img
                  src="https://i.ytimg.com/vi/YdkWwoQw5o8/maxresdefault.jpg"
                  alt="SAR"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={overlayStyle}>
                  <h2>SAR Colorization</h2>
                  <p>Deep learning for SAR enhancement.</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;