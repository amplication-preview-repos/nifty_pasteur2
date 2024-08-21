import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ConversionJobTitle } from "../conversionJob/ConversionJobTitle";

export const CadFileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="conversionJobs"
          reference="ConversionJob"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConversionJobTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="format"
          label="format"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
