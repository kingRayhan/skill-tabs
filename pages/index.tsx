import React, { useState } from "react";

interface SkillType {
  name: string;
  percent: number;
}
interface SkillListType {
  [key: string]: SkillType[];
}

export const skills: SkillListType = {
  Web: [
    { name: "React", percent: 90 },
    { name: "Gatsby", percent: 90 },
    { name: "Next.JS", percent: 75 },
    { name: "Node JS", percent: 80 },
    { name: "Express JS", percent: 90 },
    { name: "MongoDB", percent: 90 },
    { name: "MySQL", percent: 85 },
  ],
  Others: [
    { name: "React Native", percent: 85 },
    { name: "Electron JS", percent: 90 },
    { name: "Johnny Five", percent: 75 },
    { name: "Svelte", percent: 70 },
    { name: "Redux", percent: 80 },
    { name: "GraphQL", percent: 80 },
    { name: "Jest", percent: 65 },
    { name: "Mocha", percent: 65 },
    { name: "Cypress", percent: 65 },
    { name: "SVG", percent: 80 },
  ],
  Programming: [
    { name: "JavaScript", percent: 90 },
    { name: "C", percent: 90 },
    { name: "C++", percent: 75 },
    { name: "Python", percent: 50 },
    { name: "Java", percent: 50 },
  ],
  Tools: [
    { name: "Git", percent: 90 },
    { name: "Photoshop", percent: 75 },
    { name: "Illustrator", percent: 70 },
    { name: "Travis CI", percent: 85 },
    { name: "Circle CI", percent: 80 },
    { name: "AppVeyor", percent: 75 },
    { name: "Docker", percent: 60 },
    { name: "Kubernetes", percent: 30 },
  ],
};

interface SkillProps {
  name: string;
  percentage: number;
}
const Skill: React.FC<SkillProps> = ({ name, percentage }) => {
  return (
    <div>
      <div className="flex items-center justify-between w-full px-4 py-2 bg-slate-200">
        <h1 className="text-xl font-semibold">{name}</h1>
        <span className="p-2 bg-teal-400 rounded-md">{percentage}%</span>
      </div>
      <div
        style={{ width: percentage + "%" }}
        className="h-2 bg-teal-400"
      ></div>
    </div>
  );
};

const HomePage = () => {
  const [selectedSkillTopic, setSelectedSkillTopic] = useState<string>("Web");

  return (
    <div className="max-w-2xl mx-auto ">
      <h1>Hello</h1>
      <div className="flex gap-3 ">
        {Object.keys(skills).map((skillTopic) => (
          <button
            className={`px-4 py-2 border border-slate-600 ${
              skillTopic === selectedSkillTopic
                ? "bg-teal-600 text-white"
                : "bg-slate-200 text-slate-600"
            }`}
            onClick={() => setSelectedSkillTopic(skillTopic)}
          >
            {skillTopic}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-10 my-3">
        {skills[selectedSkillTopic].map((skill) => (
          <Skill name={skill.name} percentage={skill.percent} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
