import React, { useEffect, useState } from "react";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const features = [
    {
      image: "https://i.ibb.co/QXLbLFD/ressale-Categories.png",
      keyFeatures:
        "Employee information centralization and management.Leave and attendance tracking automation.Payroll processing and taxation management.Recruitment, applicant tracking, and onboarding tools.Performance appraisal and feedback systems.",
    },
    {
      image: "https://i.ibb.co/V29tTGb/resale-Addproduct.png",
      keyFeatures:
        "Training needs assessment and tracking.Employee self-service portal for information and requests.Customizable analytics and reporting features.Compliance documentation and management.Internal communication and collaboration tools.Employee surveys and sentiment analysis.",
    },
    {
      image: "https://i.ibb.co/VptcTrM/resale-Myproducts.png",
      keyFeatures:
        "Benefits administration and enrollment.Succession planning for talent development.Integration capabilities with other systems.Robust security features and access control.",
    },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImageFeatures =
    features[activeImageIndex]?.keyFeatures.split(".");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleImageChange = (newIndex) => {
    setActiveImageIndex(newIndex);
    setShouldAnimate(true);
  };

  useEffect(() => {
    if (shouldAnimate) {
      const timeout = setTimeout(() => {
        setShouldAnimate(false);
      }, 400); // Duration of the animation in milliseconds

      return () => clearTimeout(timeout);
    }
  }, [shouldAnimate]);
  return (
    <div>
      <h1 className="text-2xl md:text-5xl font-bold">Staff Deck</h1>
      <h3 className="md:text-xl">Complete HR management solution</h3>
      <section className="grid md:grid-cols-2 gap-12 mt-5 md:mt-8">
        <div className="carousel w-full">
          {features.map((ftr, idx) => (
            <div
              key={idx}
              id={`slide${idx}`}
              className={`carousel-item relative w-full ${
                idx === activeImageIndex ? "block" : "hidden"
              }`}
            >
              <img src={ftr.image} className="w-full" alt={`img-${idx}`} />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${
                    (idx - 1 + features.length) % features.length
                  }`}
                  className="btn btn-circle btn-outline"
                  onClick={() =>
                    handleImageChange(
                      (idx - 1 + features.length) % features.length
                    )
                  }
                >
                  ❮
                </a>
                <a
                  href={`#slide${(idx + 1) % features.length}`}
                  className="btn btn-circle btn-outline"
                  onClick={() => handleImageChange((idx + 1) % features.length)}
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-5">Key Features</h2>
          <div>
            {activeImageFeatures?.map(
              (feature, index) =>
                feature?.length > 0 && (
                  <li
                    className={` ${shouldAnimate ? "fade-left" : ""}`}
                    key={index}
                  >
                    {feature}
                  </li>
                )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
