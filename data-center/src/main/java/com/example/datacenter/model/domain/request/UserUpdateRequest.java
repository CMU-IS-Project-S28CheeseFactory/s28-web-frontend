package com.example.datacenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;

/**
 * @author Hongsen
 * @create 2022-05-04 03:02
 */
@Data
public class UserUpdateRequest implements Serializable {
    private static final long serialVersionUID = 5594866636940334874L;

    private long id;
    private String username;
    private String password;
    private String checkPassword;
}
