package com.example.datacenter.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.datacenter.service.UsersService;
import com.example.datacenter.model.domain.Users;
import com.example.datacenter.mapper.UsersMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

import static com.example.datacenter.constant.UserConstant.USER_LOGIN_STATE;

/**
* @author lhs
* @description 针对表【users】的数据库操作Service实现
* @createDate 2022-04-11 00:02:22
*/
@Service
@Slf4j
public class UsersServiceImpl extends ServiceImpl<UsersMapper, Users>
    implements UsersService {



    @Override
    public long uerRegister(String username, String password, String checkPassword) {
        if(username==null||password==null||checkPassword==null){
            return -1;
        }
//        账户不重复, make sure account is unique
        QueryWrapper<Users> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", username);
        long count = this.count(queryWrapper);
        if (count > 0) {
            return -1;
        }
        if (!password.equals(checkPassword)) {
            return -1;
        }
//       TODO: encrypt

//        insert
        Users user = new Users();
        user.setUsername(username);
        user.setPassword(password);
        user.setRole_state(1);
        user.set_default(1);
        user.setRole_id(1);
        boolean saveResult = this.save(user);
        if (!saveResult) {
            return -1;
        }
        return user.getId();
    }

    @Override
    public Users userLogin(String username, String password, HttpServletRequest request) {
        if(username==null||password==null){
            return null;
        }


        QueryWrapper<Users> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", username);
        queryWrapper.eq("password", password);
        Users user = this.getOne(queryWrapper);
        if (user == null) {
            log.info("user login failed,username cannot match password");
            return null;
        }


//        protect user info
        Users safetyUser = getSafetyUser(user);
//        store the user state
        request.getSession().setAttribute(USER_LOGIN_STATE, safetyUser);

        return safetyUser;

    }

    @Override
    public Users getSafetyUser(Users originUser) {
        if (originUser == null) {
            return null;
        }
        Users safeUser = new Users();
        safeUser.setId(originUser.getId());
        safeUser.setUsername(originUser.getUsername());
        safeUser.setPassword("");
        safeUser.setRole_state(originUser.getRole_state());
        safeUser.set_default(originUser.get_default());
        safeUser.setRole_id(originUser.getRole_id());
        safeUser.setCreateTime(originUser.getCreateTime());
        safeUser.setUpdateTime(originUser.getUpdateTime());
        return safeUser;
    }
}




