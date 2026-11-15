import { ImageResponse } from "next/og";

export const alt = "DevDen — Built for developers. By developers.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08080a",
          backgroundImage:
            "radial-gradient(circle at 68% 8%, rgba(255,90,30,0.28) 0%, rgba(255,90,30,0.06) 38%, rgba(8,8,10,0) 66%)",
          color: "#f4f1ea",
          padding: "70px 76px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 16,
              backgroundColor: "#ff5a1e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 24,
                height: 28,
                border: "5px solid #ffffff",
                borderBottom: "none",
                borderRadius: "14px 14px 0 0",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: "-0.035em",
            }}
          >
            DevDen
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 86,
              fontWeight: 600,
              letterSpacing: "-0.045em",
              lineHeight: 1.02,
            }}
          >
            Built for developers.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 86,
              fontWeight: 600,
              letterSpacing: "-0.045em",
              lineHeight: 1.02,
            }}
          >
            <span>By developers</span>
            <span style={{ color: "#ff5a1e" }}>.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(244,241,234,0.42)",
          }}
        >
          <span>Native iOS · Feed, communities, interviews, canvas, visualizers</span>
          <span>devden.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
