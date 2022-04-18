package com.example.datacenter.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.datacenter.model.domain.Dailyweather;
import com.example.datacenter.service.DailyweatherService;
import com.example.datacenter.mapper.DailyweatherMapper;
import org.springframework.stereotype.Service;

/**
* @author lhs
* @description 针对表【DailyWeather】的数据库操作Service实现
* @createDate 2022-04-16 23:15:52
*/
@Service
public class DailyweatherServiceImpl extends ServiceImpl<DailyweatherMapper, Dailyweather>
    implements DailyweatherService{

}




