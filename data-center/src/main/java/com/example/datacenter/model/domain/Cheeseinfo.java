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
 * @TableName CheeseInfo
 */
@TableName(value ="CheeseInfo")
@Data
public class Cheeseinfo implements Serializable {
    /**
     * 
     */
    @TableId
    private String cheeseID;

    /**
     * 
     */
    private String cheeseName;

    /**
     * 
     */
    private String cheeseDescription;

    /**
     * 
     */
    private String rennetBatchCode;

    /**
     * 
     */
    private Double rennetWeight;

    /**
     * 
     */
    private String caClBatchCode;

    /**
     * 
     */
    private Double caClWeight;

    /**
     * 
     */
    private Object cultureInfo;

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