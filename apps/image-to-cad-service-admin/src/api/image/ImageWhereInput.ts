import { ConversionJobListRelationFilter } from "../conversionJob/ConversionJobListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ImageWhereInput = {
  conversionJobs?: ConversionJobListRelationFilter;
  format?: "Option1";
  id?: StringFilter;
  url?: StringNullableFilter;
};
