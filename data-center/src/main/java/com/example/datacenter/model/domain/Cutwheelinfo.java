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
 * @TableName CutWheelInfo
 */
@TableName(value ="CutWheelInfo")
@Data
public class Cutwheelinfo implements Serializable {
    /**
     * 
     */
    @TableId
    private String cheeseWheelID;

    /**
     * 
     */
    private String cheeseBatchCode;

    /**
     * 
     */
    private Double cheeseWheelWeight;

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