import { TangPoetry as TTangPoetry } from "../api/tangPoetry/TangPoetry";

export const TANGPOETRY_TITLE_FIELD = "title";

export const TangPoetryTitle = (record: TTangPoetry): string => {
  return record.title || String(record.id);
};
