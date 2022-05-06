package com.example.datacenter.model.domain.request;

import ch.qos.logback.core.joran.event.SaxEventRecorder;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @author Yan Pan
 * @create 2022-05-05 11:28
 */
@Data
public class CutwheelinfoRequest implements Serializable {

    private static final long serialVersionUID = 6108337041717119902L;

    private String cheeseWheelID;

    private String cheeseBatchCode;

    private Double cheeseWheelWeight;


}
