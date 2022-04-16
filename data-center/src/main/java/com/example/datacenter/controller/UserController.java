package com.example.datacenter.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.example.datacenter.model.domain.Users;
import com.example.datacenter.model.domain.request.UserLoginRequest;
import com.example.datacenter.model.domain.request.UserRegisterRequest;
import com.example.datacenter.service.UsersService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

import static com.example.datacenter.constant.UserConstant.USER_LOGIN_STATE;

/**
 * @author Hongsen
 * @create 2022-04-11 14:03
 * <p>
 * user controller
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Resource
    private UsersService usersService;

    @PostMapping("/register")
    public long userRegister(@RequestBody UserRegisterRequest userRegisterRequest) {
        if (userRegisterRequest == null) {
            return -1;
        }
        String username = userRegisterRequest.getUsername();
        String password = userRegisterRequest.getPassword();
        String checkPassword = userRegisterRequest.getCheckPassword();
        if (username == null || password == null || checkPassword == null) {
            return -1;
        }
        return usersService.uerRegister(username, password, checkPassword);
    }

    @PostMapping("/login")
    public Users userLogin(@RequestBody UserLoginRequest userLoginRequest, HttpServletRequest request) {
        if (userLoginRequest == null) {
            return null;
        }
        String username = userLoginRequest.getUsername();
        String password = userLoginRequest.getPassword();
        if (username == null || password == null) {
            return null;
        }
        return usersService.userLogin(username, password, request);
    }

    @GetMapping("/current")
    public Users getCurrentUser(HttpServletRequest request) {
        Object userObj = request.getSession().getAttribute(USER_LOGIN_STATE);
        Users currentUser = (Users) userObj;
        if (currentUser == null) {
            return null;
        }
        long userId = currentUser.getId();
//        todo: check user is not delete
        Users user = usersService.getById(userId);
        return usersService.getSafetyUser(user);
    }

    @GetMapping("/search")
    public List<Users> searchUsers(String username,HttpServletRequest request) {
//        if (!isAdmin(request)) {
//            return new ArrayList<>();
//        }
        QueryWrapper<Users> queryWrapper = new QueryWrapper<>();
        if (StringUtils.isNotBlank(username)) {
            queryWrapper.like("username", username);
        }
        return usersService.list(queryWrapper);
    }

    @PostMapping("/delete")
    public boolean deleteUsers(@RequestBody long id,HttpServletRequest request) {
        if (!isAdmin(request)) {
            return false;
        }
        if (id <= 0) {
            return false;
        }
        return usersService.removeById(id);
    }

    private boolean isAdmin(HttpServletRequest request) {
        //        check admin
        Object userObj = request.getSession().getAttribute(USER_LOGIN_STATE);
        Users user = (Users) userObj;
        if (user==null||user.getRole_id() != 1) {
            return false;
        }
        return true;
    }
}
