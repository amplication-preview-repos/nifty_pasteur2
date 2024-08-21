import { ConversionJobCreateNestedManyWithoutImagesInput } from "./ConversionJobCreateNestedManyWithoutImagesInput";

export type ImageCreateInput = {
  conversionJobs?: ConversionJobCreateNestedManyWithoutImagesInput;
  format?: "Option1" | null;
  url?: string | null;
};
