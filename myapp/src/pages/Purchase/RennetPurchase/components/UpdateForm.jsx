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
        title={'Update Rennet info'}
        initialValues={{
          rennetOrderID: props.values.rennetOrderID,
          supplierName: props.values.supplierName,
          rennetName: props.values.rennetName,
          rennetBatchCode: props.values.rennetBatchCode,
          rennet_Best_Before: props.values.rennet_Best_Before,
          rennet_Open_Date: props.values.rennet_Open_Date,
          quantity: props.values.quantity
        }}
      >
        <ProFormText name="rennetOrderID" label={'rennetOrderID'} width="md" />
        <ProFormText name="supplierName" label={'supplierName'} width="md" />
        {/* <ProFormDateTimePicker name="step1StartTime" label={'step1StartTime'} width="md" /> */}
        <ProFormText name="rennetName" label={'rennetName'} width="md" />
        <ProFormText name="rennetBatchCode" label={'rennetBatchCode'} width="md" />
        <ProFormText name="rennet_Best_Before" label={'rennet_Best_Before'} width="md" />
        <ProFormText name="rennet_Open_Date" label={'rennet_Open_Date'} width="md" />
        <ProFormText name="quantity" label={'quantity'} width="md" />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
