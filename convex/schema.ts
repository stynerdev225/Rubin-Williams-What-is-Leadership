import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  letters: defineTable({
    title: v.string(),
    content: v.string(),
    author: v.string(),
    company: v.string(),
    tenure: v.string(),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
