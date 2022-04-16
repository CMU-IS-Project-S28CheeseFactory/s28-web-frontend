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
 * @TableName MilkPurchase
 */
@TableName(value ="MilkPurchase")
@Data
public class Milkpurchase implements Serializable {
    /**
     * 
     */
    @TableId
    private String milkOrderID;

    /**
     * 
     */
    private Date milkOrderDate;

    /**
     * 
     */
    private String supplierName;

    /**
     * 
     */
    private String milkBatchCode;

    /**
     * 
     */
    private Double milkDeliveryVolume;

    /**
     * 
     */
    private String milkDelvoTestResult;

    /**
     * 
     */
    private Double milkPH;

    /**
     * 
     */
    private Integer milkTotalAcidity;

    /**
     * 
     */
    private Double milkTempAtCollection;

    /**
     * 
     */
    private Double milkTempAtDelivery;

    /**
     * 
     */
    private Double milkFat;

    /**
     * 
     */
    private Double milkSolidNonFat;

    /**
     * 
     */
    private Double milkProtein;

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