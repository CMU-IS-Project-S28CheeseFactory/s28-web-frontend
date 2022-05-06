package com.example.datacenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @author Yan Pan
 * @create 2022-05-05 11:28
 */
@Data
public class DailyweatherRequest implements Serializable {

    private static final long serialVersionUID = -1150868824198828494L;

    private String dateTime;

    private Double temperature;

    private String weatherType;


}
