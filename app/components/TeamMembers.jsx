"use client";

import { useEffect, useState } from "react";
import { MotionDiv } from "./MotionDiv";
import TeamMemberSkeleton from "./TeamMemberSkeleton";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function TeamMembers({ csvData }) {
  const [members, setMembers] = useState([]);
  const [flippedCard, setFlippedCard] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    if (Array.isArray(csvData)) {
      const parsedMembers = csvData
        .slice(1)
        .filter((member) => member.length > 1)
        .map((member) => ({
          Name: member[1],
          Role: member[2],
          Year: member[3],
          Branch: member[4],
          CommitteeYear: member[5],
          ID: member[6],
          Image: `/assets/team/${member[5]}/${member[0]}.jpg`,
          Bio: member[10] || "",
          LinkedIn: member[8] || "",
          Instagram: member[7] || "",
        }));
      setMembers(parsedMembers);
    }
  }, [csvData]);

  const getAnimationDelay = (index) => {
    const row = Math.floor(index / 4);
    const col = index % 4;
    return row * 0.1 + col * 0.05;
  };

  if (!members.length) {
    return <TeamMemberSkeleton />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-4">
      {members.map((member, index) => (
        <MotionDiv
          key={`${member.Name}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            delay: getAnimationDelay(index),
            ease: [0.21, 1.11, 0.81, 0.99], // Smooth entrance
          }}
          className="group relative perspective-1000 h-full"
          onClick={() => setFlippedCard(flippedCard === index ? null : index)}>
          <div className={`relative transition-transform duration-500 transform-style-3d h-full ${flippedCard === index ? "rotate-y-180" : ""}`}>
            {/* Front of card */}
            <div className="relative bg-white rounded-xl shadow-sm backface-hidden h-full">
              <div className="aspect-square overflow-hidden rounded-t-xl">
                <img
                  src={imageErrors[member.Name] ? "/assets/team/user-default.png" : member.Image}
                  alt={member.Name}
                  className="w-full h-full object-cover"
                  onError={() => setImageErrors((prev) => ({ ...prev, [member.Name]: true }))}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-heading font-semibold mb-0.5 text-secondary-900">{member.Name}</h3>
                <p className="text-secondary-600 text-sm font-medium">{member.Role}</p>
              </div>
            </div>

            {/* Back of card */}
            <div className="absolute inset-0 bg-warm-100 rounded-xl shadow-sm p-6 rotate-y-180 backface-hidden">
              <div className="h-full flex flex-col items-center justify-center text-center">
                {member.LinkedIn || member.Instagram || member.Bio ? (
                  <>
                    <h4 className="text-sm font-heading font-semibold mb-6 text-secondary-900">{member.Bio}</h4>
                    <div className="flex gap-2">
                      {member.LinkedIn && (
                        <a
                          href={member.LinkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 text-primary-500 hover:text-primary-600">
                          <FaLinkedin className="text-2xl" />
                        </a>
                      )}
                      {member.Instagram && (
                        <a
                          href={`https://instagram.com/${member.Instagram}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 text-primary-500 hover:text-primary-600">
                          <FaInstagram className="text-2xl" />
                        </a>
                      )}
                    </div>
                  </>
                ) : (
                  <img src="/logo.png" alt="scc" className="col-span-full mb-8 rounded-xl" />
                )}
              </div>
            </div>
          </div>
        </MotionDiv>
      ))}
    </div>
  );
}
