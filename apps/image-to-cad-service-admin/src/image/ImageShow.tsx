import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CADFILE_TITLE_FIELD } from "../cadFile/CadFileTitle";
import { IMAGE_TITLE_FIELD } from "./ImageTitle";

export const ImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="format" source="format" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <ReferenceManyField
          reference="ConversionJob"
          target="imageId"
          label="ConversionJobs"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="cadFile"
              source="cadfile.id"
              reference="CadFile"
            >
              <TextField source={CADFILE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="image" source="image.id" reference="Image">
              <TextField source={IMAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
