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
 * @TableName CulturePurchase
 */
@TableName(value ="CulturePurchase")
@Data
public class Culturepurchase implements Serializable {
    /**
     * 
     */
    @TableId
    private String cultureOrderID;

    /**
     * 
     */
    private String supplierName;

    /**
     * 
     */
    private String cultureName;

    /**
     * 
     */
    private String cultureBatchCode;

    /**
     * 
     */
    private Date cultureBestBefore;

    /**
     * 
     */
    private Date cultureOpenDate;

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

    /**
     * 
     */
    private Integer isUsed;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}