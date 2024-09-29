import { Project } from "@/components/Project/Project.types";

type Profile = {
  id: string;
  name: string;
  bio: string;
  areasOfImpact: string[];
  image: string;
  banner: string;
  location: string;
  adress: string;
  generalInfo: string;
  link: string;
  projects: Project[];
};

export const exampleProfile: Profile = {
  id: "1",
  name: "People",
  bio: "Empowering Communities | Driving Social Change | Building Sustainable Futures",
  areasOfImpact: [
    "Education",
    "Environmental Sustainability",
    "Social Inclusion",
  ],
  image: "image.jpg",
  banner: "banner.jpg",
  generalInfo:
    "At People, we are dedicated to creating long-lasting social impact by addressing pressing issues in marginalized communities. Our mission is to foster sustainable development through education, environmental conservation, and social inclusion programs.",
  location: "Krakow, Poland",
  adress: "ul. Karmelicka 27, 31-128 Kraków, Poland",
  link: "https://example.com",
  projects: [
    {
      name: "Green Cities Initiative",
      type: "Environmental",
      startDate: "Jun 2023",
      endDate: "Present",
      duration: "1 yrs 02 mos",
      description:
        "Collaborating with local governments and businesses, we spearheaded an urban greening project that transformed underutilized public spaces into community gardens in...",
    },
    {
      name: "Youth Entrepreneurship Hub",
      type: "Governance",
      startDate: "Jun 2023",
      endDate: "Present",
      duration: "1 yrs 02 mos",
      description:
        "Collaborating with local governments and businesses, we spearheaded an urban greening project that transformed underutilized public spaces into community gardens in...",
    },
  ],
};
