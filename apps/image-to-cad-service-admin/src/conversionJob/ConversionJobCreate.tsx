import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CadFileTitle } from "../cadFile/CadFileTitle";
import { ImageTitle } from "../image/ImageTitle";

export const ConversionJobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="cadFile.id" reference="CadFile" label="cadFile">
          <SelectInput optionText={CadFileTitle} />
        </ReferenceInput>
        <ReferenceInput source="image.id" reference="Image" label="image">
          <SelectInput optionText={ImageTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
