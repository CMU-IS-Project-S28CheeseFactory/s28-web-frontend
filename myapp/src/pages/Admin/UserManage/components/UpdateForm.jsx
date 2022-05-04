import React from 'react';
import { Modal } from 'antd';
import {
  ModalForm,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
  ProFormRadio,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';

const UpdateForm = (props) => {
  const intl = useIntl();
  return (
    <ModalForm
    title={intl.formatMessage({
      id: 'pages.searchTable.createForm.newRule',
      defaultMessage: 'New rule',
    })}
    width="400px"
    visible={createModalVisible}
    onVisibleChange={handleModalVisible}
    onFinish={async (value) => {
      const success = await handleAdd(value);

      if (success) {
        handleModalVisible(false);

        if (actionRef.current) {
          actionRef.current.reload();
        }
      }
    }}
  >
    {/* add new user */}

    <ProFormText
      rules={[
        {
          required: true,
          message: (
            <FormattedMessage id="pages.user.add.username" defaultMessage="name is required" />
          ),
        },
      ]}
      width="md"
      name="username"
      label="username"
    />
    <ProFormText
      rules={[
        {
          required: true,
          message: (
            <FormattedMessage
              id="pages.user.add.password"
              defaultMessage="password is required"
            />
          ),
        },
      ]}
      width="md"
      name="password"
      label="password"
    />
    <ProFormText
      rules={[
        {
          required: true,
          message: (
            <FormattedMessage
              id="pages.user.add.checkPassword"
              defaultMessage="password is required"
            />
          ),
        },
      ]}
      width="md"
      name="checkPassword"
      label="checkPassword"
    />
  </ModalForm>
  );
};

export default UpdateForm;
