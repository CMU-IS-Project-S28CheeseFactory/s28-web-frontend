// import { addRule, removeRule, updateRule } from '@/services/ant-design-pro/api';
import { addSalesOrder, searchSalesOrder, deleteSalesOrder } from '@/services/ant-design-pro/salesorder';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import ProDescriptions from '@ant-design/pro-descriptions';
import { ModalForm } from '@ant-design/pro-form';
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
  const hide = message.loading('正在添加');
  console.log('addProduction:', fields);
  try {
    await addProduction(fields);
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

const handleRemove = async (values) => {
  const hide = message.loading('正在删除');
  if (!values) return true;
  console.log("deletevalues:", values.props.record);
  try {
    await deleteProduction(values.props.record);
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
    title: 'Sales Order ID',
    dataIndex: 'SalesOrderID',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Cheese Wheel ID',
    dataIndex: 'CheeseWheelID',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Buyer Name',
    dataIndex: 'BuyerName',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Time',
    dataIndex: 'Time',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'Weight',
    dataIndex: 'Weight',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'CreateTime',
    dataIndex: 'createTime',
    copyable: true,
    ellipsis: true,
  },
  {
    title: 'UpdateTime',
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
            onClick={() => handleRemove(item)}
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
          const salesOrderList = await searchSalesOrder();
          console.log('salesOrderList:', salesOrderList);
          return {
            data: salesOrderList,
          };
        }}
        columns={columns}
      />
      <ModalForm
        title="New production batch"
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          console.log('value:', value);
          const success = await handleAdd(value);
          console.log('268 success:', success)
          if (success) {
            handleModalVisible(false);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <Form.Item name={['cheeseBatchCode']} label="cheeseBatchCode">
          <Input />
        </Form.Item>
        <Form.Item name={['cheeseID']} label="cheeseID">
          <Input />
        </Form.Item>
        <Form.Item name={['step1StartTime']} label="step1StartTime">
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
