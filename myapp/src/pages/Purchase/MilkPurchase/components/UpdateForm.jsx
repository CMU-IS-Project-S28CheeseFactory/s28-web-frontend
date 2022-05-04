import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import {
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
  Input,
  Form,
  ModalForm,
  ProFormRadio,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';

const UpdateForm = (props) => {
  const intl = useIntl();
  console.log('16 props.values:', props.values);

  return (
    <StepsForm
      stepsProps={{
        size: 'small',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{
              padding: '32px 40px 48px',
            }}
            destroyOnClose
            title={'Edit'}
            visible={props.updateModalVisible}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={props.onSubmit}
    >

      <StepsForm.StepForm
        title={'Update Milk Purchase info'}
        initialValues={{
          milkOrderID: props.values.milkOrderID,
          milkOrderDate: props.values.milkOrderDate,
          supplierName: props.values.supplierName,
          milkBatchCode: props.values.milkBatchCode,
          milkDeliveryVolume: props.values.milkDeliveryVolume,
          milkDelvoTestResult: props.values.milkDelvoTestResult,
          milkPH: props.values.milkPH,
          milkTotalAcidity: props.values.milkTotalAcidity,
          milkTempAtCollection: props.values.milkTempAtCollection,
          milkTempAtDelivery: props.values.milkTempAtDelivery,
          milkFat: props.values.milkFat,
          milkSolidNonFat: props.values.milkSolidNonFat,
          milkProtein: props.values.milkProtein
        }}
      >
        <ProFormText name="milkOrderID" label={'milkOrderID'} width="md" extra="ID cannot be changed." disabled />
        <ProFormText name="milkOrderDate" label={'milkOrderDate'} width="md" />
        {/* <ProFormDateTimePicker name="step1StartTime" label={'step1StartTime'} width="md" /> */}
        <ProFormText name="supplierName" label={'supplierName'} width="md" />
        <ProFormText name="milkBatchCode" label={'milkBatchCode'} width="md" />
        <ProFormText name="milkDeliveryVolume" label={'milkDeliveryVolume'} width="md" />
        <ProFormText name="milkDelvoTestResult" label={'milkDelvoTestResult'} width="md" />
        <ProFormText name="milkPH" label={'milkPH'} width="md" />
        <ProFormText name="milkTotalAcidity" label={'milkTotalAcidity'} width="md" />
        <ProFormText name="milkTempAtCollection" label={'milkTempAtCollection'} width="md" />
        <ProFormText name="milkTempAtDelivery" label={'milkTempAtDelivery'} width="md" />
        <ProFormText name="milkFat" label={'milkFat'} width="md" />
        <ProFormText name="milkSolidNonFat" label={'milkSolidNonFat'} width="md" />
        <ProFormText name="milkProtein" label={'milkProtein'} width="md" />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
