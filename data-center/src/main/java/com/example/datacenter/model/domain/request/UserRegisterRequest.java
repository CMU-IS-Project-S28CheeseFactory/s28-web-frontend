package com.example.datacenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;

/**
 * @author Hongsen
 * @create 2022-04-11 14:14
 */
@Data
public class UserRegisterRequest implements Serializable {

    private static final long serialVersionUID = -2753091879687925964L;

    private String username;
    private String password;
    private String checkPassword;
}
