import React from "react";
import Header from "../components/Header";
import HeaderImage from "../images/header_bg_3.jpg";
import "./gellary.css";

const Gellary = () => {
  const galleryLenght = 15;
  const images = [];

  for(let i = 1; i <= galleryLenght; i++){
    images.push(require(`../images/gallery${i}.jpg`))
  }
  // console.log(images);
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((img , index) => {
              return (
                <article key={index}>
                  <img src={img} alt={`Gallery${index + 1}`}/>
                </article>
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default Gellary;
