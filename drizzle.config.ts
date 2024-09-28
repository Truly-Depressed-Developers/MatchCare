import "./drizzle/envConfig";
import { defineConfig } from "drizzle-kit";

// @ts-expect-error - This is a valid config
export default defineConfig({
  schema: "./drizzle/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL,
  },
});
