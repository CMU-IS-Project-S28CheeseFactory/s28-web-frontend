package com.example.datacenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @author Hongsen
 * @create 2022-04-29 16:32
 */
@Data
public class SalesorderRequest implements Serializable {

    private static final long serialVersionUID = -5197749068255461792L;

    private String salesOrderID;

    private String cheeseWheelID;

    private String buyerName;

    private Date time;

    private Double weight;

}
