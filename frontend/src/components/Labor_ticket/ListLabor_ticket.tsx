import React from 'react';
import CardBox from '../CardBox';
import ImageField from '../ImageField';
import dataFormatter from '../../helpers/dataFormatter';
import { saveFile } from '../../helpers/fileSaver';
import ListActionsPopover from '../ListActionsPopover';
import { useAppSelector } from '../../stores/hooks';
import { Pagination } from '../Pagination';
import LoadingSpinner from '../LoadingSpinner';

import { hasPermission } from '../../helpers/userPermissions';

type Props = {
  labor_ticket: any[];
  loading: boolean;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  currentPage: number;
  numPages: number;
  onPageChange: (page: number) => void;
};

const ListLabor_ticket = ({
  labor_ticket,
  loading,
  onEdit,
  onView,
  onDelete,
  currentPage,
  numPages,
  onPageChange,
}: Props) => {
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const hasUpdatePermission = hasPermission(currentUser, 'UPDATE_LABOR_TICKET');

  const corners = useAppSelector((state) => state.style.corners);
  const bgColor = useAppSelector((state) => state.style.cardsColor);

  return (
    <>
      <div className='relative overflow-x-auto p-4 space-y-4'>
        {loading && <LoadingSpinner />}
        {!loading &&
          labor_ticket.map((item) => (
            <CardBox
              hasTable
              isList
              key={item.id}
              className={'rounded shadow-none'}
            >
              <div
                className={`flex rounded  dark:bg-dark-900  border  border-stone-300  items-center overflow-hidden`}
              >
                <div
                  className={
                    'flex-1 px-4 py-6 h-24 flex items-stretch divide-x-2  divide-stone-300   items-center overflow-hidden`}> dark:divide-dark-700 overflow-x-auto'
                  }
                  onClick={() => onView(item.id)}
                >
                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>Name</p>
                    <p className={'line-clamp-2'}>{item.name}</p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>Related Job</p>
                    <p className={'line-clamp-2'}>
                      {dataFormatter.jobsOneListFormatter(item.related_job)}
                    </p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>Start Date</p>
                    <p className={'line-clamp-2'}>
                      {dataFormatter.dateFormatter(item.start_date)}
                    </p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>End Date</p>
                    <p className={'line-clamp-2'}>
                      {dataFormatter.dateFormatter(item.end_date)}
                    </p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>
                      Crew Instructions
                    </p>
                    <p className={'line-clamp-2'}>{item.crew_instructions}</p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>
                      Actual Start Time
                    </p>
                    <p className={'line-clamp-2'}>
                      {dataFormatter.dateTimeFormatter(item.actual_start_time)}
                    </p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>
                      Actual End Time
                    </p>
                    <p className={'line-clamp-2'}>
                      {dataFormatter.dateTimeFormatter(item.actual_end_time)}
                    </p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>Crew Actions</p>
                    <p className={'line-clamp-2'}>{item.crew_actions}</p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>Labor Progress</p>
                    <p className={'line-clamp-2'}>{item.labor_progress}</p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>Related Images</p>
                    <p className={'line-clamp-2'}>
                      {dataFormatter
                        .imagesManyListFormatter(item.related_images)
                        .join(', ')}
                    </p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>
                      Related Document
                    </p>
                    <p className={'line-clamp-2'}>
                      {dataFormatter
                        .documentsManyListFormatter(item.related_document)
                        .join(', ')}
                    </p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>Disclaimer</p>
                    <p className={'line-clamp-2'}>{item.disclaimer}</p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>Assigned Date</p>
                    <p className={'line-clamp-2'}>
                      {dataFormatter.dateFormatter(item.assigned_date)}
                    </p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>Assigned Crew</p>
                    <p className={'line-clamp-2'}>
                      {dataFormatter
                        .crewManyListFormatter(item.assigned_crew)
                        .join(', ')}
                    </p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>Related Order</p>
                    <p className={'line-clamp-2'}>
                      {dataFormatter.ordersOneListFormatter(item.related_order)}
                    </p>
                  </div>
                </div>
                <ListActionsPopover
                  onDelete={onDelete}
                  onView={onView}
                  onEdit={onEdit}
                  itemId={item.id}
                  pathEdit={`/labor_ticket/labor_ticket-edit/?id=${item.id}`}
                  pathView={`/labor_ticket/labor_ticket-view/?id=${item.id}`}
                  hasUpdatePermission={hasUpdatePermission}
                />
              </div>
            </CardBox>
          ))}
        {!loading && labor_ticket.length === 0 && (
          <div className='col-span-full flex items-center justify-center h-40'>
            <p className=''>No data to display</p>
          </div>
        )}
      </div>
      <div className={'flex items-center justify-center my-6'}>
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          setCurrentPage={onPageChange}
        />
      </div>
    </>
  );
};

export default ListLabor_ticket;
