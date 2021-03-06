// import { addRule, removeRule, updateRule } from '@/services/ant-design-pro/api';
import { addSalesOrder, searchSalesOrder, deleteSalesOrder, updateSalesOrder, searchSameBatch } from '@/services/ant-design-pro/salesorder';
import { DeleteOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import ProDescriptions from '@ant-design/pro-descriptions';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button, Drawer, Form, Input, message, Table } from 'antd';
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
  console.log('addSalesOrder:', fields);
  try {
    await addSalesOrder(fields);
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
    await updateSalesOrder(fields);
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
  console.log("deletevalues:", values.props.record);
  try {
    await deleteSalesOrder(values.props.record);
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};


const Salesorder = () => {
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
  const [trackingModalVisible, handleTrackingModalVisible] = useState(false);
  const [trackingTableVisible, setTrackingTableVisible] = useState(false);
  const [currentSaleOrder, setCurrentSaleOrder] = useState("");


  const [form] = Form.useForm();
  form.setFieldsValue({
    salesOrderID: currentData ? currentData.salesOrderID : {},
    cheeseWheelID: currentData ? currentData.cheeseWheelID : {},
    buyerName: currentData ? currentData.buyerName : {},
    time: currentData ? currentData.time : {},
    weight: currentData ? currentData.weight : {},
  });

  const [sameBatchData] = Form.useForm();
  sameBatchData.setFieldsValue({

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
      title: 'Sales Order ID',
      dataIndex: 'salesOrderID',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'Cheese Wheel ID',
      dataIndex: 'cheeseWheelID',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'Buyer Name',
      dataIndex: 'buyerName',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
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

  const trackingColumns = [
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
    }
  ];

  return (
    <div>
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
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleTrackingModalVisible(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="Order Tracking" />
          </Button>
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

      {/* add form */}
      <ModalForm
        title="New sales order"
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
        <Form.Item name={['salesOrderID']} label="salesOrderID">
          <Input />
        </Form.Item>
        <Form.Item name={['cheeseWheelID']} label="cheeseWheelID">
          <Input />
        </Form.Item>
        <Form.Item name={['buyerName']} label="buyerName">
          <Input />
        </Form.Item>
        <Form.Item name={['time']} label="time">
          <Input />
        </Form.Item>
        <Form.Item name={['weight']} label="weight">
          <Input />
        </Form.Item>
      </ModalForm>

      {/* update form */}
      <ModalForm
        title="Update sales batch information"
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
          salesOrderID: currentData ? currentData.salesOrderID : {},
          cheeseWheelID: currentData ? currentData.cheeseWheelID : {},
          buyerName: currentData ? currentData.buyerName : {},
          time: currentData ? currentData.time : {},
          weight: currentData ? currentData.weight : {},
        }}
      >
        <ProFormText name="salesOrderID" label={'salesOrderID'} width="md" extra="ID cannot be changed." disabled/>
        <ProFormText name="cheeseWheelID" label={'cheeseWheelID'} width="md" />
        {/* <ProFormDateTimePicker name="step1StartTime" label={'step1StartTime'} width="md" /> */}
        <ProFormText name="buyerName" label={'buyerName'} width="md" />
        <ProFormText name="time" label={'time'} width="md" />
        <ProFormText name="weight" label={'weight'} width="md" />
      </ModalForm>

      {/* tracking form */}
      <ModalForm
        title="Search sales order information"
        onFinish={async (value) => {
          setCurrentSaleOrder(value);
          setTrackingTableVisible(true);
        }}
        onVisibleChange={handleTrackingModalVisible}
        visible={trackingModalVisible}
      >
        <ProFormText name="salesOrderID"/>
        <ProTable
          visible={trackingTableVisible}
          onVisibleChange={setTrackingTableVisible}
          search={false}
          headerTitle="Problematic cheese of the same batch"
          request={async (params = {}, sort, filter) => {
            console.log("stucked here:");
            const sameBatch = await searchSameBatch();
            console.log('sameBatch:', sameBatch);
            return {
              data: sameBatch,
            };
          }}
          columns={trackingColumns}
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
    </div>
  );
};

export default Salesorder;
