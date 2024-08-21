import { CadFileWhereInput } from "./CadFileWhereInput";
import { CadFileOrderByInput } from "./CadFileOrderByInput";

export type CadFileFindManyArgs = {
  where?: CadFileWhereInput;
  orderBy?: Array<CadFileOrderByInput>;
  skip?: number;
  take?: number;
};
