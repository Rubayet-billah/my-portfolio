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
  const activeFeature = features[activeImageIndex];
  const activeImageFeatures = activeFeature?.keyFeatures.split(".");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleImageChange = (newIndex) => {
    setActiveImageIndex(newIndex);
    setShouldAnimate(true);
  };

  useEffect(() => {
    if (shouldAnimate) {
      const timeout = setTimeout(() => {
        setShouldAnimate(false);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [shouldAnimate]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange((activeImageIndex + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeImageIndex]);

  return (
    <div>
      <h1 className="text-2xl md:text-5xl font-bold">Staff Deck</h1>
      <h3 className="md:text-xl">Complete HR management solution</h3>
      <section className="grid md:grid-cols-2 gap-12 mt-5 md:mt-8">
        <div className="carousel w-full">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`carousel-item relative w-full ${
                idx === activeImageIndex ? "block" : "hidden"
              }`}
            >
              <img src={feature.image} className="w-full" alt={`img-${idx}`} />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button
                  className="btn btn-circle"
                  onClick={() =>
                    handleImageChange(
                      (idx - 1 + features.length) % features.length
                    )
                  }
                >
                  ❮
                </button>
                <button
                  className="btn btn-circle"
                  onClick={() => handleImageChange((idx + 1) % features.length)}
                >
                  ❯
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-5">Key Features</h2>
          <ul>
            {activeImageFeatures?.map((feature, index) => (
              <li className={shouldAnimate ? "fade-left" : ""} key={index}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
