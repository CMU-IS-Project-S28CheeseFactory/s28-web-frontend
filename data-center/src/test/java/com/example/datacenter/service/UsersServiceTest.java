package com.example.datacenter.service;

import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

/**
 * @author Hongsen
 * @create 2022-04-11 00:08
 */
@SpringBootTest
public class UsersServiceTest {

    @Resource
    private UsersService usersService;

//    @Test
//    public void testAddUser(){
//        Users user=new Users();
//        user.setUsername("admin");
//        user.setPassword("password");
//        user.setRole_state(1);
//        user.set_default(1);
//        user.setRole_id(1);
//        user.setCreateTime(new Date());
//        user.setUpdateTime(new Date());
//        user.setIsDelete(0);
//
//
//        boolean result = usersService.save(user);
//        System.out.println(user.getId());
//        Assertions.assertTrue(result);
//    }
//
//    @Test
//    void uerRegister() {
//        String username = "hongsen";
//        String password = "password";
//        String checkPassword = "password";
//        long result = usersService.uerRegister(username, password, checkPassword);
//        Assertions.assertEquals(-1, result);
//    }

}