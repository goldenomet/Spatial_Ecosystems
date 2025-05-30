import React from "react";

const GallerySection: React.FC = () => {
  const images = [
    {
      src: "src/assets/Blog.jpeg",
      alt: "Safety training session"
    },
    {
      src: "src/assets/download.jpeg",
      alt: "HSE professionals in meeting"
    },
    {
      src: "src/assets/image1.png",
      alt: "Environmental assessment at industrial site"
    },
    {
      src: "src/assets/SPEC 2 logo.png",
      alt: "Consultants analyzing environmental data"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Training Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-700">Glimpses of our professional training sessions and workshops</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <img 
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-md object-cover w-full h-64 hover:opacity-90 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
