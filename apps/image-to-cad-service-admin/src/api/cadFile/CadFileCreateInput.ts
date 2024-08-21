import { ConversionJobCreateNestedManyWithoutCadFilesInput } from "./ConversionJobCreateNestedManyWithoutCadFilesInput";

export type CadFileCreateInput = {
  conversionJobs?: ConversionJobCreateNestedManyWithoutCadFilesInput;
  format?: "Option1" | null;
  url?: string | null;
};
