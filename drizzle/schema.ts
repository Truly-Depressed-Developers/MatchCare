import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const NGOsTable = pgTable(
  "ngos",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    bio: text("bio").notNull(),
    image: text("image").notNull(),
    banner: text("banner").notNull(),
    areasOfImpact: text("areasOfImpact").notNull().array(),
    location: text("location").notNull(),
    address: text("address").notNull(),
    generalInfo: text("generalInfo").notNull(),
    link: text("link").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (ngos) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(ngos.name),
    };
  },
);

export const ProjectsTable = pgTable(
  "projects",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    type: text("type").notNull(),
    startDate: timestamp("startDate").notNull(),
    endDate: timestamp("endDate").notNull(),
    description: text("description").notNull(),
    ngoID: integer("ngoID")
      .notNull()
      .references(() => NGOsTable.id),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (projects) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(projects.name),
    };
  },
);
