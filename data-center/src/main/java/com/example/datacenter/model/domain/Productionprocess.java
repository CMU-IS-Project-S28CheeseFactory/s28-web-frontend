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
 * @TableName ProductionProcess
 */
@TableName(value ="ProductionProcess")
@Data
public class Productionprocess implements Serializable {
    /**
     * 
     */
    @TableId
    private String cheeseBatchCode;

    /**
     * 
     */
    private String cheeseID;

    /**
     * 
     */
    private Date step1StartTime;

    /**
     * 
     */
    private Double step1StartTemp;

    /**
     * 
     */
    private Double step1pH;

    /**
     * 
     */
    private Double step1TA;

    /**
     * 
     */
    private Date step2StartTime;

    /**
     * 
     */
    private Double step2StartTemp;

    /**
     * 
     */
    private Double step2pH;

    /**
     * 
     */
    private Double step2TA;

    /**
     * 
     */
    private Date step3StartTime;

    /**
     * 
     */
    private Double step3StartTemp;

    /**
     * 
     */
    private Double step3pH;

    /**
     * 
     */
    private Double step3TA;

    /**
     * 
     */
    private Date step4StartTime;

    /**
     * 
     */
    private Double step4StartTemp;

    /**
     * 
     */
    private Double step4pH;

    /**
     * 
     */
    private Double step4TA;

    /**
     * 
     */
    private Date step5StartTime;

    /**
     * 
     */
    private Double step5StartTemp;

    /**
     * 
     */
    private Double step5pH;

    /**
     * 
     */
    private Double step5TA;

    /**
     * 
     */
    private Date step6StartTime;

    /**
     * 
     */
    private Double step6StartTemp;

    /**
     * 
     */
    private Double step6pH;

    /**
     * 
     */
    private Double step6TA;

    /**
     * 
     */
    private Date step7StartTime;

    /**
     * 
     */
    private Double step7StartTemp;

    /**
     * 
     */
    private Double step7pH;

    /**
     * 
     */
    private Double step7TA;

    /**
     * 
     */
    private Date step8StartTime;

    /**
     * 
     */
    private Double step8StartTemp;

    /**
     * 
     */
    private Double step8pH;

    /**
     * 
     */
    private Double step8TA;

    /**
     * 
     */
    private Date step9StartTime;

    /**
     * 
     */
    private Double step9StartTemp;

    /**
     * 
     */
    private Double step9pH;

    /**
     * 
     */
    private Double step9TA;

    /**
     * 
     */
    private Date step10StartTime;

    /**
     * 
     */
    private Double step10StartTemp;

    /**
     * 
     */
    private Double step10pH;

    /**
     * 
     */
    private Double step10TA;

    /**
     * 
     */
    private Date step11StartTime;

    /**
     * 
     */
    private Double step11StartTemp;

    /**
     * 
     */
    private Double step11pH;

    /**
     * 
     */
    private Double step11TA;

    /**
     * 
     */
    private Date step12StartTime;

    /**
     * 
     */
    private Double step12StartTemp;

    /**
     * 
     */
    private Double step12pH;

    /**
     * 
     */
    private Double step12TA;

    /**
     * 
     */
    private Date step13StartTime;

    /**
     * 
     */
    private Double step13StartTemp;

    /**
     * 
     */
    private Double step13pH;

    /**
     * 
     */
    private Double step13TA;

    /**
     * 
     */
    private Date step14StartTime;

    /**
     * 
     */
    private Double step14StartTemp;

    /**
     * 
     */
    private Double step14pH;

    /**
     * 
     */
    private Double step14TA;

    /**
     * 
     */
    private Date step15StartTime;

    /**
     * 
     */
    private Double step15StartTemp;

    /**
     * 
     */
    private Double step15pH;

    /**
     * 
     */
    private Double step15TA;

    /**
     * 
     */
    private Date step16StartTime;

    /**
     * 
     */
    private Double step16StartTemp;

    /**
     * 
     */
    private Double step16pH;

    /**
     * 
     */
    private Double step16TA;

    /**
     * 
     */
    private Date step17StartTime;

    /**
     * 
     */
    private Double step17StartTemp;

    /**
     * 
     */
    private Double step17pH;

    /**
     * 
     */
    private Double step17TA;

    /**
     * 
     */
    private Date step18StartTime;

    /**
     * 
     */
    private Double step18StartTemp;

    /**
     * 
     */
    private Double step18pH;

    /**
     * 
     */
    private Double step18TA;

    /**
     * 
     */
    private Date step19StartTime;

    /**
     * 
     */
    private Double step19StartTemp;

    /**
     * 
     */
    private Double step19pH;

    /**
     * 
     */
    private Double step19TA;

    /**
     * 
     */
    private Date step20StartTime;

    /**
     * 
     */
    private Double step20StartTemp;

    /**
     * 
     */
    private Double step20pH;

    /**
     * 
     */
    private Double step20TA;

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