export type Project = {
  name: string;
  type: Type;
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
};

export type Type = "Environmental" | "Social" | "Governance" | "Other";
