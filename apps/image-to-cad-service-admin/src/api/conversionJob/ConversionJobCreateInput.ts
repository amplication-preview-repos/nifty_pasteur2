import { CadFileWhereUniqueInput } from "../cadFile/CadFileWhereUniqueInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type ConversionJobCreateInput = {
  cadFile?: CadFileWhereUniqueInput | null;
  image?: ImageWhereUniqueInput | null;
  status?: "Option1" | null;
};
