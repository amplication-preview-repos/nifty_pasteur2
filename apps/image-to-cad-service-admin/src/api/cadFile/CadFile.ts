import { ConversionJob } from "../conversionJob/ConversionJob";

export type CadFile = {
  conversionJobs?: Array<ConversionJob>;
  createdAt: Date;
  format?: "Option1" | null;
  id: string;
  updatedAt: Date;
  url: string | null;
};
