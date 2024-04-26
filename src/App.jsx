import React from "react";
import { ImageSlider } from "./ImageSlider";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";

const IMAGES = [
  { url: img1, alt: "img One" },
  { url: img2, alt: "img Two" },
  { url: img3, alt: "img Three" },
  { url: img4, alt: "img Four" },
  { url: img5, alt: "img Five" },
  { url: img6, alt: "img Six" },
];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 4",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a>
    </div>
  );
}
