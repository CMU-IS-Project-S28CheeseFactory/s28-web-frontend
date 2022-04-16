package com.example.datacenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @author Hongsen
 * @create 2022-04-15 22:25
 */
@Data
public class CalciumpurchaseRequest implements Serializable {


    private static final long serialVersionUID = -6096035805923989094L;

    private String calciumOrderID;


    private String supplierName;


    private String caClName;


    private String caClBatchCode;


    private Date caClBestBefore;


    private Date caClOpenDate;


    private Double quantity;

}
