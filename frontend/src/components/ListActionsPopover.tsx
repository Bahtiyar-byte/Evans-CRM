import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import BaseIcon from './BaseIcon';
import {
  mdiDotsVertical,
  mdiEye,
  mdiPencilOutline,
  mdiTrashCan,
} from '@mdi/js';
import Popover from '@mui/material/Popover';
import { IconButton } from '@mui/material';

type Props = {
  itemId: string;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  hasUpdatePermission: boolean;
  className?: string;
  iconClassName?: string;
  pathEdit?: string;
  pathView?: string;
};

const ListActionsPopover = ({
  itemId,
  onDelete,
  onView,
  onEdit,
  hasUpdatePermission,
  className,
  iconClassName,
  pathEdit,
  pathView,
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const linkView = pathView;
  const linkEdit = pathEdit;
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton
        aria-describedby={id}
        onClick={handleClick}
        className={`rounded-full  ${className}`}
        size={'small'}
      >
        <BaseIcon
          className={`text-black dark:text-white ${iconClassName}`}
          w='w-10'
          h='h-10'
          size={24}
          path={mdiDotsVertical}
        />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className={'flex  flex-col'}>
          <Link href={linkView} passHref>
            <Button
              startIcon={<BaseIcon path={mdiEye} size={24} />}
              className='w-full MuiButton-colorInherit'
              onClick={() => {
                onView(itemId);
              }}
              sx={{ justifyContent: 'start' }}
            >
              View
            </Button>
          </Link>
          {hasUpdatePermission && (
            <Link href={linkEdit} passHref>
              <Button
                startIcon={<BaseIcon path={mdiPencilOutline} size={24} />}
                className='w-full MuiButton-colorInherit'
                onClick={() => {
                  onEdit(itemId);
                }}
                sx={{ justifyContent: 'start' }}
              >
                Edit
              </Button>
            </Link>
          )}
          {hasUpdatePermission && (
            <Button
              startIcon={<BaseIcon path={mdiTrashCan} size={24} />}
              className='MuiButton-colorInherit'
              onClick={() => {
                handleClose();
                onDelete(itemId);
              }}
              sx={{ justifyContent: 'start' }}
            >
              Delete
            </Button>
          )}
        </div>
      </Popover>
    </>
  );
};

export default ListActionsPopover;
