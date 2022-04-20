package com.example.datacenter.model.domain.request;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class CheeseinfoRequest implements Serializable {
    private static final long serialVersionUID = 23301286478846164L;
    private String cheeseID;

    private String cheeseName;

    private String cheeseDescription;

    private String rennetBatchCode;

    private Double rennetWeight;

    private String caClBatchCode;

    private Double caClWeight;

    private Object cultureInfo;

    private Date createTime;

    private Date updateTime;

    private Integer isDelete;


}
