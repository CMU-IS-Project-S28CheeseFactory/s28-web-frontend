import { addRule, removeRule, updateRule } from '@/services/ant-design-pro/api';
import { searchRennet, addRennet, deleteRennet, updateRennet } from '@/services/ant-design-pro/rennetpurchase';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import ProDescriptions from '@ant-design/pro-descriptions';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button, Drawer, Form, Input, message } from 'antd';
import { useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import UpdateForm from './components/UpdateForm';
/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */

const handleAdd = async (fields) => {
  const hide = message.loading('Updating');
  console.log('addRennet:', fields);
  try {
    await addRennet(fields);
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    console.log("add error:", error);
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
    await updateRennet(fields);
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
  const hide = message.loading('正在删除');
  if (!values) return true;
  console.log('deletevalues:', values.props.record);
  try {
    await deleteRennet(values.props.record);
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};



const Rennetpurchase = () => {
  // 新建窗口的弹窗
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
      title: 'Rennet Order ID',
      dataIndex: 'rennetOrderID',
    },
    {
      title: 'Supplier Name',
      dataIndex: 'supplierName',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'Rennet Name',
      dataIndex: 'rennetName',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'Rennet Batch Code',
      dataIndex: 'rennetBatchCode',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'Rennet Best Before',
      dataIndex: 'rennet_Best_Before',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'Rennet Open Date',
      dataIndex: 'rennet_Open_Date',
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
      title: 'create Time',
      dataIndex: 'createTime',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'update Time',
      dataIndex: 'updateTime',
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
              onClick={() => handleRemove(item)}
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
        scroll={{ x: "auto" }}
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
          console.log('sort filter:', sort, filter);
          const rennetList = await searchRennet();
          console.log('rennetList:', rennetList);
          return {
            data: rennetList,
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
      <ModalForm
        title="Add new rennet purchase"
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
        <Form.Item name={['rennetOrderID']} label="rennetOrderID">
          <Input />
        </Form.Item>
        <Form.Item name={['supplierName']} label="supplierName">
          <Input />
        </Form.Item>
        {/* <Form.Item name={['step1StartTime']} label="step1StartTime">
          // {/* <Input />
        </Form.Item> */}
        <Form.Item name={['rennetName']} label="rennetName">
          <Input />
        </Form.Item>
        <Form.Item name={['rennetBatchCode']} label="rennetBatchCode">
          <Input />
        </Form.Item>
        <Form.Item name={['rennet_Best_Before']} label="rennet_Best_Before">
          <Input />
        </Form.Item>
        <Form.Item name={['rennet_Open_Date']} label="rennet_Open_Date">
          <Input />
        </Form.Item>
        <Form.Item name={['quantity']} label="quantity">
          <Input />
        </Form.Item>

      </ModalForm>
      <UpdateForm
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
      />

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

export default Rennetpurchase;
