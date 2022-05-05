import React, { useRef, useState } from 'react';
import {
  PlusOutlined, EllipsisOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import { Button, Drawer, Space, Menu, Dropdown, Form, Input,message } from 'antd';
import { ModalForm, ProFormText, ProFormTextArea, ProFormRadio } from '@ant-design/pro-form';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { useIntl, FormattedMessage } from 'umi';
// import request from 'umi-request';
import { searchUsers, register, deleteUsers } from '@/services/ant-design-pro/api';
import { addMilk, searchMilk, deleteMilk, updateMilk } from '@/services/ant-design-pro/milkpurchase';
import UpdateForm from './components/UpdateForm';

// import { UserForm } from './components/UserForm';
/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */

const handleAdd = async (fields) => {
  const hide = message.loading('正在添加');
  console.log('addMilkPurchase:', fields);
  try {
    await addMilk(fields);
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
  const hide = message.loading('Updating');
  console.log('fields', fields);
  try {
    await updateMilk(fields);
    hide();
    message.success('Updated successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Updated failed, please try again!');
    console.log('update error:', error);
    return false;
  }
};
/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */

const handleRemove = async (values) => {
  const hide = message.loading('Deleting');
  if (!values) return true;
  console.log('deletevalues:', values.props.record);
  try {
    await deleteMilk(values.props.record);
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

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


const Milkpurchase = () => {
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
  const [form] = Form.useForm();
  form.setFieldsValue({
    milkOrderID: currentData ? currentData.milkOrderID : {},
    milkOrderDate: currentData ? currentData.milkOrderDate : {},
    supplierName: currentData ? currentData.supplierName : {},
    milkBatchCode: currentData ? currentData.milkBatchCode : {},
    milkDeliveryVolume: currentData ? currentData.milkDeliveryVolume : {},
    milkDelvoTestResult: currentData ? currentData.milkDelvoTestResult : {},
    milkPH: currentData ? currentData.milkPH : {},
    milkTotalAcidity: currentData ? currentData.milkTotalAcidity : {},
    milkTempAtCollection: currentData ? currentData.milkTempAtCollection : {},
    milkTempAtDelivery: currentData ? currentData.milkTempAtDelivery : {},
    milkFat: currentData ? currentData.milkFat : {},
    milkSolidNonFat: currentData ? currentData.milkSolidNonFat : {},
    milkProtein: currentData ? currentData.milkProtein : {},
  });
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */

  const intl = useIntl();

  const columns = [
    {
      dataIndex: 'id',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: 'Milk Order ID',
      dataIndex: 'milkOrderID',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'MilkOrderDate',
      dataIndex: 'milkOrderDate',
      valueType: 'dateTime',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'SupplierName',
      dataIndex: 'supplierName',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'MilkBatchCode',
      dataIndex: 'milkBatchCode',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'MilkDeliveryVolume',
      dataIndex: 'milkDeliveryVolume',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'MilkDelvoTestResult',
      dataIndex: 'milkDelvoTestResult',
      copyable: true,
      ellipsis: true,
    },
    {
      title:'MilkPH',
      dataIndex: 'milkPH',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'MilkTotalAcidity',
      dataIndex: 'milkTotalAcidity',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'MilkTempAtCollection',
      dataIndex: 'milkTempAtCollection',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'MilkTempAtDelivery',
      dataIndex: 'milkTempAtDelivery',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'MilkFat',
      dataIndex: 'milkFat',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'MilkSolidNonFat',
      dataIndex: 'milkSolidNonFat',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'MilkProtein',
      dataIndex: 'milkProtein',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'Option',
      valueType: 'option',
      key: 'option',
      render: (item) => {
        return (
          <div>
          <Button
                  shape="circle"
                  icon={<EditOutlined />}
                  disabled={item.default}
                  onClick={async () => {
                    await setCurrentData(item.props.record);
                    await handleUpdateModalVisible(true);
                  }}
                />
            <Button
              danger
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
              disabled={item.default}
              onClick={() => {
                handleRemove(item);
                // window.location.reload();
                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <ProTable
        columns={columns}
        actionRef={actionRef}
        scroll={{ x: "auto" }}
        cardBordered
        request={async (params = {}, sort, filter) => {
          console.log('sort filter:', sort, filter);
          const milkList = await searchMilk();
          console.log('milkList:', milkList);
          return {
            data: milkList,
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
        headerTitle="Milk Purchase"
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
        title="Add new milk purchase"
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

        <Form.Item name={['milkOrderID']} label="milkOrderID">
          <Input />
        </Form.Item>
        <Form.Item name={['milkOrderDate']} label="milkOrderDate">
          <Input />
        </Form.Item>
        {/* <Form.Item name={['step1StartTime']} label="step1StartTime">
          // {/* <Input />
        </Form.Item> */}
        <Form.Item name={['supplierName']} label="supplierName">
          <Input />
        </Form.Item>
        <Form.Item name={['milkBatchCode']} label="milkBatchCode">
          <Input />
        </Form.Item>
        <Form.Item name={['milkDeliveryVolume']} label="milkDeliveryVolume">
          <Input />
        </Form.Item>
        <Form.Item name={['milkDelvoTestResult']} label="milkDelvoTestResult">
          <Input />
        </Form.Item>
        <Form.Item name={['milkPH']} label="milkPH">
          <Input />
        </Form.Item>
        <Form.Item name={['milkTotalAcidity']} label="milkTotalAcidity">
          <Input />
        </Form.Item>
        <Form.Item name={['milkTempAtCollection']} label="milkTempAtCollection">
          <Input />
        </Form.Item>
        <Form.Item name={['milkTempAtDelivery']} label="milkTempAtDelivery">
          <Input />
        </Form.Item>
        <Form.Item name={['milkFat']} label="milkFat">
          <Input />
        </Form.Item>
        <Form.Item name={['milkSolidNonFat']} label="milkSolidNonFat">
          <Input />
        </Form.Item>
        <Form.Item name={['milkProtein']} label="milkProtein">
          <Input />
        </Form.Item>
      </ModalForm>
      
      <ModalForm
        title="Update milk purchase information"
        onFinish={async (value) => {
          const success = await handleUpdate(value);
          console.log('values at 250:', value);
          if (success) {
            handleUpdateModalVisible(false);
            setCurrentData(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onVisibleChange={handleUpdateModalVisible}
        visible={updateModalVisible}
        form={form}
        initialValues={{
          milkOrderID: currentData ? currentData.milkOrderID : {},
          milkOrderDate: currentData ? currentData.milkOrderDate : {},
          supplierName: currentData ? currentData.supplierName : {},
          milkBatchCode: currentData ? currentData.milkBatchCode : {},
          milkDeliveryVolume: currentData ? currentData.milkDeliveryVolume : {},
          milkDelvoTestResult: currentData ? currentData.milkDelvoTestResult : {},
          milkPH: currentData ? currentData.milkPH : {},
          milkTotalAcidity: currentData ? currentData.milkTotalAcidity : {},
          milkTempAtCollection: currentData ? currentData.milkTempAtCollection : {},
          milkTempAtDelivery: currentData ? currentData.milkTempAtDelivery : {},
          milkFat: currentData ? currentData.milkFat : {},
          milkSolidNonFat: currentData ? currentData.milkSolidNonFat : {},
          milkProtein: currentData ? currentData.milkProtein : {},
        }}
      >
        <ProFormText name="milkOrderID" label={'milkOrderID'} width="md" extra="ID cannot be changed." disabled />
        <ProFormText name="milkOrderDate" label={'milkOrderDate'} width="md" />
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
      </ModalForm>

      {/* <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate(value);

          if (success) {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false);

          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        updateModalVisible={updateModalVisible}
        values={currentData || {}}
      /> */}
      <Drawer
        width={600}
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns}
          />
        )}
      </Drawer>
    </div>
  );
};

export default Milkpurchase;
