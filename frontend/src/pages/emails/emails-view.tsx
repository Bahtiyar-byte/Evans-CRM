import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/emails/emailsSlice';
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

const EmailsView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { emails } = useAppSelector((state) => state.emails);

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
        <title>{getPageTitle('View emails')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View emails')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Job</p>

            <p>{emails?.related_job?.name ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Contact</p>

            <p>{emails?.related_contact?.name ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related User</p>

            <p>{emails?.related_user?.name ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>History Related Email</p>
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
                    {emails.history_related_email &&
                      Array.isArray(emails.history_related_email) &&
                      emails.history_related_email.map((item: any) => (
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
              {!emails?.history_related_email?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/emails/emails-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

EmailsView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_EMAILS'}>{page}</LayoutAuthenticated>
  );
};

export default EmailsView;
