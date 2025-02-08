import React from "react";

const SelectionOfCompany = () => {
  const CompanySelectionData = [
    {
      title: "CoreWeave",
      subtitle:
        "CoreWeave is a accelerated cloud provider delivering a massive scaled of GPUs",
      badges: ["Invested in 2023"],
      image:
        "https://plus.unsplash.com/premium_photo-1671410373766-e411f2d34552?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mistral AI",
      subtitle:
        "Mistal AI is the leading LLM company out of Europe founded by ex Deepmind engineers.",
      badges: ["Invested in 2023"],
      image:
        "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Gori AI",
      subtitle:
        "AI-enabled international shipping disaggregation and optimizing platform",
      badges: ["Invested in 2023"],
      image:
        "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Joby Aviation",
      subtitle:
        "Joby is a vertically integrated air mobility company, builiding electric vertical takeoff",
      badges: ["Invested in 2023", "IPO in 2021"],
      image:
        "https://plus.unsplash.com/premium_photo-1680308200363-c91f36edbdf9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="selection-company-section-container">
      <div className="selection-company-section-nested-container">
        {CompanySelectionData.map((item, index) => (
          <div key={index} className="selection-company-individual-container">
            <div className="selection-company-complete-container">
              <div className="selection-company-content-container">
                <h3>{item.title}</h3>
                <hr />
                <p>{item.subtitle}</p>
                <p>
                  {item.badges.map((badgeItem, index) => (
                    <> ⦿ {badgeItem}</>
                  ))}
                </p>

                <button>Read More</button>
              </div>
              <div className="selection-company-image-container">
                <img src={item.image} alt={item.title} draggable={false} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectionOfCompany;
