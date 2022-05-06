package com.example.datacenter.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.example.datacenter.model.domain.Cutwheelinfo;
import com.example.datacenter.model.domain.Dailyweather;
import com.example.datacenter.model.domain.request.CutwheelinfoRequest;
import com.example.datacenter.model.domain.request.DailyweatherRequest;
import com.example.datacenter.service.CutwheelinfoService;
import com.example.datacenter.service.DailyweatherService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * @author YanPAN
 * @create 2022-05-05 18:07
 */

@RestController
@RequestMapping("/dailyweather")
public class DailyWeatherController {

    @Resource
    private DailyweatherService dailyweatherService;

    @PostMapping("/add")
    public String addDailyweather(@RequestBody DailyweatherRequest dailyweatherRequest) {
        Dailyweather dailyweather = new Dailyweather();
        dailyweather.setDateTime(dailyweatherRequest.getDateTime());
        dailyweather.setTemperature(dailyweatherRequest.getTemperature());
        dailyweather.setWeatherType(dailyweatherRequest.getWeatherType());
        dailyweather.setCreateTime(new Date());
        dailyweather.setUpdateTime(new Date());
        dailyweather.setIsDelete(0);

        boolean save = dailyweatherService.save(dailyweather);
        if (!save) {
            return "0000-00-00";
        }
        return dailyweather.getDateTime().toString();
    }

    @PostMapping("/update")
    public String updateDailyweather(@RequestBody DailyweatherRequest dailyweatherRequest) throws ParseException {

        Date dateID = dailyweatherRequest.getDateTime();
//        System.out.println("!53---"+dateID);
        if (dateID==null){
            return "null";
        }
//        java.text.SimpleDateFormat formatter = new SimpleDateFormat( "yyyy-MM-dd ");

        Dailyweather dailyweather = new Dailyweather();
//        System.out.println("!59-----"+dailyweather.getDateTime());
        dailyweather.setDateTime(dailyweatherRequest.getDateTime());
        dailyweather.setTemperature(dailyweatherRequest.getTemperature());
        dailyweather.setWeatherType(dailyweatherRequest.getWeatherType());
        dailyweather.setCreateTime(new Date());
        dailyweather.setUpdateTime(new Date());
        dailyweather.setIsDelete(0);
        dailyweatherService.saveOrUpdate(dailyweather);
        return dailyweather.getDateTime().toString();
    }

    @GetMapping("/search")
    public List<Dailyweather> searchDailyweather(String id, HttpServletRequest request) {
        QueryWrapper<Dailyweather> queryWrapper = new QueryWrapper<>();
        if (StringUtils.isNotBlank(id)) {
            queryWrapper.like("DailyweatherDate", id);
        }
        return dailyweatherService.list(queryWrapper);
    }

    @PostMapping("/delete")
    public void deleteDailyweather(@RequestBody DailyweatherRequest request) {
        Dailyweather dailyweather = new Dailyweather();
        dailyweather.setDateTime(request.getDateTime());
        dailyweatherService.removeById(dailyweather);
    }
}
