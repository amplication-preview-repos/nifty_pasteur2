import { ConversionJobWhereInput } from "./ConversionJobWhereInput";
import { ConversionJobOrderByInput } from "./ConversionJobOrderByInput";

export type ConversionJobFindManyArgs = {
  where?: ConversionJobWhereInput;
  orderBy?: Array<ConversionJobOrderByInput>;
  skip?: number;
  take?: number;
};
