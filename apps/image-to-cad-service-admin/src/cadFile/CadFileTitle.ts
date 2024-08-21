import { CadFile as TCadFile } from "../api/cadFile/CadFile";

export const CADFILE_TITLE_FIELD = "url";

export const CadFileTitle = (record: TCadFile): string => {
  return record.url?.toString() || String(record.id);
};
