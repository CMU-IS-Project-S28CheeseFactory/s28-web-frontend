import React, { useRef, useState } from 'react';
import {
  PlusOutlined,
  EllipsisOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Button, Tag, Space, Menu, Dropdown, message } from 'antd';
import { ProForm, ModalForm, ProFormText, ProFormTextArea, ProFormRadio } from '@ant-design/pro-form';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { useIntl, FormattedMessage } from 'umi';
// import request from 'umi-request';
import { searchUsers, register, deleteUsers,updateUser } from '@/services/ant-design-pro/api';
import UpdateForm from './components/UpdateForm';
// import { UserForm } from './components/UserForm';
/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */


// add user
const handleAdd = async (fields) => {
  const hide = message.loading('正在添加');
  console.log(fields);
  try {
    await register({ ...fields });
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};


/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */

const handleUpdate = async (fields) => {
  const hide = message.loading('Configuring');

  try {
    await updateUser({
      name: fields.name,
      desc: fields.desc,
      key: fields.key,
    });
    hide();
    message.success('Configuration is successful');
    return true;
  } catch (error) {
    hide();
    message.error('Configuration failed, please try again!');
    return false;
  }
};
/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */

// const handleRemove = async (selectedRows) => {
//   // const hide = message.loading('正在删除');
//   if (!selectedRows) return true;

//   try {
//     await removeRule({
//       key: selectedRows.map((row) => row.key),
//     });
//     hide();
//     message.success('Deleted successfully and will refresh soon');
//     return true;
//   } catch (error) {
//     hide();
//     message.error('Delete failed, please try again');
//     return false;
//   }
// };

// 展示列
// columns
// 确认删除对话框方法
// const confirmDelete = (item) => {
//   console.log(item);
//   confirm({
//     title: 'Do you Want to delete?',
//     icon: <ExclamationCircleOutlined />,
//     // content: 'Some descriptions',
//     onOk() {
//       //   console.log('OK');
//       deleteMethod(item);
//     },
//     onCancel() {
//       console.log('Cancel');
//     },
//   });
// };

// 删除方法
const deleteMethod = (item) => {
  const record = item.props.record;
  console.log(record);

  const hide = message.loading('deleting');
  // console.log(fields);
  try {
    deleteUsers(record.id);
    hide();
    message.success('Deleted successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Deleted failed, please try again!');
    return false;
  }
};



export default () => {



  const updateForm = useRef(null);
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalVisible, handleModalVisible] = useState(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [currentRow, setCurrentRow] = useState();
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [currentData, setCurrentData] = useState();
  const actionRef = useRef();

  const columns = [
    {
      dataIndex: 'id',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: 'username',
      dataIndex: 'username',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'password',
      dataIndex: 'password',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'role_id',
      dataIndex: 'role_id',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'createTime',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'updateTime',
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      copyable: true,
      ellipsis: true,
    },
    // {
    //   disable: true,
    //   title: '状态',
    //   dataIndex: 'state',
    //   filters: true,
    //   onFilter: true,
    //   valueType: 'select',
    //   valueEnum: {
    //     all: { text: '全部', status: 'Default' },
    //     open: {
    //       text: '未解决',
    //       status: 'Error',
    //     },
    //     closed: {
    //       text: '已解决',
    //       status: 'Success',
    //       disabled: true,
    //     },
    //     processing: {
    //       text: '解决中',
    //       status: 'Processing',
    //     },
    //   },
    // },
    // {
    //   disable: true,
    //   title: '标签',
    //   dataIndex: 'labels',
    //   search: false,
    //   renderFormItem: (_, { defaultRender }) => {
    //     return defaultRender(_);
    //   },
    //   render: (_, record) => (
    //     <Space>
    //       {record.labels.map(({ name, color }) => (
    //         <Tag color={color} key={name}>
    //           {name}
    //         </Tag>
    //       ))}
    //     </Space>
    //   ),
    // },
    // {
    //   title: '创建时间',
    //   key: 'showTime',
    //   dataIndex: 'created_at',
    //   valueType: 'dateTime',
    //   sorter: true,
    //   hideInSearch: true,
    // },
    // {
    //   title: '创建时间',
    //   dataIndex: 'created_at',
    //   valueType: 'dateRange',
    //   hideInTable: true,
    //   search: {
    //     transform: (value) => {
    //       return {
    //         startTime: value[0],
    //         endTime: value[1],
    //       };
    //     },
    //   },
    // },
    {
      title: 'Option',
      valueType: 'option',
      key: 'option',
      render: (item) => {
        return (
          <div>
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              disabled={item.default}
              onClick={async () => {
                await setCurrentData(item.props.record);
                console.log(currentData)
                await handleUpdateModalVisible(true);
              }}
            />
            <Button
              danger
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
              disabled={item.default}
              onClick={() => deleteMethod(item)}
            />
          </div>
        );
      },
    },
  ];

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */

  const intl = useIntl();
  return (
    <div>
      <ProTable
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}, sort, filter) => {
          console.log(sort, filter);
          const userList = await searchUsers();
          console.log(userList);
          return {
            data: userList,
          };
        }}
        editable={{
          type: 'multiple',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          onChange(value) {
            console.log('value: ', value);
          },
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return Object.assign(Object.assign({}, values), {
                created_at: [values.startTime, values.endTime],
              });
            }
            return values;
          },
        }}
        pagination={{
          pageSize: 5,
        }}
        dateFormatter="string"
        headerTitle="User Manage"
        toolBarRender={() => [
          <Button
            key="button"
            onClick={() => {
              handleModalVisible(true);
            }}
            icon={<PlusOutlined />}
            type="primary"
          >
            Add
          </Button>,
        ]}
      />
      {/* <UserForm roleList={roleList} ref={updateForm}></UserForm> */}
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
      {/* update user */}
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.searchTable.createForm.updateUser',
          defaultMessage: 'update user',
        })}
        width="400px"
        visible={updateModalVisible}
        onVisibleChange={handleUpdateModalVisible}
        onFinish={async (value) => {
          const success = await updateUser(value);
          if (success) {
            handleUpdateModalVisible(false);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        initialValues={{
          'id':currentData?currentData.id:{},
          'username':currentData?currentData.username:{},
          'password':currentData?currentData.password:{},
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage id="pages.user.update.id" defaultMessage="id is required" />
              ),
            },
          ]}
          width="md"
          name="id"
          label="id"
        />        
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage id="pages.user.update.username" defaultMessage="name is required" />
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
    </div>
  );
};
