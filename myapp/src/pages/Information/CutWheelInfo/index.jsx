import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import {Form, Button, message, Input, Drawer } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import {ModalForm, ProFormText, ProFormTextArea,ProFormDigit,ProFormDatePicker } from '@ant-design/pro-form';
import ProDescriptions from '@ant-design/pro-descriptions';
import { addCutwheelinfo,updateCutwheelinfo,searchCutwheelinfo,deleteCutwheelinfo } from '@/services/ant-design-pro/cutwheelinfo';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
 const handleAdd = async (fields) => {
  const hide = message.loading('正在添加');
  console.log('addCutwheelinfo:', fields);
  try {
    await addCutwheelinfo(fields);
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
    await updateCutwheelinfo(fields);
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
    await deleteCutwheelinfo(values.props.record);
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
  
  console.log(record.cheeseWheelID);

  const hide = message.loading('deleting');
  // console.log(fields);
  try {
    deleteCutwheelinfo(record);
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


const CutWheelInfo = () => {
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
    cheeseWheelID: currentData ? currentData.cheeseWheelID : {},
    cheeseBatchCode : currentData ? currentData.cheeseBatchCode : {},
    cheeseWheelWeight: currentData ? currentData.cheeseWheelWeight : {},
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
      title: 'CheeseWheelID',
      dataIndex: 'cheeseWheelID',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'CheeseBatchCode',
      dataIndex: 'cheeseBatchCode',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'CheeseWheelWeight',
      dataIndex: 'cheeseWheelWeight',
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
          const cutwheelinfo = await searchCutwheelinfo();
          console.log("cutwheelinfo:", cutwheelinfo);
          return {
            data: cutwheelinfo,
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
        headerTitle="Cut Wheel Info"
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
        title="Add new cheese info"
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
        <Form.Item name={['cheeseWheelID']} label="cheeseWheelID">
          <Input />
        </Form.Item>
        <Form.Item name={['cheeseBatchCode']} label="cheeseBatchCode">
          <Input />
        </Form.Item>
        <Form.Item name={['cheeseWheelWeight']} label="cheeseWheelWeight">
          <Input />
        </Form.Item>
      </ModalForm>
      
      <ModalForm
        title="Update cheese information"
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
          cheeseWheelID: currentData ? currentData.cheeseWheelID : {},
          cheeseBatchCode : currentData ? currentData.cheeseBatchCode : {},
          cheeseWheelWeight: currentData ? currentData.cheeseWheelWeight : {},
        }}
      >
        <ProFormText name="cheeseWheelID" label={'cheeseWheelID'} width="md" extra="ID cannot be changed." disabled />
        <ProFormText name="cheeseBatchCode" label={'cheeseBatchCode'} width="md" />
        <ProFormText name="cheeseWheelWeight" label={'cheeseWheelWeight'} width="md" />
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

export default CutWheelInfo;
