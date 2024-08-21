import { CadFileWhereUniqueInput } from "../cadFile/CadFileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type ConversionJobWhereInput = {
  cadFile?: CadFileWhereUniqueInput;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  status?: "Option1";
};
