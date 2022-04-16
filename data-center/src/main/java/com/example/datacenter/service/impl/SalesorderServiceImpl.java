package com.example.datacenter.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.datacenter.model.domain.Salesorder;
import com.example.datacenter.service.SalesorderService;
import com.example.datacenter.mapper.SalesorderMapper;
import org.springframework.stereotype.Service;

/**
* @author lhs
* @description 针对表【SalesOrder】的数据库操作Service实现
* @createDate 2022-04-16 23:15:52
*/
@Service
public class SalesorderServiceImpl extends ServiceImpl<SalesorderMapper, Salesorder>
    implements SalesorderService{

}




