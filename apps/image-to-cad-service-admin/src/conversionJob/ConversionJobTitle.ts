import { ConversionJob as TConversionJob } from "../api/conversionJob/ConversionJob";

export const CONVERSIONJOB_TITLE_FIELD = "id";

export const ConversionJobTitle = (record: TConversionJob): string => {
  return record.id?.toString() || String(record.id);
};
