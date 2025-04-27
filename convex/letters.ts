import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    author: v.string(),
    company: v.string(),
    tenure: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("letters", args);
  },
});

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("letters").order("desc").collect();
  },
});
