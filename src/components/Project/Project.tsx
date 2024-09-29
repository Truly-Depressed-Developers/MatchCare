import { cn } from "@/lib/utils";
import { Type, type Project as ProjectType } from "./Project.types";

const Project = (project: ProjectType) => {
  return (
    <div className="grid grid-cols-10">
      <Icon type={project.type} />
      <div className="col-span-9">
        <h1 className="text-sm">{project.name}</h1>
        <div className="flex space-x-4 text-[10px] leading-4">
          <p>
            {project.startDate} — {project.endDate}
          </p>
          <p>{project.duration}</p>
        </div>
        <p className="text-[10px] leading-4">{project.description}</p>
      </div>
    </div>
  );
};

export default Project;

const Icon = ({ type }: { type: Type }) => {
  const colorMapper = {
    Environmental: "bg-green-500",
    Social: "bg-yellow-500",
    Governance: "bg-blue-500",
    Other: "bg-gray-500",
  };

  return (
    <div
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-full text-2xl text-white",
        colorMapper[type],
      )}
    >
      {type[0].toUpperCase()}
    </div>
  );
};
