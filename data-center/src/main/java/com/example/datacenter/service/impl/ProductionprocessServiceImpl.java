package com.example.datacenter.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.datacenter.model.domain.Productionprocess;
import com.example.datacenter.service.ProductionprocessService;
import com.example.datacenter.mapper.ProductionprocessMapper;
import org.springframework.stereotype.Service;

/**
* @author lhs
* @description 针对表【ProductionProcess】的数据库操作Service实现
* @createDate 2022-04-16 23:15:52
*/
@Service
public class ProductionprocessServiceImpl extends ServiceImpl<ProductionprocessMapper, Productionprocess>
    implements ProductionprocessService{

}




