package com.example.datacenter.service;

import com.example.datacenter.model.domain.Users;
import com.baomidou.mybatisplus.extension.service.IService;

import javax.servlet.http.HttpServletRequest;

/**
* @author lhs
* @description 针对表【users】的数据库操作Service
* @createDate 2022-04-11 00:02:22
*/
public interface UsersService extends IService<Users> {

    /**
     *
     * @param username
     * @param password
     * @param checkPassword
     * @return
     */

    long uerRegister(String username,String password,String checkPassword);

    Users userLogin(String username, String password, HttpServletRequest request);

    Users getSafetyUser(Users originUser);
}
