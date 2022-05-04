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
        title={'Update sales order info'}
        initialValues={{
          salesOrderID: props.values.salesOrderID,
          cheeseWheelID: props.values.cheeseWheelID,
          buyerName: props.values.buyerName,
          time: props.values.time,
          weight: props.values.weight
        }}
      >
        <ProFormText name="salesOrderID" label={'salesOrderID'} width="md" />
        <ProFormText name="cheeseWheelID" label={'cheeseWheelID'} width="md" />
        {/* <ProFormDateTimePicker name="step1StartTime" label={'step1StartTime'} width="md" /> */}
        <ProFormText name="buyerName" label={'buyerName'} width="md" />
        <ProFormText name="time" label={'time'} width="md" />
        <ProFormText name="weight" label={'weight'} width="md" />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
