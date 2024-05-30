import React from 'react';
import BaseIcon from '../BaseIcon';
import { mdiEye, mdiTrashCan, mdiPencilOutline } from '@mdi/js';
import axios from 'axios';
import {
  GridActionsCellItem,
  GridRowParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import ImageField from '../ImageField';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import DataGridMultiSelect from '../DataGridMultiSelect';

import { hasPermission } from '../../helpers/userPermissions';

type Params = (id: string) => void;

export const loadColumns = async (
  onDelete: Params,
  onView: Params,
  onEdit: Params,
  entityName: string,

  user,
) => {
  async function callOptionsApi(entityName: string) {
    if (!hasPermission(user, 'READ_' + entityName.toUpperCase())) return [];

    try {
      const data = await axios(`/${entityName}/autocomplete?limit=100`);
      return data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  const hasUpdatePermission = hasPermission(user, 'UPDATE_JOBS');

  return [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: hasUpdatePermission,
    },

    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: hasUpdatePermission,
    },

    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: hasUpdatePermission,
    },

    {
      field: 'type',
      headerName: 'Type',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: hasUpdatePermission,
    },

    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: hasUpdatePermission,
    },

    {
      field: 'assigned_to',
      headerName: 'Assigned To',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: hasUpdatePermission,

      sortable: false,
      type: 'singleSelect',
      getOptionValue: (value: any) => value?.id,
      getOptionLabel: (value: any) => value?.label,
      valueOptions: await callOptionsApi('users'),
      valueGetter: (params: GridValueGetterParams) =>
        params?.value?.id ?? params?.value,
    },

    {
      field: 'related_contact',
      headerName: 'Related Contact',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: hasUpdatePermission,

      sortable: false,
      type: 'singleSelect',
      getOptionValue: (value: any) => value?.id,
      getOptionLabel: (value: any) => value?.label,
      valueOptions: await callOptionsApi('contacts'),
      valueGetter: (params: GridValueGetterParams) =>
        params?.value?.id ?? params?.value,
    },

    {
      field: 'related_estimate',
      headerName: 'Related Estimate',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: hasUpdatePermission,

      sortable: false,
      type: 'singleSelect',
      getOptionValue: (value: any) => value?.id,
      getOptionLabel: (value: any) => value?.label,
      valueOptions: await callOptionsApi('estimates'),
      valueGetter: (params: GridValueGetterParams) =>
        params?.value?.id ?? params?.value,
    },

    {
      field: 'images',
      headerName: 'Images',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: false,
      sortable: false,
      renderCell: (params: GridValueGetterParams) => (
        <ImageField
          name={'Avatar'}
          image={params?.row?.images}
          className='w-24 h-24 mx-auto lg:w-6 lg:h-6'
        />
      ),
    },

    {
      field: 'documents',
      headerName: 'Documents',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: false,
      sortable: false,
      renderCell: (params: GridValueGetterParams) => (
        <>
          {dataFormatter.filesFormatter(params.row.documents).map((link) => (
            <button
              key={link.publicUrl}
              onClick={(e) => saveFile(e, link.publicUrl, link.name)}
            >
              {link.name}
            </button>
          ))}
        </>
      ),
    },

    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: hasUpdatePermission,
    },

    {
      field: 'start_date',
      headerName: 'Start Date',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: hasUpdatePermission,

      type: 'date',
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row.start_date),
    },

    {
      field: 'end_date',
      headerName: 'End Date',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: hasUpdatePermission,

      type: 'date',
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row.end_date),
    },

    {
      field: 'actions',
      type: 'actions',
      minWidth: 30,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',
      getActions: (params: GridRowParams) => {
        const actions = [
          <GridActionsCellItem
            key={1}
            icon={<BaseIcon path={mdiEye} size={24} />}
            onClick={() => onView(params?.row?.id)}
            label='View'
            showInMenu
          />,
        ];

        if (hasUpdatePermission) {
          actions.push(
            <GridActionsCellItem
              key={2}
              icon={<BaseIcon path={mdiPencilOutline} size={24} />}
              onClick={() => onEdit(params?.row?.id)}
              label='Edit'
              showInMenu
            />,
          );
        }

        if (hasUpdatePermission) {
          actions.push(
            <GridActionsCellItem
              key={3}
              icon={<BaseIcon path={mdiTrashCan} size={24} />}
              onClick={() => onDelete(params?.row?.id)}
              label='Delete'
              showInMenu
            />,
          );
        }

        return actions;
      },
    },
  ];
};
