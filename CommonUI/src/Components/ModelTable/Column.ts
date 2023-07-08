import BaseModel from 'Common/Models/BaseModel';
import { JSONObject } from 'Common/Types/JSON';
import ObjectID from 'Common/Types/ObjectID';
import { ReactElement } from 'react';
import AlignItem from '../../Types/AlignItem';
import SelectEntityField from '../../Types/SelectEntityField';
import Query from '../../Utils/ModelAPI/Query';

import IconProp from 'Common/Types/Icon/IconProp';
import FieldType from '../Types/FieldType';
import { DropdownOption } from '../Dropdown/Dropdown';

export interface ActionButton {
    buttonText: string;
    icon: IconProp;
    onClick: (id: ObjectID) => void;
}

export default interface Columns<TEntity> {
    field?: SelectEntityField<TEntity>;
    selectedProperty?: string;
    title: string;
    contentClassName?: string | undefined;
    colSpan?: number | undefined;
    disableSort?: boolean;
    type: FieldType;
    isFilterable: boolean;
    filterEntityType?: { new (): BaseModel } | undefined;
    filterQuery?: Query<BaseModel> | undefined;
    tooltipText?: ((item: TEntity) => string) | undefined;
    filterDropdownField?:
        | {
              label: string;
              value: string;
          }
        | undefined;
    filterDropdownOptions?: Array<DropdownOption> | undefined;
    actionButtons?: Array<ActionButton>;
    alignItem?: AlignItem | undefined;
    noValueMessage?: string | undefined;
    getElement?:
        | ((
              item: JSONObject,
              onBeforeFetchData?: JSONObject | undefined
          ) => ReactElement)
        | undefined;
}
