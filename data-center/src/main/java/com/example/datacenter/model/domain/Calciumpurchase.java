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
 * @TableName CalciumPurchase
 */
@TableName(value ="CalciumPurchase")
@Data
public class Calciumpurchase implements Serializable {
    /**
     * 
     */
    @TableId
    private String calciumOrderID;

    /**
     * 
     */
    private String supplierName;

    /**
     * 
     */
    private String caClName;

    /**
     * 
     */
    private String caClBatchCode;

    /**
     * 
     */
    private Date caClBestBefore;

    /**
     * 
     */
    private Date caClOpenDate;

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