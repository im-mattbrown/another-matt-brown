"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CaseStudies() {
  // Sample data for 4 case studies
  const caseStudies = [
    {
      id: 1,
      title: "Contexto - Mobile App",
      logo: "/images/logos/contexto.svg",
      description:
        "Leveraging advancements in modern LLMs to help foreign language learners.",
      video: "/videos/AMB-Contexto-Work.mp4",
      tags: ["UX Research", "Branding", "UI Design"],
      class: "bg-contexto",
      link: "/case-studies/contexto",
    },
    {
      id: 2,
      title: "Curated - Web App",
      logo: "/images/logos/curated.svg",
      description:
        "Human-powered music discovery through curated playlists and the stories behind the songs.",
      video: "/videos/AMB-Curated-Work.mp4",
      tags: ["UX Research", "Branding", "UI Design"],
      class: "bg-curated",
      link: "/case-studies/curated",
    },
    {
      id: 3,
      title: "RB Boards Website",
      logo: "/images/logos/curated.svg",
      description: "Data visualization and analytics platform",
      video: "/videos/AMB-Contexto-Work.mp4",
      tags: ["Dashboard", "Analytics", "SaaS"],
      class: "bg-rb",
      link: "/case-studies/rb-boards",
    },
    {
      id: 4,
      title: "Healthcare Portal",
      logo: "/images/logos/curated.svg",
      description: "Patient management and telemedicine solution",
      video: "/videos/AMB-Contexto-Work.mp4",
      tags: ["Healthcare", "Portal", "Telemedicine"],
      class: "bg-tidal",
      link: "/case-studies/tidals",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="case-studies-page py-16">
      <div className=" mx-auto">
        <div className="custom-slider-container max-w-6xl mx-auto">
          <Slider {...settings}>
            {caseStudies.map((study) => (
              <div key={study.id} className="px-3">
                <div className="bg-white rounded-lg slick-shadow overflow-hidden h-full">
                  <div className="aspect-video bg-gray-200 relative">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={study.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <img className="slider-logo" src={study.logo} alt="" />
                      <h3 className="text-xl font-semibold">{study.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`${study.class} px-3 py-1 text-white text-xs rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .slick-dots {
          bottom: -50px;
        }

        .slick-dots li button:before {
          font-size: 12px;
          color: #1a1a1a;
        }

        .slick-dots li.slick-active button:before {
          color: #3b82f6;
        }

        .slick-prev {
          left: -40px;
        }

        .slick-next {
          right: -40px;
        }

        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
}
