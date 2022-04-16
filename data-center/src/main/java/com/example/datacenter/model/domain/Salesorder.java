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
 * @TableName SalesOrder
 */
@TableName(value ="SalesOrder")
@Data
public class Salesorder implements Serializable {
    /**
     * 
     */
    @TableId
    private String salesOrderID;

    /**
     * 
     */
    private String cheeseWheelID;

    /**
     * 
     */
    private String buyerName;

    /**
     * 
     */
    private Date time;

    /**
     * 
     */
    private Double weight;

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