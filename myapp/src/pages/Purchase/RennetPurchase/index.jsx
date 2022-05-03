import { addRule, removeRule, updateRule } from '@/services/ant-design-pro/api';
import { searchRennet, addRennet, deleteRennet } from '@/services/ant-design-pro/rennetpurchase';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import ProDescriptions from '@ant-design/pro-descriptions';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button, Drawer, message } from 'antd';
import { useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import UpdateForm from './components/UpdateForm';
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

const columns = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: 'Order Number',
    dataIndex: 'OrderNumber',
  },
  {
    title: 'Order Date',
    dataIndex: 'OrderDate',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Supplier Reference',
    dataIndex: 'SupplierRef',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Supplier Code',
    dataIndex: 'SupplierCode',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Supplier Name',
    dataIndex: 'SupplierName',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Product Code',
    dataIndex: 'ProductCode',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Product Description',
    dataIndex: 'ProductDescription',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Product Units',
    dataIndex: 'ProductUnits',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Order Quantity',
    dataIndex: 'OrderQuantity',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Line Delivery Date',
    dataIndex: 'LineDeliveryDate',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Line Comments',
    dataIndex: 'LineComments',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Receipt Quantity',
    dataIndex: 'ReceiptQuantity',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Accepted Quantity',
    dataIndex: 'AcceptedQuantity',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Rejected Quantity',
    dataIndex: 'RejectedQuantity',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Reject Reason',
    dataIndex: 'RejectReason',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Receipt Comments',
    dataIndex: 'ReceiptComments',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Rennet Batch Code',
    dataIndex: 'RennetBatchCode',
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

const Productionprocess = () => {
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
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */

  const intl = useIntl();

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
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.ruleName"
                  defaultMessage="Rule name is required"
                />
              ),
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc" />
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
        values={currentRow || {}}
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

export default Productionprocess;
