import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/address/addressSlice';
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

const AddressView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { address } = useAppSelector((state) => state.address);

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
        <title>{getPageTitle('View address')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View address')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Street</p>
            <p>{address?.street}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Suite/Apt/Unit</p>
            <p>{address?.suite_apt_unit}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>City</p>
            <p>{address?.city}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>State</p>
            <p>{address?.state ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Zip</p>
            <p>{address?.zip}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Country</p>
            <p>{address?.country ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Contact</p>

            <p>{address?.related_contact?.name ?? 'No data'}</p>
          </div>

          <FormField label='Mailing Address'>
            <SwitchField
              field={{
                name: 'is_mailing_address',
                value: address?.is_mailing_address,
              }}
              form={{ setFieldValue: () => null }}
              disabled
            />
          </FormField>

          <FormField label='Location'>
            <SwitchField
              field={{ name: 'is_location', value: address?.is_location }}
              form={{ setFieldValue: () => null }}
              disabled
            />
          </FormField>

          <FormField label='Billing Address'>
            <SwitchField
              field={{
                name: 'is_billing_Address',
                value: address?.is_billing_Address,
              }}
              form={{ setFieldValue: () => null }}
              disabled
            />
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Job</p>

            <p>{address?.related_job?.name ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Latitude</p>
            <p>{address?.latitude || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Longitude</p>
            <p>{address?.longitude || 'No data'}</p>
          </div>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/address/address-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

AddressView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_ADDRESS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default AddressView;
