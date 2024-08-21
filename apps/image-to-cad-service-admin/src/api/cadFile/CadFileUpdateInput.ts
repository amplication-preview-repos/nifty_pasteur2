import { ConversionJobUpdateManyWithoutCadFilesInput } from "./ConversionJobUpdateManyWithoutCadFilesInput";

export type CadFileUpdateInput = {
  conversionJobs?: ConversionJobUpdateManyWithoutCadFilesInput;
  format?: "Option1" | null;
  url?: string | null;
};
