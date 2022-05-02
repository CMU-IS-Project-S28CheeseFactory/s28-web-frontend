package com.example.datacenter.model.domain.request;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @author Hongsen
 * @create 2022-04-29 16:31
 */
@Data
public class MilkpurchaseRequest implements Serializable {

    private static final long serialVersionUID = 400156072897605562L;

    private String milkOrderID;


    private Date milkOrderDate;


    private String supplierName;


    private String milkBatchCode;


    private Double milkDeliveryVolume;


    private String milkDelvoTestResult;


    private Double milkPH;


    private Integer milkTotalAcidity;


    private Double milkTempAtCollection;


    private Double milkTempAtDelivery;


    private Double milkFat;


    private Double milkSolidNonFat;


    private Double milkProtein;


    private Date createTime;


    private Date updateTime;


    private Integer isDelete;


    private Integer isUsed;
}
