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
 * @TableName DailyWeather
 */
@TableName(value ="DailyWeather")
@Data
public class Dailyweather implements Serializable {
    /**
     * 
     */
    @TableId
    private Date dateTime;

    /**
     * 
     */
    private Double temperature;

    /**
     * 
     */
    private String weatherType;

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