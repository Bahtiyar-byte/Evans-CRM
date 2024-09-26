import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/users/usersSlice';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';
import LayoutAuthenticated from '../../layouts/Authenticated';
import { getPageTitle } from '../../config';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import SectionMain from '../../components/SectionMain';
import CardBox from '../../components/CardBox';
import BaseButton from '../../components/BaseButton';
import BaseDivider from '../../components/BaseDivider';
import { mdiChartTimelineVariant } from '@mdi/js';
import { SwitchField } from '../../components/SwitchField';
import FormField from '../../components/FormField';

const UsersView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  const { id } = router.query;

  function removeLastCharacter(str) {
    console.log(str, `str`);
    return str.slice(0, -1);
  }

  useEffect(() => {
    dispatch(fetch({ id }));
  }, [dispatch, id]);

  return (
    <>
      <Head>
        <title>{getPageTitle('View users')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View users')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>First Name</p>
            <p>{users?.firstName}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Last Name</p>
            <p>{users?.lastName}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Phone Number</p>
            <p>{users?.phoneNumber}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>E-Mail</p>
            <p>{users?.email}</p>
          </div>

          <FormField label='Disabled'>
            <SwitchField
              field={{ name: 'disabled', value: users?.disabled }}
              form={{ setFieldValue: () => null }}
              disabled
            />
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Avatar</p>
            {users?.avatar?.length ? (
              <ImageField
                name={'avatar'}
                image={users?.avatar}
                className='w-20 h-20'
              />
            ) : (
              <p>No Avatar</p>
            )}
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>App Role</p>

            <p>{users?.app_role?.name ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Custom Permissions</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.custom_permissions &&
                      Array.isArray(users.custom_permissions) &&
                      users.custom_permissions.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/permissions/permissions-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='name'>{item.name}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!users?.custom_permissions?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Name</p>
            <p>{users?.name}</p>
          </div>

          <FormField label='Active'>
            <SwitchField
              field={{ name: 'isActive', value: users?.isActive }}
              form={{ setFieldValue: () => null }}
              disabled
            />
          </FormField>

          <FormField label='Verified'>
            <SwitchField
              field={{ name: 'isVerified', value: users?.isVerified }}
              form={{ setFieldValue: () => null }}
              disabled
            />
          </FormField>

          <>
            <p className={'block font-bold mb-2'}>Contacts Assigned To</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>

                      <th>Email</th>

                      <th>Phone</th>

                      <th>Address</th>

                      <th>Status</th>

                      <th>First Name</th>

                      <th>Last Name</th>

                      <th>Source</th>

                      <th>Category</th>

                      <th>Work Type</th>

                      <th>Referral</th>

                      <th>Company</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.contacts_assigned_to &&
                      Array.isArray(users.contacts_assigned_to) &&
                      users.contacts_assigned_to.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/contacts/contacts-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='name'>{item.name}</td>

                          <td data-label='email'>{item.email}</td>

                          <td data-label='phone'>{item.phone}</td>

                          <td data-label='address'>{item.address}</td>

                          <td data-label='status'>{item.status}</td>

                          <td data-label='firstName'>{item.firstName}</td>

                          <td data-label='lastName'>{item.lastName}</td>

                          <td data-label='source'>{item.source}</td>

                          <td data-label='category'>{item.category}</td>

                          <td data-label='work_type'>{item.work_type}</td>

                          <td data-label='referral'>{item.referral}</td>

                          <td data-label='company'>{item.company}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!users?.contacts_assigned_to?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Jobs Assigned To</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>

                      <th>Category</th>

                      <th>Type</th>

                      <th>Status</th>

                      <th>Address</th>

                      <th>Start Date</th>

                      <th>End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.jobs_assigned_to &&
                      Array.isArray(users.jobs_assigned_to) &&
                      users.jobs_assigned_to.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/jobs/jobs-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='name'>{item.name}</td>

                          <td data-label='category'>{item.category}</td>

                          <td data-label='type'>{item.type}</td>

                          <td data-label='status'>{item.status}</td>

                          <td data-label='address'>{item.address}</td>

                          <td data-label='start_date'>
                            {dataFormatter.dateFormatter(item.start_date)}
                          </td>

                          <td data-label='end_date'>
                            {dataFormatter.dateFormatter(item.end_date)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!users?.jobs_assigned_to?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Emails Related User</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    {users.emails_related_user &&
                      Array.isArray(users.emails_related_user) &&
                      users.emails_related_user.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/emails/emails-view/?id=${item.id}`)
                          }
                        ></tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!users?.emails_related_user?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Appointments Assigned To</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Subject</th>

                      <th>Start Time</th>

                      <th>End Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.appointments_assigned_to &&
                      Array.isArray(users.appointments_assigned_to) &&
                      users.appointments_assigned_to.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/appointments/appointments-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='subject'>{item.subject}</td>

                          <td data-label='start_time'>
                            {dataFormatter.dateTimeFormatter(item.start_time)}
                          </td>

                          <td data-label='end_time'>
                            {dataFormatter.dateTimeFormatter(item.end_time)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!users?.appointments_assigned_to?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Tasks Assigned To</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Subject</th>

                      <th>Status</th>

                      <th>Priority</th>

                      <th>Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.tasks_assigned_to &&
                      Array.isArray(users.tasks_assigned_to) &&
                      users.tasks_assigned_to.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/tasks/tasks-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='subject'>{item.subject}</td>

                          <td data-label='status'>{item.status}</td>

                          <td data-label='priority'>{item.priority}</td>

                          <td data-label='due_date'>
                            {dataFormatter.dateTimeFormatter(item.due_date)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!users?.tasks_assigned_to?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>History Related User</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.history_related_user &&
                      Array.isArray(users.history_related_user) &&
                      users.history_related_user.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/history/history-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='action_description'>
                            {item.action_description}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!users?.history_related_user?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/users/users-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

UsersView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_USERS'}>{page}</LayoutAuthenticated>
  );
};

export default UsersView;
