package com.example.datacenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;

/**
 * @author Hongsen
 * @create 2022-04-11 14:32
 */
@Data
public class UserLoginRequest implements Serializable {

    private static final long serialVersionUID = -6220613188576636493L;
    private String username;
    private String password;
//    private String checkPassword;
}
