import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Pascal Stehling | Data Architect";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #F3E8FF 75%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: "bold",
              color: "#171717",
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}
          >
            Pascal Stehling
          </div>
          <div
            style={{
              fontSize: 40,
              color: "#525252",
              letterSpacing: "-0.025em",
            }}
          >
            Data Architect & Data Engineer
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
