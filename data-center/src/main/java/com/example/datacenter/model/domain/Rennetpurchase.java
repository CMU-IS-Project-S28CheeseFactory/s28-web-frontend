package com.example.datacenter.model.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * 
 * @TableName RennetPurchase
 */
@TableName(value ="RennetPurchase")
@Data
public class Rennetpurchase implements Serializable {
    /**
     * 
     */
    @TableId
    private String rennetOrderID;

    /**
     * 
     */
    private String supplierName;

    /**
     * 
     */
    private String rennetName;

    /**
     * 
     */
    private String rennetBatchCode;

    /**
     * 
     */
    private Date rennet_Best_Before;

    /**
     * 
     */
    private Date rennet_Open_Date;

    /**
     * 
     */
    private Double quantity;

    /**
     * 
     */
    private Date createTime;

    /**
     * 
     */
    private Date updateTime;

    /**
     * 
     */
    private Integer isDelete;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}