import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: initials on the site's navy. */
export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a2633", color: "#ffffff", fontSize: 34, fontWeight: 700, letterSpacing: -1, borderRadius: 14 }}>
        NS
      </div>
    ),
    size,
  );
}
