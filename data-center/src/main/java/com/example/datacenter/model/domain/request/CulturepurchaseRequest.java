package com.example.datacenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @author Yan Pan
 * @create 2022-05-05 11:28
 */
@Data
public class CulturepurchaseRequest implements Serializable {


    private static final long serialVersionUID = 1519201946787515795L;

    private String cultureOrderID;

    private String supplierName;

    private String cultureName;

    private String cultureBatchCode;

    private Date cultureBestBefore;

    private Date cultureOpenDate;

    private Double quantity;

    //private Date createTime;

    //private Date updateTime;

    //private Integer isDelete;

    //private Integer isUsed;
}
