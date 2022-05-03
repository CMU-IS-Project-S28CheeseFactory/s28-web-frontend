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
        title={'Update Cheese info'}
        initialValues={{
          cheeseBatchCode: props.values.cheeseBatchCode,
          cheeseID: props.values.cheeseID,
          step1StartTime: props.values.step1StartTime,
          step1StartTemp: props.values.step1StartTemp,
          step1TA: props.values.step1TA,
          step1pH: props.values.step1pH,
        }}
      >
        <ProFormText name="cheeseBatchCode" label={'cheeseBatchCode'} width="md" />
        <ProFormText name="cheeseID" label={'cheeseID'} width="md" />
        {/* <ProFormDateTimePicker name="step1StartTime" label={'step1StartTime'} width="md" /> */}
        <ProFormText name="step1StartTemp" label={'step1StartTemp'} width="md" />
        <ProFormText name="step1TA" label={'step1TA'} width="md" />
        <ProFormText name="step1pH" label={'step1PH'} width="md" />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
