import { ConversionJobUpdateManyWithoutImagesInput } from "./ConversionJobUpdateManyWithoutImagesInput";

export type ImageUpdateInput = {
  conversionJobs?: ConversionJobUpdateManyWithoutImagesInput;
  format?: "Option1" | null;
  url?: string | null;
};
