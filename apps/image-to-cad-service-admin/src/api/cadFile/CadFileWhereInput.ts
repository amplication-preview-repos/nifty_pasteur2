import { ConversionJobListRelationFilter } from "../conversionJob/ConversionJobListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CadFileWhereInput = {
  conversionJobs?: ConversionJobListRelationFilter;
  format?: "Option1";
  id?: StringFilter;
  url?: StringNullableFilter;
};
