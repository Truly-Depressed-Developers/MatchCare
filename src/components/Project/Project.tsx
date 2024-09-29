import { cn } from "@/lib/utils";
import { Type } from "./Project.types";
import { Project as ProjectType } from "@prisma/client";

const Project = (project: ProjectType) => {
  const countDuration = (startDate: Date, endDate?: Date): string => {
    if (!endDate)
      return `${new Date().getFullYear() - startDate.getFullYear()} yrs`;

    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    return `${years} yrs ${months} mos`;
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString();
  };

  return (
    <div className="grid grid-cols-10">
      <Icon type={project.type} />
      <div className="col-span-9">
        <h1 className="text-sm">{project.name}</h1>
        <div className="flex space-x-4 text-[10px] leading-4">
          <p>
            {formatDate(project.startDate)} —{" "}
            {formatDate(project.endDate) || "Present"}
          </p>
          <p className="text-blue-600">
            {countDuration(project.startDate, project.endDate)}
          </p>
        </div>
        <p className="text-[10px] leading-4">{project.description}</p>
      </div>
    </div>
  );
};

export default Project;

const colorMapper = {
  Environmental: "bg-green-500",
  Social: "bg-yellow-500",
  Governance: "bg-blue-500",
  Other: "bg-gray-500",
};

const Icon = ({ type }: { type: string }) => {
  const color = colorMapper[type as Type];

  return (
    <div
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-full text-2xl text-white",
        color,
      )}
    >
      {type[0].toUpperCase()}
    </div>
  );
};
