import React from 'react';
import ImageField from '../ImageField';
import ListActionsPopover from '../ListActionsPopover';
import { useAppSelector } from '../../stores/hooks';
import dataFormatter from '../../helpers/dataFormatter';
import { Pagination } from '../Pagination';
import { saveFile } from '../../helpers/fileSaver';
import LoadingSpinner from '../LoadingSpinner';

import { hasPermission } from '../../helpers/userPermissions';

type Props = {
  estimates: any[];
  loading: boolean;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  currentPage: number;
  numPages: number;
  onPageChange: (page: number) => void;
};

const CardUsers = ({
  estimates,
  loading,
  onEdit,
  onView,
  onDelete,
  currentPage,
  numPages,
  onPageChange,
}: Props) => {
  const asideScrollbarsStyle = useAppSelector(
    (state) => state.style.asideScrollbarsStyle,
  );
  const darkMode = useAppSelector((state) => state.style.darkMode);

  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const hasUpdatePermission = hasPermission(currentUser, 'UPDATE_ESTIMATES');

  return (
    <div className={'p-4'}>
      {loading && <LoadingSpinner />}
      <ul
        role='list'
        className='grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8'
      >
        {!loading &&
          estimates.map((item, index) => (
            <li
              key={item.id}
              className={`overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700 ${
                darkMode ? 'aside-scrollbars-[slate]' : asideScrollbarsStyle
              }`}
            >
              <div className='flex items-center p-6  gap-x-4 border-b border-gray-900/5 bg-gray-50 dark:bg-dark-800 relative'>
                <button
                  className='text-lg font-bold leading-6 line-clamp-1'
                  onClick={() => onView(item.id)}
                >
                  {item.name}
                </button>

                <div className='ml-auto '>
                  <ListActionsPopover
                    onDelete={onDelete}
                    onView={onView}
                    onEdit={onEdit}
                    itemId={item.id}
                    hasUpdatePermission={hasUpdatePermission}
                  />
                </div>
              </div>
              <dl className='divide-y divide-gray-100 dark:divide-dark-700 px-6 py-4 text-sm leading-6 h-64 overflow-y-auto'>
                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500 dark:text-dark-600'>Name</dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>{item.name}</div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500 dark:text-dark-600'>
                    Description
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {item.description}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500 dark:text-dark-600'>Trade</dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>{item.trade}</div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500 dark:text-dark-600'>
                    Template Used
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {item.template_used}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500 dark:text-dark-600'>
                    Material Cost
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {item.material_cost}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500 dark:text-dark-600'>
                    Labor Cost
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {item.labor_cost}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500 dark:text-dark-600'>Markup</dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {item.markup}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500 dark:text-dark-600'>
                    Profit Margin
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {item.profit_margin}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500 dark:text-dark-600'>
                    Total Price
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {item.total_price}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500 dark:text-dark-600'>
                    Related Contact
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {dataFormatter.contactsOneListFormatter(
                        item.related_contact,
                      )}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500 dark:text-dark-600'>
                    Related Job
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {dataFormatter.jobsOneListFormatter(item.related_job)}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500 dark:text-dark-600'>
                    Related Template
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {dataFormatter.templatesOneListFormatter(
                        item.related_template,
                      )}
                    </div>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        {!loading && estimates.length === 0 && (
          <div className='col-span-full flex items-center justify-center h-40'>
            <p className=''>No data to display</p>
          </div>
        )}
      </ul>
      <div className={'flex items-center justify-center my-6'}>
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          setCurrentPage={onPageChange}
        />
      </div>
    </div>
  );
};

export default CardUsers;
