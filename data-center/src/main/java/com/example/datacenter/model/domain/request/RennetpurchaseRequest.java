package com.example.datacenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @author Hongsen
 * @create 2022-05-02 22:28
 */
@Data
public class RennetpurchaseRequest implements Serializable {

    private static final long serialVersionUID = 8742065168574112734L;

    private String rennetOrderID;

    private String supplierName;

    private String rennetName;

    private String rennetBatchCode;

    private Date rennet_Best_Before;

    private Date rennet_Open_Date;

    private Double quantity;

}
