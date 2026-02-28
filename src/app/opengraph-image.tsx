import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "CBas | Solana Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const imageData = await readFile(
    join(process.cwd(), "public", "madlad-og.png")
  );
  const imageSrc = `data:image/png;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0f",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(153, 69, 255, 0.08)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-50px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(0, 255, 200, 0.06)",
            filter: "blur(80px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "60px",
          }}
        >
          {/* MadLad avatar */}
          <div
            style={{
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(0, 255, 200, 0.3)",
              boxShadow: "0 0 40px rgba(0, 255, 200, 0.15)",
              flexShrink: 0,
              display: "flex",
            }}
          >
            <img
              src={imageSrc}
              width={240}
              height={240}
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontSize: "72px",
                fontWeight: 900,
                background: "linear-gradient(to right, #00ffc8, #9945ff)",
                backgroundClip: "text",
                color: "transparent",
                lineHeight: 1.1,
              }}
            >
              CBas
            </div>
            <div
              style={{
                fontSize: "28px",
                color: "#6b6b80",
                fontFamily: "monospace",
              }}
            >
              Building on Solana_
            </div>
            <div
              style={{
                fontSize: "20px",
                color: "#6b6b80",
                maxWidth: "500px",
                lineHeight: 1.5,
                marginTop: "8px",
              }}
            >
              Available for freelance projects
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
