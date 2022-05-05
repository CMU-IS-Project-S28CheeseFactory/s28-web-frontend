import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import {Form, Button, message, Input, Drawer } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import {ModalForm, ProFormText, ProFormTextArea,ProFormDigit,ProFormDatePicker } from '@ant-design/pro-form';
import ProDescriptions from '@ant-design/pro-descriptions';
// import UpdateForm from './components/UpdateForm';
import { addCalciumpurchase,updateCalciumpurchase,searchCalciumpurchase,deleteCalciumpurchase } from '@/services/ant-design-pro/calciumpurchase';
import { searchCulturePurchase } from '@/services/ant-design-pro/culturepurchase';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */

const handleAdd = async (fields) => {
  const hide = message.loading('正在添加');

  try {
    await addRule({ ...fields });
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
    await updateRule({
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

const handleRemove = async (selectedRows) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeRule({
      key: selectedRows.map((row) => row.key),
    });
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
  console.log(record.calciumOrderID);

  const hide = message.loading('deleting');
  // console.log(fields);
  try {
    deleteCalciumpurchase(record);
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
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalVisible, handleModalVisible] = useState(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */

  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const actionRef = useRef();
  const [currentRow, setCurrentRow] = useState();
  const [selectedRowsState, setSelectedRows] = useState([]);
  const [currentData, setCurrentData] = useState();
  const [form]=Form.useForm();
  form.setFieldsValue({
    calciumOrderID:currentData?currentData.calciumOrderID:{},
    supplierName:currentData?currentData.supplierName:{},
    caClName:currentData?currentData.caClName:{},
    caClBatchCode:currentData?currentData.caClBatchCode:{},
    caClBestBefore:currentData?currentData.caClBestBefore:{},
    caClOpenDate:currentData?currentData.caClOpenDate:{},
    quantity:currentData?currentData.quantity:{}
  })
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
    <PageContainer>
      <ProTable
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: 'Enquiry form',
        })}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]}
        request={async (params = {}, sort, filter) => {
          console.log("210:", sort, filter);
          const culturepurchase = await searchCulturePurchase();
          console.log("culturepurchase:", culturepurchase);
          return {
            data: culturepurchase,
          };
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
              &nbsp;&nbsp;
              <span>
                <FormattedMessage
                  id="pages.searchTable.totalServiceCalls"
                  defaultMessage="Total number of service calls"
                />{' '}
                {selectedRowsState.reduce((pre, item) => pre + item.callNo, 0)}{' '}
                <FormattedMessage id="pages.searchTable.tenThousand" defaultMessage="万" />
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            <FormattedMessage
              id="pages.searchTable.batchDeletion"
              defaultMessage="Batch deletion"
            />
          </Button>
          <Button type="primary">
            <FormattedMessage
              id="pages.searchTable.batchApproval"
              defaultMessage="Batch approval"
            />
          </Button>
        </FooterToolbar>
      )}
      {/* add new record */}
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.calciumpurchase.createForm.newRecord',
          defaultMessage: 'New rule',
        })}
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          console.log(value)
          const success = await addCalciumpurchase(value);

          if (success) {
            handleModalVisible(false);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.calciumpurchase.calciumOrderID"
                  defaultMessage="calciumOrderID is required"
                />
              ),
            },
          ]}
          width="md"
          name="calciumOrderID"
          label="calciumOrderID"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.calciumpurchase.supplierName"
                  defaultMessage="supplierName is required"
                />
              ),
            },
          ]}
          width="md"
          name="supplierName"
          label="supplierName"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.calciumpurchase.caClName"
                  defaultMessage="caClName is required"
                />
              ),
            },
          ]}
          width="md"
          name="caClName"
          label="caClName"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.calciumpurchase.caClBatchCode"
                  defaultMessage="caClBatchCode is required"
                />
              ),
            },
          ]}
          width="md"
          name="caClBatchCode"
          label="caClBatchCode"
        />
        <ProFormDatePicker name="caClBestBefore" label="caClBestBefore" />
        <ProFormDatePicker name="caClOpenDate" label="caClOpenDate" />
        <ProFormDigit
          label="quantity"
          name="quantity"
          min={1}
          fieldProps={{ precision: 1 }}
        />
      </ModalForm>
      {/* update record */}
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.searchTable.createForm.updateRecord',
          defaultMessage: 'update record',
        })}
        width="400px"
        visible={updateModalVisible}
        onVisibleChange={handleUpdateModalVisible}
        onFinish={async (value) => {
          const success = await updateCalciumpurchase(value);
          if (success) {
            handleUpdateModalVisible(false);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          console.log("499")
          form.resetFields()}}
        form={form}
        // initialValues={{
        //   'calciumOrderID':currentData?currentData.calciumOrderID:{},
        //   'supplierName':currentData?currentData.supplierName:{},
        //   'caClName':currentData?currentData.caClName:{},
        //   'caClBatchCode':currentData?currentData.caClBatchCode:{},
        //   'caClBestBefore':currentData?currentData.caClBestBefore:{},
        //   'caClOpenDate':currentData?currentData.caClOpenDate:{},
        //   'quantity':currentData?currentData.quantity:{}
        // }}
        initialValues={currentData}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.calciumpurchase.calciumOrderID"
                  defaultMessage="calciumOrderID is required"
                />
              ),
            },
          ]}
          width="md"
          name="calciumOrderID"
          label="calciumOrderID"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.calciumpurchase.supplierName"
                  defaultMessage="supplierName is required"
                />
              ),
            },
          ]}
          width="md"
          name="supplierName"
          label="supplierName"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.calciumpurchase.caClName"
                  defaultMessage="caClName is required"
                />
              ),
            },
          ]}
          width="md"
          name="caClName"
          label="caClName"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.calciumpurchase.caClBatchCode"
                  defaultMessage="caClBatchCode is required"
                />
              ),
            },
          ]}
          width="md"
          name="caClBatchCode"
          label="caClBatchCode"
        />
        <ProFormDatePicker name="caClBestBefore" label="caClBestBefore" />
        <ProFormDatePicker name="caClOpenDate" label="caClOpenDate" />
        <ProFormDigit
          label="quantity"
          name="quantity"
          min={1}
          fieldProps={{ precision: 1 }}
        />
      </ModalForm>

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
    </PageContainer>
  );
};

export default CulturePurchase;
