import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import {Form, Button, message, Input, Drawer } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import {ModalForm, ProFormText, ProFormTextArea,ProFormDigit,ProFormDatePicker } from '@ant-design/pro-form';
import ProDescriptions from '@ant-design/pro-descriptions';
import { addCalciumpurchase,updateCalciumpurchase,searchCalciumpurchase,deleteCalciumpurchase } from '@/services/ant-design-pro/calciumpurchase';
import { addCulturepurchase,updateCulturepurchase,searchCulturePurchase,deleteCulturepurchase } from '@/services/ant-design-pro/culturepurchase';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
 const handleAdd = async (fields) => {
  const hide = message.loading('正在添加');
  console.log('addCulturepurchase:', fields);
  try {
    await addCulturepurchase(fields);
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
    await updateCulturepurchase(fields);
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
    await deleteCulturepurchase(values.props.record);
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

// 删除方法
const deleteMethod = (record) => {
  
  console.log(record.CultureOrderID);

  const hide = message.loading('deleting');
  // console.log(fields);
  try {
    deleteCulturepurchase(record);
    // 刷新
    window.location.reload();
    hide();
    message.success('Deleted successfully');
    return true;
  } catch (error) {
    hide();
    console.log("95 error:",error);
    message.error('Deleted failed, please try again!');
    return false;
  }
};


const CulturePurchase = () => {
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
    cultureOrderID: currentData ? currentData.cultureOrderID : {},
    supplierName: currentData ? currentData.supplierName : {},
    cultureName: currentData ? currentData.cultureName : {},
    cultureBatchCode: currentData ? currentData.cultureBatchCode : {},
    cultureBestBefore: currentData ? currentData.cultureBestBefore : {},
    cultureOpenDate: currentData ? currentData.cultureOpenDate : {},
    quantity: currentData ? currentData.quantity : {},
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
      title: 'CultureOrderID',
      dataIndex: 'cultureOrderID',
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
      title: 'CultureName',
      dataIndex: 'cultureName',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'CultureBatchCode',
      dataIndex: 'cultureBatchCode',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'CultureBestBefore',
      dataIndex: 'cultureBestBefore',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'CultureOpenDate',
      dataIndex: 'cultureOpenDate',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
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
          const culturepurchase = await searchCulturePurchase();
          console.log("culturepurchase:", culturepurchase);
          return {
            data: culturepurchase,
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
        headerTitle="Culture Purchase"
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
        title="Add new culture purchase"
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

        <Form.Item name={['cultureOrderID']} label="cultureOrderID">
          <Input />
        </Form.Item>
        <Form.Item name={['supplierName']} label="supplierName">
          <Input />
        </Form.Item>
        <Form.Item name={['cultureName']} label="cultureName">
          <Input />
        </Form.Item>
        <Form.Item name={['cultureBatchCode']} label="cultureBatchCode">
          <Input />
        </Form.Item>
        <Form.Item name={['cultureBestBefore']} label="cultureBestBefore">
          <Input />
        </Form.Item>
        <Form.Item name={['cultureOpenDate']} label="cultureOpenDate">
          <Input />
        </Form.Item>
        <Form.Item name={['quantity']} label="quantity">
          <Input />
        </Form.Item>
      </ModalForm>
      
      <ModalForm
        title="Update culture purchase information"
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
          cultureOrderID: currentData ? currentData.cultureOrderID : {},
          supplierName: currentData ? currentData.supplierName : {},
          cultureName: currentData ? currentData.cultureName : {},
          cultureBatchCode: currentData ? currentData.cultureBatchCode : {},
          cultureBestBefore: currentData ? currentData.cultureBestBefore : {},
          cultureOpenDate: currentData ? currentData.cultureOpenDate : {},
          quantity: currentData ? currentData.quantity : {},
        }}
      >
        <ProFormText name="cultureOrderID" label={'cultureOrderID'} width="md" extra="ID cannot be changed." disabled />
        <ProFormText name="supplierName" label={'supplierName'} width="md" />
        <ProFormText name="cultureName" label={'cultureName'} width="md" />
        <ProFormText name="cultureBatchCode" label={'cultureBatchCode'} width="md" />
        <ProFormText name="cultureBestBefore" label={'cultureBestBefore'} width="md" />
        <ProFormText name="cultureOpenDate" label={'cultureOpenDate'} width="md" />
        <ProFormText name="quantity" label={'quantity'} width="md" />
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

export default CulturePurchase;
