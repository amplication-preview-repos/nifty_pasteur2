import { CadFile } from "../cadFile/CadFile";
import { Image } from "../image/Image";

export type ConversionJob = {
  cadFile?: CadFile | null;
  createdAt: Date;
  id: string;
  image?: Image | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
