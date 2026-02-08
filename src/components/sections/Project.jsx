import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { projects } from "../../data/mock";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { cn } from "@/lib/utils";
import Segmented from "../ui/segmented";

const Project = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("id");
  const sectionRef = useRef(null);
  const [selected, setselected] = useState("user");
  const { title, description, details, adminDetails } = projects.find(
    (p) => p.id === parseInt(projectId),
  );
  const itemsList = selected === "user" ? details : adminDetails;
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [itemsList]);

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="mono text-cyan-400 text-sm mb-4 tracking-wider">
            Project
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">{title}</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">{description}</p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <Segmented
          options={[
            { label: "User", value: "user" },
            { label: "Admin", value: "admin" },
          ]}
          value={selected}
          onChange={setselected}
        />
      </div>
      <section ref={sectionRef} className=" px-6">
        {itemsList?.map(({ images, title, description }, index) => (
          <div className="reveal opacity-0 delay-100 mb-8 group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-50" />
            <div className="relative p-8 lg:p-10">
              <div
                className={cn(
                  "flex flex-col lg:flex-row gap-8",
                  index % 2 === 1 && "lg:flex-row-reverse",
                )}
              >
                <div className="lg:w-1/2">
                  <Carousel>
                    <CarouselContent>
                      {images.map((img, index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-700/50 bg-gray-900/50">
                            <img
                              src={img}
                              className="w-full h-full object-fit"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious
                      className="left-2 bg-white text-black hover:opacity-100"
                      variant="primary"
                    />
                    <CarouselNext
                      className="right-2 bg-white text-black hover:opacity-100"
                      variant="primary"
                    />
                  </Carousel>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-top">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Project;
